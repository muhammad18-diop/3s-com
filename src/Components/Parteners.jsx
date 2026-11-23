
import { Button } from "flowbite-react";

const partners = [
  {
    name: "Entreprise partenaire 1",
    logo: "/images/partner-1.png",
  },
  {
    name: "Entreprise partenaire 2",
    logo: "/images/partner-2.png",
  },
  {
    name: "Entreprise partenaire 3",
    logo: "/images/partner-3.png",
  },
  {
    name: "Entreprise partenaire 4",
    logo: "/images/partner-4.png",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#243C91]">
            Ils nous font confiance
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Des relations bâties sur la confiance
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Nous sommes fiers d'accompagner nos clients et partenaires
            dans leurs projets, en leur apportant des solutions adaptées
            à leurs besoins.
          </p>
        </div>

        {/* Partners */}
        <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-28 items-center justify-center rounded-lg border border-gray-100 bg-white p-6 transition hover:border-gray-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 max-w-full object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            href="/contact"
            color="light"
            className="border border-[#243C91] text-[#243C91] hover:bg-blue-50"
          >
            Devenir partenaire
            <span className="ml-2">→</span>
          </Button>
        </div>

      </div>
    </section>
  );
}
