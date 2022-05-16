import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import vision from "../../public/images/vision.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Vision: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>vision</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">비전</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/overview">기업개요</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/ceo">CEO</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/history">연혁</a>
          </div>
          <div className="w-1/4 border-zetalight text-zetalight border-b-4 pb-5 text-center font-bold">
            비전
          </div>
        </div>
        <div className="flex justify-center text-3xl text-gray-500 py-20">
          "우리가 걸어갈 길은&nbsp;
          <span className="text-zetalight">신속 스크리닝 기술 개발</span>의
          새로운 길이 됩니다"
        </div>
        <div className="flex flex-row justify-around py-20 px-24">
          <Image src={vision}></Image>
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

export default Vision;
