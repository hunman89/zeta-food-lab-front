import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import sign from "../../public/images/sign.png";
import CompanySub from "components/companySub";

const Ceo: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>CEO</title>
      </Head>
      <CompanySub position={1} />
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex flex-col justify-around py-20">
          <div className="text-2xl font-bold text-center">
            제타푸드랩은 식품안전을 포함한 식품 전반에 대한 혁신적인 솔루션을
            제공하여
            <div>새로운 가치를 창출하는 기업으로 도약하겠습니다.</div>
          </div>
          <div className="flex flex-row space-x-10 pt-20 px-10">
            <div className=" w-1/2 bg-slate-500 aspect-square rounded-xl"></div>
            <div className=" w-1/2 flex flex-col space-y-10">
              <div className="text-lg font-bold">
                제타푸드랩은 2021년 국내 현장형 미생물 신속 스크리닝 시장을
                개척하기 위한 꿈을 가지고 처음 회사의 문을 열었습니다.
              </div>
              <div>
                &nbsp;약 10년간의 오랜 연구개발 과정을 거쳐서 자사의 식품 산업용
                미생물 신속 스크리닝 기술인 ‘MSK(microorganism screening kit)’를
                국내 시장에 선보이고자 지난 2020년 9월에 처음 회사를 열었습니다.
                금 나노입자의 비색반응을 이용한 MSK 기술은 매우 빠르고 민감한
                바이오센서로 식품안전시장의 거대한 가능성을 가지고 있습니다.
                저희는 또한 미생물 신속 스크리닝을 위한 식품 전처리 기술인
                ‘pre-MSK(pre microorganism screening kit)’를 개발하고 있습니다.
                식품 산업의 새로운 가치를 창출하겠다는 기업 의지를 가지고
                제타푸드랩은 달려가고 있습니다.
              </div>
              <div>
                &nbsp;이뿐만 아니라 식품업체의 어려움을 해결하기 위한 HACCP,
                지식재산권, 식품 개발 등과 같은 다양한 컨설팅을 제공하고 있으며,
                국내의 많은 식품업체 및 산학과 네트워킹을 형성해 나가고
                있습니다.
              </div>
              <div>
                &nbsp;계속해서 제타푸드랩은 국내 및 해외시장을 향해 더 힘찬
                발걸음을 내딛고자 합니다. 전세계에서 최초의 식품 산업용 미생물
                신속 스크리닝 시장을 개척할 수 있도록 하겠습니다.
              </div>
              <div>감사합니다.</div>
              <div className="flex flex-row font-bold justify-between">
                <div className="flex flex-row items-center ">
                  <div className="">주식회사 제타푸드랩 대표이사</div>
                  &nbsp;&nbsp;
                  <div className="text-xl">한정우</div>
                </div>
                <Image height={50} width={100} src={sign}></Image>
              </div>
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

export default Ceo;
