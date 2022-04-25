import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logos/logo.png";

const Header = () => {
  return (
    <div>
      <div className="group flex fixed h-20 w-full bg-white">
        <div className="flex w-full justify-between justify-items-center items-center mx-auto px-10">
          <div className="w-40">
            <Link href={"/"}>
              <a>
                <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
              </a>
            </Link>
          </div>
          <div className=" flex space-x-16 h-full items-center text-lg font-bold">
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/company/overview"}>
                <a>COMPANY</a>
              </Link>
            </div>
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/research/sensor"}>
                <a>R&D</a>
              </Link>
            </div>
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/business/consult"}>
                <a>BUSINESS</a>
              </Link>
            </div>
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/contact"}>
                <a>CONTACT US</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row space-x-2 w-40 justify-center">
            <div>KOR</div>
            <div>|</div>
            <div>ENG</div>
          </div>
        </div>
        <div className="transition-all group-hover:visible invisible right-0 fixed w-full top-20 px-10 pb-64 border-none bg-gradient-to-b from-white to-transparent">
          <div className="flex justify-center space-x-16 text-md ">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/company/overview"}>
                  <a>기업개요</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/company/ceo"}>
                  <a>CEO</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/company/history"}>
                  <a>연혁</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/company/vision"}>
                  <a>비전</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/research/sensor"}>
                  <a>현장형 미생물 진단 센서</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/research/green-tea"}>
                  <a>녹차 발효 음료 개발</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/research/national-project"}>
                  <a>국가 지원 사업</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/business/consult"}>
                  <a>식품/바이오 컨설팅</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/business/market"}>
                  <a>식품 온라인 판매</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/contact"}>
                  <a>온라인문의</a>
                </Link>
              </div>{" "}
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/business"}>
                  <a>회사소식</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/business"}>
                  <a>채용공고</a>
                </Link>
              </div>
              <div className="flex justify-center w-40 hover:text-[#0053a6]">
                <Link href={"/contact/location"}>
                  <a>오시는 길</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
