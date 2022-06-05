import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ResearchSub from "components/researchSub";

const NationalProject: NextPage = () => {
  const { t } = useTranslation("research");
  return (
    <Layout footer>
      <Head>
        <title>R&D</title>
      </Head>
      <ResearchSub position={2} />
      <div className="w-full max-w-6xl mx-auto py-40 ">
        <p className="indent-4 pb-20 text-2xl font-medium ">
          <div className=" opacity-60 -mb-8">
            <div className="bg-zetadark h-10 aspect-square"></div>
            <div className=" bg-zetalight h-10 aspect-square -mt-8 ml-2"></div>
          </div>
          <div className="animate-fadeInUp">{t("FUNDED_COMMENT")}</div>
        </p>
        <div>
          <div className="flex text-3xl font-bold text-gray-800">2021</div>
          <div className="flex flex-col text-xl text-gray-800 py-8 gap-3 pl-5">
            <div>{t("FUNDED_2021_01")}</div>
            <div>{t("FUNDED_2021_02")}</div>
            <div>{t("FUNDED_2021_03")}</div>
            <div>{t("FUNDED_2021_04")}</div>
          </div>
          <div className="flex text-3xl font-bold text-gray-800">2022</div>
          <div className="flex flex-col text-xl text-gray-800 py-8 gap-3 pl-5">
            <div>{t("FUNDED_2022_01")}</div>
            <div>{t("FUNDED_2022_02")}</div>
            <div>{t("FUNDED_2022_03")}</div>
            <div>{t("FUNDED_2022_04")}</div>
            <div>{t("FUNDED_2022_05")}</div>
            <div>{t("FUNDED_2022_06")}</div>
            <div>{t("FUNDED_2022_07")}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "research"])),
  },
});

export default NationalProject;
