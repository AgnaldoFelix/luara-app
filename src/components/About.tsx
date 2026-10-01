import { site } from "@/data/site";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <PhotoPlaceholder
              label="Foto da seção Sobre — substituir pela fotografia real"
              aspect="3/4"
              className="rounded-[2rem]"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              {site.about.title}
            </h2>
          </Reveal>
          {site.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={350}>
            <ul className="mt-8 space-y-3 border-t border-border pt-8">
              {site.about.credentials.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
