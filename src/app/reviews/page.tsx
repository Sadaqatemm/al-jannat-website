"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { branches } from "@/data/branches";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

const storeLinks: Record<string, { dianping: string; meituan: string }> = {
  gulou:     { dianping: "https://www.dianping.com/shop/H3wfj71c5YJ8Jpkf", meituan: "https://dpurl.cn/vkG4OGdz" },
  xianlin:   { dianping: "https://www.dianping.com/shop/H50v6del7j1yOxjP", meituan: "https://dpurl.cn/oKqjSGAz" },
  jiangning: { dianping: "https://www.dianping.com/shop/l1aBLNWtBe0ZR8di", meituan: "https://dpurl.cn/XtyYjGfz" },
  pukou:     { dianping: "https://www.dianping.com/shop/ie6jJhWi8l4jTHgn", meituan: "https://dpurl.cn/myGOroNz" },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.innerWidth < 768 ||
        /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ─── Mobile: direct links to Dianping / Meituan ──────────────────────────────
function MobileReview() {
  const { pick, locale } = useLanguage();
  const zh = locale === "zh";
  return (
    <div className="pt-32 pb-[100px] px-6">
      <Reveal className="text-center max-w-[560px] mx-auto mb-12">
        <span className="font-label text-[11px] block mb-4 uppercase tracking-[0.15em] text-gold">
          {zh ? "客户评价" : "Customer Reviews"}
        </span>
        <h1 className="font-display text-[34px] sm:text-[42px] font-semibold leading-tight">
          {zh ? "为我们留下评价" : "Leave Us a Review"}
        </h1>
        <p className="mt-4 text-ivory-dim text-[15px]">
          {zh
            ? "选择您的分店，直接在大众点评或美团上留下评价。"
            : "Choose your branch and review us directly on Dianping or Meituan."}
        </p>
      </Reveal>
      <div className="max-w-[520px] mx-auto flex flex-col gap-4">
        {branches.map((b) => {
          const links = storeLinks[b.slug];
          return (
            <Reveal key={b.slug}>
              <div className="border border-line rounded-xl p-5 bg-tandoor">
                <p className="font-display text-xl mb-3">{pick(b.name)}</p>
                <div className="flex gap-2.5">
                  <a
                    href={links.dianping}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-lg bg-[#FF5B3E]/10 border border-[#FF5B3E]/50 text-[#FF5B3E] font-semibold text-[13px] hover:bg-[#FF5B3E]/20 transition-colors"
                  >
                    大众点评
                  </a>
                  <a
                    href={links.meituan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-lg bg-[#F9C120]/10 border border-[#F9C120]/50 text-[#F9C120] font-semibold text-[13px] hover:bg-[#F9C120]/20 transition-colors"
                  >
                    美团
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

// ─── Desktop: internal review form ───────────────────────────────────────────
function DesktopReviewInner() {
  const { pick, locale } = useLanguage();
  const zh = locale === "zh";
  const searchParams = useSearchParams();
  const preselected = searchParams.get("branch") ?? "";

  const [step, setStep]       = useState<"form" | "success">("form");
  const [branch, setBranch]   = useState(preselected);
  const [name, setName]       = useState("");
  const [rating, setRating]   = useState(5);
  const [text, setText]       = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved]     = useState<{ name: string; rating: number; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ branch, name, rating, text }),
      });
      setSaved({ name, rating, text });
      setStep("success");
    } finally {
      setLoading(false);
    }
  }

  if (step === "success" && saved) {
    return (
      <div className="pt-32 pb-[100px] px-6">
        <Reveal className="max-w-[600px] mx-auto text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h1 className="font-display text-[40px] font-semibold mb-4">
            {zh ? "感谢您的评价！" : "Thank you!"}
          </h1>
          <p className="text-ivory-dim text-[15px] mb-8 leading-relaxed">
            {zh
              ? `${saved.name ? saved.name + "，" : ""}我们非常珍视您的反馈，这将帮助我们不断进步。`
              : `${saved.name ? saved.name + ", " : ""}we truly value your feedback — it helps us keep improving.`}
          </p>
          <div className="bg-tandoor border border-line rounded-xl p-6 text-left mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gold text-xl">{"★".repeat(saved.rating)}{"☆".repeat(5 - saved.rating)}</span>
              <span className="text-ivory-dim text-[12px]">{saved.name || (zh ? "匿名" : "Anonymous")}</span>
            </div>
            <p className="text-ivory text-[14px] leading-relaxed">{saved.text}</p>
          </div>
          <button
            onClick={() => { setStep("form"); setText(""); setName(""); setBranch(preselected); setRating(5); }}
            className="text-[12px] text-ivory-dim hover:text-ivory underline"
          >
            {zh ? "提交另一条评价" : "Submit another review"}
          </button>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-[100px] px-6">
      <Reveal className="text-center max-w-[680px] mx-auto mb-14">
        <span className="font-label text-[11px] block mb-4 uppercase tracking-[0.15em] text-gold">
          {zh ? "客户评价" : "Customer Reviews"}
        </span>
        <h1 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
          {zh ? "为我们留下评价" : "Leave Us a Review"}
        </h1>
        <p className="mt-4 text-ivory-dim text-[15px]">
          {zh ? "您的反馈帮助我们不断进步。" : "Your feedback helps us keep improving."}
        </p>
      </Reveal>

      <div className="max-w-[680px] mx-auto">
        <Reveal>
          <form onSubmit={handleSubmit} className="bg-tandoor border border-line rounded-xl p-9 space-y-5">

            <Field label={zh ? "选择分店" : "Branch"}>
              <select required value={branch} onChange={(e) => setBranch(e.target.value)} className="form-input">
                <option value="">{zh ? "— 请选择 —" : "— select —"}</option>
                {branches.map((b) => (
                  <option key={b.slug} value={b.slug}>{pick(b.name)}</option>
                ))}
              </select>
            </Field>

            <Field label={zh ? "您的姓名（可选）" : "Your Name (optional)"}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={zh ? "姓名" : "Name"}
                className="form-input"
              />
            </Field>

            <Field label={zh ? "评分" : "Rating"}>
              <div className="flex gap-2 mt-1">
                {[1,2,3,4,5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-3xl transition-transform hover:scale-110 ${star <= rating ? "text-gold" : "text-ivory-dim opacity-30"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </Field>

            <Field label={zh ? "您的评价" : "Your Review"}>
              <textarea
                required
                rows={5}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={zh ? "请分享您的用餐体验……" : "Tell us about your dining experience..."}
                className="form-input resize-none"
              />
            </Field>

            <div className="pt-1">
              <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-char py-4 text-[13px] tracking-[0.1em] font-bold uppercase text-center hover:bg-gold-bright transition-colors disabled:opacity-60"
            >
              {loading ? (zh ? "提交中…" : "Submitting…") : (zh ? "提交评价" : "Submit Review")}
            </button>
            </div>

            <p className="text-[11px] text-ivory-dim opacity-60 text-center">
              {zh
                ? "您的评价将保存在我们的系统中，帮助我们不断改进服务。"
                : "Your review is saved in our system and helps us improve our service."}
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function DesktopReview() {
  return (
    <Suspense fallback={null}>
      <DesktopReviewInner />
    </Suspense>
  );
}

// ─── Root: detect device ──────────────────────────────────────────────────────
export default function ReviewsPage() {
  const isMobile = useIsMobile();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;
  return isMobile ? <MobileReview /> : <DesktopReview />;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.08em] uppercase text-gold mb-2">{label}</label>
      {children}
    </div>
  );
}
