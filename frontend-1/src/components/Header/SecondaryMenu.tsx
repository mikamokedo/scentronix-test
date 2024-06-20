"use client";
import React from "react";
import { SECONDARY_MENUS } from "@app/constants/menu";
import { Colors } from "@app/theme/colors";
import Link from "next/link";
import { Box, Container, styled } from "@mui/material";

const SecondMenuItem = styled(Link)(() => ({
  textTransform: "uppercase",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "14px",
  padding: "15px 0",
  color: Colors.black,
  "&:hover": {
    color: Colors.primary,
  },
  display: "inline-flex",
  alignItems: "center",
  letterSpacing: "1px",
}));

const SecondaryMenu = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.secondary,
      }}
    >
      <Container>
        <Box
          sx={{
            marginLeft: "100px",
            display: "flex",
            gap: "3em",
          }}
        >
          {SECONDARY_MENUS.map((menu) => (
            <SecondMenuItem key={menu.url} href={menu.url}>
              {menu.title}
            </SecondMenuItem>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SecondaryMenu;
