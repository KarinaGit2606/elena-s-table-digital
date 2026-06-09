import aboutImg from "@/assets/about-restaurant.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <img
          src={aboutImg}
          alt="Interior cálido del restaurante La Mesa de Elena"
          width={1400}
          height={1000}
          loading="lazy"
          className="rounded-3xl object-cover w-full aspect-[4/3]"
          style={{ boxShadow: "var(--shadow-soft)" }}
        />
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Sobre nosotros</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4">
            Una historia que se cocina a fuego lento
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            La Mesa de Elena nació en 1985, cuando la abuela Elena abrió las puertas de su casa
            para compartir sus recetas con el barrio. Hoy, su hija y nieta continúan la tradición
            con el mismo cariño: ingredientes frescos del mercado, masas amasadas a mano y carnes
            cocidas con paciencia.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada plato es una invitación a sentarse, conversar y disfrutar como en familia.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: "40+", l: "Años de historia" },
              { n: "100%", l: "Recetas caseras" },
              { n: "3", l: "Generaciones" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-accent">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
