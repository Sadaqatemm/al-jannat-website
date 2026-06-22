"use client";

import { useModal } from "@/components/ui/ModalProvider";
import Magnetic from "@/components/ui/Magnetic";

export default function FloatingActions() {
  const { openModal } = useModal();

  return (
    <div className="fixed bottom-5 md:bottom-6.5 right-5 md:right-6.5 z-90 flex flex-col gap-3.5 items-end">
      <Magnetic
        as="button"
        onClick={() => (window.location.href = "tel:+862552235776")}
        aria-label="Call"
        className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:scale-108 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#160d09" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Magnetic>
      <Magnetic
        as="button"
        onClick={() => openModal("whatsapp")}
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-108 transition-transform"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.67c2.16 0 4.19.84 5.72 2.37a8.07 8.07 0 012.36 5.74c0 4.47-3.64 8.11-8.12 8.11-1.43 0-2.83-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.31a8.04 8.04 0 01-1.23-4.29c0-4.48 3.65-8.15 8.1-8.15zm-4.55 4.65c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.69 2.7 4.18 3.69 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.43-1.35-1.68-.14-.25-.01-.38.11-.51.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.36-.77-1.85-.2-.48-.4-.42-.55-.42z" />
        </svg>
      </Magnetic>
    </div>
  );
}
