
import { Card } from "flowbite-react";

const advantages = [
  {
    number: "01",
    title: "Un service adapté à vos besoins",
    description:
      "Nous proposons des solutions adaptées à vos attentes, à vos projets et à vos contraintes.",
  },
  {
    number: "02",
    title: "Une offre diversifiée",
    description:
      "Impression, communication et livraison : plusieurs services réunis pour simplifier vos démarches.",
  },
  {
    number: "03",
    title: "Un partenaire à votre écoute",
    description:
      "Nous privilégions l'écoute, la disponibilité et une relation professionnelle avec chacun de nos clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F9FD] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#243C91]">
            Notre engagement
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Pourquoi choisir 3S COM & SERVICES ?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Nous mettons notre expertise et notre engagement au
            service de vos projets pour vous accompagner avec
            sérieux et professionnalisme.
          </p>
        </div>

        {/* Advantages */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 ">
          {advantages.map((item) => (
            <Card
              key={item.number}
              className="h-full border border-gray-100 bg-white shadow-sm p-6"
            >
              <span className="text-sm font-bold text-[#69C5D4]">
                {item.number}
              </span>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
