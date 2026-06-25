"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Review } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="text-gold text-base leading-none">
      {"★".repeat(rating)}
      <span className="opacity-25">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default function BranchReviews({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/reviews?branch=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setReviews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <section className="bg-[#0e0906] py-[80px] md:py-[110px] px-6 border-t border-line">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-12">
          <span className="font-label text-[11px] block mb-4 uppercase tracking-[0.15em] text-gold">
            {zh ? "客户评价" : "Guest Reviews"}
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] font-semibold">
            {zh ? "大家怎么说" : "What Guests Say"}
          </h2>
          {avg && (
            <div className="flex items-center justify-center gap-3 mt-4">
              <StarRow rating={Math.round(Number(avg))} />
              <span className="text-gold font-display text-xl">{avg}</span>
              <span className="text-ivory-dim text-[13px]">
                ({reviews.length} {zh ? "条评价" : "reviews"})
              </span>
            </div>
          )}
        </Reveal>

        {loading && (
          <p className="text-center text-ivory-dim text-[14px] animate-pulse">
            {zh ? "加载中…" : "Loading…"}
          </p>
        )}

        {!loading && reviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ivory-dim text-[15px] mb-6">
              {zh ? "暂无评价，成为第一个留下评价的客人！" : "No reviews yet — be the first to share your experience!"}
            </p>
            <Link
              href={`/reviews?branch=${slug}`}
              className="inline-block border border-gold text-gold px-8 py-3 rounded-full text-[12px] tracking-[0.1em] hover:bg-gold hover:text-char transition-colors"
            >
              {zh ? "写评价" : "Leave a Review"}
            </Link>
          </div>
        )}

        {!loading && reviews.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {reviews.slice(0, 9).map((r) => (
                <Reveal key={r.id}>
                  <div className="bg-tandoor border border-line rounded-xl p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <StarRow rating={r.rating} />
                      <span className="text-ivory-dim text-[11px]">
                        {new Date(r.timestamp).toLocaleDateString(
                          locale === "zh" ? "zh-CN" : "en-GB",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                    </div>
                    <p className="text-ivory text-[14px] leading-relaxed flex-1 mb-4">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <p className="text-gold text-[12px] font-semibold">— {r.name}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={`/reviews?branch=${slug}`}
                className="inline-block border border-gold text-gold px-8 py-3 rounded-full text-[12px] tracking-[0.1em] hover:bg-gold hover:text-char transition-colors"
              >
                {zh ? "留下您的评价" : "Leave Your Review"}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
