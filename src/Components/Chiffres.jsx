const keyFigures = [
  {
    value: "+500",
    label: "Projets réalisés",
    description: "Supports imprimés, enseignes et créations livrés avec soin.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: "+150",
    label: "Clients accompagnés",
    description: "Entreprises, institutions et particuliers qui nous font confiance.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    value: "7",
    label: "Pôles d'expertise",
    description: "De l'impression numérique à la signalétique et l'événementiel.",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    value: "98%",
    label: "Satisfaction client",
    description: "Un suivi rigoureux et le respect strict des délais annoncés.",
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
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

export default function AboutKeyFigures() {
  return (
    <section className="border-t border-gray-200 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
            Nos chiffres clés
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Des résultats concrets au service de
            <span className="text-[#243C91]"> votre communication.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Chaque réalisation témoigne de notre engagement quotidien pour la
            qualité d'impression, la créativité et la ponctualité de livraison.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyFigures.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 bg-gray-50 p-7 transition duration-200 hover:border-[#243C91]/40 hover:bg-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#243C91]/10 text-[#243C91]">
                {item.icon}
              </div>

              <p className="mt-6 text-4xl font-bold tracking-tight text-[#243C91]">
                {item.value}
              </p>

              <h3 className="mt-2 text-base font-semibold text-gray-900">
                {item.label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}