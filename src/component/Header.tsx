import { Button, Container, Grid, MenuItem } from "@mui/material";
import React from "react";
import longLogo from "../images/long-logo.png";
import PopupState, { bindMenu, bindHover } from "material-ui-popup-state";
import HoverMenu from "material-ui-popup-state/HoverMenu";

type menuType = { title: string; subtitle: string[] };
const MENU_ARRAY: menuType[] = [
  { title: "기업소개", subtitle: ["CEO/CTO", "비전", "회사연혁", "오시는길"] },
  { title: "연구소개", subtitle: ["미생물연구", "균총연구", "핵심기술"] },
  { title: "사업소개", subtitle: ["분석서비스", "포스트시너지", "기술협업"] },
  { title: "투자정보", subtitle: ["투자문의", "공고"] },
  { title: "홍보자료", subtitle: ["회사소식"] },
  { title: "채용", subtitle: ["채용공고"] },
];

const style = {
  margin: 2,
  fontWeight: "bold",
  color: "black",
};

interface MenuProps {
  setMenu: Function;
}

export default function Header({ setMenu }: MenuProps) {
  return (
    <Container sx={{ paddingX: 6 }}>
      <Grid xs={12} item container sx={{ height: 90 }}>
        <Grid xs={4} item container justifyItems="center" alignItems="center">
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
        <Grid item container justifyContent="center" xs={8}>
          {MENU_ARRAY.map((menu: menuType) => (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button id={menu.title} sx={style} {...bindHover(popupState)}>
                    {menu.title}
                  </Button>
                  <HoverMenu {...bindMenu(popupState)}>
                    {menu.subtitle.map((subtitle: string) => (
                      <MenuItem
                        onClick={(e) => {
                          e.preventDefault();
                          setMenu(subtitle);
                        }}
                      >
                        {subtitle}
                      </MenuItem>
                    ))}
                  </HoverMenu>
                </React.Fragment>
              )}
            </PopupState>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
