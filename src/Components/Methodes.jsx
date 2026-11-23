const steps = [
  {
    number: "01",
    title: "Écoute & Devis sur mesure",
    description:
      "Nous analysons vos besoins, vos quantités et vos contraintes techniques pour vous proposer une solution claire et un devis détaillé sous 24h.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Conception & Validation",
    description:
      "Nos graphistes préparent ou vérifient vos fichiers et vous soumettent un bon à tirer (BAT) afin de valider chaque détail avant lancement.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Production & Contrôle",
    description:
      "Impression, découpe, marquage ou confection : nos équipes réalisent vos supports avec un contrôle qualité strict sur les couleurs et finitions.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Livraison rapide & Suivi",
    description:
      "Vos commandes sont soigneusement emballées et livrées à l'adresse de votre choix dans le respect des délais convenus.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
];

export default function AboutProcess() {
  return (
    <section className="border-t border-gray-200 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
            Notre méthode de travail
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Un accompagnement simple et structuré,
            <span className="text-[#243C91]"> de l'idée à la livraison.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Nous avons mis en place un processus fluide pour vous garantir
            sérénité, transparence et réactivité à chaque étape de votre projet.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-7 transition duration-200 hover:-translate-y-1 hover:border-[#243C91]/40 hover:bg-white hover:shadow-sm"
            >
              <div>
                {/* Top row : Icon + Step number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#243C91]/10 text-[#243C91] transition duration-200 group-hover:bg-[#243C91] group-hover:text-white">
                    {step.icon}
                  </div>

                  <span className="text-2xl font-extrabold tracking-tight text-gray-300 transition duration-200 group-hover:text-[#243C91]">
                    {step.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Bottom subtle accent bar */}
              <div className="mt-6 h-1 w-10 rounded-full bg-gray-200 transition-all duration-200 group-hover:w-16 group-hover:bg-[#243C91]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}