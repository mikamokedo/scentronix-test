import { Box, Container } from "@mui/material";
import React from "react";
import PrimaryMenu from "@app/components/Header/PrimaryMenu";
import SecondaryMenu from "@app/components/Header/SecondaryMenu";
import NextImage from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Box>
      <Container
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Link href="/">
            <NextImage src="/images/random-logo.jpeg" alt="logo" width={100} height={100} />
          </Link>
        </Box>
        <PrimaryMenu />
      </Container>
      <SecondaryMenu />
    </Box>
  );
};

export default Header;
