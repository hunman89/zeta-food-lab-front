import React from "react";
import Image from "next/image";
import contact_us from "../public/images/contact_us.jpg";
import { useTranslation } from "next-i18next";
import { cls } from "utils/utils";

const ContactSub = ({ position }: { position: number }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="relative flex flex-col py-64 px-40">
        <Image
          src={contact_us}
          alt="ContactUs"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="-z-10 brightness-50"
        ></Image>
        <div className="text-white font-bold text-5xl">CONTACT US</div>
        <div className=" absolute top-[28rem] flex w-1/2 right-40 justify-center text-2xl text-white space-x-5">
          <div
            className={cls(
              "flex flex-row justify-between items-center w-1/4  border-b-4 pb-5 px-2 text-center font-bold",
              position === 0 ? "border-white " : "border-gray-500"
            )}
          >
            <a href="/contact">{t("SUBMENU_CONTACT_CONTACT")}</a>
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
          </div>
          <div
            className={cls(
              "flex flex-row justify-between items-center w-1/4  border-b-4 pb-5 px-2 text-center font-bold",
              position === 1 ? "border-white " : "border-gray-500"
            )}
          >
            <a href="/contact/location">{t("SUBMENU_CONTACT_LOCATION")}</a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSub;
