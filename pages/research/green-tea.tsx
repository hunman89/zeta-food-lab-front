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
      <div className="pt-24">
        <div className="flex py-64 bg-slate-500 justify-center">
          <div className="text-white font-bold text-5xl">R&D</div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-40 divide-y-2">
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
