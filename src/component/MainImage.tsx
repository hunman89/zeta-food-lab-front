import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
      sx={{ height: 500, bgcolor: "GRAY", marginY: 10 }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={style}>{menu}</Typography>
    </Grid>
  );
}
