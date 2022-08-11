import React from "react";
import { useTranslation } from "next-i18next";
import SubMenu from "./subMenu";

const BusinessSub = ({ position }: { position: number }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div
        className="relative flex flex-col py-64 px-40"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/business.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white font-bold text-5xl animate-fadeIn">
          BUSINESS
        </div>
        <div className=" absolute top-[28rem] flex w-1/2 right-40 justify-center text-2xl text-white space-x-5">
          <SubMenu
            index={0}
            position={position}
            text={t("SUBMENU_BUSINESS_CONSULT")}
            url={"/business/consult"}
          ></SubMenu>
          <SubMenu
            index={1}
            position={position}
            text={t("SUBMENU_BUSINESS_MARKET")}
            url={"/business/market"}
          ></SubMenu>
        </div>
      </div>
    </div>
  );
};

export default BusinessSub;
