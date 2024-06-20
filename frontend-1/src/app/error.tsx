"use client";
import { Button, Typography, Box } from "@mui/material";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Something went wrong
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {error.message}
        </Typography>
        <Button onClick={reset} variant="contained" color="primary">
          Try again
        </Button>
      </Box>
    </Box>
  );
}
