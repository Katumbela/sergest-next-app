 
import {
  AboutUs,
  Action,
  Footer,
  Founder,
  Hero,
  MockUp,
  NavBar,
  Newsletter,
  PayWith,
  Prices,
  Proccess,
  StartNow,
  SubHero,
  SystemComponent,
  Testimonials,
} from "../components";
import { Layout, LayoutBody } from "../layout/layout";

export default function Home() {

  return (
    <>
     
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

    </>
  );
}
