
import { Button, Badge } from "flowbite-react";

const strengths = [
  {
    number: "01",
    title: "Une offre diversifiée",
    description:
      "Impression, signalétique, textile, audiovisuel et bien plus encore.",
  },
  {
    number: "02",
    title: "Des solutions personnalisées",
    description:
      "Des prestations pensées pour répondre aux besoins spécifiques de chaque projet.",
  },
  {
    number: "03",
    title: "Un accompagnement global",
    description:
      "Plusieurs expertises réunies pour faciliter la concrétisation de vos idées.",
  },
];

export default function OurStrengths() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/images/our-strengths.jpg"
              alt="Solutions de communication, impression et personnalisation"
              className="h-[400px] w-full rounded-lg object-cover sm:h-[500px]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-[#243C91] p-6 sm:p-8">
              <Badge color="info" className="mb-3">
                3S COM & SERVICES
              </Badge>

              <h3 className="max-w-md text-2xl font-bold leading-snug text-white sm:text-3xl">
                Toutes vos idées méritent une solution.
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#243C91]">
              Notre valeur ajoutée
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Un seul partenaire,
              <span className="text-[#243C91]">
                {" "}de multiples solutions.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              De la création de supports de communication à la
              personnalisation de vos produits, nous réunissons
              plusieurs expertises pour vous accompagner dans
              la réalisation de vos projets.
            </p>

            {/* STRENGTHS */}
            <div className="mt-8 divide-y divide-gray-200">
              {strengths.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-5 py-6 first:pt-0"
                >
                  <span className="shrink-0 text-sm font-bold text-[#69C5D4]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                href="/services"
                className="!bg-[#243C91] hover:!bg-[#1B2D70]"
              >
                Découvrir nos prestations
                <span className="ml-2">→</span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
