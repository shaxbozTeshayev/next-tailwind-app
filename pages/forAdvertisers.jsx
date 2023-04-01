import Layout from "@/components/Layout";
import Statistics from "@/components/Statistics";
import Screen from "@/components/Screen";
import React from "react";
import OurAdvavntages from "@/components/OurAdvavntages";
import WorkStages from "@/components/WorkStages";
import Contacts from "@/components/Contacts";
import AdvertisersHeader from "@/components/AdvertisersHeader";

const forAdvertises = () => {
  return (
    <Layout>
      <AdvertisersHeader />
      <Statistics />
      <Screen />
      <OurAdvavntages title="Наши преимущество" />
      <WorkStages title="Этапы работы " />
      <Contacts />
    </Layout>
  );
};

export default forAdvertises;
