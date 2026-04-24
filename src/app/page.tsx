import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { Work } from "@/components/sections/work";
import { Pricing } from "@/components/sections/pricing";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Benefits />
        <Work />
        <Pricing />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
