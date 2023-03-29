import React from "react";
import MainNavigation from "@/components/MainNavigation";
import InternetServices from "@/components/InternetServices";
import Options from "@/components/Options";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const ourServices = () => {
  return (
    <Layout>
      <InternetServices title="наши интернет услуги" />
      <Options title="наши тарифы на подписку" />
    </Layout>
  );
};

export default ourServices;
