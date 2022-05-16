import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const NationalProject: NextPage = () => {
  const { t } = useTranslation("research");
  return (
    <Layout footer>
      <Head>
        <title>R&D</title>
      </Head>
      <div>
        <div className="flex py-64 bg-slate-500 justify-center">
          <div className="text-white font-bold text-5xl">R&D</div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto pt-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/sensor">현장형 미생물 진단 센서</a>
          </div>
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/green-tea">녹차 발효 음료 개발</a>
          </div>
          <div className="w-1/3 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            국가 지원 사업
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20 ">
        <p className="indent-4 pb-20 text-2xl font-medium">
          {t("FUNDED_COMMENT")}
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
