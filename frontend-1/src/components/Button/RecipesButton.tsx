"use client";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@emotion/styled";
import { Colors } from "@app/theme/colors";

interface RecipesButtonProps extends ButtonProps {
  title: string;
  icon: React.ReactNode;
}

const RecipesButtonStyle = styled(Button)({
  border: `1px solid ${Colors.primary}`,
  color: Colors.black,
  textTransform: "uppercase",
  borderRadius: "0",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  "&:hover": {
    backgroundColor: Colors.primary,
    color: Colors.white,
    border: `1px solid ${Colors.primary}`,
  },
});

const RecipesButton = ({ title, icon, ...props }: RecipesButtonProps) => {
  return (
    <RecipesButtonStyle role={undefined} variant="outlined" color="primary" tabIndex={-1} startIcon={icon} {...props}>
      {title}
    </RecipesButtonStyle>
  );
};

export default RecipesButton;
