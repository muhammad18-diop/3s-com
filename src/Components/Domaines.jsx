
import {
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
  Button,
} from "flowbite-react";

const servicesLeft = [
  {
    number: "01",
    title: "Impression offset",
    items: [
      "Flyers et dépliants",
      "Plaquettes et brochures",
      "Cartes de visite et cartes d'invitation",
      "Enveloppes imprimées",
      "Carnets de factures et calendriers",
      "Packaging",
    ],
  },
  {
    number: "02",
    title: "Impression numérique",
    items: [
      "Vinyle",
      "Bâche",
      "One Way",
      "Papier dos bleu",
      "Transparent",
      "Flex",
    ],
  },
  {
    number: "03",
    title: "Audiovisuel",
    items: [
      "Spots vidéo",
      "Shooting",
      "Film",
      "Clip",
    ],
  },
  {
    number: "04",
    title: "Signalétiques",
    items: [
      "Totems et enseignes",
      "Kakémonos et drapeaux",
      "Chevalets",
      "Plaques de portes",
    ],
  },
  {
    number: "05",
    title: "Branding véhicule commercial",
    items: [
      "Marquage simple",
      "Covering total",
    ],
  },
];

const servicesRight = [
  {
    number: "06",
    title: "Sérigraphie, flocage et broderie",
    items: [
      "T-shirts, polos et maillots",
      "Casquettes",
      "Sacs en plastique ou papier",
      "Gilets et tenues de travail",
      "Draps de lit, nappes et serviettes",
    ],
  },
  {
    number: "07",
    title: "Marquage et doming",
    items: [
      "Stylos et clés USB",
      "Porte-clés et mugs",
      "Agendas",
      "Micro et coques de téléphone",
      "Trophées et isothermes",
      "CD et articles événementiels",
    ],
  },
  {
    number: "08",
    title: "Confection",
    items: [
      "Écharpes et blouses",
      "Tenues de sport",
      "Tenues de travail",
      "Blousons",
    ],
  },
  {
    number: "09",
    title: "Communication événementielle",
    items: [
      "Lancement de produits",
      "Animations commerciales",
      "Forums",
      "Salons",
    ],
  },
  {
    number: "10",
    title: "Bureautique",
    items: [
      "Matériel informatique",
      "Consommables",
      "Cachet express",
      "Mobilier",
    ],
  },
];

function ServiceAccordion({ services }) {
  return (
    <Accordion collapseAll className="border-gray-200">
      {services.map((service) => (
        <AccordionPanel key={service.number}>
          <AccordionTitle className="hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-[#69C5D4]">
                {service.number}
              </span>

              <span className="text-left font-semibold text-gray-800">
                {service.title}
              </span>
            </div>
          </AccordionTitle>

          <AccordionContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="mt-1 text-[#69C5D4]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}

export default function ServicesOverview() {
  return (
    <section className="bg-[#F7F9FD] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#243C91]">
            Nos domaines d'expertise
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            De la conception à la réalisation
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            De l'impression à la communication visuelle, en passant
            par la confection et la bureautique, découvrez
            l'ensemble des solutions proposées par 3S COM & SERVICES.
          </p>
        </div>

        {/* ACCORDIONS */}
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          <ServiceAccordion services={servicesLeft} />
          <ServiceAccordion services={servicesRight} />
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-10 sm:flex-row">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Un projet en tête ?
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Contactez notre équipe pour discuter de vos besoins.
            </p>
          </div>

          <Button
            href="/contact"
            className="!bg-[#243C91] hover:!bg-[#1B2D70] p-3"
          >
            Demander un devis
            <span className="ml-2">→</span>
          </Button>
        </div>

      </div>
    </section>
  );
}
