import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import React, { useEffect } from "react";

  const apiUrl = process.env.REACT_APP_BACKEND_URL;

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

   useEffect(() => {
     // Make a GET request to the server's ping route
     fetch(`${apiUrl}/ping`)
       .then((response) => response.text())
       .then((data) => {
         console.log(data); // Server response
       })
       .catch((error) => {
         console.error("Error:", error);
       });
   }, []);

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialDev
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        sx={{
          boxShadow: theme.shadows.paper,
        }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to SocialDev, the premier Social Network for those with
          exceptional perspectives!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
