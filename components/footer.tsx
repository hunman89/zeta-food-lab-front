import Image from "next/image";
import React from "react";
import logo from "../public/logos/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-full bg-slate-200">
      <div className="p-10">
        <div className="flex items-center justify-around gap-3">
          <div className="flex flex-col">
            <div className="w-32">
              <Image src={logo}></Image>
            </div>
            <div className="text-xs text-right">(주) 제타푸드랩</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="font-medium text-2xl">주식회사 제타푸드랩</div>
            <div className=" text-xs">
              Copyright (c) ZETAFOODLAB Co., Ltd. All rights reserved
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium text-2xl pb-2">ADDRESS</div>
            <div className="text-sm">경기도 시흥시 배곧2로 82,</div>
            <div className="text-sm">
              서울대학교 시흥캠퍼스 미래모빌리티동 602호
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium text-2xl pb-2">CONTACT</div>
            <div className="text-sm">대표전화 010-9321-0649</div>
            <div className="text-sm">이메일 zetafoodlab@gmail.com</div>
          </div>
          <div className="font-medium text-2xl">SNS</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
