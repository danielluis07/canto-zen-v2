"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import type { NavLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const linkClassName =
  "group relative py-2 text-xs font-medium tracking-[0.16em] text-foreground/75 uppercase transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4";

/**
 * A room is the catalog narrowed to one `ambiente`, not a page of its own, so
 * the current room has to be read off the query string as well as the path. A
 * link counts as current when its path matches and every facet value it
 * carries is present in the address bar — so "Sala" stays marked while the
 * visitor narrows further by type or by price, and stops being marked once
 * the room itself is dropped.
 */
function useIsCurrent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (href: string) => {
    const [path, search] = href.split("?");

    if (pathname !== path && !pathname.startsWith(`${path}/`)) return false;
    if (!search) return true;

    return [...new URLSearchParams(search)].every(([key, value]) => {
      const current = searchParams.get(key)?.split(",") ?? [];
      return value.split(",").every((entry) => current.includes(entry));
    });
  };
}

function Row({ links, active }: { links: NavLink[]; active?: string }) {
  return (
    <>
      {links.map((link) => {
        const isActive = link.href === active;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={linkClassName}>
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
    </>
  );
}

function CurrentAwareRow({ links }: { links: NavLink[] }) {
  const isCurrent = useIsCurrent();
  return <Row links={links} active={links.find((l) => isCurrent(l.href))?.href} />;
}

/**
 * Desktop room links. At rest the row is quiet ink micro-type; the only motion
 * is the hairline drawing itself in from the left on hover. The current room
 * keeps the rule permanently, in ink, so the resting state stays neutral and
 * only the interactive state reaches for oak.
 *
 * Reading the query string suspends on a prerendered route, so the row is
 * rendered twice: the fallback is the same markup with nothing marked current,
 * which is exactly what the bar looks like away from the catalog.
 */
export function NavLinks({
  links,
  className,
}: {
  links: NavLink[];
  className?: string;
}) {
  return (
    <nav aria-label="Ambientes" className={cn("items-center gap-9", className)}>
      <Suspense fallback={<Row links={links} />}>
        <CurrentAwareRow links={links} />
      </Suspense>
    </nav>
  );
}
