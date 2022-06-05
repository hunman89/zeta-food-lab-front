import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import CompanySub from "components/companySub";

const Vision: NextPage = () => {
  const { t } = useTranslation("company");
  return (
    <Layout footer>
      <Head>
        <title>vision</title>
      </Head>
      <CompanySub position={3} />
      <div className="w-full max-w-6xl mx-auto py-40">
        <div className="flex justify-center font-medium text-3xl text-gray-500">
          <div className="animate-fadeInUp">
            {t("VISION_MAIN_01")}&nbsp;
            <span className="text-zetalight">{t("VISION_MAIN_02")}&nbsp;</span>
            {t("VISION_MAIN_03")}
          </div>
        </div>
        <div className="flex flex-row justify-around py-20 px-24">
          <div className="flex flex-col w-full">
            <div className="pl-5">
              <div className="text-2xl font-bold pb-3">
                {t("VISION_FIRST_HEADER")}
              </div>
              <div className="font-medium pb-8 h-20">
                {t("VISION_FIRST_SUB")}
              </div>
              <div className="text-zetalight font-bold text-2xl pb-1">
                2021~2025
              </div>
            </div>
            <div className=" border-b-4">
              <div className="bg-zetalight rounded-full w-4 aspect-square -ml-2 -mb-2.5"></div>
            </div>
            <div className="pl-5 font-medium pt-3">
              <div>{t("VISION_FIRST_CONTENTS_01")}</div>
              <div>{t("VISION_FIRST_CONTENTS_02")}</div>
              <div>{t("VISION_FIRST_CONTENTS_03")}</div>
              <div>{t("VISION_FIRST_CONTENTS_04")}</div>
              <div>{t("VISION_FIRST_CONTENTS_05")}</div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-2xl font-bold pb-3">
              {t("VISION_SECOND_HEADER")}
            </div>
            <div className="font-medium pb-8 h-20">
              {t("VISION_SECOND_SUB")}
            </div>
            <div className="text-zetalight font-bold text-2xl pb-1">
              2026~2028
            </div>
            <div className=" border-b-4">
              <div className="bg-zetalight rounded-full w-4 aspect-square -ml-2 -mb-2.5"></div>
            </div>
            <div className="pl-5 font-medium pt-3">
              <div>{t("VISION_SECOND_CONTENTS_01")}</div>
              <div>{t("VISION_SECOND_CONTENTS_02")}</div>
              <div>{t("VISION_SECOND_CONTENTS_03")}</div>
              <div>{t("VISION_SECOND_CONTENTS_04")}</div>
              <div>{t("VISION_SECOND_CONTENTS_05")}</div>
              <div>{t("VISION_SECOND_CONTENTS_06")}</div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-2xl font-bold pb-3">
              {t("VISION_THIRD_HEADER")}
            </div>
            <div className="font-medium pb-8 h-20">{t("VISION_THIRD_SUB")}</div>
            <div className="text-zetalight font-bold text-2xl pb-1">2029~</div>
            <div className=" border-b-4 flex flex-row justify-between">
              <div className="bg-zetalight rounded-full w-4 aspect-square -ml-2 -mb-2.5" />
              <div>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 font-bold -mb-2.5 -mr-1 fill-black"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </div>
            </div>
            <div className="pl-5 font-medium pt-3">
              <div>{t("VISION_THIRD_CONTENTS_01")}</div>
              <div>{t("VISION_THIRD_CONTENTS_02")}</div>
              <div>{t("VISION_THIRD_CONTENTS_03")}</div>
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

export default Vision;
