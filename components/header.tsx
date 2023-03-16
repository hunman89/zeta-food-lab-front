import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logos/logo.png";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
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
          <div className=" flex space-x-14 h-full items-center">
            <div className="flex w-48 justify-center hover:text-zetalight">
              <Link href={"/company/overview"}>
                <a>ABOUT US</a>
              </Link>
            </div>
            <div className="flex w-48 justify-center hover:text-zetalight">
              <Link href={"/research/sensor"}>
                <a>R&D</a>
              </Link>
            </div>
            <div className="flex w-48 justify-center hover:text-zetalight">
              <Link href={"/business/consult"}>
                <a>BUSINESS</a>
              </Link>
            </div>
            <div className="flex w-48 justify-center hover:text-zetalight">
              <Link href={"/contact"}>
                <a>CONTACT US</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row space-x-2 w-32 justify-center">
            <Link href="/" locale="ko">
              <button
                className={
                  locale === "ko"
                    ? "underline underline-offset-4 text-zetalight decoration-zetalight decoration-2"
                    : "text-gray-500"
                }
              >
                KR
              </button>
            </Link>
            <div>|</div>
            <Link href="/" locale="en">
              <button
                className={
                  locale === "en"
                    ? "underline underline-offset-4 text-zetalight decoration-zetalight decoration-2"
                    : "text-gray-500"
                }
              >
                EN
              </button>
            </Link>
          </div>
        </div>
        <div className="transition-all group-hover:visible invisible right-0 fixed w-full top-20 px-10 pb-64 border-none bg-gradient-to-b from-white to-transparent">
          <div className="flex justify-center space-x-14">
            <div className="flex flex-col w-48 space-y-3">
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/company/overview"}>
                  <a>{t("SUBMENU_ABOUT_OVERVIEW")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/company/ceo"}>
                  <a>{t("SUBMENU_ABOUT_CEO")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/company/history"}>
                  <a>{t("SUBMENU_ABOUT_HISTORY")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/company/vision"}>
                  <a>{t("SUBMENU_ABOUT_VISION")}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-48 space-y-3">
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/research/sensor"}>
                  <a>{t("SUBMENU_RND_SENSOR")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/research/green-tea"}>
                  <a>{t("SUBMENU_RND_GREEN_TEA")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/research/national-project"}>
                  <a>{t("SUBMENU_RND_NATIONAL_PROJECT")}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-48 space-y-3">
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/business/consult"}>
                  <a>{t("SUBMENU_BUSINESS_CONSULT")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/business/market"}>
                  <a>{t("SUBMENU_BUSINESS_MARKET")}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-48 space-y-3">
              <div className="flex hover:text-zetalight justify-center">
                <Link href={"/contact"}>
                  <a>{t("SUBMENU_CONTACT_CONTACT")}</a>
                </Link>
              </div>
              <div className="flex hover:text-zetalight justify-center">
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
