import { NextPage } from "next";
import Head from "next/head";
import IntroImage from "../components/introImage";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <IntroImage />
    </Layout>
  );
};

export default Home;
