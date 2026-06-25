"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "./ModalProvider";
import { useToast } from "./ToastProvider";
import { branches } from "@/data/branches";
import ModalShell from "./ModalShell";
import Magnetic from "./Magnetic";

export default function ReserveModal() {
  const { t, pick } = useLanguage();
  const { activeModal, closeModal } = useModal();
  const { showToast } = useToast();

  if (activeModal !== "reserve") return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    closeModal();
    showToast(t.modals.reservationToast);
    e.currentTarget.reset();
  }

  return (
    <ModalShell title={t.modals.reserveTitle} subtitle={t.modals.reserveSub}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label={t.modals.name}>
          <input type="text" required placeholder="Your name" className="form-input" />
        </Field>
        <div className="grid grid-cols-2 gap-3.5">
          <Field label={t.modals.phone}>
            <input type="tel" required placeholder="+86" className="form-input" />
          </Field>
          <Field label={t.modals.guests}>
            <input type="number" min={1} defaultValue={2} required className="form-input" />
          </Field>
        </div>
        <Field label={t.modals.branch}>
          <select required className="form-input">
            <option value="">{t.modals.selectBranch}</option>
            {branches.map((b) => (
              <option key={b.slug} value={b.slug}>
                {pick(b.name)}
              </option>
            ))}
          </select>
        </Field>
        <div className="grid grid-cols-2 gap-3.5">
          <Field label={t.modals.date}>
            <input type="date" required className="form-input" />
          </Field>
          <Field label={t.modals.time}>
            <input type="time" required className="form-input" />
          </Field>
        </div>
        <Magnetic
          as="button"
          type="submit"
          className="w-full mt-2 bg-gold text-char py-4 text-[13px] tracking-[0.1em] font-bold uppercase text-center hover:bg-gold-bright transition-colors"
        >
          {t.modals.confirmReservation}
        </Magnetic>
      </form>
    </ModalShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.08em] uppercase text-gold mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
