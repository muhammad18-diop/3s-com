const values = [
  {
    title: "Qualité d'exécution",
    description:
      "Nous sélectionnons des matériaux durables et assurons un contrôle rigoureux à chaque étape pour un rendu fidèle à vos attentes.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Réactivité & Ponctualité",
    description:
      "Parce que vos échéances comptent, nous optimisons nos délais de production et garantissons une livraison rapide directement chez vous.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Écoute & Conseil",
    description:
      "Chaque projet est unique. Notre équipe vous guide sur le choix des formats, finitions et supports les plus adaptés à votre budget.",
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
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    title: "Solutions sur mesure",
    description:
      "De la petite série personnalisée aux campagnes grand format, nous adaptons nos équipements à toutes vos ambitions visuelles.",
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
            Nos valeurs & engagements
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Les principes qui guident
            <span className="text-[#243C91]"> chacune de nos réalisations.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Chez 3S COM & SERVICES, la confiance de nos clients repose sur des
            engagements clairs, tenus au quotidien sur le terrain.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-gray-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-[#243C91]/40 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#243C91]/10 text-[#243C91] transition duration-200 group-hover:bg-[#243C91] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}