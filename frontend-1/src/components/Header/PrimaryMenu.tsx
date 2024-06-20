"use client";
import { Box, styled } from "@mui/material";
import Link from "next/link";
import { Colors } from "@app/theme/colors";
import { PRIMARY_MENUS } from "@app/constants/menu";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = styled(Link)<{ isActive?: boolean }>(({ isActive }) => ({
  textTransform: "uppercase",
  textDecoration: "none",
  color: isActive ? Colors.primary : Colors.black,
  fontWeight: "500",
  padding: "10px 0",
  fontSize: "15px",
  borderBottom: isActive ? `3px solid ${Colors.primary}` : "3px solid transparent",
  "&:hover": {
    borderBottom: `3px solid ${Colors.primary}`,
    color: Colors.primary,
  },
  display: "inline-flex",
  alignItems: "center",
  letterSpacing: "1px",
}));

const PrimaryMenu = () => {
  const pathName = usePathname();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "3em",
        padding: "20px 0",
        marginLeft: "100px",
      }}
    >
      {PRIMARY_MENUS.map((menu) => (
        <MenuItem isActive={pathName === menu.url} href={menu.url} key={menu.url}>
          {menu.title}
        </MenuItem>
      ))}
    </Box>
  );
};

export default PrimaryMenu;
