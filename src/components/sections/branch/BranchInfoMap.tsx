"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Branch } from "@/data/types";
import Reveal from "@/components/ui/Reveal";

export default function BranchInfoMap({ branch }: { branch: Branch }) {
  const { t, pick } = useLanguage();
  const encodedQuery = encodeURIComponent(branch.mapQuery);

<<<<<<< HEAD
  // Build precise coordinate-based URLs when coordinates are available
  const coords = branch.coordinates;
  const lat = coords?.lat;
  const lng = coords?.lng;

  // Google Maps: use ll= for embed pin, q= for link
  const googleEmbedSrc = lat && lng
    ? `https://maps.google.com/maps?ll=${lat},${lng}&q=${lat},${lng}&t=&z=17&output=embed`
    : `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&output=embed`;

  const googleHref = lat && lng
    ? `https://maps.google.com/?q=${lat},${lng}`
    : `https://maps.google.com/?q=${encodedQuery}`;

  // Apple Maps: use ll= for exact pin with address label
  const appleHref = lat && lng
    ? `https://maps.apple.com/?ll=${lat},${lng}&q=${encodedQuery}`
    : `https://maps.apple.com/?q=${encodedQuery}`;

  // Baidu Maps: use location query with coordinates
  const baiduHref = lat && lng
    ? `https://api.map.baidu.com/marker?location=${lat},${lng}&title=${encodeURIComponent(branch.address.zh)}&content=${encodedQuery}&output=html`
    : `https://map.baidu.com/search/${encodedQuery}`;

=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
  return (
    <section id="location" className="scroll-mt-20 bg-tandoor py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12.5">
        <Reveal>
          <div className="bg-tandoor-2 border border-line rounded-lg p-9 mb-6">
            <h3 className="font-display text-2xl font-semibold mb-4.5">{t.branchPage.buffetService}</h3>
            <InfoRow label={t.branchPage.days} value={pick(branch.buffet.days)} />
            <InfoRow label={t.branchPage.time} value={branch.buffet.time} />
            <InfoRow label={t.branchPage.alaCarte} value={t.branchPage.alwaysAvailable} last />
            <div className="mt-4.5 px-4 py-3.5 bg-emerald/30 border border-emerald/60 rounded-md text-[12.5px] leading-relaxed">
              🧒 {t.branchPage.childPolicy}
            </div>
          </div>
          <div className="bg-tandoor-2 border border-line rounded-lg p-9">
            <h3 className="font-display text-2xl font-semibold mb-4.5">{t.branchPage.openingHours}</h3>
            <InfoRow label={t.branchPage.everyDay} value={branch.openingHours} />
            <InfoRow label={t.branchPage.phone} value={branch.phone} last />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg overflow-hidden border border-line aspect-square relative">
            <iframe
<<<<<<< HEAD
              src={googleEmbedSrc}
=======
              src={`https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&output=embed`}
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
              className="w-full h-full border-0"
              style={{ filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
              loading="lazy"
              title={`Map of Al Jannat ${pick(branch.name)}`}
            />
          </div>
          <div className="flex gap-2.5 mt-3.5 flex-wrap">
<<<<<<< HEAD
            <MapLink href={googleHref}>
              {t.mapActions.google}
            </MapLink>
            <MapLink href={appleHref}>
              {t.mapActions.apple}
            </MapLink>
            <MapLink href={baiduHref}>
=======
            <MapLink href={`https://maps.google.com/?q=${encodedQuery}`}>
              {t.mapActions.google}
            </MapLink>
            <MapLink href={`https://maps.apple.com/?q=${encodedQuery}`}>
              {t.mapActions.apple}
            </MapLink>
            <MapLink href={`https://map.baidu.com/search/${encodedQuery}`}>
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
              {t.mapActions.baidu}
            </MapLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex justify-between py-3.5 text-[13.5px] ${last ? "" : "border-b border-line"}`}>
      <span className="text-ivory-dim">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center py-3 border border-line rounded-md text-xs tracking-wide min-w-[120px] transition-all hover:border-gold hover:text-gold-bright"
    >
      {children}
    </a>
  );
}
