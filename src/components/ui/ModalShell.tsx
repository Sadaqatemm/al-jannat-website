"use client";

import { useEffect, type ReactNode } from "react";
import { useModal } from "./ModalProvider";

export default function ModalShell({
  title,
  subtitle,
  children,
  maxWidth = 460,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  maxWidth?: number;
}) {
  const { closeModal } = useModal();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 bg-[rgba(10,6,5,0.82)] backdrop-blur-md z-200 flex items-center justify-center p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="bg-tandoor border border-line rounded-xl p-10 w-full max-h-[88vh] overflow-y-auto relative animate-modal-in"
        style={{ maxWidth }}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4.5 right-4.5 w-8 h-8 border border-line rounded-full flex items-center justify-center text-sm text-ivory-dim hover:border-gold hover:text-gold-bright transition-all"
        >
          ✕
        </button>
        <h3 className="font-display text-[28px] font-semibold mb-1.5">{title}</h3>
        {subtitle && <p className="text-[13px] text-ivory-dim mb-6.5">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
