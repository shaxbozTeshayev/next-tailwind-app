import ContactsMain from "@/components/ContactsMain";

import Footer from "@/components/Layout/Footer";
import HeaderSection from "@/components/HeaderSection";
import MainNavigation from "@/components/Layout/MainNavigation";
import Map from "@/components/Map";
import News from "@/components/News";
import OurServices from "@/components/OurServices";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [session, setSession] = useState(false);
  return (
    <>
      <Head>
        <title>Uzcloud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && (
        <main>
          <MainNavigation />
          <HeaderSection />
          <OurServices title="Наши услуги" />
          <WhyUs title="Почему мы" />
          <Map title="Наши филиалы" />
          <ContactsMain />
          <News title="Новости" />
          <Footer />
        </main>
      )}
    </>
  );
}
