import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import green_tea from "../../public/images/RnD/green_tea.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ResearchSub from "components/researchSub";

const GreenTea: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>R&D</title>
      </Head>
      <ResearchSub position={1} />
      <div className="w-full max-w-6xl mx-auto py-20 divide-y-2">
        <div className="flex justify-center text-3xl text-gray-800 pb-20">
          Development Of A Green Tea Fermented Beverage
        </div>
        <div className="flex flex-col px-24 pt-20 ">
          <Image className="-z-10" quality={20} src={green_tea}></Image>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default GreenTea;
