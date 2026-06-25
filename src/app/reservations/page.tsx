"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useToast } from "@/components/ui/ToastProvider";
import { branches } from "@/data/branches";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function ReservationsPage() {
  const { t, pick } = useLanguage();
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast(t.modals.reservationToast);
    e.currentTarget.reset();
  }

  return (
    <div className="pt-32 md:pt-40 pb-[100px] px-6">
      <Reveal className="text-center max-w-[680px] mx-auto mb-14">
        <span className="font-label text-[11px] block mb-4">{t.nav.reservations}</span>
        <h1 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
          {t.modals.reserveTitle}
        </h1>
        <p className="mt-4 text-ivory-dim text-[15px]">{t.modals.reserveSub}</p>
      </Reveal>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <Reveal>
          <form onSubmit={handleSubmit} className="bg-tandoor border border-line rounded-xl p-9 space-y-4.5">
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
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-tandoor border border-line rounded-xl p-9 space-y-5">
            <h3 className="font-display text-2xl font-semibold">
              {t.footer.contactHeading}
            </h3>
            <a
              href="tel:+862552235776"
              className="block text-lg font-display text-gold-bright hover:underline"
            >
              +86 25 5223 5776
            </a>
            <p className="text-ivory-dim text-sm">{t.footer.hours}</p>
            <div className="pt-4 border-t border-line space-y-3">
              {branches.map((b) => (
                <div key={b.slug} className="text-sm">
                  <span className="font-display text-base">{pick(b.name)}</span>
                  <p className="text-ivory-dim text-xs mt-0.5">{pick(b.address)}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.08em] uppercase text-gold mb-2">{label}</label>
      {children}
    </div>
  );
}
