import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Okrotea from "../../public/logos/Okrotea.png";
import Image from "next/image";
import Link from "next/link";
import naverShop from "../../public/logos/navershop.png";
import coupang from "../../public/logos/coupang.png";
import kakao from "../../public/logos/kakao.png";
import sanrim from "../../public/logos/sanrim.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Market: NextPage = () => {
  return (
    <Layout footer>
      <Head>
        <title>business</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">식품 온라인 판매</div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/haccp-consult">HACCP 컨설팅</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/property-consult">지식재산권 컨설팅</a>
          </div>
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            식품 온라인 판매
          </div>
        </div>
        <div className="flex flex-col justify-around pt-20">
          <div className="text-xl pb-20 border-b-2">
            63년 전통의 명인차 브랜드인 화개제다의 차류 제품을 온라인 위탁
            판매하고 있습니다.
          </div>
          <div className="flex flex-row pt-20">
            <div className="w-1/3 h-20 my-auto">
              <Image
                objectFit="contain"
                layout="responsive"
                src={Okrotea}
                alt="Okrotea Logo"
              ></Image>
            </div>
            <div className="w-2/3 text-xl text-gray-500 px-10 my-auto">
              <div>
                녹차의 고장 하동에서 63년의 전통을 이어오고 있는 화개제다는 100%
                국내산 재료를 이용한 야생 녹차 브랜드입니다.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-24 gap-y-5 py-40">
            <Link href="https://smartstore.naver.com/zetafoodlab">
              <a target="_blank" className="my-auto">
                <div className="grid w-full">
                  <Image
                    layout="responsive"
                    objectFit="contain"
                    src={naverShop}
                    alt="navershop Logo"
                  ></Image>
                </div>
              </a>
            </Link>
            <Link href="https://store.coupang.com/link/zetafoodlab">
              <a target="_blank" className="my-auto">
                <div className="grid w-full">
                  <Image
                    layout="responsive"
                    objectFit="contain"
                    src={coupang}
                    alt="coupang Logo"
                  ></Image>
                </div>
              </a>
            </Link>
            <Link href="https://store.kakao.com/zetafoodlab">
              <a target="_blank">
                <div className="grid w-full my-auto">
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    src={kakao}
                    alt="kakao Logo"
                  ></Image>
                </div>
              </a>
            </Link>
            <Link href="https://www.sanrim.com/shop/search.php?q=%ED%99%94%EA%B0%9C%EC%A0%9C%EB%8B%A4">
              <a target="_blank">
                <div className="grid w-full my-auto">
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    src={sanrim}
                    alt="sanrim Logo"
                  ></Image>
                </div>
              </a>
            </Link>
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

export default Market;
