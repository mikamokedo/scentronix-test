import { Colors } from "@app/theme/colors";
import { Box, Skeleton } from "@mui/material";
import React from "react";

const ContentSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          paddingRight: "50px",
        }}
      >
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        <Box
          sx={{
            marginTop: "100px",
          }}
        >
          <Skeleton variant="rounded" width={210} height={60} />
        </Box>
        <Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px",
                padding: "20px 0",
                borderBottom: `1px solid ${Colors.gray}`,
              }}
            >
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px",
                padding: "20px 0",
                borderBottom: `1px solid ${Colors.gray}`,
              }}
            >
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Skeleton variant="rectangular" width={640} height={360} />
      </Box>
    </Box>
  );
};

export default ContentSkeleton;
