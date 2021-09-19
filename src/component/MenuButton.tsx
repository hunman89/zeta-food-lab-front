import { Button } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  setMenu: Function;
};

export default function MenuButton({ name, setMenu }: Props) {
  return (
    <Button
      style={{ margin: 20 }}
      onClick={(e) => {
        e.preventDefault();
        setMenu(name);
      }}
    >
      {name}
    </Button>
  );
}
