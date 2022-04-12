import { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="snap-y snap-mandatory transition h-screen overflow-scroll scrollbar-hide">
        <div className="w-full h-screen snap-start">
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
        <div className="w-full h-screen bg-slate-500 snap-start">
          <div className="py-80">page2</div>
        </div>
        <div className="w-full h-screen snap-start">
          <div className="py-80 ">page3</div>
        </div>
        <div className="w-full h-screen bg-slate-500 snap-start">
          <div className="py-80 ">page4</div>
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
