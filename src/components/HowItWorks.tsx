import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  const { howItWorks } = site;
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl text-foreground sm:text-4xl">
            {howItWorks.title}
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <li className="relative border-t border-border pt-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-10 bg-sage"
                />
                <span className="font-serif text-sm tracking-widest text-sage-foreground">
                  {step.number}
                </span>
                <h3 className="mt-3 font-serif text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
