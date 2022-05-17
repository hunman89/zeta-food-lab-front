import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import green_tea from "../../public/images/RnD/green_tea.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ResearchSub from "components/researchSub";
import { useTranslation } from "next-i18next";

const GreenTea: NextPage = () => {
  const { t } = useTranslation("research");
  return (
    <Layout footer>
      <Head>
        <title>R&D</title>
      </Head>
      <ResearchSub position={1} />
      <div className="w-full max-w-6xl mx-auto py-40">
        <div className="flex text-3xl font-bold text-gray-800 pb-20 ">
          <div className="animate-fadeInUp">{t("GREEN_TEA_HEAD")}</div>
        </div>
        <div className="flex flex-col px-24 pt-20 ">
          <Image className="-z-10" quality={20} src={green_tea}></Image>
        </div>
        <div className="pt-20 space-y-8">
          <div className="text-xl font-bold text-center">
            {t("GREEN_TEA_SUB")}
          </div>
          <div className=" text-center">
            <div>{t("GREEN_TEA_BODY_1")}</div>
            <div>{t("GREEN_TEA_BODY_2")}</div>
          </div>
          <div className=" text-center">
            <div>{t("GREEN_TEA_BODY_3")}</div>
            <div>{t("GREEN_TEA_BODY_4")}</div>
          </div>
        </div>
        <div className="py-40">
          <div className="px-20 text-center text-xl font-medium">
            {t("GREEN_TEA_BODY_5")}
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

export default GreenTea;
