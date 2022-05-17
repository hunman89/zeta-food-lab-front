import React from "react";
import Image from "next/image";
import research from "../public/images/research.jpg";
import { useTranslation } from "next-i18next";
import { cls } from "utils/utils";

const ResearchSub = ({ position }: { position: number }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="relative flex flex-col py-64 px-40">
        <Image
          src={research}
          alt="Research"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="-z-10 brightness-50"
        ></Image>
        <div className="text-white font-bold text-5xl">R&D</div>
        <div className=" absolute top-[28rem] flex w-1/2 right-40 justify-center text-2xl text-white space-x-5">
          <a
            className={cls(
              "flex flex-row justify-between items-center w-1/3 hover:border-white  border-b-4 pb-5 px-2 text-center font-bold",
              position === 0 ? "border-white " : "border-gray-500"
            )}
            href="/research/sensor"
          >
            <div>{t("SUBMENU_RND_SENSOR")}</div>
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
              "flex flex-row justify-between items-center w-1/3 hover:border-white border-b-4 pb-5 px-2 text-center font-bold",
              position === 1 ? "border-white " : "border-gray-500"
            )}
            href="/research/green-tea"
          >
            <div>{t("SUBMENU_RND_GREEN_TEA")}</div>
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
              "flex flex-row justify-between items-center w-1/3 hover:border-white border-b-4 pb-5 px-2 text-center font-bold",
              position === 2 ? "border-white " : "border-gray-500"
            )}
            href="/research/national-project"
          >
            <div>{t("SUBMENU_RND_NATIONAL_PROJECT")}</div>
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

export default ResearchSub;
