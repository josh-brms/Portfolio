import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Marquee } from "@/components/marquee";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Timeline } from "@/components/sections/timeline";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { CommandPalette } from "@/components/command-palette";
import { MARQUEE_ITEMS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Marquee items={MARQUEE_ITEMS} />
        <Skills />
        <Services />
        <Timeline />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </>
  );
}
