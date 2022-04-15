import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logos/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex fixed h-24 border-b-2 w-full bg-white">
        <div className="flex w-full max-w-5xl justify-between items-center mx-auto px-10">
          <Link href={"/"}>
            <a className="w-40">
              <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
            </a>
          </Link>
          <div className="group flex space-x-10 h-full items-center text-lg">
            <Link href={"/company/overview"}>
              <a>COMPANY</a>
            </Link>
            <Link href={"/research"}>
              <a>R&D</a>
            </Link>
            <Link href={"/business"}>
              <a>BUSINESS</a>
            </Link>
            <Link href={"/business"}>
              <a>NOTICE</a>
            </Link>
            <Link href={"/business"}>
              <a>RECRUIT</a>
            </Link>
            <Link href={"/contact"}>
              <a>CONTACT</a>
            </Link>
            <div className="group-hover:visible invisible fixed right-[10%] top-24 flex space-x-16 p-10 shadow-md border-none text-lg bg-white">
              <div className="flex flex-col space-y-3">
                <div className="font-bold">COMPANY</div>
                <Link href={"/company/overview"}>
                  <a>기업개요</a>
                </Link>
                <Link href={"/company/ceo"}>
                  <a>CEO</a>
                </Link>
                <Link href={"/business"}>
                  <a>연혁</a>
                </Link>
                <Link href={"/company/vision"}>
                  <a>비전</a>
                </Link>
                <Link href={"/business"}>
                  <a>오시는 길</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">R&D</div>
                <Link href={"/business"}>
                  <a>현장형 미생물 진단 센서</a>
                </Link>
                <Link href={"/business"}>
                  <a>녹차 발효 음료 개발</a>
                </Link>
                <Link href={"/business"}>
                  <a>국가 지원 사업</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">BUSINESS</div>
                <Link href={"/business"}>
                  <a>식품/바이오 컨설팅</a>
                </Link>
                <Link href={"/business"}>
                  <a>식품 온라인 판매</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">NOTICE</div>
                <Link href={"/business"}>
                  <a>회사소식</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">RECRUIT</div>
                <Link href={"/business"}>
                  <a>채용공고</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">CONTACT</div>
                <Link href={"/contact"}>
                  <a>온라인문의</a>
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
