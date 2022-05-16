import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HistoryCard from "components/historyCard";
import { useTranslation } from "next-i18next";

const History: NextPage = () => {
  const { t } = useTranslation("company");
  return (
    <Layout footer>
      <Head>
        <title>History</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">연혁</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/overview">기업개요</a>
          </div>
          <div className="w-1/4 border-gray-300  border-b-4 pb-5 text-center font-bold">
            <a href="/company/ceo">CEO</a>
          </div>
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            연혁
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/vision">비전</a>
          </div>
        </div>
        <div className="flex flex-col pt-24 text-xl">
          <HistoryCard name={t("HISTORY_2021_09_01")} date="2021.09." />
          <HistoryCard
            name={t("HISTORY_2021_09_02")}
            date="2021.09."
            right={true}
          />
          <HistoryCard name={t("HISTORY_2021_09_03")} date="2021.09." />
          <HistoryCard
            name={t("HISTORY_2021_10_01")}
            date="2021.10."
            right={true}
          />
          <HistoryCard name={t("HISTORY_2021_10_02")} date="2021.10." />
          <HistoryCard
            name={t("HISTORY_2021_10_03")}
            date="2021.10."
            right={true}
          />
          <HistoryCard name={t("HISTORY_2021_12_01")} date="2021.12." />
          <HistoryCard
            name={t("HISTORY_2022_01_01")}
            date="2022.01."
            right={true}
          />
          <HistoryCard name={t("HISTORY_2022_01_02")} date="2022.01." />
          <HistoryCard
            name={t("HISTORY_2022_03_01")}
            date="2022.03."
            right={true}
          />
          <HistoryCard name={t("HISTORY_2022_04_01")} date="2022.04." />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "company"])),
  },
});

export default History;
