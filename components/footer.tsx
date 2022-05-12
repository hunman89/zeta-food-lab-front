import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import logo from "../public/logos/logo.png";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full h-full bg-slate-200">
      <div className="p-20">
        <div className="flex items-center justify-around gap-3 h-full">
          <div className="flex flex-col w-1/5">
            <div className="w-40">
              <Image src={logo}></Image>
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-1/5 justify-between">
            <div className="font-medium text-2xl">{t("ZETA_NAME")}</div>
            <div className=" text-xs">
              Copyright (c) ZETAFOODLAB Co., Ltd. All rights reserved
            </div>
          </div>
          <div className="flex flex-col w-2/5 justify-start">
            <div className="font-medium text-2xl pb-2">ADDRESS</div>
            <div className="text-sm">{t("ZETA_ADDRESS")}</div>
          </div>
          <div className="flex flex-col w-1/5 justify-between">
            <div className="font-medium text-2xl pb-2">CONTACT</div>
            <div className="text-sm">{t("PHONE")} 010-9321-0649</div>
            <div className="text-sm">{t("EMAIL")} zetafoodlab@gmail.com</div>
          </div>
          <div className="flex flex-col font-medium text-2xl w-1/5 justify-around">
            <div>SNS</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
