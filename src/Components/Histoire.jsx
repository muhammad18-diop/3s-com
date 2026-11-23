const stats = [
  { value: "+500", label: "Projets réalisés" },
  { value: "+150", label: "Clients accompagnés" },
  { value: "7", label: "Domaines d'expertise" },
  { value: "100%", label: "Engagement qualité" },
];

export default function AboutHistory() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* TOP GRID : IMAGE + TEXTE */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image à gauche */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <img
              src="/photo-histoire.jpg"
              alt="Atelier et équipe de production 3S COM & SERVICES"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[460px]"
            />
          </div>

          {/* Contenu narratif à droite */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#243C91]">
              Notre histoire
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Une vision née de la passion du
              <span className="text-[#243C91]"> travail bien fait.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600">
              Fondée avec l'ambition d'offrir aux entreprises, institutions et
              particuliers un interlocuteur unique pour tous leurs besoins
              visuels et logistiques, <strong className="font-semibold text-gray-900">3S COM & SERVICES</strong> s'est
              construite autour d'une exigence simple : allier la précision de
              l'impression moderne à la réactivité d'un service de livraison fiable.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Au fil des projets, nous avons élargi nos compétences — de
              l'impression offset et numérique à la signalétique, en passant par
              la sérigraphie, la broderie et l'événementiel — afin d'accompagner
              chaque client de la conception jusqu'à la remise en main propre.
            </p>

            {/* Points clés / Engagements */}
            <div className="mt-8 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#243C91]/10 text-[#243C91]">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Un interlocuteur unique
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    De la création graphique à la livraison finale sur site.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#243C91]/10 text-[#243C91]">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Finitions soignées
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Contrôle qualité systématique sur chaque support produit.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CHIFFRES CLÉS */}
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-xl border border-gray-200 bg-white p-8 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-[#243C91] sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}