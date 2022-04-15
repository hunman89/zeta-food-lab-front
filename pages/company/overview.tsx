import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Logo from "../../public/logo.png";
import Image from "next/image";

const Overview: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>overview</title>
      </Head>
      <div className="pt-24">
        <div className="flex py-64 bg-slate-500 justify-center">
          <div className="text-white font-bold text-5xl">기업 개요</div>
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

export default Overview;
