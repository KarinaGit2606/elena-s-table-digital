import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Es como ir a almorzar a casa de la abuela. Los ravioles me transportaron a mi infancia.",
    name: "Lucía M.",
    role: "Clienta hace 6 años",
  },
  {
    quote:
      "Atención impecable y el bife de chorizo es de otro mundo. Mi lugar favorito del barrio.",
    name: "Martín R.",
    role: "Vecino de Palermo",
  },
  {
    quote:
      "Probamos las empanadas y el flan, todo casero, sabroso y servido con una sonrisa.",
    name: "Carolina P.",
    role: "Visitó desde Córdoba",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Testimonios</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4">
            Lo que dicen nuestros comensales
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {items.map((t) => (
            <figure
              key={t.name}
              className="bg-card p-8 rounded-3xl border border-border"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Quote className="w-6 h-6 text-accent" />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed font-serif text-lg">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium text-primary">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
