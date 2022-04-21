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

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="snap-y snap-mandatory transition h-screen overflow-scroll scrollbar-hide">
        <div className="w-full h-screen snap-start bg-slate-300">
          <div className="flex w-full flex-col py-80 max-w-6xl mx-auto space-y-4 text-5xl font-bold">
            <div className="flex justify-end">
              <span className="flex text-white">WE PROVIDE</span>
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
              <span className="flex text-[#0053a6]">"SOLUTION(ζ, zeta)"</span>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-blue-600 snap-start">
          <div className="py-80 max-w-6xl mx-auto">
            <span className="flex text-2xl font-medium">
              인간의 건강하고 행복한 삶을 위한
            </span>
            <span className="flex pt-5 text-5xl font-bold">
              마이크로바이옴 파마바이오틱스 치료제
            </span>
            <span className="flex pt-10 text-2xl font-medium">
              장환경을 재현하는 독자적인 특허기술로
            </span>
            <span className="flex pt-5 text-5xl font-bold">
              개인 맞춤형 헬스케어 솔루션 제공
            </span>
            <span className="flex pt-10 text-2xl font-medium">
              인류의 건강 증진에 기여하기 위해
            </span>
            <span className="flex pt-5 text-5xl font-bold">
              마이크로바이옴 빅데이터 구축
            </span>
          </div>
        </div>
        <div className="w-full h-full snap-start">
          <div className="flex flex-col pt-24 max-w-6xl mx-auto">
            <div className="flex flex-row justify-center pt-40 pb-20">
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
          span {
            animation: fadeInDown 1s;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
