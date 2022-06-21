import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import logo from "../public/logos/logo.png";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full bg-slate-200">
      <div className="p-14">
        <div className="flex items-center justify-around w-full h-full">
          <div className="flex flex-row w-10/12 space-x-3">
            <div className="flex flex-col pl-14 justify-start items-start">
              <div>
                <div className=" font-extrabold text-xl">{t("ZETA_NAME")}</div>
              </div>
              <div className="flex flex-row pt-5 space-x-5">
                <div>ADDRESS</div>
                <div>{t("ZETA_ADDRESS")}</div>
              </div>
              <div className="flex flex-row pt-3 space-x-5">
                <div>EMAIL</div>
                <div>zetafoodlab@gmail.com</div>
              </div>
              <div>
                <div className="pt-10 text-sm">
                  Copyright (c) ZETAFOODLAB Co., Ltd. All rights reserved
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/12 justify-end pr-10">
            <div className="w-40">
              <Image src={logo}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
