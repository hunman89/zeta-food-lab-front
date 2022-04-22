import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";

const Market: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>business</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">샘플</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-around text-2xl text-gray-500">
          <div className="w-1/3 border-black border-b-2 pb-5 text-center">
            sub1
          </div>
          <div className="w-1/3 border-gray-300 border-b-2 pb-5 text-center">
            sub2
          </div>
          <div className="w-1/3 border-gray-300 border-b-2 pb-5 text-center">
            sub3
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

export default Market;
