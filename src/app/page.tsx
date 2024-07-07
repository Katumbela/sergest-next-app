import Image from "next/image";
import { NavBar, Hero, SubHero, Action, SystemComponent, AboutUs, Testimonials, StartNow, Prices, Founder, MockUp, PayWith, Proccess, Newsletter, Footer } from "./components";
import Layout from "./layout";
import { LayoutBody } from "./layout/layout";

export default function Home() {
  return (
    <div>

      <Layout>
        <div className="container">
          <NavBar />

          <LayoutBody>
            <Hero />
          </LayoutBody>

          <LayoutBody>
            <SubHero />
          </LayoutBody>

          <LayoutBody>
            <Action />
          </LayoutBody>
        </div>

        <LayoutBody>
          <SystemComponent />
        </LayoutBody>
        <div className="container">
          <AboutUs />

          <LayoutBody>
            <Testimonials />
          </LayoutBody>
        </div>
        <StartNow />
        <div className="container">
          <Prices />
          <Founder />
          <MockUp />
        </div>
        <PayWith />
        <div className="container">
          <Proccess />
          <Newsletter />
        </div>
        <Footer />
      </Layout>

    </div>
  );
}
