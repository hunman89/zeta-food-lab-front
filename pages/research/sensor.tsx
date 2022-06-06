import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import switchable_linker from "../../public/images/RnD/switchable_linker.png";
import msk_1 from "../../public/images/RnD/msk/msk-1.png";
import msk_2 from "../../public/images/RnD/msk/msk-2.png";
import msk_3 from "../../public/images/RnD/msk/msk-3.png";
import msk_4 from "../../public/images/RnD/msk/msk-4.png";
import msk_5 from "../../public/images/RnD/msk/msk-5.png";
import msk_6 from "../../public/images/RnD/msk/msk-6.png";
import msk_7 from "../../public/images/RnD/msk/msk-7.png";
import food_pre_1 from "../../public/images/RnD/food/food_pre_1.png";
import food_pre_2 from "../../public/images/RnD/food/food_pre_2.png";
import food_pre_3 from "../../public/images/RnD/food/food_pre_3.png";
import food_pre_4 from "../../public/images/RnD/food/food_pre_4.png";
import food_pre_5 from "../../public/images/RnD/food/food_pre_5.png";
import food_pre_6 from "../../public/images/RnD/food/food_pre_6.png";
import food_pre_7 from "../../public/images/RnD/food/food_pre_7.png";
import food_pre_8 from "../../public/images/RnD/food/food_pre_8.png";
import food_pre_9 from "../../public/images/RnD/food/food_pre_9.png";
import food_pre_10 from "../../public/images/RnD/food/food_pre_10.png";
import kit_1 from "../../public/images/RnD/kit/kit-1.png";
import kit_2 from "../../public/images/RnD/kit/kit-2.png";
import kit_3 from "../../public/images/RnD/kit/kit-3.png";
import kit_4 from "../../public/images/RnD/kit/kit-4.png";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ResearchSub from "components/researchSub";
import { useTranslation } from "next-i18next";
import TextDecoration from "components/textDecoration";

