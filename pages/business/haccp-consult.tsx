import Layout from "../../components/layout";
import Head from "next/head";
import { NextPage } from "next";

const HaccpConsult: NextPage = () => {
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
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            HACCP 컨설팅
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/property-consult">지식재산권 컨설팅</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/market">식품 온라인 판매</a>
          </div>
        </div>
        <div className="flex flex-col justify-around pt-20">
          <div className="text-3xl font-bold pb-10">HACCP 컨설팅</div>
          <div className="text-xl pb-3">
            ㈜제타푸드랩은 식품업체의 기술적 문제점을 해결하고자 다양한 기술
            컨설팅을 제공합니다.
          </div>
          <div className="text-xl pb-3">
            고객 상황에 맞는 맞춤형 컨설팅을 제공하기 위해 최선을 다하는
            ㈜제타푸드랩이 되겠습니다.
          </div>
          <div className="text-xl pb-3">
            합리적인 가격으로 HACCP 인증 후 사후관리까지 책임지는 것을
            약속드리겠습니다.
          </div>
          <div className="text-xl pb-10">감사합니다.</div>
          <div className="text-xl font-bold pb-5">실적</div>
          <div className="text-xl pb-3">- 화개제다 HACCP</div>
          <div className="text-xl pb-3">- 황금이삭 HACCP</div>
          <div className="text-xl pb-3">- 인테이크 HACCP</div>
        </div>
      </div>
    </Layout>
  );
};

export default HaccpConsult;
