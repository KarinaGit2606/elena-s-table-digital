import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Visit } from "@/components/site/Visit";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Mesa de Elena · Cocina casera argentina en Buenos Aires" },
      {
        name: "description",
        content:
          "Restaurante familiar de comida casera argentina. Carnes, pastas y postres con recetas de tres generaciones. Reservá tu mesa.",
      },
      { property: "og:title", content: "La Mesa de Elena" },
      {
        property: "og:description",
        content: "Cocina casera argentina con alma. Reservá tu mesa en Buenos Aires.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Visit />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-center" />
    </main>
  );
}
