import { site, waLink } from "@/data/site";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      {/* Forma orgânica de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/50 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 md:pt-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-foreground">
              {site.hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
              {site.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
              >
                {site.hero.primaryCta}
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary"
              >
                {site.hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          {/* Moldura orgânica — substituir pela foto real da Luara */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] border border-sage/40"
            />
            <PhotoPlaceholder
              label="Foto da Luara — substituir pela fotografia real"
              aspect="4/5"
              className="rounded-[2.5rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
