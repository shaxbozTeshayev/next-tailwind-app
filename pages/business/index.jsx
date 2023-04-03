import Layout from "@/components/Layout/Layout";
import React from "react";
import BusinessHeader from "@/components/BusinessHeader";
import WhyOurSolution from "@/components/WhyOurSolution";
import Identification from "@/components/Identification";
import WifiAuth from "@/components/WifiAuth";
import ComplexSolution from "@/components/ComplexSolution";
import WorkStages from "@/components/WorkStages";

import ContactsMain from "@/components/ContactsMain";

const business = () => {
  return (
    <Layout>
      <BusinessHeader />
      <WhyOurSolution title="Почему наше решение" />
      <Identification title="как работает идентификация по закону" />
      <WifiAuth title="Преимущества Wi-Fi авторизации" />
      <ComplexSolution title="Комплексные решения" />
      <WorkStages title="Этапы работы" />
      <ContactsMain />
    </Layout>
  );
};

export default business;
