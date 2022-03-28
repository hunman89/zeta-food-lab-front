import { AppBar, Button, Grid, MenuItem } from "@mui/material";
import React from "react";
import PopupState, { bindMenu, bindHover } from "material-ui-popup-state";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";

type menuType = { title: string; subtitles: string[] };

export const MENU_ARRAY: menuType[] = [
  { title: "기업소개", subtitles: ["CEO/CTO", "비전", "회사연혁", "오시는길"] },
  { title: "연구소개", subtitles: ["미생물연구", "균총연구", "핵심기술"] },
  { title: "사업소개", subtitles: ["분석서비스", "포스트시너지", "기술협업"] },
  { title: "투자정보", subtitles: ["투자문의", "공고"] },
  { title: "홍보자료", subtitles: ["회사소식"] },
];

const style = {
  margin: 2,
  fontWeight: "bold",
  color: "black",
  fontSize: 18,
};

const Header = () => {
  return (
    <AppBar sx={{ height: 80 }} color="default">
      <Grid item container sx={{ paddingX: "20%" }}>
        <Grid item container justifyContent="center">
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
                      <MenuItem key={subtitle}>
                        <Link href={"/business"}>{subtitle}</Link>
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
};

export default Header;
