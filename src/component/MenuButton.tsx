import { Button } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  setMenu: Function;
};

const style = {
  margin: 2,
  fontWeight: "bold",
};

export default function MenuButton({ name, setMenu }: Props) {
  return (
    <Button
      sx={style}
      onClick={(e) => {
        e.preventDefault();
        setMenu(name);
      }}
    >
      {name}
    </Button>
  );
}
