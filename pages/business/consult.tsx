import Layout from "../../components/layout";
import Head from "next/head";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BusinessSub from "components/businessSub";

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
            <div className="animate-fadeInUp">{t("CONSULT_HACCP_HEAD")}</div>
          </div>
          <div className="flex flex-col text-2xl font-medium text-center space-y-3">
            <div className="flex flex-row justify-center animate-fadeInUp">
              <div className="text-zetalight ">{t("ZETA_NAME")}</div>&nbsp;
              <div>{t("CONSULT_HACCP_BODY_1")}</div>
            </div>
            <div className="animate-fadeInUp">{t("CONSULT_HACCP_BODY_2")}</div>
            <div className="animate-fadeInUp">{t("CONSULT_HACCP_BODY_3")}</div>
            <div className="animate-fadeInUp">{t("CONSULT_HACCP_BODY_4")}</div>
          </div>
          <div className="pt-14 px-20 text-xl text-center text-gray-500">
            <div>{t("CONSULT_HACCP_BODY_5")}</div>
            <div>{t("CONSULT_HACCP_BODY_6")}</div>
          </div>
          <div className="pt-40">
            <div className="text-6xl font-medium">
              {t("CONSULT_HACCP_BODY_2_HEAD")}
            </div>
            <div className="flex flex-col pt-20">
              <div className="flex flex-row justify-center space-x-3">
                <div className="flex flex-col w-96 border-[14px] items-center justify-center border-emerald-500 rounded-full aspect-square">
                  <div className="text-emerald-500 font-bold text-7xl">HA</div>
                  <div className="font-bold text-3xl pt-5">위해요소분석</div>
                  <div className="text-xl pt-4 text-gray-500 w-3/4 text-center">
                    원료와 공정에서 발생가능한 병원성 미생물 등 생물학적,
                    화학적, 물리적, 위해요소 분석
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
                  <div className="font-medium text-3xl pt-5">중요관리점</div>
                  <div className="text-xl pt-4 text-gray-500 w-3/4 text-center">
                    위해요소를 예방, 제어 또는 허용수준으로 감소시킬 수 있는
                    공정이나 단계를 중점관리
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-xl justify-between px-10 font-medium pt-10 space-y-10">
                <div>{t("CONSULT_HACCP_BODY_2_1")}</div>
                <div>{t("CONSULT_HACCP_BODY_2_2")}</div>
              </div>
            </div>
          </div>
          <div className="pt-40">
            <div className="flex flex-row justify-center">
              <div className="flex justify-center items-center w-80 aspect-square rounded-full bg-pink-300 border-none -mr-5">
                <div className="text-white text-4xl font-medium">
                  HACCP 인증
                </div>
              </div>
              <div className=" flex justify-center items-center w-80 aspect-square rounded-full bg-indigo-300 border-none -ml-5">
                <div className="text-white text-4xl font-medium">사후관리</div>
              </div>
            </div>
            <div className="flex flex-row pt-14 justify-center font-medium text-2xl">
              <div>{t("CONSULT_HACCP_BODY_3_1")}</div>&nbsp;
              <div className="text-zetalight">{t("ZETA_NAME")}</div>&nbsp;
              <div>{t("CONSULT_HACCP_BODY_3_2")}</div>
            </div>
          </div>
          <div className="pb-40">
            <div className="py-40">
              <a id="IPRs" className="text-3xl font-bold">
                {t("CONSULT_IPRS_HEAD")}
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
