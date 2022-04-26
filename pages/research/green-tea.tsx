import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import green_tea from "../../public/RnD/green_tea.png";

const GreenTea: NextPage = () => {
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
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/sensor">현장형 미생물 진단 센서</a>
          </div>
          <div className="w-1/3 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            녹차 발효 음료 개발
          </div>
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/national-project">국가 지원 사업</a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20 divide-y-2">
        <div className="flex justify-center text-3xl text-gray-800 pb-40">
          Development Of A Green Tea Fermented Beverage
        </div>
        <div className="flex flex-col px-24 pt-40 ">
          <Image className="-z-10" quality={20} src={green_tea}></Image>
        </div>
      </div>
    </Layout>
  );
};

export default GreenTea;
