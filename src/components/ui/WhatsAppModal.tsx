// "use client";

// import { useLanguage } from "@/i18n/LanguageProvider";
// import { useModal } from "./ModalProvider";
// import { branches } from "@/data/branches";
// import ModalShell from "./ModalShell";

// export default function WhatsAppModal() {
//   const { t, pick } = useLanguage();
//   const { activeModal } = useModal();

//   if (activeModal !== "whatsapp") return null;

//   return (
//     <ModalShell title={t.modals.whatsappTitle} subtitle={t.modals.whatsappSub}>
//       <div className="flex flex-col gap-2.5">
//         {branches.map((b) => {
//           const message = encodeURIComponent(
//             `Hi Al Jannat ${b.name.en}, I'd like to place an order`
//           );
//           return (
//             <a
//               key={b.slug}
//               href={`https://wa.me/${b.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-between px-4 py-3.5 border border-line rounded-lg transition-colors hover:border-[#25D366]"
//             >
//               <span className="font-display text-lg">{pick(b.name)}</span>
//               <span className="text-[11px] text-[#25D366] tracking-wide uppercase">
//                 {t.modals.chat} →
//               </span>
//             </a>
//           );
//         })}
//       </div>
//       <p className="text-[11px] text-ivory-dim mt-4 opacity-70">{t.modals.whatsappNote}</p>
//     </ModalShell>
//   );
// }
