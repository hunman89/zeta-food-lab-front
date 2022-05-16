import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import contact from "../../public/images/contact.jpg";
import ContactSub from "components/contactSub";

const Contact: NextPage = () => {
  const { t } = useTranslation("contact");
  return (
    <Layout footer>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactSub position={0} />
      <div className="w-full max-w-6xl mx-auto py-32">
        <div className="flex flex-row space-x-5">
          <div className="w-96 items-center">
            <Image className=" rounded-full object-cover" src={contact}></Image>
          </div>
          <div className="flex flex-col justify-center px-16">
            <div className="text-xl text-gray-700">{t("CONTACT_BODY")}</div>
            <div className="py-4 text-gray-900 font-bold">
              zetafoodlab@gmail.com
            </div>
            <div>
              <a
                href="mailto:zetafoodlab@gmail.com"
                className=" border-none p-2 bg-zetalight text-white"
              >
                {t("CONTACT_BUTTON")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "common"])),
  },
});

export default Contact;
