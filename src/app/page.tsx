import Image from "next/image"; 
import Layout from "./layout";
import { LayoutBody } from "./padrao/padrao"; 
import Head from "next/head";
import { Hero } from "./components/hero/hero";
import { Testimonials } from "./components/testimonials/testimonials";
import { AboutUs } from "./components/about/about";
import { SystemComponent } from "./components/system/system";
import { Action } from "./components/action/action";
import { SubHero } from "./components/sub-hero/sub-hero";
import { NavBar } from "./components/navbar/navbar";
import { StartNow } from "./components/start-now/start-now";
import { Founder } from "./components/founder/founder";
import { Prices } from "./components/prices/prices";
import { MockUp } from "./components/mockup/mockup";
import { PayWith } from "./components/paywith/paywith";
import { Proccess } from "./components/proccess/proccess";
import { Newsletter } from "./components/newsletter/newsletter";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
  
  <>
  <Head>
    <title>Initial page</title>
  </Head>
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
  </>
  );
}
