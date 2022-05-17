import React from "react";
import Image from "next/image";
import about from "../public/images/about.jpg";
import { useTranslation } from "next-i18next";
import { cls } from "utils/utils";

const CompanySub = ({ position }: { position: number }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="relative flex flex-col py-64 px-40">
        <Image
          src={about}
          alt="About"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="-z-10 brightness-75"
        ></Image>
        <div className="text-white font-bold text-5xl">ABOUT US</div>
        <div className=" absolute top-[28rem] flex w-1/2 right-40 justify-center text-2xl text-white space-x-5">
          <a
            className={cls(
              "flex flex-row justify-between items-center w-1/4 hover:border-white  border-b-4 pb-5 px-2 text-center font-bold",
              position === 0 ? "border-white " : "border-gray-500"
            )}
            href="/company/overview"
          >
            <div>{t("SUBMENU_ABOUT_OVERVIEW")}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a
            className={cls(
              "flex flex-row justify-between items-center w-1/4 hover:border-white border-b-4 pb-5 px-2 text-center font-bold",
              position === 1 ? "border-white " : "border-gray-500"
            )}
            href="/company/ceo"
          >
            <div>CEO</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a
            className={cls(
              "flex flex-row justify-between items-center w-1/4 hover:border-white border-b-4 pb-5 px-2 text-center font-bold",
              position === 2 ? "border-white " : "border-gray-500"
            )}
            href="/company/history"
          >
            <div>{t("SUBMENU_ABOUT_HISTORY")}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a
            className={cls(
              "flex flex-row justify-between items-center w-1/4 hover:border-white border-b-4 pb-5 px-2 text-center font-bold",
              position === 3 ? "border-white " : "border-gray-500"
            )}
            href="/company/vision"
          >
            <div>{t("SUBMENU_ABOUT_VISION")}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanySub;
