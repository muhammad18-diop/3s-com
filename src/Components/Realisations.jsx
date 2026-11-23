
import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
  Button,
} from "flowbite-react";

const steps = [
  {
    number: "01",
    title: "Écoute de vos besoins",
    description:
      "Nous prenons le temps de comprendre votre demande, vos objectifs et les caractéristiques de votre projet.",
  },
  {
    number: "02",
    title: "Conseil et proposition",
    description:
      "Nous vous accompagnons dans le choix des solutions et définissons ensemble les détails de votre prestation.",
  },
  {
    number: "03",
    title: "Conception et réalisation",
    description:
      "Notre équipe donne forme à votre projet en tenant compte des éléments et des choix validés ensemble.",
  },
  {
    number: "04",
    title: "Remise de votre projet",
    description:
      "Votre commande vous est remise selon les modalités convenues, avec une attention particulière portée au résultat.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FD] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#243C91]">
            Notre méthode de travail
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#172B4D] sm:text-4xl lg:text-5xl">
            De votre idée à sa{" "}
            <span className="text-[#243C91]">
              réalisation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Chaque projet est unique. Nous mettons notre savoir-faire
            et notre accompagnement à votre service pour transformer
            vos idées en réalisations concrètes.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#69C5D4]" />

        </div>

        {/* DESKTOP TIMELINE */}
        <div className="mt-20 hidden md:block">

          <Timeline horizontal className="items-start">

            {steps.map((step) => (
              <TimelineItem key={step.number}>

                <TimelinePoint />

                <TimelineContent className="px-3">

                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <TimelineTime className="text-xs font-bold uppercase tracking-widest text-[#243C91]">
                      ÉTAPE {step.number}
                    </TimelineTime>

                    <TimelineTitle className="mt-4 text-xl font-bold leading-snug text-[#172B4D]">
                      {step.title}
                    </TimelineTitle>

                    <TimelineBody className="mt-4 text-sm leading-7 text-gray-600">
                      {step.description}
                    </TimelineBody>

                  </div>

                </TimelineContent>

              </TimelineItem>
            ))}

          </Timeline>

        </div>

        {/* MOBILE TIMELINE */}
        <div className="mt-14 md:hidden">

          <Timeline>

            {steps.map((step) => (
              <TimelineItem key={step.number}>

                <TimelinePoint />

                <TimelineContent className="pb-8">

                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

                    <TimelineTime className="text-xs font-bold uppercase tracking-widest text-[#243C91]">
                      ÉTAPE {step.number}
                    </TimelineTime>

                    <TimelineTitle className="mt-3 text-lg font-bold text-[#172B4D]">
                      {step.title}
                    </TimelineTitle>

                    <TimelineBody className="mt-3 text-sm leading-7 text-gray-600">
                      {step.description}
                    </TimelineBody>

                  </div>

                </TimelineContent>

              </TimelineItem>
            ))}

          </Timeline>

        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-10 sm:flex-row">

          <div>
            <h3 className="text-xl font-bold text-[#172B4D]">
              Vous avez un projet à concrétiser ?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Parlons de vos besoins et trouvons ensemble la solution adaptée.
            </p>
          </div>

          <Button
            href="/contact"
            className="!bg-[#243C91] px-5 py-2.5 font-semibold hover:!bg-[#1B2D70] focus:ring-4 focus:ring-blue-200"
          >
            Parlons de votre projet
            <span className="ml-2">→</span>
          </Button>

        </div>

      </div>

    </section>
  );
}
