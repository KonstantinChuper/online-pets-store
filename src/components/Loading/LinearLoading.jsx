import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearLoading() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#0d50ff",
          },
          "& .MuiLinearProgress-bar1Buffer": {
            backgroundColor: "#0d50ff", 
          },
        }}
      />
    </Box>
  );
}
