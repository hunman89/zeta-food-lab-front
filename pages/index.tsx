import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="py-80">
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
    </Layout>
  );
};

export default Home;
