import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MENU_ARRAY } from "./Header";

interface Props {
  menu: string;
}

const style = {
  fontWeight: "bold",
  fontSize: 40,
  color: "white",
};

export default function MainImage({ menu }: Props) {
  const [title, setTitle] = useState(menu);

  useEffect(() => {
    MENU_ARRAY.forEach((menuObject) => {
      if (menuObject.subtitle.includes(menu)) {
        setTitle(menuObject.title);
      }
    });
  }, [menu]);

  return (
    <Grid
      sx={{ height: 500, bgcolor: "GRAY", marginY: 10 }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={style}>{title}</Typography>
    </Grid>
  );
}
