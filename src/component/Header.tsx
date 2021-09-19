import { Container, Grid } from "@mui/material";
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
      <Container sx={{ paddingX: 6 }}>
        <Grid xs={12} container sx={{ height: 90 }}>
          <Grid xs={4} container justifyItems="center" alignItems="center">
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
          <Grid container justifyContent="center" xs={8}>
            {MENU_ARRAY.map((e) => (
              <MenuButton name={e} setMenu={setMenu} />
            ))}
          </Grid>
        </Grid>
      </Container>
      {menu === "" ? <IntroImage /> : <MainImage menu={menu} />}
    </>
  );
}
