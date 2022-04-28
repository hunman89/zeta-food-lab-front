import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import switchable_linker from "../../public/RnD/switchable_linker.png";
import MSK from "../../public/RnD/MSK.png";
import food_preprocessor from "../../public/RnD/food_preprocessor.png";
import switchable_linker_roadmap from "../../public/RnD/switchable_linker_roadmap.png";

const Sensor: NextPage = () => {
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
          <div className="w-1/3 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            현장형 미생물 진단 센서
          </div>
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/green-tea">녹차 발효 음료 개발</a>
          </div>
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/national-project">국가 지원 사업</a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20 divide-y-2">
        <div className="flex justify-center text-3xl text-gray-800 pb-20">
          Integrated Colorimetric Biosensor For On-Site Foodborne Pathogen
          Detection
        </div>
        <div className="flex flex-col px-24 py-20 ">
          <span className="text-xl font-bold text-gray-900 pb-14">
            Switchable linker based colorimetric biosensor using gold
            nanoparticle aggregation
          </span>

          <Image className="-z-10" quality={20} src={switchable_linker}></Image>
        </div>
        <div className="flex flex-col px-24 py-20">
          <span className="text-xl font-bold text-gray-900 pb-14">
            Microorganism Screening Kit (MSK)
          </span>
          <Image className="-z-10" quality={20} src={MSK}></Image>
        </div>
        <div className="flex flex-col px-24 py-20">
          <span className="text-xl font-bold text-gray-900 pb-14">
            Food Preprocessor For On-Site Detection Of Microorganism
          </span>
          <Image className="-z-10" quality={10} src={food_preprocessor}></Image>
        </div>
        <div className="flex flex-col px-24 py-20">
          <span className="text-xl font-bold text-gray-900 pb-14"></span>
          <Image
            className="-z-10"
            quality={10}
            src={switchable_linker_roadmap}
          ></Image>
        </div>
      </div>
    </Layout>
  );
};

export default Sensor;
