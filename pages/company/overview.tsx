import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Logo from "../../public/logos/logo.png";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Overview: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>overview</title>
      </Head>
      <div>
        <div className="flex py-64 bg-slate-500 justify-center">
          <div className="text-white font-bold text-5xl">기업 개요</div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-[#0053a6] text-[#0053a6]  border-b-4 pb-5 text-center font-bold">
            기업개요
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/ceo">CEO</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/history">연혁</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/vision">비전</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full max-w-6xl mx-auto py-20 justify-around">
        <div className="flex pt-32 justify-center">
          <p className=" text-gray-700 font-medium text-2xl">
            식품산업에 혁신적인 SOLUTION(&zeta;, zeta)을 제공하는 기업
          </p>
        </div>
        <div className="  aspect-square">
          <div>
            <div className="flex justify-center">
              <div className="flex bg-[#0053a6] aspect-square h-64 rounded-full justify-center">
                <div className="text-white text-2xl my-auto">식품안전</div>
              </div>
            </div>
            <div className="flex flex-row -mt-20 -space-x-10">
              <div className="flex bg-[#003873] aspect-square h-64 rounded-full justify-center">
                <div className="text-white my-auto text-2xl">식품화학</div>
              </div>
              <div className="flex bg-[#5186bd] aspect-square h-64 rounded-full justify-center">
                <div className="text-white my-auto text-2xl">식품공학</div>
              </div>
            </div>
          </div>
          <div className="flex pt-14  justify-center">
            <div className="w-96">
              <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
            </div>
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

export default Overview;
