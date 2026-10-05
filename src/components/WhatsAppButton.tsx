import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/data/site";

/** Botão flutuante discreto de WhatsApp — link configurável em src/data/site.ts */
export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Luara pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-sage text-sage-foreground shadow-lg transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-6 sm:right-6"
      style={{ width: "3.25rem", height: "3.25rem" }}
    >
      <MessageCircle size={22} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}
