"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import Link from "next/link";
import { Colors } from "@app/theme/colors";

const BreadcrumbItem = styled(Link)(() => ({
  textTransform: "uppercase",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "13px",
  padding: "15px 0",
  color: Colors.black,
  "&:hover": {
    color: Colors.primary,
  },
  display: "inline-flex",
  alignItems: "center",
  letterSpacing: "1px",
  position: "relative",
  "&:after": {
    position: "relative",
    display: "inline-block",
    borderRight: ".063rem solid #da1a32",
    borderBottom: ".063rem solid #da1a32",
    width: ".313rem",
    height: ".313rem",
    transform: "rotate(-45deg)",
    content: `""`,
    top: "0px",
    right: "-3px",
  },
}));

interface BreadcrumbProps {
  breadcrumbs: {
    title: string;
    url: string;
  }[];
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1em",
        alignItems: "center",
      }}
    >
      {breadcrumbs.map((breadcrumb) => (
        <BreadcrumbItem href={breadcrumb.url} key={breadcrumb.url}>
          {breadcrumb.title}
        </BreadcrumbItem>
      ))}
    </Box>
  );
};

export default Breadcrumb;
