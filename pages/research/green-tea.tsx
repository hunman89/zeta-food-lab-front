import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import green_tea from "../../public/images/RnD/green_tea.jpg";
import green_tea_hill from "../../public/images/RnD/green_tea_hill.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ResearchSub from "components/researchSub";
import { useTranslation } from "next-i18next";
import TextDecoration from "components/textDecoration";

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
          <div className="flex flex-row space-x-3 animate-fadeInUp">
            <TextDecoration />
            <div>{t("GREEN_TEA_HEAD")}</div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-10">
            <div className="text-xl">
              <div>{t("GREEN_TEA_BODY_1")}</div>
              <div>{t("GREEN_TEA_BODY_2")}</div>
            </div>
            <div className="text-xl">
              <div>{t("GREEN_TEA_BODY_3")}</div>
              <div>{t("GREEN_TEA_BODY_4")}</div>
            </div>
          </div>

          <div className="w-96 aspect-square">
            <Image src={green_tea_hill}></Image>
            <div className="border border-zetalight h-64 w-96 -ml-4 -mt-60"></div>
          </div>
        </div>
        <div className="flex flex-col px-24 pt-20 ">
          <Image className="-z-10" quality={20} src={green_tea}></Image>
        </div>
        <div className="py-40">
          <div className="px-20 text-justify text-xl font-medium">
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
