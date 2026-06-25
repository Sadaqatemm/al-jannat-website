"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(10,6,5,0.95)] z-250 flex items-center justify-center p-10"
      onClick={onClose}
    >
      <span className="absolute top-6 right-7.5 text-[28px] text-ivory cursor-pointer">✕</span>
      <div className="relative w-[90vw] h-[90vh] max-w-4xl">
        <Image src={src} alt={alt} fill className="object-contain rounded-md" sizes="90vw" />
      </div>
    </div>
  );
}
