import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import logo from "../public/logos/logo.png";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full bg-slate-200">
      <div className="p-14">
        <div className="flex items-center justify-around gap-3 w-full h-full">
          <div className="flex flex-col w-1/6 justify-center">
            <div className="w-40">
              <Image src={logo}></Image>
            </div>
          </div>
          <div className="flex flex-row w-5/6 justify-center space-x-3">
            <div className="flex flex-col space-y-2 w-1/4 justify-start items-start">
              <div className="font-medium text-2xl">{t("ZETA_NAME")}</div>
              <div className=" text-xs">
                Copyright (c) ZETAFOODLAB Co., Ltd. All rights reserved
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-1/4 justify-start items-start">
              <div className="font-medium text-2xl">ADDRESS</div>
              <div className="text-sm">{t("ZETA_ADDRESS")}</div>
            </div>
            <div className="flex flex-col space-y-2 w-1/4 justify-start items-start">
              <div className="font-medium text-2xl">CONTACT</div>
              <div className="text-sm">{t("PHONE")} 010-9321-0649</div>
              <div className="text-sm">{t("EMAIL")} zetafoodlab@gmail.com</div>
            </div>
            <div className="flex flex-col space-y-2 w-1/4 justify-start items-start">
              <div className="font-medium text-2xl">SNS</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
