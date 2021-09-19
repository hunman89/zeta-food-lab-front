import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  menu: string;
};

export default function MainImage({ menu }: Props) {
  return (
    <Grid
      style={{ height: 400, backgroundColor: "GRAY" }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Typography>{menu}</Typography>
    </Grid>
  );
}
