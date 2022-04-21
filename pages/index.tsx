import Footer from "components/footer";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import Intake from "../public/logos/INTAKE_CI_Horizontal_Black.png";
import Bioneer from "../public/logos/bioneer_logo.jpeg";
import Sanigen from "../public/logos/Sanigen.png";
import Okrotea from "../public/logos/Okrotea.png";
import Ipet from "../public/logos/Ipet.png";
import SNU from "../public/logos/SNU.png";
import Kstartup from "../public/logos/k_startup_logo.png";
import Kgat from "../public/logos/Kgat.png";
import Hongik from "../public/logos/Hongik.png";
import DKU from "../public/logos/DKU.png";
import bacteria from "../public/icons/bacteria.png";
import liquor from "../public/icons/liquor.png";
import hand from "../public/icons/hand.png";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="snap-y snap-mandatory transition h-screen overflow-scroll scrollbar-hide">
        <div className="w-full h-screen snap-start bg-slate-300">
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
              <span className="flex text-[#0053a6] textDown">
                "SOLUTION(ζ, zeta)"
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-slate-300 snap-start">
          <div className="py-40 max-w-6xl mx-auto text-white">
            <div className="flex justify-center">
              <span className="flex text-6xl font-medium">R&D</span>
            </div>
            <div className="flex flex-col text-xl font-medium pt-5">
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
            <div className="flex flex-row pt-14 space-x-8">
              <div className=" bg-blue-700 w-1/3 ease-in-out transition duration-300 opacity-50 hover:opacity-100 hover:scale-110">
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
              <div className=" bg-sky-700 w-1/3 ease-in-out transition duration-300 opacity-50 hover:opacity-100 hover:scale-110">
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
              <div className=" bg-slate-700 w-1/3 ease-in-out transition duration-300 opacity-50 hover:opacity-100 hover:scale-110">
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
        <div className="w-full h-full snap-end">
          <div className="flex flex-col pt-24 max-w-6xl mx-auto">
            <div className="flex flex-row justify-center pt-20 pb-20">
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
                  objectFit="contain"
                  layout="responsive"
                  src={Kstartup}
                  alt="Kstartup Logo"
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
          <Footer></Footer>
        </div>
      </div>
      <style jsx>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translate3d(0, -300%, 0);
            }
            to {
              opacity: 1;
              transform: translateZ(0);
            }
          }
          .textDown {
            animation: fadeInDown 1s;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
