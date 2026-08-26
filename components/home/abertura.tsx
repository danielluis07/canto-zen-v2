import Image from "next/image";

import heroImage from "@/public/images/hero.webp";
import { LinkButton, TextLink } from "@/components/ui/link-button";

/**
 * The opening plate. The photograph runs edge to edge and the type sits on the
 * one part of the room that is already empty — the bare wall on the left — so
 * nothing has to be dimmed to make room for it. The page's single signature
 * moment lives here: on scroll the photograph drifts down more slowly than the
 * text in front of it (see `.hero-media` in globals.css).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="hero-media absolute inset-x-0 -top-[20%] h-[120%]">
        <Image
          src={heroImage}
          alt="Sala de estar em luz natural, com sofá de linho cru, poltronas de couro trançado e mesa de centro em madeira maciça"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[28%_50%] lg:object-[52%_58%]"
        />
      </div>

      {/* Two scrims, both in the page's own warm white so the room is lightened
          rather than darkened: one from the left, under the type; one from the
          bottom, under the controls and the plate. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background from-25% via-background/80 via-75% to-background/35 lg:from-background/94 lg:from-0% lg:via-background/45 lg:via-40% lg:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/75 to-transparent"
      />

      <div className="relative mx-auto flex h-[calc(100svh-4rem)] max-h-[46rem] min-h-[33rem] w-full max-w-360 flex-col justify-center px-6 lg:h-[calc(100svh-5rem)] lg:px-10">
        <p
          className="hero-line text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase"
          style={{ "--enter-delay": "60ms" } as React.CSSProperties}>
          Marcenaria própria · São Paulo
        </p>

        <h1
          className="hero-line mt-6 max-w-[15ch] font-heading text-[clamp(2.5rem,6.4vw,4.75rem)] leading-[1.02] font-light tracking-[-0.02em] text-balance"
          style={{ "--enter-delay": "140ms" } as React.CSSProperties}>
          Móveis de madeira maciça, feitos{" "}
          <span className="italic">sob encomenda</span>.
        </h1>

        <p
          className="hero-line mt-7 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted-foreground"
          style={{ "--enter-delay": "230ms" } as React.CSSProperties}>
          Carvalho, freijó, nogueira e jatobá cortados, montados e acabados na
          nossa marcenaria. A produção leva de 3 a 10 semanas, conforme a peça.
        </p>

        <div
          className="hero-line mt-11 flex flex-wrap items-center gap-x-10 gap-y-5"
          style={{ "--enter-delay": "320ms" } as React.CSSProperties}>
          <LinkButton href="/moveis">Ver os móveis</LinkButton>
          <TextLink href="/materiais">Materiais e cuidados</TextLink>
        </div>
      </div>

      {/* A catalogue plate names what is in the picture. Kept off small screens,
          where the crop no longer shows every piece it lists. */}
      <p className="absolute right-10 bottom-7 hidden border-t border-foreground/20 pt-2.5 text-right text-[0.625rem] leading-none tracking-[0.12em] text-foreground/65 uppercase lg:block">
        Sofá Héron em linho cru · Poltrona Lina · Mesa de centro Seixo em freijó
      </p>
    </section>
  );
}
