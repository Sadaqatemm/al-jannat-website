"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type ModalName = "reserve" | "wechat" | "review" | null;

interface ModalContextValue {
  activeModal: ModalName;
  openModal: (name: ModalName) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalName>(null);

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        openModal: (name) => setActiveModal(name),
        closeModal: () => setActiveModal(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
