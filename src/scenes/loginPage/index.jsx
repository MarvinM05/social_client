import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import React, { useEffect } from "react";

  const apiUrl = process.env.REACT_APP_BACKEND_URL;

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

   useEffect(() => {
     const checkServerStatus = async () => {
       try {
         const response = await fetch(`${apiUrl}/ping`);
         if (response.status === 200) {
           const data = await response.text();
           console.log(data); // Server response
         } else {
           console.error("Server is not ready yet.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };

     checkServerStatus();
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
