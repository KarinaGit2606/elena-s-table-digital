import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/541145678900"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-105 transition-transform"
      style={{ boxShadow: "var(--shadow-warm)" }}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
