import Footer from "components/footer";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Layout from "../components/layout";
import Intake from "../public/logos/INTAKE.png";
import Bioneer from "../public/logos/bioneer_logo.jpeg";
import Sanigen from "../public/logos/Sanigen.png";
import Okrotea from "../public/logos/Okrotea.png";
import Ipet from "../public/logos/Ipet.png";
import SNU from "../public/logos/SNU.png";
import Kgat from "../public/logos/Kgat.png";
import Hongik from "../public/logos/Hongik.png";
import DKU from "../public/logos/DKU.png";
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
          className="w-full h-screen snap-start snap-always bg-slate-500"
        >
          <div className="flex w-full flex-col py-80 max-w-6xl mx-auto space-y-4 text-5xl font-bold">
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
              <span className="flex text-white">SPECIALLIZED TECHNOLOGY.</span>
            </div>
            <div className="flex justify-end">
              <span className="transition flex text-zetalight animate-fadeInDown">
                "SOLUTION(ζ, zeta)"
              </span>
            </div>
          </div>
        </div>
        <div
          id="main2"
          className="w-full h-screen bg-slate-500 snap-start snap-always"
        >
          <div className=" pt-52 max-w-6xl mx-auto text-white">
            <div className="flex justify-center">
              <span className="flex text-6xl font-medium">R&D</span>
            </div>
            <div className="flex flex-col text-xl font-medium pt-10">
              <div className="flex justify-center">
                <span className="flex ">
                  ㈜제타푸드랩만의 비색반응을 이용한 바이오센서 기술 및 발효음료
                  특허를 기반으로
                </span>
              </div>
              <div className="flex justify-center">
                <span className="flex ">
                  미생물 진단, 음료 등 다양한 분야에서 핵심 제품을 개발하고
                  있습니다.
                </span>
              </div>
            </div>
            <div className="flex flex-row pt-20 space-x-10">
              <div className=" bg-blue-700 w-1/3 ease-in-out transition duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <a href="/research/sensor">
                  <div className="p-10 font-medium text-xl text-center">
                    현장용 미생물 진단 센서
                  </div>
                  <div className="px-10 pb-10 h-32">
                    향상된 비색반응, 향상된 민감도의 고감도 비색반응 기반
                    바이오센서를 바탕으로 식품제조 및 급식업 현장에서 진단이
                    가능한 제품을 개발합니다.
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
              <div className=" bg-blue-900 w-1/3 ease-in-out transition duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <a href="/research/green-tea">
                  <div className="p-10 font-medium text-xl text-center">
                    녹차 발효 음료 개발
                  </div>
                  <div className="px-10 pb-10 h-32">
                    녹차의 고장 하동에서 생산된 한국 녹차를 이용한 발효
                    음료로부터 탐색한 야생 효모를 이용하여 기능성을 가지는 녹차
                    발효 음료를 개발을 진행하고 있습니다.
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
              <div className=" bg-slate-700 w-1/3 ease-in-out transition duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <a href="/research/national-project">
                  <div className="p-10 font-medium text-xl text-center">
                    국가 지원 사업
                  </div>
                  <div className="px-10 pb-10 h-32">
                    뛰어난 기술을 기반으로 보유중인 특허를 통하여 국가 지원
                    사업에 선발, 이를 활용하여 식품을 활용한 다양한 연구에 참여
                    중입니다.
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
              <div className="pt-10 flex flex-col justify-start text-gray-700 text-xl font-medium space-y-4">
                <a
                  href="/business/consult"
                  className="group flex hover:animate-bounce"
                >
                  <div className=" align-middle pr-3 group-hover:text-[#0053a6]">
                    HACCP
                  </div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/business/consult#IPRs"
                  className="group flex hover:animate-bounce"
                >
                  <div className=" align-middle pr-3  group-hover:text-[#0053a6]">
                    지식재산권
                  </div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
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
        <div id="main4" className="w-full h-full snap-start bg-white">
          <div className="flex flex-col pt-24 max-w-6xl mx-auto">
            <div className="flex justify-center pt-10">
              <span className="flex text-5xl font-bold ">PARTNERS</span>
            </div>
            <div className="flex flex-row justify-center pt-10 pb-10">
              <span className="flex text-3xl font-medium text-blue-600">
                ZETA FOOD LAB
              </span>
              <span className="flex text-3xl font-medium">
                은 우수한 식품 및 바이오 기업들과 협력합니다.
              </span>
            </div>
            <div className="grid grid-cols-3 gap-x-20 gap-y-10 p-10 pb-20">
              <div className="grid w-full h-14 my-auto">
                <Image
                  objectFit="contain"
                  src={Intake}
                  alt="Intake Logo"
                  layout="responsive"
                ></Image>
              </div>
              <div className="grid w-full h-14 my-auto">
                <Image
                  objectFit="contain"
                  layout="responsive"
                  src={Bioneer}
                  alt="Bioneer Logo"
                ></Image>
              </div>
              <div className="grid w-full h-14 my-auto">
                <Image
                  objectFit="contain"
                  layout="responsive"
                  src={Sanigen}
                  alt="Sanigen Logo"
                ></Image>
              </div>
              <div className="grid w-full h-20 my-auto">
                <Image
                  objectFit="contain"
                  layout="responsive"
                  src={Okrotea}
                  alt="Okrotea Logo"
                ></Image>
              </div>
              <div className="grid w-full h-20 my-auto">
                <Image
                  objectFit="contain"
                  layout="responsive"
                  src={Ipet}
                  alt="Ipet Logo"
                ></Image>
              </div>
              <div className="grid w-full h-20 my-auto">
                <Image
                  objectFit="contain"
                  layout="responsive"
                  src={SNU}
                  alt="SNU Logo"
                ></Image>
              </div>
              <div className="grid w-full h-12 my-auto">
                <Image
                  layout="responsive"
                  objectFit="contain"
                  src={Kgat}
                  alt="Kgat Logo"
                ></Image>
              </div>
              <div className="grid w-full h-20 my-auto">
                <Image
                  layout="responsive"
                  objectFit="contain"
                  src={Hongik}
                  alt="Hongik Logo"
                ></Image>
              </div>
              <div className="grid w-full h-14 my-auto">
                <Image
                  objectFit="contain"
                  layout="responsive"
                  src={DKU}
                  alt="DKU"
                ></Image>
              </div>
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
