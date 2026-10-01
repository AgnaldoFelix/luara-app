import { Quote } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

/**
 * Seção preparada para depoimentos REAIS.
 * Não publicar com placeholders — substituir em src/data/site.ts
 * ou remover esta seção do index.tsx se não houver depoimentos.
 */
export function Testimonials() {
  const { testimonials } = site;
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl text-foreground sm:text-4xl">
            {testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <Quote
                  size={22}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="text-sage"
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </blockquote>
                <figcaption className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                  {item.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
