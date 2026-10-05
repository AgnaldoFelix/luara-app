import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

/**
 * Celular: barra fixa no rodapé (aparece após rolar o topo), respeitando a área segura do iPhone.
 * Desktop: botão flutuante discreto.
 */
export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur transition-transform duration-300 sm:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      >
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-sage text-base font-semibold text-sage-foreground shadow-md active:scale-[0.98]"
          style={{ height: "3.25rem" }}
        >
          <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
          Conversar com a Luara no WhatsApp
        </a>
        <p className="mt-1.5 text-center text-[11px] text-muted-foreground">
          Resposta pessoal · sem compromisso
        </p>
      </div>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Luara pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden items-center justify-center rounded-full bg-sage text-sage-foreground shadow-lg transition-transform hover:scale-105 sm:flex"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        <MessageCircle size={22} strokeWidth={1.8} aria-hidden="true" />
      </a>
    </>
  );
}
