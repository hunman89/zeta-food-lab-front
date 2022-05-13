import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const History: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>History</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">연혁</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/overview">기업개요</a>
          </div>
          <div className="w-1/4 border-gray-300  border-b-4 pb-5 text-center font-bold">
            <a href="/company/ceo">CEO</a>
          </div>
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            연혁
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/vision">비전</a>
          </div>
        </div>
        <div className="flex flex-col pt-24 text-xl">
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2">
              <div className="pt-10 text-right pr-10">
                <div className="font-bold text-[#0053a6]">2021.09.01.</div>
                ㈜제타푸드랩 법인 설립
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="mt-10 -ml-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
          </div>
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2 items-end">
              <div className="mt-10 -mr-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
            <div className="flex flex-col w-1/2 -z-10">
              <div className="pt-10 pl-10">
                <div className="font-bold text-[#0053a6]">2021.09.02.</div>
                서울대학교 산학협력단 산업 자문 계약 체결
              </div>
            </div>
          </div>
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2">
              <div className="pt-10 text-right pr-10">
                <div className="font-bold text-[#0053a6]">2021.09.03.</div>
                SNU 시흥 바이오스타트업 조성 사업 과제 참여
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="mt-10 -ml-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
          </div>
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2 items-end">
              <div className="mt-10 -mr-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
            <div className="flex flex-col w-1/2 -z-10">
              <div className="pt-10 pl-10">
                <div className="font-bold text-[#0053a6]">2021.10.01.</div>
                서울대학교 시흥캠퍼스 연구소 입주
              </div>
            </div>
          </div>
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2">
              <div className="pt-10 text-right pr-10">
                <div className="font-bold text-[#0053a6]">2021.10.01.</div>
                화개제다 기술 자문 컨설팅 계약 체결
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="mt-10 -ml-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
          </div>
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2 items-end z-10">
              <div className="mt-10 -mr-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
            <div className="flex flex-col w-1/2 -z-10">
              <div className="pt-10 pl-10">
                <div className="font-bold text-[#0053a6]">2021.10.19.</div>
                화개제다 온라인 판매권 위탁 계약 체결
              </div>
            </div>
          </div>
          <div className="flex w-full divide-x-4">
            <div className="flex flex-col w-1/2">
              <div className="pt-10 text-right pr-10">
                <div className="font-bold text-[#0053a6]">2021.12.01.</div>
                황금이삭 기술 자문 컨설팅 계약 체결
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="mt-10 -ml-2.5 rounded-full border-none bg-[#0053a6] w-4 aspect-square"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default History;
