import {
  Footer as FlowFooter,
  FooterBrand,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  FooterDivider,
  Button,
} from "flowbite-react";

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Nos services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];

const expertises = [
  { label: "Impression offset et numérique", href: "/services#impression" },
  { label: "Communication audiovisuelle", href: "/services#audiovisuel" },
  { label: "Signalétique et branding", href: "/services#signaletique" },
  { label: "Sérigraphie et broderie", href: "/services#serigraphie" },
  { label: "Confection et personnalisation", href: "/services#confection" },
  { label: "Communication événementielle", href: "/services#evenementiel" },
  { label: "Bureautique", href: "/services#bureautique" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <FlowFooter
      container
      className="!rounded-none border-t border-white/15 bg-[#243C91] !px-0 !py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">

        {/* TOP FOOTER */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* BRAND */}
          <div className="lg:col-span-4">
            <FooterBrand
              href="/"
              src="/logo.jpeg"
              alt="Logo 3S COM & SERVICES"
              name="3S COM & SERVICES"
              className="[&_img]:h-9 [&_img]:w-9 [&_img]:rounded-md [&_img]:object-cover [&_span]:!text-base [&_span]:!font-bold [&_span]:!text-white"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Votre partenaire en impression, communication, personnalisation
              et solutions professionnelles. Nous donnons vie à vos idées avec
              rigueur et réactivité.
            </p>

            {/* SOCIAL NETWORKS */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#243C91] focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>

            <ul className="space-y-3.5 text-sm text-white/80">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block transition duration-150 hover:translate-x-0.5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Nos expertises
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              {expertises.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="inline-flex items-start gap-2 transition duration-150 hover:translate-x-0.5 hover:text-white"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Contactez-nous
            </h3>

            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs font-medium text-white/60">
                    Adresse
                  </span>
                  <span className="text-white/90">À compléter</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs font-medium text-white/60">
                    Téléphone
                  </span>
                  <span className="text-white/90">À compléter</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs font-medium text-white/60">
                    Email
                  </span>
                  <span className="text-white/90">À compléter</span>
                </div>
              </li>
            </ul>

            <Button
              href="/contact"
              className="mt-6 w-full !border-0 !bg-white px-4 py-2.5 font-semibold !text-[#243C91] shadow-sm transition hover:!bg-gray-100 sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <span>Nous contacter</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Button>
          </div>

        </div>

        {/* DIVIDER */}
        <FooterDivider className="!my-10 !border-white/15" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <FooterCopyright
            href="/"
            by="3S COM & SERVICES. Tous droits réservés."
            year={new Date().getFullYear()}
            className="!text-sm !text-white/80"
          />

          <FooterLinkGroup className="flex flex-wrap items-center justify-center gap-6">
            <FooterLink
              href="/mentions-legales"
              className="!text-sm !text-white/80 transition hover:!text-white"
            >
              Mentions légales
            </FooterLink>

            <FooterLink
              href="/politique-confidentialite"
              className="!text-sm !text-white/80 transition hover:!text-white"
            >
              Politique de confidentialité
            </FooterLink>
          </FooterLinkGroup>

        </div>

        {/* DEVELOPER SIGNATURE */}
        <div className="mt-6 border-t border-white/15 pt-5 text-center text-xs text-white/70">
          Développé par{" "}
          <a
            href="https://maboyesoftwares.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline-offset-4 transition hover:underline"
          >
            MABOYE SOFTWARES
          </a>
        </div>

      </div>
    </FlowFooter>
  );
}