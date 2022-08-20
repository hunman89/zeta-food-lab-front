import Footer from "components/footer";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Layout from "../components/layout";
import intake from "../public/logos/intake.jpg";
import bioneer from "../public/logos/bioneer.png";
import sanigen from "../public/logos/sanigen.jpg";
import okrotea from "../public/logos/okrotea.png";
import ipet from "../public/logos/ipet.png";
import snu from "../public/logos/snu.jpg";
import koat from "../public/logos/koat.png";
import hongik from "../public/logos/hongik.jpg";
import dku from "../public/logos/dku.jpg";
import bacteria from "../public/icons/bacteria.png";
import liquor from "../public/icons/liquor.png";
import hand from "../public/icons/hand.png";
import business from "../public/images/business.jpg";
import { useEffect, useState } from "react";
import { cls } from "utils/utils";

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState<string | undefined>(
    "main1"
  );
  const getPosition = () => {
    if (scrollPosition != document.elementFromPoint(50, 100)?.id) {
      setScrollPosition(document.elementFromPoint(50, 100)?.id);
    }
  };
  return (
    <Layout>
      <div
        id="main"
        onScroll={getPosition}
        className="snap-y snap-mandatory scroll-smooth transition-all h-screen overflow-scroll scrollbar-hide"
      >
        <div
          id="main1"
          className="w-full h-screen snap-start snap-always"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/images/bio.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex w-full flex-col py-80 max-w-6xl mx-auto space-y-4 text-5xl font-black">
            <div className="flex justify-end">
              <span className="flex text-white ">WE PROVIDE</span>
            </div>
            <div className="flex justify-end">
              <span className="flex text-white">INNOVATIVE SOLUTIONS</span>
            </div>
            <div className="flex justify-end">
              <span className="flex text-white">THROUGH OUR</span>
            </div>
            <div className="flex justify-end">
              <span className="flex text-white">SPECIALIZED TECHNOLOGY</span>
            </div>
            <div className="flex justify-end">
              <span
                className="flex text-sky-400"
                style={{ textShadow: "1px 1px 2px gray" }}
              >
                "SOLUTION(ζ, zeta)"
              </span>
            </div>
          </div>
        </div>
        <div
          id="main2"
          className="w-full h-screen snap-start snap-always"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("/images/bio2.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" pt-52 max-w-6xl mx-auto text-white">
            <div className="flex justify-center">
              <span className="flex text-6xl font-medium">R&D</span>
            </div>
            <div className="flex flex-col text-xl font-medium pt-10">
              <div className="flex justify-center">
                <span className="flex ">
                  ㈜제타푸드랩만의 독자적 기술인 비색반응을 이용한 바이오센서
                  기술 및 발효음료 특허를 기반으로
                </span>
              </div>
              <div className="flex justify-center">
                <span className="flex ">
                  미생물 진단, 음료 등 다양한 분야에서 핵심 제품을 개발하고
                  있습니다.
                </span>
              </div>
            </div>
            <div className="flex flex-row pt-20 space-x-10 justify-center">
              <div className=" bg-zetalight w-1/4 ease-in-out transition duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <a href="/research/sensor">
                  <div className="p-10 font-medium text-xl text-center">
                    현장용 미생물 진단 센서
                  </div>
                  <div className="px-10 pb-10 h-32 text-justify">
                    고감도의 비색반응과 향상된 민감도 기반 기술인 바이오 진단
                    센서로 식품제조 및 급식업 현장에서 필요한 제품을 개발하고
                    있습니다.
                  </div>
                  <div className="flex justify-end p-3">
                    <div className="w-24">
                      <Image
                        objectFit="contain"
                        src={bacteria}
                        alt="bacteria"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </a>
              </div>
              <div className=" bg-zetadark w-1/4 ease-in-out transition duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <a href="/research/green-tea">
                  <div className="p-10 font-medium text-xl text-center">
                    녹차 발효 음료 개발
                  </div>
                  <div className="px-10 pb-10 h-32 text-justify">
                    녹차의 고장 하동에서 생산된 야생녹차를 이용하여 다양한 녹차
                    발효 음료 개발을 진행하고 있습니다.
                  </div>
                  <div className="flex justify-end p-3">
                    <div className="w-24">
                      <Image
                        objectFit="contain"
                        src={liquor}
                        alt="liquor"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </a>
              </div>
              <div className=" bg-gray-700 w-1/4 ease-in-out transition duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <a href="/research/national-project">
                  <div className="p-10 font-medium text-xl text-center">
                    국가 지원 사업
                  </div>
                  <div className="px-10 pb-10 h-32 text-justify">
                    뛰어난 기술과 보유중인 특허를 기반으로 여러 국가 지원 사업에
                    참여, 식품 및 음료 등 다양한 연구를 진행하고 있습니다.
                  </div>
                  <div className="flex justify-end p-3">
                    <div className="w-24">
                      <Image
                        objectFit="contain"
                        src={hand}
                        alt="hand"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="main3" className="w-full h-screen snap-start snap-always">
          <div id="main3" className="flex w-full h-full flex-row">
            <div
              id="main3"
              className="w-2/5 flex flex-col h-full place-content-center pl-40"
            >
              <div className="flex justify-start ">
                <span className="flex text-6xl font-bold ">BUSINESS</span>
              </div>
              <div className="flex flex-col justify-start text-lg">
                <span className="flex pt-10">
                  ㈜제타푸드랩은 식품업체의 기술적 문제점을 해결하고자
                </span>
                <span className="flex pt-3">
                  다양한 기술 컨설팅을 제공합니다.
                </span>
              </div>
              <div className="pt-10 flex flex-col justify-start text-gray-700 text-2xl font-semibold space-y-4">
                <div className="flex">
                  <a
                    href="/business/consult"
                    className="group flex flex-row justify-start items-center"
                  >
                    <div className=" align-middle pr-3 group-hover:text-[#0053a6]">
                      HACCP
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 bg-emerald-600 group-hover:bg-emerald-500 text-white rounded-sm"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="/business/consult#IPRs"
                    className="group flex flex-row justify-start items-center"
                  >
                    <div className=" align-middle pr-3  group-hover:text-[#0053a6]">
                      지식재산권
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 bg-emerald-600 group-hover:bg-emerald-500 text-white rounded-sm"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div id="main3" className=" relative w-3/5 h-full -z-10">
              <Image
                objectFit="cover"
                objectPosition="center"
                src={business}
                alt="business"
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
        <div id="main4" className="w-full snap-start snap-normal bg-white">
          <div className="flex flex-col pt-24 max-w-6xl mx-auto">
            <div className="flex justify-center pt-10">
              <span className="flex text-6xl font-bold ">PARTNERS</span>
            </div>
            <div className="flex flex-row justify-center pt-5 pb-5">
              <span className="flex text-2xl font-medium text-blue-600">
                (주)제타푸드랩
              </span>
              <span className="flex text-2xl font-medium">
                은 우수한 식품 및 바이오 기업들과 협력합니다.
              </span>
            </div>
            <div className="grid grid-cols-3 gap-x-20 gap-y-10 p-10 pb-20">
              {[
                bioneer,
                intake,
                okrotea,
                sanigen,
                ipet,
                koat,
                snu,
                dku,
                hongik,
              ].map((name, index) => {
                return (
                  <div className="grid w-full h-28 my-auto" key={index}>
                    <Image
                      objectFit="contain"
                      src={name}
                      alt={`${name} logo`}
                      layout="responsive"
                    ></Image>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="fixed top-1/2 left-20 ">
        <div className="flex flex-col justify-center items-center p-3 space-y-8 -mt-14">
          <a href="#main1">
            <div
              className={cls(
                "w-2 aspect-square rounded-full  ",
                scrollPosition === "main1"
                  ? "bg-zetalight ring-2 ring-offset-4 ring-offset-slate-500"
                  : " bg-slate-300"
              )}
            ></div>
          </a>
          <a href="#main2">
            <div
              className={cls(
                "w-2 aspect-square rounded-full ",
                scrollPosition === "main2"
                  ? "bg-zetalight ring-2 ring-offset-4 ring-offset-slate-500"
                  : "bg-slate-300"
              )}
            ></div>
          </a>
          <a href="#main3">
            <div
              className={cls(
                "w-2 aspect-square rounded-full ",
                scrollPosition === "main3"
                  ? "bg-zetalight ring-2 ring-offset-4 ring-offset-white"
                  : "bg-slate-300"
              )}
            ></div>
          </a>
          <a href="#main4">
            <div
              className={cls(
                "w-2 aspect-square rounded-full ",
                scrollPosition === "main4"
                  ? "bg-zetalight ring-2 ring-offset-4 ring-offset-white"
                  : "bg-slate-300"
              )}
            ></div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
