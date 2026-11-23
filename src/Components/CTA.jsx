import { Button } from "flowbite-react";

export default function CTA() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 px-7 py-14 sm:px-12 lg:px-16">

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

            {/* CONTENT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
                3S COM & SERVICES
              </p>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Un projet en tête ?
                <span className="mt-2 block text-[#243C91]">
                  Donnons-lui vie ensemble.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                Impression, communication, personnalisation,
                signalétique ou événementiel : nous sommes à
                votre écoute pour concrétiser vos idées.
              </p>

            </div>

            {/* BUTTONS */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">

              <Button
                href="/contact"
                className="!bg-[#243C91] p-3 font-medium text-white hover:!bg-[#1B2D70]"
              >
                Demander un devis →
              </Button>

              <Button
                href="/services"
                color="light"
                className="border border-gray-300 bg-white p-3 font-medium text-gray-900 hover:bg-gray-100"
              >
                Nos prestations
              </Button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}