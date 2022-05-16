import Layout from "../../components/layout";
import Head from "next/head";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const HaccpConsult: NextPage = () => {
  const { t } = useTranslation("business");
  return (
    <Layout footer>
      <Head>
        <title>Consult</title>
      </Head>
      <div className="flex py-64 bg-slate-500 justify-center">
        <div className="text-white font-bold text-5xl">
          식품 / 바이오 컨설팅
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-center text-2xl px-32 text-gray-500 space-x-5">
          <div className="w-1/4 border-[#0053a6] text-[#0053a6] border-b-4 pb-5 text-center font-bold">
            HACCP 컨설팅
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="#IPRs">지식재산권 컨설팅</a>
          </div>
          <div className="w-1/4 border-gray-300 border-b-4 pb-5 text-center font-bold">
            <a href="/business/market">식품 온라인 판매</a>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-3xl font-bold pb-40">
            {t("CONSULT_HACCP_HEAD")}
          </div>
          <div className="flex flex-col text-2xl font-medium text-center space-y-3">
            <div className="flex flex-row justify-center">
              <div className="text-zetalight">{t("ZETA_NAME")}</div>&nbsp;
              <div>{t("CONSULT_HACCP_BODY_1")}</div>
            </div>
            <div>{t("CONSULT_HACCP_BODY_2")}</div>
            <div>{t("CONSULT_HACCP_BODY_3")}</div>
            <div>{t("CONSULT_HACCP_BODY_4")}</div>
          </div>
          <div className="pt-14 px-20 text-xl text-center text-gray-500">
            <div>{t("CONSULT_HACCP_BODY_5")}</div>
            <div>{t("CONSULT_HACCP_BODY_6")}</div>
          </div>
          <div className="pt-40">
            <div className="text-6xl font-medium">
              {t("CONSULT_HACCP_BODY_2_HEAD")}
            </div>
            <div className="flex flex-row pt-20">
              <div className="flex flex-row space-x-3">
                <div className="flex flex-col w-80 border-8 items-center justify-center border-emerald-500 rounded-full aspect-square">
                  <div className="text-emerald-500 font-bold text-5xl">HA</div>
                  <div className="font-medium text-2xl pt-5">위해요소분석</div>
                  <div className="text-sm pt-4 text-gray-500 w-3/4 text-center">
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
                <div className="flex flex-col w-80 border-8 items-center justify-center border-indigo-700 rounded-full aspect-square">
                  <div className="text-indigo-700 font-bold text-5xl">CCP</div>
                  <div className="font-medium text-2xl pt-5">중요관리점</div>
                  <div className="text-sm pt-4 text-gray-500 w-3/4 text-center">
                    위해요소를 예방, 제어 또는 허용수준으로 감소시킬 수 있는
                    공정이나 단계를 중점관리
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-lg justify-between px-10 font-medium">
                <div>
                  HACCP이란 식품의 원재료부터 제조, 가공, 보존, 유통, 조리단계를
                  거쳐 최종 소비자가 섭취하기 전가지의 각 단계에서 발생할 우려가
                  있는 위해요소를 규명하고, 이를 중점적으로 관리하기 위한
                  중요관리점을 결정하여 자율적이며 체계적인 관리를 통해 식품의
                  안전성을 확보하기 위한 ‘위생관리체계’ 입니다.
                </div>
                <div>
                  HACCP은 전 세계적으로 가장 효과적이고 효율적인 식품 안전 관리
                  체계로 인정받고 있으며, 미국, 일본, 유럽연합, 국제기구(Codex,
                  WHO, FAO) 등에서도 모든 식품에 HACCP을 적용할 것을 적극
                  권장하고 있습니다.
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div>"위해요소분석"</div>
              <div>
                위해요소를 미리 예측하여 그 위해요인을 사전에 파악하는 것을 의미
              </div>
              <div className="pt-3">"중요관리점"</div>
              <div>반드시 필수적으로 관리하여야 할 항목</div>
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

export default HaccpConsult;
