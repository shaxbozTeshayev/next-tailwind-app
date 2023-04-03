import Layout from "@/components/Layout/Layout";
import Statistics from "@/components/Statistics";
import Screen from "@/components/Screen";
import React from "react";
import OurAdvavntages from "@/components/OurAdvavntages";
import WorkStages from "@/components/WorkStages";

import AdvertisersHeader from "@/components/AdvertisersHeader";
import ContactsMain from "@/components/ContactsMain";

const advertises = () => {
  return (
    <Layout>
      <AdvertisersHeader />
      <Statistics />
      <Screen />
      <OurAdvavntages title="Наши преимущество" />
      <WorkStages title="Этапы работы " />
      <ContactsMain />
    </Layout>
  );
};

export default advertises;
