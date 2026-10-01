import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Identification() {
  const { identification } = site;
  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl text-foreground sm:text-4xl">
            {identification.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mx-auto mt-10 inline-flex flex-col items-start gap-4 text-left">
            {identification.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base leading-relaxed text-foreground/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">
            {identification.closing}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
          >
            {identification.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
