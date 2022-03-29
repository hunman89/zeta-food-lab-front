import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";

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
          <div className="group flex space-x-16 h-full items-center text-lg">
            <Link href={"/business"}>
              <a>기업소개</a>
            </Link>
            <Link href={"/business"}>
              <a>연구소개</a>
            </Link>
            <Link href={"/business"}>
              <a>사업소개</a>
            </Link>
            <Link href={"/business"}>
              <a>투자정보</a>
            </Link>
            <Link href={"/business"}>
              <a>홍보자료</a>
            </Link>
            <div className="group-hover:visible invisible fixed right-[10%] top-24 flex space-x-16 p-10 shadow-md border-none text-lg bg-white">
              <div className="flex flex-col space-y-3">
                <div className="font-bold">기업소개</div>
                <Link href={"/business"}>
                  <a>CEO/CTO</a>
                </Link>
                <Link href={"/business"}>
                  <a>비전</a>
                </Link>
                <Link href={"/business"}>
                  <a>회사연혁</a>
                </Link>
                <Link href={"/business"}>
                  <a>오시는길</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">연구소개</div>
                <Link href={"/business"}>
                  <a>미생물연구</a>
                </Link>
                <Link href={"/business"}>
                  <a>균총연구</a>
                </Link>
                <Link href={"/business"}>
                  <a>핵심기술</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">사업소개</div>
                <Link href={"/business"}>
                  <a>분석서비스</a>
                </Link>
                <Link href={"/business"}>
                  <a>포스트시너지</a>
                </Link>
                <Link href={"/business"}>
                  <a>기술협업</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="font-bold">투자정보</div>
                <Link href={"/business"}>
                  <a>투자문의</a>
                </Link>
                <Link href={"/business"}>
                  <a>공고</a>
                </Link>
              </div>
              <div className="flex-col space-y-3">
                <div className="font-bold">홍보자료</div>
                <Link href={"/business"}>
                  <a>회사소식</a>
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
