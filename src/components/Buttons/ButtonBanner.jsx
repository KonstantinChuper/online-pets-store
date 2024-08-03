import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(() => ({
  backgroundColor: "#FFFFFF",
  color: "#282828",
  padding: "10px 20px",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.3",
  textTransform: "none",
  transition: "all 0.5s",
  marginTop: "16px",
  width: "40%",
  "&:hover": {
    backgroundColor: "#282828",
    color: "#ffffff",
  },
  "&.Mui-disabled": {
    backgroundColor: "#F1F3F4",
    color: "#0D50FF",
  },
}));

const ButtonBanner = ({ children, ...props }) => {
  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
};

export default ButtonBanner;
