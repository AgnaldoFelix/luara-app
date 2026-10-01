import { Instagram } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { finalCta } = site;
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl text-primary-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-primary-foreground/80">
            {finalCta.text}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:opacity-90 hover:shadow-lg"
            >
              {finalCta.primaryCta}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60"
            >
              <Instagram size={16} aria-hidden="true" />
              {finalCta.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
