import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Logo from "../../public/logos/logo.png";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Overview: NextPage = () => {
  const { t } = useTranslation("company");
  return (
    <Layout footer>
      <Head>
        <title>overview</title>
      </Head>
      <div>
        <div className="flex py-64 bg-slate-500 justify-center">
          <div className="text-white font-bold text-5xl">기업 개요</div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-20 text-gray-500 space-x-5">
          <div className="w-1/4 border-[#0053a6] text-[#0053a6]  border-b-4 pb-5 text-center font-bold">
            기업개요
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/ceo">CEO</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/history">연혁</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/company/vision">비전</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-6xl mx-auto py-20 justify-around space-y-20">
        <div className="flex justify-center">
          <p className=" text-gray-900 font-medium text-5xl">
            “ ZETA = SOLUTION (ζ) ”
          </p>
        </div>
        <div className="flex flex-row justify-center space-x-2 items-center">
          <div className="flex  aspect-square h-64 rounded-full justify-center border-2 border-[#003873]">
            <div className=" text-3xl my-auto text-center">
              {t("OVERVIEW_DEVELOP")}
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#003873]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex bg-[#7fa8d5] aspect-square h-64 rounded-full justify-center">
            <div className="my-auto ">
              <div className="w-48">
                <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#003873]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex  aspect-square h-64 rounded-full justify-center border-2 border-[#003873]">
            <div className=" my-auto text-3xl text-center">
              {t("OVERVIEW_CONSULT")}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-lg font-medium space-y-1">
          <div className="flex justify-center">
            <p className="flex text-[#003873]">{t("ZETA_NAME_SIMPLE")}</p>&nbsp;
            {t("OVERVIEW_DESCRIPTION_1")}
          </div>
          <div className="flex justify-center">
            {t("OVERVIEW_DESCRIPTION_2")}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-6xl mx-auto py-20 justify-around space-y-20">
        <div className="px-10 text-gray-600 text-xl space-y-5">
          <div>{t("OVERVIEW_BODY_1")}</div>
          <div>{t("OVERVIEW_BODY_2")}</div>
        </div>
        <div className=" space-y-5">
          <div className="text-lg">LOGO COLOR</div>
          <div className="px-2 flex flex-row items-center">
            <div className="bg-[#0054a6] h-10 aspect-square rounded-lg"></div>
            <div className="flex flex-row space-x-5 px-5">
              <div className="font-bold">RGB</div>
              <div className=" tracking-wide">R 0 / G 84 / B 166 </div>
              <div className="font-bold">CMYK</div>
              <div className="tracking-wide">C 100 / M 49 / Y 0 / K 35</div>
            </div>
            <div className="bg-[#003873] h-10 aspect-square rounded-lg"></div>
            <div className="flex flex-row space-x-5 px-5">
              <div className="font-bold">RGB</div>
              <div className="tracking-wide">R 0 / G 55 / B 115 </div>
              <div className="font-bold">CMYK</div>
              <div className="tracking-wide">C 100 / M 52 / Y 0 / K 55</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "company"])),
  },
});

export default Overview;
