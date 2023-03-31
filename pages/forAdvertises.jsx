import Layout from "@/components/Layout";
import Statistics from "@/components/Statistics";
import Screen from "@/components/Screen";
import React from "react";
import OurAdvavntages from "@/components/OurAdvavntages";

const forAdvertises = () => {
  return (
    <Layout>
      <Statistics />
      <Screen />
      <OurAdvavntages title="Наши преимущество" />
    </Layout>
  );
};

export default forAdvertises;
