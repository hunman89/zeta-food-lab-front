import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Ceo: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>CEO</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">기업소개</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/overview">기업개요</a>
          </div>
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            CEO
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/history">연혁</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/vision">비전</a>
          </div>
        </div>
        <div className="flex flex-row justify-around pt-16">
          <div className="flex flex-col">
            <div className=" h-72 bg-slate-500 aspect-square rounded-xl"></div>
            <p className="text-3xl font-medium text-center pt-5">CEO 한정우</p>
          </div>
          <div className="flex flex-col">
            <div className=" h-72 bg-slate-500 aspect-square rounded-xl"></div>
          </div>
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

export default Ceo;
