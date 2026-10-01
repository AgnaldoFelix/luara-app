import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Identification } from "@/components/Identification";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luara | Amamentação com acolhimento e informação" },
      {
        name: "description",
        content:
          "Orientação e acolhimento para mães que desejam viver a amamentação com mais segurança e informação.",
      },
      {
        property: "og:title",
        content: "Luara | Amamentação com acolhimento e informação",
      },
      {
        property: "og:description",
        content:
          "Orientação e acolhimento para mães que desejam viver a amamentação com mais segurança e informação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Identification />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
