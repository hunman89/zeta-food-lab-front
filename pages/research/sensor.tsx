import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import switchable_linker from "../../public/RnD/switchable_linker.png";
import MSK from "../../public/RnD/MSK.png";
import food_preprocessor from "../../public/RnD/food_preprocessor.png";

const Sensor: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>sensor</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">R&D</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-40">
        <div className="flex justify-center text-3xl text-gray-800 py-20">
          Integrated Colorimetric Biosensor For On-Site Foodborne Pathogen
          Detection
        </div>
        <div className="flex flex-row justify-around py-20 px-24">
          <Image quality={20} src={switchable_linker}></Image>
        </div>
        <div className="flex flex-row justify-around py-20 px-24">
          <Image quality={20} src={MSK}></Image>
        </div>
        <div className="flex flex-row justify-around py-20 px-24">
          <Image quality={10} src={food_preprocessor}></Image>
        </div>
      </div>
    </Layout>
  );
};

export default Sensor;
