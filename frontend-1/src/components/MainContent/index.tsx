import { Box, Typography } from "@mui/material";
import React from "react";
import NextImage from "next/image";
import { Colors } from "@app/theme/colors";
import RecipesButton from "@app/components/Button/RecipesButton";
import Add from "@mui/icons-material/Add";
import Print from "@mui/icons-material/Print";
import { getContent } from "@app/services/getContent";

interface MainContentProps {
  page: string;
}
const MainContent = async ({ page }: MainContentProps) => {
  const content = await getContent(page);

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
        <Typography variant="h1" fontSize={30} fontWeight={500}>
          {content.title}
        </Typography>
        <Box
          sx={{
            marginTop: "100px",
          }}
        >
          {content.description}
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <NextImage src="/icons/clock.svg" alt="clock" width={37} height={37} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontSize={14}>
                      PREP
                    </Typography>
                    <Typography variant="h6" fontSize={15}>
                      {content.recipe.prep}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" fontSize={14}>
                  BAKE
                </Typography>
                <Typography variant="h6" fontSize={15}>
                  {content.recipe.bake}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontSize={14}>
                  TOTAL
                </Typography>
                <Typography variant="h6" fontSize={15}>
                  {content.recipe.total}
                </Typography>
              </Box>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <NextImage src="/icons/yield.svg" alt="clock" width={37} height={37} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontSize={14}>
                      YIELD
                    </Typography>
                    <Typography variant="h6" fontSize={15}>
                      {content.recipe.yield}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <RecipesButton title="save recipe" icon={<Add />} />
              <RecipesButton title="print" icon={<Print />} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <NextImage src="/images/ramdom.webp" alt="pumpkin bread" width={640} height={360} />
      </Box>
    </Box>
  );
};

export default MainContent;
