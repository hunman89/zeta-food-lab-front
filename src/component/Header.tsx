import { Grid } from "@mui/material";
import React, { useState } from "react";
import longLogo from "../images/long-logo.png";
import IntroImage from "./IntroImage";
import MainImage from "./MainImage";
import MenuButton from "./MenuButton";

const MENU_ARRAY: string[] = [
  "기업소개",
  "연구소개",
  "사업소개",
  "투자정보",
  "홍보자료",
  "채용",
];

export default function Header() {
  const [menu, setMenu] = useState("");

  return (
    <>
      <Grid
        style={{ height: 90 }}
        container
        justifyItems="center"
        alignItems="center"
      >
        <Grid
          container
          item
          style={{ padding: "0 50" }}
          justifyItems="center"
          alignItems="center"
        >
          <Grid xs={4} container item justifyContent="center">
            <img
              src={longLogo}
              height="50"
              alt="long-zeta-food-lab-logo"
              onClick={(e) => {
                e.preventDefault();
                setMenu("");
              }}
            />
          </Grid>
          <Grid container item justifyContent="center" xs={8}>
            {MENU_ARRAY.map((e) => (
              <MenuButton name={e} setMenu={setMenu} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      {menu === "" ? <IntroImage /> : <MainImage menu={menu} />}
    </>
  );
}
