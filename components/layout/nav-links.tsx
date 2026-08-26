"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Desktop room links. At rest the row is quiet ink micro-type; the only motion
 * is the hairline drawing itself in from the left on hover. The current room
 * keeps the rule permanently, in ink, so the resting state stays neutral and
 * only the interactive state reaches for oak.
 */
export function NavLinks({
  links,
  className,
}: {
  links: NavLink[];
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Ambientes" className={cn("items-center gap-9", className)}>
      {links.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className="group relative py-2 text-xs font-medium tracking-[0.16em] text-foreground/75 uppercase transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4">
            {link.label}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100",
                isActive && "scale-x-100 bg-foreground group-hover:bg-oak",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
