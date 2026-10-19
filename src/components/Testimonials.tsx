import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

/**
 * Depoimentos reais, apresentados em carrossel horizontal com rolagem por gesto.
 * Textos longos ficam truncados no card ("Ler mais") para o layout não crescer;
 * o texto completo continua disponível dentro do próprio card.
 */

const CLAMP_CHARS = 260;

export function Testimonials() {
  const { testimonials } = site;
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    if (!scrollEl) return;
    const card = scrollEl.querySelector("figure");
    const step = card ? card.getBoundingClientRect().width + 20 : 340;
    scrollEl.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl text-foreground sm:text-4xl">
              {testimonials.title}
            </h2>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => scrollBy(-1)}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:bg-card/70"
              >
                <ChevronLeft size={18} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => scrollBy(1)}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:bg-card/70"
              >
                <ChevronRight size={18} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            ref={setScrollEl}
            className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.items.map((item, i) => {
              const isLong = item.text.length > CLAMP_CHARS;
              const open = expanded[i];
              return (
                <figure
                  key={i}
                  className="flex w-[82%] max-w-sm shrink-0 snap-start flex-col rounded-3xl border border-border bg-card p-6 sm:w-[340px]"
                >
                  <Quote
                    size={22}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="text-sage"
                  />
                  <blockquote
                    className={`mt-4 flex-1 text-sm leading-relaxed text-muted-foreground ${
                      isLong && !open ? "line-clamp-6" : ""
                    }`}
                  >
                    {item.text}
                  </blockquote>
                  <figcaption className="mt-5 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    {item.author}
                  </figcaption>
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => setExpanded((s) => ({ ...s, [i]: !s[i] }))}
                      className="mt-2 self-start text-xs font-semibold text-sage underline-offset-4 hover:underline"
                    >
                      {open ? "Mostrar menos" : "Ler depoimento completo"}
                    </button>
                  )}
                </figure>
              );
            })}
          </div>
        </Reveal>

        <p className="mt-2 text-center text-xs text-muted-foreground/70 sm:hidden">
          Arraste para ver mais histórias →
        </p>
      </div>
    </section>
  );
}
