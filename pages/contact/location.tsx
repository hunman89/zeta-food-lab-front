import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";

const Location: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>Location</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">오시는길</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-around text-2xl text-gray-500">
          <div className="w-1/3  border-gray-300  border-b-2 pb-5 text-center">
            CEO/CTO
          </div>
          <div className="w-1/3 border-gray-300 border-b-2 pb-5 text-center">
            비전
          </div>
          <div className="w-1/3 border-black border-b-2 pb-5 text-center">
            회사연혁
          </div>
        </div>
        <div className="flex flex-col pt-24">
          <div className="text-2xl font-bold">주소</div>
          <div className="text-gray-600 pt-4 pb-10">
            경기도 시흥시 배곧2로 82 서울대학교 시흥캠퍼스 미래모빌리티동 602호
          </div>
          <div className="pt-10 border-t-2 border-gray-400">
            전화번호: 010-9321-0649 (대표)
          </div>
          <div className="pt-24 ">
            <div className="bg-gray-500 h-72 aspect-video"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
