import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import type { Review } from "@/data/types";

const DATA_FILE = path.join(process.cwd(), "data", "reviews.json");

async function readReviews(): Promise<Review[]> {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Review[];
  } catch {
    return [];
  }
}

async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), "utf-8");
}

const VALID_BRANCHES = ["gulou", "xianlin", "jiangning", "pukou"];

// GET /api/reviews?branch=gulou
export async function GET(req: NextRequest) {
  const branch = req.nextUrl.searchParams.get("branch");
  const all = await readReviews();
  const filtered = branch ? all.filter((r) => r.branch === branch) : all;
  // Return newest first
  return NextResponse.json(filtered.sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  ));
}

// POST /api/reviews
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { branch, name, rating, text } = body;

    if (!branch || !VALID_BRANCHES.includes(branch)) {
      return NextResponse.json({ error: "Invalid branch" }, { status: 400 });
    }
    if (!text?.trim()) {
      return NextResponse.json({ error: "Review text required" }, { status: 400 });
    }

    const review: Review = {
      id: randomUUID(),
      branch,
      name: name?.trim() || "Anonymous",
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    const all = await readReviews();
    all.push(review);
    await writeReviews(all);

    return NextResponse.json({ ok: true, review });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
