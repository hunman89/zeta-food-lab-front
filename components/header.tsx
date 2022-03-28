import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className=" flex fixed h-24 border-b-2 w-full">
        <div className="flex w-full max-w-5xl justify-between items-center mx-auto px-10">
          <Link href={"/"}>
            <a>제타푸드랩</a>
          </Link>
          <div className="flex gap-20">
            <Link href={"/business"}>
              <a className="font-bold">기업소개</a>
            </Link>
            <Link href={"/business"}>
              <a className="font-bold">연구소개</a>
            </Link>
            <Link href={"/business"}>
              <a className="font-bold">사업소개</a>
            </Link>
            <Link href={"/business"}>
              <a className="font-bold">투자정보</a>
            </Link>
            <Link href={"/business"}>
              <a className="font-bold">홍보자료</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden fixed right-5 top-24">
        CEO/CTO, 비전, 회사연혁, 오시는길/ 미생물연구, 균총연구, 핵심기술/
        분석서비스, 포스트시너지, 기술협업 투자문의, 공고 회사소식
      </div>
    </div>
  );
};

export default Header;
