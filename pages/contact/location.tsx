import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import ContactSub from "components/contactSub";
declare global {
  interface Window {
    kakao: any;
    daum: any;
  }
}

const Location: NextPage = () => {
  const { t } = useTranslation("contact");
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.366303, 126.724942),
        level: 4,
      };

      const map = new window.kakao.maps.Map(container, options);
      var zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      var markerPosition = new window.kakao.maps.LatLng(37.366303, 126.724942);

      var marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    });
  }, [mapLoaded]);

  return (
    <Layout footer>
      <Head>
        <title>Location</title>
      </Head>
      <ContactSub position={1} />
      <div className="w-full max-w-6xl mx-auto py-40">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{t("HEAD_OFFICE")}</div>
          <div className="text-gray-600 pt-4 pb-10">{t("LOCATION_OFFICE")}</div>
          <div className="pt-10 border-t-2 border-gray-400">
            <div id="map" style={{ width: "640px", height: "360px" }}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "common"])),
  },
});

export default Location;
