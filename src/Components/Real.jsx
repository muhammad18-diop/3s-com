
import { Card, Button } from "flowbite-react";

const projects = [
  {
    title: "Supports imprimés",
    category: "IMPRESSION",
    image: "/images/realisation-impression.jpg",
    description: "Flyers, brochures et supports publicitaires.",
  },
  {
    title: "Communication visuelle",
    category: "SIGNALÉTIQUE",
    image: "/images/realisation-signaletique.jpg",
    description: "Enseignes, bâches et supports de visibilité.",
  },
  {
    title: "Textile personnalisé",
    category: "MARQUAGE TEXTILE",
    image: "/images/realisation-textile.jpg",
    description: "T-shirts, polos et vêtements personnalisés.",
  },
  {
    title: "Objets publicitaires",
    category: "PERSONNALISATION",
    image: "/images/realisation-objets.jpg",
    description: "Mugs, stylos et objets promotionnels.",
  },
];

export default function Realisations() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#243C91]">
              Notre savoir-faire en images
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos réalisations
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Découvrez quelques exemples de supports et de
              créations issus de nos différents domaines
              d'intervention.
            </p>
          </div>

          <Button
            href="/realisations"
            color="light"
            className="w-fit border border-gray-300"
          >
            Toutes nos réalisations
            <span className="ml-2">→</span>
          </Button>

        </div>

        {/* PROJECT GALLERY */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {projects.map((project) => (
            <Card
              key={project.title}
              imgAlt={project.title}
              imgSrc={project.image}
              className="h-full overflow-hidden border border-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <p className="text-xs font-bold tracking-wider text-[#243C91]">
                {project.category}
              </p>

              <h3 className="text-lg font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {project.description}
              </p>
            </Card>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 border-t border-gray-200 pt-10 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            Confiez-nous votre prochain projet.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600">
            Une idée, un besoin ou une commande particulière ?
            Notre équipe est à votre disposition.
          </p>

          <Button
            href="/contact"
            className="mx-auto mt-6 !bg-[#243C91] hover:!bg-[#1B2D70] p-3"
          >
            Demander un devis
            <span className="ml-2">→</span>
          </Button>

        </div>

      </div>
    </section>
  );
}
