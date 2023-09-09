import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography
          variant="h6"
          sx={{ fontSize: { lg: "20px", xs: "16px" } }}
          mt="41px"
          textAlign="center"
          pb="40px"
        >
          Made with ❤️ by Lucia Moral
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