const Sensor: NextPage = () => {
  const { t } = useTranslation("research");
  return (
    <Layout footer>
      <Head>
        <title>R&D</title>
      </Head>
      <ResearchSub position={0} />
      <div className="w-full max-w-6xl mx-auto py-20 divide-y-2">
        <div className="flex flex-col py-20">
          <div className="flex flex-row space-x-3 animate-fadeInUp">
            <TextDecoration />
            <div className="text-3xl font-bold pb-40 ">
              {t("SCRENNING_HEAD")}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/5 pt-3">
              <div className="flex bg-zetadark text-white items-center justify-center rounded-lg border-none h-20">
                {t("SCRENNING_BODY_1")}
              </div>
            </div>
            <div className="flex flex-col w-1/5">
              <div className="flex flex-col h-1/6">
                <div className="flex border-b-4 border-black h-1/2 justify-center items-end">
                  {t("SCRENNING_BODY_2")}
                </div>
                <div className="flex flex-row w-full h-1/2">
                  <div className="flex border-r-4 border-black w-1/3"></div>
                  <div className="flex w-2/3"></div>
                </div>
              </div>
              <div className="flex flex-row w-full h-12">
                <div className="flex border-r-4 border-black w-1/3"></div>
                <div className="flex w-2/3"></div>
              </div>
              <div className="flex flex-row w-full h-1/6">
                <div className="flex border-r-4 border-black w-1/3"></div>
                <div className="flex w-2/3 border-b-4 border-black justify-center items-end">
                  {t("SCRENNING_BODY_5")}
                </div>
              </div>
              <div className="flex flex-row w-full h-1/6">
                <div className="flex border-r-4 border-black w-1/3"></div>
                <div className="flex w-2/3"></div>
              </div>
              <div className="flex flex-row w-full h-1/6">
                <div className="flex border-r-4 border-black w-1/3"></div>
                <div className="flex w-2/3 border-b-4 border-black justify-center items-end">
                  {t("SCRENNING_BODY_9")}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-4 w-3/5">
              <div className="text-[0.5rem] text-center">
                J. Hahn, Journal of Food Science, 2017
              </div>
              <div className="text-[0.5rem] text-center">
                J. Hahn, Analyst, 2019
              </div>
              <div className="text-[0.5rem] text-center">
                E. Kim, Food Chemistry, 2021
              </div>
              <div className="flex h-20 bg-amber-500 text-white items-center justify-center text-center rounded-lg border-none px-8">
                {t("SCRENNING_BODY_3")}
              </div>
              <div className="flex h-20 bg-amber-500 text-white items-center justify-center text-center rounded-lg border-none px-8">
                {t("SCRENNING_BODY_4")}
              </div>
              <div className="flex h-20 bg-amber-500 text-white items-center justify-center text-center rounded-lg border-none px-8">
                Ara h 1 as a food allergen in cookies
              </div>
              <div className="h-40 items-center">
                <Image src={msk_1}></Image>
              </div>
              <div className="relative h-40">
                <Image layout="fill" src={msk_2}></Image>
              </div>
              <div className="h-40">
                <Image src={msk_3}></Image>
              </div>
              <div className="flex h-20 bg-sky-400 text-white items-center justify-center text-center rounded-lg border-none px-8">
                {t("SCRENNING_BODY_6")}
              </div>
              <div className="flex h-20 bg-sky-400 text-white items-center justify-center text-center rounded-lg border-none px-8">
                {t("SCRENNING_BODY_7")}
              </div>
              <div className="flex h-20 bg-sky-400 text-white items-center justify-center text-center rounded-lg border-none px-8 whitespace-pre-line">
                {t("SCRENNING_BODY_8")}
              </div>
              <div className="h-40">
                <Image src={msk_4}></Image>
              </div>
              <div className="h-40">
                <Image src={msk_5}></Image>
              </div>
              <div className="h-40">
                <Image src={msk_6}></Image>
              </div>
              <div className="flex flex-col">
                <div className="flex h-20 bg-emerald-400 text-white items-center justify-center rounded-lg border-none px-8">
                  {t("SCRENNING_BODY_10")}
                </div>
                <div className="h-40">
                  <Image src={msk_7}></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-40">
          <div className="flex flex-row space-x-3">
            <TextDecoration />
            <div className="text-3xl font-bold">{t("PRE_HEAD")}</div>
          </div>
          <div className="flex flex-col pt-40">
            <div className="flex flex-row justify-center space-x-20 ">
              <div className="flex w-52 border-amber-800 border-4 rounded-full aspect-square items-center justify-center">
                <div className="flex flex-col">
                  <div className="font-medium text-xl text-center">
                    {t("PRE_BODY_1")}
                  </div>
                  <div className="flex flex-row space-x-5 pt-5">
                    <div className="relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_1} />
                    </div>
                    <div className=" relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-52 border-amber-800 border-4 rounded-full aspect-square items-center justify-center">
                <div className="flex flex-col">
                  <div className="font-medium text-xl text-center">
                    {t("PRE_BODY_2")}
                  </div>
                  <div className="flex flex-row space-x-5 pt-5">
                    <div className="relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_3} />
                    </div>
                    <div className=" relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-52 border-amber-800 border-4 rounded-full aspect-square items-center justify-center">
                <div className="flex flex-col">
                  <div className="font-medium text-xl text-center">
                    {t("PRE_BODY_3")}
                  </div>
                  <div className="flex flex-row space-x-5 pt-5">
                    <div className="relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_5} />
                    </div>
                    <div className=" relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-52 border-amber-800 border-4 rounded-full aspect-square items-center justify-center">
                <div className="flex flex-col">
                  <div className="font-medium text-xl text-center">
                    {t("PRE_BODY_4")}
                  </div>
                  <div className="flex flex-row space-x-5 pt-5">
                    <div className="relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_7} />
                    </div>
                    <div className=" relative w-14 aspect-square">
                      <Image layout="fill" src={food_pre_8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-20">
              <div className="flex flex-row w-1/4 ">
                <div className="w-1/2"></div>
                <div className="w-1/2 border-l-2 border-b-2 border-amber-800"></div>
              </div>
              <div className="flex flex-row w-1/4">
                <div className="w-1/2 border-b-2 border-amber-800"></div>
                <div className="w-1/2 border-l-2 border-b-2 border-amber-800"></div>
              </div>
              <div className="flex flex-row w-1/4">
                <div className="w-1/2 border-b-2 border-amber-800"></div>
                <div className="w-1/2 border-l-2 border-b-2 border-amber-800"></div>
              </div>
              <div className="flex flex-row w-1/4">
                <div className="w-1/2 border-b-2 border-amber-800"></div>
                <div className="w-1/2 border-l-2 border-amber-800"></div>
              </div>
            </div>
            <div className="flex flex-row w-full h-10">
              <div className="w-1/2"></div>
              <div className="w-1/2 border-l-2 border-amber-800"></div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5 w-full">
              <div className="flex flex-row space-x-5 pt-5">
                <div className="relative w-14 aspect-square">
                  <Image layout="fill" src={food_pre_9} />
                </div>
                <div className=" relative w-14 aspect-square">
                  <Image layout="fill" src={food_pre_10} />
                </div>
              </div>
              <div className="text-xl font-medium">{t("PRE_BODY_5")}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-40 ">
          <div className="flex flex-row space-x-3 animate-fadeInUp">
            <TextDecoration />
            <span className="text-3xl font-bold text-gray-900 pb-40">
              {t("SENSOR_HEAD")}
            </span>
          </div>
          <Image className="-z-10" quality={50} src={switchable_linker}></Image>
        </div>
        <div className="flex flex-col py-40 ">
          <div className="flex flex-row space-x-3 animate-fadeInUp">
            <TextDecoration />
            <div className="text-3xl font-bold">{t("MSK_HEAD")}</div>
          </div>
          <div className="text-2xl font font-medium text-center pt-40 px-10">
            {t("MSK_BODY_1")}
          </div>
          <div className="flex flex-col pt-20 pb-1">
            <table className=" border-separate w-full">
              <thead>
                <tr>
                  <th className="border-4 border-gray-300 py-3">특허명</th>
                  <th className="border-4 border-gray-300">등록번호</th>
                  <th className="border-4 border-gray-300">등록일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-4 border-gray-300 py-3">
                    {t("MSK_BODY_2_1")}
                  </th>
                  <th className="border-4 border-gray-300">
                    {t("MSK_BODY_2_2")}
                  </th>
                  <th className="border-4 border-gray-300">
                    {t("MSK_BODY_2_3")}
                  </th>
                </tr>
                <tr>
                  <th className="border-4 border-gray-300 py-3">
                    {t("MSK_BODY_3_1")}
                  </th>
                  <th className="border-4 border-gray-300">
                    {t("MSK_BODY_3_2")}
                  </th>
                  <th className="border-4 border-gray-300">
                    {t("MSK_BODY_3_3")}
                  </th>
                </tr>
                <tr>
                  <th className="border-4 border-gray-300 py-3">
                    {t("MSK_BODY_4_1")}
                  </th>
                  <th className="border-4 border-gray-300">
                    {t("MSK_BODY_4_2")}
                  </th>
                  <th className="border-4 border-gray-300">
                    {t("MSK_BODY_4_3")}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row space-x-3">
            {[0, 0, 0, 0].map((_, index) => {
              return (
                <div key={index} className="border-4 border-gray-300 w-1/4 p-3">
                  <div className="py-10 text-center">
                    <div className="font-bold text-2xl text-zetalight">
                      {t(`MSK_${index + 1}_1`)}
                    </div>
                    <div className="">{t(`MSK_${index + 1}_2`)}</div>
                  </div>
                  <div className="w-full">
                    <Image
                      src={
                        index == 0
                          ? kit_1
                          : index == 1
                          ? kit_2
                          : index == 2
                          ? kit_3
                          : kit_4
                      }
                    />
                  </div>
                  <div className="text-center py-10">
                    {t(`MSK_${index + 1}_3`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "research"])),
  },
});

export default Sensor;
