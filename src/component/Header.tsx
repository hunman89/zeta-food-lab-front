import { AppBar, Button, Grid, MenuItem } from "@mui/material";
import React from "react";
import longLogo from "../images/long-logo.png";
import PopupState, { bindMenu, bindHover } from "material-ui-popup-state";
import HoverMenu from "material-ui-popup-state/HoverMenu";

type menuType = { title: string; subtitles: string[] };

export const MENU_ARRAY: menuType[] = [
  { title: "기업소개", subtitles: ["CEO/CTO", "비전", "회사연혁", "오시는길"] },
  { title: "연구소개", subtitles: ["미생물연구", "균총연구", "핵심기술"] },
  { title: "사업소개", subtitles: ["분석서비스", "포스트시너지", "기술협업"] },
  { title: "투자정보", subtitles: ["투자문의", "공고"] },
  { title: "홍보자료", subtitles: ["회사소식"] },
  { title: "채용", subtitles: ["채용공고"] },
];

const style = {
  margin: 2,
  fontWeight: "bold",
  color: "black",
  fontSize: 18,
};

interface MenuProps {
  setValue: Function;
  setMenu: Function;
  setTitle: Function;
}

export default function Header({ setMenu, setValue, setTitle }: MenuProps) {
  return (
    <AppBar sx={{ height: 80 }} color="default">
      <Grid xs={12} item container sx={{ paddingX: "20%" }}>
        <Grid xs={4} item container justifyItems="center" alignItems="center">
          <img
            src={longLogo}
            height="50"
            alt="long-zeta-food-lab-logo"
            onClick={(e) => {
              e.preventDefault();
              setMenu("");
              setValue(0);
              setTitle("메인");
            }}
          />
        </Grid>
        <Grid item container justifyContent="center" xs={8}>
          {MENU_ARRAY.map((menu: menuType) => (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    key={menu.title}
                    sx={style}
                    {...bindHover(popupState)}
                  >
                    {menu.title}
                  </Button>
                  <HoverMenu {...bindMenu(popupState)}>
                    {menu.subtitles.map((subtitle: string, index: number) => (
                      <MenuItem
                        key={subtitle}
                        onClick={(e) => {
                          e.preventDefault();
                          setMenu(subtitle);
                          setValue(index);
                          setTitle(menu.title);
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
    </AppBar>
  );
}
