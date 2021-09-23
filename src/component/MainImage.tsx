import { Grid, Typography } from "@mui/material";
import React from "react";

interface titleProps {
  title: string;
}

const style = {
  fontWeight: "bold",
  fontSize: 40,
  color: "white",
};

export default function MainImage({ title }: titleProps) {
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
