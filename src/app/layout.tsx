import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ModalProvider } from "@/components/ui/ModalProvider";
import { ToastProvider } from "@/components/ui/ToastProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import CustomCursor from "@/components/ui/CustomCursor";
import ReserveModal from "@/components/ui/ReserveModal";
<<<<<<< HEAD
import WeChatModal from "@/components/ui/WeChatModal";
import ReviewModal from "@/components/ui/ReviewModal";
=======
import WhatsAppModal from "@/components/ui/WhatsAppModal";
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e

export const metadata: Metadata = {
  title: "Al Jannat Restaurants — Authentic Indian, Pakistani & Afghan Dining in Nanjing",
  description:
    "Premium halal Indian, Pakistani and Afghan dining across four Nanjing branches: Gulou, Xianlin, Jiangning and Pukou. Open daily 10AM–10PM.",
  keywords: [
    "Al Jannat",
    "Indian restaurant Nanjing",
    "Pakistani restaurant Nanjing",
    "Afghan restaurant Nanjing",
    "Halal Nanjing",
    "南京印度餐厅",
    "清真餐厅南京",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-char text-ivory cursor-target">
        <LanguageProvider>
          <ModalProvider>
            <ToastProvider>
              <div className="grain-overlay" />
              <CustomCursor />
              <Header />
              <main className="flex-1 pb-[68px] md:pb-0">{children}</main>
              <Footer />
              <FloatingActions />
              <MobileBottomNav />
              <ReserveModal />
<<<<<<< HEAD
              <WeChatModal />
              <ReviewModal />
=======
              <WhatsAppModal />
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
            </ToastProvider>
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
