import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ShortLogo from "../images/short-logo.png";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const text = {
  color: "white",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <Grid sx={{ height: 250, backgroundColor: "#5c6bc0" }}>
      <Container sx={{ padding: 6 }}>
        <Grid xs={12} container justifyContent="center">
          <Grid xs={3} sx={{ gap: 1 }} container item justifyContent="center">
            <img src={ShortLogo} height="20" alt="long-zeta-food-lab-logo" />
            <Typography sx={text}>주식회사 제타푸드랩</Typography>
          </Grid>
          <Grid xs={3} container item justifyContent="center">
            <Typography sx={text}>ADDRESS</Typography>
          </Grid>
          <Grid xs={3} container item justifyContent="center">
            <Typography sx={text}>CONTACT</Typography>
          </Grid>
          <Grid xs={3} container item justifyContent="center">
            <Typography sx={text}>SNS</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ paddingTop: 2 }} container justifyContent="center">
          <Grid xs={3} container item justifyContent="left">
            <Typography sx={text}>
              © 2021. ZETA FOOD LAB Inc. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid xs={3} container item justifyContent="left">
            <Typography sx={text}>광교연구소</Typography>
            <Typography sx={text}>
              경기도 수원시 영통구 창룡대로 256번길 77, 에이스광교타워3차 404호
            </Typography>
          </Grid>
          <Grid xs={3} container item justifyContent="center">
            <Typography sx={text}>대표번호 1899-4258</Typography>
          </Grid>
          <Grid xs={3} container item justifyContent="center">
            <MailRoundedIcon />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
