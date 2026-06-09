import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { d: "Martes a Jueves", h: "12:00 – 15:30  ·  20:00 – 23:30" },
  { d: "Viernes y Sábado", h: "12:00 – 16:00  ·  20:00 – 00:30" },
  { d: "Domingo", h: "12:00 – 16:30" },
  { d: "Lunes", h: "Cerrado" },
];

export function Visit() {
  return (
    <section id="visitanos" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Visitanos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4">
            Te esperamos con la mesa puesta
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-primary">Horarios</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  {hours.map((h) => (
                    <div key={h.d} className="flex justify-between gap-6">
                      <dt className="text-foreground/80">{h.d}</dt>
                      <dd className="text-muted-foreground">{h.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-primary">Ubicación</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Av. Corrientes 2840, CABA<br />Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-primary">Reservas</h3>
                <p className="mt-2 text-sm text-muted-foreground">+54 11 4567 8900</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <iframe
            title="Mapa de La Mesa de Elena"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-58.412%2C-34.605%2C-58.402%2C-34.598&layer=mapnik&marker=-34.6015%2C-58.407"
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
