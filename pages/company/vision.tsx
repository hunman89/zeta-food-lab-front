import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import CompanySub from "components/companySub";
import vision_kr from "../../public/images/vision_kr.jpg";
import vision_en from "../../public/images/vision_en.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

const Vision: NextPage = () => {
  const { t } = useTranslation("company");
  const { locale } = useRouter();

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
        <div className="flex pt-20 justify-center">
          <Image src={locale === "kr" ? vision_kr : vision_en}></Image>
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
