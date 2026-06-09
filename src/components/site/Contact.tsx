import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "541145678900";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  email: z.string().trim().email("Email inválido").max(160),
  message: z.string().trim().min(5, "Contanos un poco más").max(800),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Revisá los datos");
      return;
    }
    const text = `Hola! Soy ${result.data.name} (${result.data.email}).%0A${encodeURIComponent(
      result.data.message,
    )}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast.success("¡Gracias! Te respondemos en breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-secondary/40">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Contacto</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4">
            Reservá tu mesa o escribinos
          </h2>
          <p className="mt-5 text-muted-foreground">
            Para reservas grandes, eventos privados o consultas, completá el formulario y te
            contactamos en el día. ¿Preferís WhatsApp? Estamos a un click.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Escribinos por WhatsApp
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card p-8 rounded-3xl border border-border space-y-4"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div>
            <label className="text-sm text-foreground/80">Nombre</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={80}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="text-sm text-foreground/80">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={160}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="vos@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-foreground/80">Mensaje</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={800}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Día, horario, cantidad de personas…"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-accent transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
