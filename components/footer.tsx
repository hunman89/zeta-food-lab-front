import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-purple-500 mx-auto">
      <div className="py-10 max-w-5xl mx-auto">
        <div className="flex items-center justify-around gap-3">
          <div className=" w-1/4 text-white font-medium text-2xl">
            주식회사 제타푸드랩
          </div>
          <div className="w-1/4 text-white font-medium text-2xl">ADDRESS</div>
          <div className="w-1/4 text-white font-medium text-2xl">CONTACT</div>
          <div className="w-1/4 text-white font-medium text-2xl">SNS</div>
        </div>
        <div className="flex items-center justify-around pt-10 gap-3">
          <div className="w-1/4 text-white text-md">
            © 2021. ZETA FOOD LAB Inc. All Rights Reserved.
          </div>
          <div className="w-1/4 text-white text-md">
            <div className="font-medium">광교연구소 </div>
            <div>
              경기도 수원시 영통구 창룡대로 256번길 77, 에이스광교타워3차 404호
            </div>
          </div>
          <div className="w-1/4 text-white text-md">대표번호 1899-4258</div>
          <div className="w-1/4 text-white text-md">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
