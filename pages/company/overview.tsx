import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Logo from "../../public/logos/logo.png";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import CompanySub from "components/companySub";

const Overview: NextPage = () => {
  const { t } = useTranslation("company");
  return (
    <Layout footer>
      <Head>
        <title>overview</title>
      </Head>
      <CompanySub position={0} />
      <div className="flex flex-col w-full max-w-6xl mx-auto py-40 justify-around space-y-20">
        <div className="flex justify-center">
          <p className=" text-gray-900 font-medium text-5xl animate-fadeInUp">
            “ ZETA = SOLUTION (ζ) ”
          </p>
        </div>
        <div className="flex flex-col text-3xl font-medium space-y-1 animate-fadeInUp">
          <div className="flex justify-center">
            <p className="flex text-[#003873]">{t("ZETA_NAME_SIMPLE")}</p>&nbsp;
            {t("OVERVIEW_DESCRIPTION_1")}
          </div>
          <div className="flex justify-center">
            {t("OVERVIEW_DESCRIPTION_2")}
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-2 items-center pt-20 animate-fadeInUp">
          <div className="flex flex-col  aspect-square h-80 rounded-full justify-center border-2 border-zetadark bg-slate-100">
            <div className="flex flex-col mx-auto my-auto space-y-5">
              <div className="flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-zetalight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div className="text-3xl text-center">
                {t("OVERVIEW_DEVELOP")}
              </div>
              <div className="flex flex-col">
                <div>미생물신속스크리닝</div>
                <div>미생물진단키트</div>
                <div>발효음료개발</div>
              </div>
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
          <div className="flex aspect-square h-80 rounded-full justify-center border-2 border-zetadark">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center w-60 space-y-2">
                <div className=" text-center">
                  식품 혁신 솔루션을 제공하는 기업
                </div>
                <div className="flex w-48 mx-auto">
                  <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
                </div>
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
          <div className="flex flex-col  aspect-square h-80 rounded-full justify-center border-2 border-zetadark bg-slate-100">
            <div className="flex flex-col mx-auto my-auto space-y-5">
              <div className="flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-zetalight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div className="text-3xl text-center">
                {t("OVERVIEW_CONSULT")}
              </div>
              <div className="flex flex-col">
                <div>HACCP 컨설팅</div>
                <div>지식 재산권 컨설팅</div>
              </div>
            </div>
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
