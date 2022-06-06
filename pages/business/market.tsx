import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Okrotea from "../../public/logos/okrotea.png";
import Image from "next/image";
import Link from "next/link";
import naverShop from "../../public/logos/navershop.png";
import coupang from "../../public/logos/coupang.png";
import kakao from "../../public/logos/kakao.png";
import sanrim from "../../public/logos/sanrim.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BusinessSub from "components/businessSub";
import { useTranslation } from "next-i18next";
import TextDecoration from "components/textDecoration";

const Market: NextPage = () => {
  const { t } = useTranslation("business");
  return (
    <Layout footer>
      <Head>
        <title>business</title>
      </Head>
      <BusinessSub position={1} />
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex flex-col justify-around pt-20">
          <div className="text-2xl pb-20 border-b-2 ">
            <div className="flex flex-row space-x-3 animate-fadeInUp">
              <TextDecoration />
              <div>{t("MARKET_1")}</div>
            </div>
          </div>
          <div className="flex flex-row pt-20">
            <div className="w-1/3 h-20 my-auto">
              <Image
                className="animate-fadeInUp"
                objectFit="contain"
                layout="responsive"
                src={Okrotea}
                alt="Okrotea Logo"
              ></Image>
            </div>
            <div className="w-2/3 text-xl text-gray-500 px-10 my-auto">
              <div className="animate-fadeInUp">{t("MARKET_2")}</div>
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
    ...(await serverSideTranslations(locale, ["common", "business"])),
  },
});

export default Market;
