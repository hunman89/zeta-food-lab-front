import Layout from "../../components/layout";
import Head from "next/head";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BusinessSub from "components/businessSub";
import Image from "next/image";
import consult from "../../public/images/consult_image.jpg";
import TextDecoration from "components/textDecoration";
import Logo from "../../public/logos/logo.png";

const Consult: NextPage = () => {
  const { t } = useTranslation("business");
  return (
    <Layout footer>
      <Head>
        <title>Consult</title>
      </Head>
      <BusinessSub position={0} />
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex flex-col">
          <div className="text-3xl font-bold py-20">
            <div className="animate-fadeInUp underline decoration-sky-500 decoration-8 underline-offset-8">
              {t("CONSULT_HACCP_HEAD")}
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-10">
            <div className="flex flex-col w-1/2 text-2xl font-medium space-y-10">
              <div className="animate-fadeInUp">
                <div>{t("CONSULT_HACCP_BODY_1")}</div>
              </div>
              <div className="animate-fadeInUp">
                {t("CONSULT_HACCP_BODY_2")}
              </div>
              <div className="animate-fadeInUp">
                {t("CONSULT_HACCP_BODY_3")}
              </div>
              <div>
                <div className=" py-2 underline">
                  {t("CONSULT_HACCP_TABLE_1")}
                </div>
                <ul className="list-disc text-xl text-slate-700">
                  <li className="py-1">{t("CONSULT_HACCP_TABLE_2")}</li>
                  <li className="py-1">{t("CONSULT_HACCP_TABLE_3")}</li>
                  <li className="py-1">{t("CONSULT_HACCP_TABLE_4")}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-1/2 items-center drop-shadow-2xl">
              <Image src={consult} className="rounded-2xl"></Image>
            </div>
          </div>
          <div className="pt-40">
            <div className="flex flex-row space-x-2 text-4xl font-bold">
              <TextDecoration />
              <div>{t("CONSULT_HACCP_BODY_2_HEAD")}</div>
            </div>
            <div className="flex flex-col pt-20">
              <div className="flex flex-row justify-center space-x-3">
                <div className="flex flex-col w-96 border-[14px] items-center justify-center border-emerald-500 rounded-full aspect-square">
                  <div className="text-emerald-500 font-bold text-7xl">HA</div>
                  <div className="font-bold text-3xl pt-5">
                    {t("CONSULT_HACCP_BODY_2_HA_1")}
                  </div>
                  <div className="text-xl pt-4 text-gray-500 w-3/4 text-center">
                    {t("CONSULT_HACCP_BODY_2_HA_2")}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col w-96 border-[14px] items-center justify-center border-indigo-700 rounded-full aspect-square">
                  <div className="text-indigo-700 font-bold text-7xl">CCP</div>
                  <div className="font-medium text-3xl pt-5">
                    {t("CONSULT_HACCP_BODY_2_CCP_1")}
                  </div>
                  <div className="text-xl pt-4 text-gray-500 w-3/4 text-center">
                    {t("CONSULT_HACCP_BODY_2_CCP_2")}
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-xl justify-between px-10 font-medium pt-10 space-y-10">
                <div>{t("CONSULT_HACCP_BODY_2_1")}</div>
                <div>{t("CONSULT_HACCP_BODY_2_2")}</div>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="py-20">
              <a id="IPRs">
                <div className="flex flex-row space-x-2 text-4xl font-bold">
                  <TextDecoration />
                  <div>{t("CONSULT_IPRS_HEAD")}</div>
                </div>
              </a>
            </div>
            <div className=" text-2xl font-medium text-center">
              <div className="flex flex-row justify-center">
                <div className="text-zetalight">{t("ZETA_NAME")}</div>&nbsp;
                <div>{t("CONSULT_IPRS_BODY_1")}</div>
              </div>
              <div>{t("CONSULT_IPRS_BODY_2")}</div>
            </div>
          </div>
          <div className="pb-40">
            <div className="flex flex-row justify-center space-x-2 items-center pt-20">
              <div className="flex flex-col  aspect-square h-80 rounded-full justify-center border-none ring-4 ring-emerald-500 ring-offset-8 bg-emerald-500">
                <div className="flex flex-col mx-auto my-auto space-y-5 text-white">
                  <div className="text-3xl text-center">{t("CONSULT_1")}</div>
                  <div className="flex flex-col">
                    <div> {t("CONSULT_2")}</div>
                    <div> {t("CONSULT_3")}</div>
                  </div>
                </div>
              </div>
              <div className="flex pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="flex aspect-square h-80 rounded-full justify-center borde-none bg-slate-300">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center w-60 space-y-2">
                    <div className=" text-center text-sm">{t("CONSULT_4")}</div>
                    <div className="flex w-56 mx-auto">
                      <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="flex flex-col  aspect-square h-80 rounded-full justify-center border-none ring-sky-500 ring-4 ring-offset-8 bg-sky-500">
                <div className="flex flex-col mx-auto my-auto space-y-5">
                  <div className="text-3xl text-white text-center">
                    {t("CONSULT_5")}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row pt-20 justify-center font-bold text-3xl">
              <div> {t("CONSULT_6")}</div>&nbsp;
              <div className="text-zetalight">{t("ZETA_NAME")}</div>&nbsp;
              <div> {t("CONSULT_7")}</div>
            </div>
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

export default Consult;
