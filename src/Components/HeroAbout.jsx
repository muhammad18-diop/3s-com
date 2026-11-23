import { Button } from "flowbite-react";

export default function AboutHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-20 lg:grid-cols-2 lg:px-8">

        {/* Text content */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
            À propos de 3S COM & SERVICES
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-[56px]">
            Votre partenaire de confiance pour
            <span className="text-[#243C91]"> valoriser votre image.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
            Spécialisée dans l'impression, la communication visuelle et la
            personnalisation, notre équipe met son savoir-faire et sa réactivité
            au service des entreprises et des particuliers pour concrétiser
            chaque projet sur mesure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="/services"
              className="!bg-[#243C91] p-3 hover:!bg-[#1B2D70]"
            >
              Découvrir nos expertises
            </Button>

            <Button
              href="/contact"
              color="light"
              className="border border-gray-300 p-3"
            >
              Nous contacter
            </Button>
          </div>

          {/* Key pillars / values */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-200 pt-6">
            <span className="text-sm font-medium text-gray-700">
              Savoir-faire & Qualité
            </span>

            <span className="text-sm font-medium text-gray-700">
              Solutions sur mesure
            </span>

            <span className="text-sm font-medium text-gray-700">
              Respect des délais
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="/photo-about.jpg"
            alt="L'équipe et l'atelier 3S COM & SERVICES"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
          />
        </div>

      </div>
    </section>
  );
}