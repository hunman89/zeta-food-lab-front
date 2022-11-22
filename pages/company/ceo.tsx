import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import sign from "../../public/images/sign.png";
import ceo_en from "../../public/images/ceo_en.png";
import ceo_kr from "../../public/images/ceo_kr.png";
import CompanySub from "components/companySub";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Ceo: NextPage = () => {
  const { t } = useTranslation("company");
  const { locale } = useRouter();
  return (
    <Layout footer>
      <Head>
        <title>CEO</title>
      </Head>
      <CompanySub position={1} />
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex flex-col justify-around py-20 ">
          <div className="text-2xl font-bold text-center animate-fadeInUp">
            {t("CEO_1")}
            <div>{t("CEO_2")}</div>
          </div>
          <div className="flex flex-row space-x-10 pt-20 px-10">
            <div className=" w-1/2 aspect-square ">
              <Image
                objectFit="contain"
                layout="responsive"
                className="rounded-xl"
                src={locale === "kr" ? ceo_kr : ceo_en}
              />
            </div>
            <div className=" w-1/2 flex flex-col justify-around">
              <div className="text-lg font-bold text-zetalight">
                {t("CEO_3")}
              </div>
              <div className="text-justify">&nbsp;{t("CEO_4")}</div>
              <div className="text-justify">&nbsp;{t("CEO_5")}</div>
              <div className="text-justify">&nbsp;{t("CEO_6")}</div>
              <div className="text-justify">&nbsp;{t("CEO_7")}</div>
              <div className="text-justify">&nbsp;{t("CEO_8")}</div>
              <div className="text-justify">{t("CEO_9")}</div>
              <div className="flex flex-row font-bold justify-between">
                <div className="flex flex-row items-center ">
                  <div className="">{t("CEO_10")}</div>
                  &nbsp;&nbsp;
                  <div className="text-xl">{t("CEO_11")}</div>
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
    ...(await serverSideTranslations(locale, ["common", "company"])),
  },
});

export default Ceo;
