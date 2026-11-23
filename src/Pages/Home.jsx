
import Hero from "../Components/HeroHome"
import WhyChooseUs from "../Components/WhyChoose"
import ServicesOverview from "../Components/Domaines"
import WorkProcess from "../Components/Realisations"
import Realisations from "../Components/Real"
import Partners from "../Components/Parteners"
import OurServices from "../Components/AutresServices"
import CTA from "../Components/CTA"
import Footer from "../Components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <WorkProcess />
      <Realisations />
      <Partners />
      <OurServices />
      <CTA />
      <Footer />
    </>
  );
}