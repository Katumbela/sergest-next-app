 
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


        </div>
 
        <Footer />
      </Layout>

    </>
  );
}
