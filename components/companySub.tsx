import React from "react";
import { useTranslation } from "next-i18next";
import SubMenu from "./subMenu";

const CompanySub = ({ position }: { position: number }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div
        className="relative flex flex-col py-64 px-40"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/about.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white font-bold text-5xl animate-fadeIn">
          ABOUT US
        </div>
        <div className=" absolute top-[28rem] flex w-1/2 right-40 justify-center text-2xl text-white space-x-5">
          <SubMenu
            isBig={false}
            index={0}
            position={position}
            text={t("SUBMENU_ABOUT_OVERVIEW")}
            url={"/company/overview"}
          ></SubMenu>
          <SubMenu
            isBig={false}
            index={1}
            position={position}
            text={"CEO"}
            url={"/company/ceo"}
          ></SubMenu>
          <SubMenu
            isBig={false}
            index={2}
            position={position}
            text={t("SUBMENU_ABOUT_HISTORY")}
            url={"/company/history"}
          ></SubMenu>
          <SubMenu
            isBig={false}
            index={3}
            position={position}
            text={t("SUBMENU_ABOUT_VISION")}
            url={"/company/vision"}
          ></SubMenu>
        </div>
      </div>
    </div>
  );
};

export default CompanySub;
