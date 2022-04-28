import Layout from "../../components/layout";
import Head from "next/head";
import { NextPage } from "next";

const PropertyConsult: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>Consult</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">
          식품 / 바이오 컨설팅
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/haccp-consult">HACCP 컨설팅</a>
          </div>
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            지식재산권 컨설팅
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/market">식품 구매</a>
          </div>
        </div>
        <div className="flex flex-col justify-around pt-20 pb-40">
          <div className="text-3xl font-bold pb-10">지식재산권 컨설팅</div>
          <div className="text-xl pb-3">
            제타푸드랩만의 풍부한 기술과 지식을 바탕으로
          </div>
          <div className="text-xl pb-3">
            식품업체의 지식재산권 관련 기술적 문제에 대한 기술 컨설팅을
            제공합니다.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyConsult;
