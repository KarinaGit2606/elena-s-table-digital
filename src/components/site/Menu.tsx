import { useState } from "react";
import entradasImg from "@/assets/menu-entradas.webp";
import postresImg from "@/assets/menu-postres.webp";
import heroImg from "@/assets/hero-plato.webp";
import bebidasImg from "@/assets/Bebidas.webp";

type Item = { name: string; desc: string; price: string };
type Category = { id: string; label: string; image: string; items: Item[] };

const categories: Category[] = [
  {
    id: "entradas",
    label: "Entradas",
    image: entradasImg,
    items: [
      { name: "Empanadas de carne", desc: "Cortada a cuchillo, masa casera (3 u.)", price: "$ 4.500" },
      { name: "Provoleta a la parrilla", desc: "Con orégano fresco y aceite de oliva", price: "$ 5.200" },
      { name: "Tabla de fiambres", desc: "Selección de embutidos y quesos artesanales", price: "$ 7.800" },
      { name: "Humita en chala", desc: "Receta del norte, con queso de cabra", price: "$ 4.000" },
    ],
  },
  {
    id: "principales",
    label: "Principales",
    image: heroImg,
    items: [
      { name: "Bife de chorizo", desc: "400g con chimichurri y papas rústicas", price: "$ 12.500" },
      { name: "Milanesa napolitana", desc: "Con jamón, mozzarella y puré de papas", price: "$ 9.800" },
      { name: "Ravioles de ricota y espinaca", desc: "Hechos a mano, salsa fileto", price: "$ 8.200" },
      { name: "Locro tradicional", desc: "Plato del día, receta de la abuela", price: "$ 7.500" },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    image: postresImg,
    items: [
      { name: "Flan casero", desc: "Con dulce de leche y crema", price: "$ 3.800" },
      { name: "Panqueque de manzana", desc: "Flambeado con canela", price: "$ 4.200" },
      { name: "Helado artesanal", desc: "Dulce de leche, sambayón o frutilla", price: "$ 3.500" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    image: bebidasImg,
    items: [
      { name: "Malbec de la casa", desc: "Mendoza, copa", price: "$ 3.200" },
      { name: "Limonada con menta", desc: "Jarra 1L", price: "$ 3.800" },
      { name: "Mate cocido", desc: "Servido con medialunas (2 u.)", price: "$ 2.500" },
      { name: "Café espresso", desc: "Tostado de especialidad", price: "$ 1.800" },
    ],
  },
];

export function Menu() {
  const [active, setActive] = useState("entradas");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Nuestro menú</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4">
            Lo que servimos en la mesa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ingredientes simples, técnica y mucho cariño. El menú cambia con las estaciones.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 rounded-full text-sm transition-colors border ${
                active === c.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-10 mt-12 items-start">
          <div className="md:col-span-2">
            <img
              src={current.image}
              alt={current.label}
              width={800}
              height={800}
              loading="lazy"
              className="rounded-3xl object-cover w-full aspect-square sticky top-24"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
          <ul className="md:col-span-3 divide-y divide-border">
            {current.items.map((item) => (
              <li key={item.name} className="py-5 flex justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl text-primary">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <span className="text-accent font-medium whitespace-nowrap">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
