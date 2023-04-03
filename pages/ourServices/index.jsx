import React from "react";
import MainNavigation from "@/components/Layout/MainNavigation";
import InternetServices from "@/components/InternetServices";
import Options from "@/components/Options";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";

const ourServices = () => {
  return (
    <Layout>
      <InternetServices title="наши интернет услуги" />
      <Options title="наши тарифы на подписку" />
    </Layout>
  );
};

export default ourServices;
