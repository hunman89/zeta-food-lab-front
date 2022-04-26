import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";

const NationalProject: NextPage = () => {
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
          <div className="w-1/3 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/research/green-tea">녹차 발효 음료 개발</a>
          </div>
          <div className="w-1/3 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            국가 지원 사업
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20 divide-y-2">
        <div className="flex justify-center text-3xl text-gray-800 pb-40">
          국가 지원 사업
        </div>
        <div className="flex justify-center text-3xl text-gray-800 py-10">
          2021
        </div>
        <div className="flex flex-col text-2xl text-gray-800 py-10 gap-5">
          <div>▷ 예비 창업 패키지</div>
          <div>▷ 실전 창업 교육</div>
          <div>▷ 메이커스페이스 시제품 제작 지원</div>
          <div>▷ 농식품 벤처 육성 지원사업</div>
          <div>▷ 과학기술분야 R&D 대체인력 활용 지원사업</div>
        </div>
        <div className="flex justify-center text-3xl text-gray-800 py-10">
          2022
        </div>
        <div className="flex flex-col text-2xl text-gray-800 py-10 gap-5">
          <div>▷ 농식품 벤처 육성 지원사업</div>
          <div>▷ 초기 창업 패키지</div>
          <div>▷ 시흥창업센터 시제품 제작 지원사업</div>
          <div>▷ 특허전략 컨설팅 지원사업</div>
          <div>▷ 공공시장 진출 프로그램 ( 지원완료, 선정 대기중 )</div>
        </div>
      </div>
    </Layout>
  );
};

export default NationalProject;
