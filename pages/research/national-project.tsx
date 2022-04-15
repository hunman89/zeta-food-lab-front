import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";

const NationalProject: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>vision</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">비전</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-40">
        <div className="flex justify-center text-3xl text-gray-500 py-20">
          "우리가 걸어갈 길은&nbsp;
          <span className="text-blue-700">신속 스크리닝 기술 개발</span>의
          새로운 길이 됩니다"
        </div>
        <div className="flex flex-row justify-around py-20 px-24"></div>
      </div>
    </Layout>
  );
};

export default NationalProject;
