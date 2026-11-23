
import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-20 lg:grid-cols-2 lg:px-8">

        {/* Text content */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
            Printing & Delivery Agency
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-[56px]">
            Vos idées prennent vie,
            <span className="text-[#243C91]"> nous leur donnons forme.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
            3S COM & SERVICES vous accompagne dans vos besoins
            d'impression, de communication et de livraison avec
            des solutions adaptées à vos exigences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="/contact"
              className="!bg-[#243C91] hover:!bg-[#1B2D70] p-3"
            >
              Demander un devis
            </Button>

            <Button
              href="/services"
              color="light"
              className="border border-gray-300 p-3"

            >
              Découvrir nos services
            </Button>
          </div>

          {/* Simple service highlights */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-200 pt-6">
            <span className="text-sm font-medium text-gray-700">
              Impression
            </span>

            <span className="text-sm font-medium text-gray-700">
              Communication
            </span>

            <span className="text-sm font-medium text-gray-700">
              Livraison
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="photo-hero.jpg"
            alt="Services professionnels d'impression et de communication"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
          />
        </div>

      </div>
    </section>
  );
}
