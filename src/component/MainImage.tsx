import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  menu: string;
};

const style = {
  fontWeight: "bold",
  fontSize: 40,
  color: "white",
};

export default function MainImage({ menu }: Props) {
  return (
    <Grid
      style={{ height: 400, backgroundColor: "GRAY" }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={style}>{menu}</Typography>
    </Grid>
  );
}
