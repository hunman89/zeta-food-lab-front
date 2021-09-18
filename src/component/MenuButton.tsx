import { Button } from "@mui/material";
import React, { useState } from "react";

type Props = {
    name: string;
    setMenu: Function;
}

export default function MenuButton({name, setMenu}:Props) {
    
    return (
        <Button onClick={(e) => {
            e.preventDefault();
            setMenu(name)
        }}>{name}</Button>
    );
  }

