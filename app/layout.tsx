import type { Metadata } from "next";
import "./globals.css";
import { BagHydration } from "@/components/bag/bag-hydration";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { fraunces, workSans } from "@/fonts";

export const metadata: Metadata = {
  title: {
    default: "Canto Zen — Móveis de madeira maciça",
    template: "%s · Canto Zen",
  },
  description:
    "Móveis em madeira maciça, linho e palhinha, feitos sob encomenda para sala, quarto, cozinha e escritório.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full antialiased font-sans",
        fraunces.variable,
        workSans.variable,
      )}>
      <body className="min-h-full flex flex-col">
        <BagHydration />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* One notice at a time. This system does not stack messages over the
            furniture. */}
        <Toaster limit={1} />
      </body>
    </html>
  );
}
