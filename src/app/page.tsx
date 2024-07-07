import Image from "next/image"; 
import Layout from "./layout";
import { LayoutBody } from "./layout/layout"; 
import Head from "next/head";
import { Hero } from "./components/hero/hero";

export default function Home() {
  return (
  
  <>
  <Head>
    <title>Initial page</title>
  </Head>
  <div>
    <Hero />
    <h1>text</h1>
  </div>
  </>
  );
}
