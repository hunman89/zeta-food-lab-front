import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logos/logo.png";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="group flex fixed h-20 w-full bg-white z-50">
        <div className="flex w-full justify-between justify-items-center items-center mx-auto px-10">
          <div className="w-32">
            <Link href={"/"}>
              <a>
                <Image src={Logo} alt="Zeta Food Lab Logo"></Image>
              </a>
            </Link>
          </div>
          <div className=" flex space-x-16 h-full items-center text-xl font-bold">
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/company/overview"}>
                <a>ABOUT US</a>
              </Link>
            </div>
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/research/sensor"}>
                <a>R&D</a>
              </Link>
            </div>
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/business/consult"}>
                <a>BUSINESS</a>
              </Link>
            </div>
            <div className="flex w-40 justify-center hover:text-[#0053a6]">
              <Link href={"/contact"}>
                <a>CONTACT US</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row space-x-2 w-32 justify-center">
            <Link href="/" locale="ko">
              <button>KOR</button>
            </Link>
            <div>|</div>
            <Link href="/" locale="en">
              <button>ENG</button>
            </Link>
          </div>
        </div>
        <div className="transition-all group-hover:visible invisible right-0 fixed w-full top-20 px-10 pb-64 border-none bg-gradient-to-b from-white to-transparent">
          <div className="flex justify-center space-x-14 text-md ">
            <div className="flex flex-col space-y-3">
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/company/overview"}>
                  <a>{t("SUBMENU_ABOUT_OVERVIEW")}</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/company/ceo"}>
                  <a>CEO</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/company/history"}>
                  <a>{t("SUBMENU_ABOUT_HISTORY")}</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/company/vision"}>
                  <a>{t("SUBMENU_ABOUT_VISION")}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/research/sensor"}>
                  <a>{t("SUBMENU_RND_SENSOR")}</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/research/green-tea"}>
                  <a>{t("SUBMENU_RND_GREEN_TEA")}</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/research/national-project"}>
                  <a>{t("SUBMENU_RND_NATIONAL_PROJECT")}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/business/consult"}>
                  <a>{t("SUBMENU_BUSINESS_CONSULT")}</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/business/market"}>
                  <a>{t("SUBMENU_BUSINESS_MARKET")}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/contact"}>
                  <a>{t("SUBMENU_CONTACT_CONTACT")}</a>
                </Link>
              </div>
              <div className="flex w-40 hover:text-[#0053a6]">
                <Link href={"/contact/location"}>
                  <a>{t("SUBMENU_CONTACT_LOCATION")}</a>
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
