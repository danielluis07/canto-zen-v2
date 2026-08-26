import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
