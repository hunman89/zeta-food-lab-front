import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import green_tea from "../../public/images/RnD/green_tea.jpg";
import green_tea_en from "../../public/images/RnD/green_tea_en.jpg";
import green_tea_hill from "../../public/images/RnD/green_tea_hill.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ResearchSub from "components/researchSub";
import { useTranslation } from "next-i18next";
import TextDecoration from "components/textDecoration";
import { useRouter } from "next/router";

const GreenTea: NextPage = () => {
  const { t } = useTranslation("research");
  const { locale } = useRouter();

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
        <div className="flex flex-row space-x-5">
          <div className="flex flex-col space-y-10 w-2/3">
            <div className="text-xl space-y-3">
              <div>{t("GREEN_TEA_BODY_1")}</div>
              <div>{t("GREEN_TEA_BODY_2")}</div>
            </div>
            <div className="text-xl space-y-3">
              <div>{t("GREEN_TEA_BODY_3")}</div>
              <div>{t("GREEN_TEA_BODY_4")}</div>
            </div>
          </div>
          <div className="w-1/3 drop-shadow-2xl">
            <Image
              src={green_tea_hill}
              objectFit="contain"
              className="rounded-3xl"
            ></Image>
          </div>
        </div>
        <div className="flex h-auto w-full pt-20">
          <Image
            className="-z-10"
            height={450}
            width={1150}
            objectFit="contain"
            src={locale == "kr" ? green_tea : green_tea_en}
          ></Image>
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
