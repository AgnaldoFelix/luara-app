import {
  Sprout,
  HandHeart,
  MessageCircleHeart,
  HeartHandshake,
  Milk,
  Flower2,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  "hand-heart": HandHeart,
  "message-circle-heart": MessageCircleHeart,
  "heart-handshake": HeartHandshake,
  milk: Milk,
  flower: Flower2,
};

export function Services() {
  return (
    <section id="atendimento" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-foreground">
            Atendimento
          </p>
          <h2 className="mt-4 max-w-xl text-3xl text-foreground sm:text-4xl">
            Como posso te ajudar
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, i) => {
            const Icon = icons[service.icon] ?? Flower2;
            return (
              <Reveal key={service.title} delay={i * 80}>
                <a
                  href={waLink(`Olá, Luara! Vim pelo seu site e gostaria de ajuda com: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-sage/50 hover:bg-accent/30 active:scale-[0.99]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors group-hover:bg-sage group-hover:text-sage-foreground">
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-foreground">
                    Falar sobre isso no WhatsApp →
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
