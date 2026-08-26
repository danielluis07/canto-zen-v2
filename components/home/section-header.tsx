import { TextLink } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";

/**
 * Every section opens the same way: a micro-type label, a light display
 * heading, an optional line of plain explanation, and — on the far right,
 * where the eye lands last — the way out of the section.
 */
export function SectionHeader({
  eyebrow,
  title,
  note,
  action,
  className,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  action?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-t border-line pt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}>
      <div className="max-w-2xl">
        <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {eyebrow}
        </p>

        <h2 className="mt-4 font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-light">
          {title}
        </h2>

        {note && (
          <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
            {note}
          </p>
        )}
      </div>

      {action && (
        <TextLink href={action.href} className="shrink-0 lg:mb-2">
          {action.label}
        </TextLink>
      )}
    </div>
  );
}
