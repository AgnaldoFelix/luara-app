import { Instagram, MessageCircle } from "lucide-react";
import { site, navLinks, waLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <p className="font-serif text-2xl text-foreground">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Luara"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Instagram size={17} aria-hidden="true" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Luara"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
