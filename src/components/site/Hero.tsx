import heroImg from "@/assets/hero-plato.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent mb-5">
            Cocina casera argentina
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary">
            Sabores de casa, <em className="text-accent not-italic">servidos con alma</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Tres generaciones de recetas familiares. Carnes a la parrilla, pastas hechas a mano y
            postres que abrazan. Bienvenido a la mesa de Elena.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm hover:bg-accent transition-colors"
            >
              Ver el menú
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 text-primary px-7 py-3 text-sm hover:bg-secondary transition-colors"
            >
              Reservar una mesa
            </a>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-warm)" }}
          />
          <img
            src={heroImg}
            alt="Bife de chorizo con chimichurri y papas asadas"
            width={1600}
            height={1200}
            className="relative rounded-3xl object-cover w-full aspect-[4/3]"
            style={{ boxShadow: "var(--shadow-warm)" }}
          />
        </div>
      </div>
    </section>
  );
}
