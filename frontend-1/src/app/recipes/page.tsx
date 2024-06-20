import Breadcrumb from "@app/components/Breadcrumb";
import { Box } from "@mui/material";
import { Metadata } from "next";
import MainContent from "@app/components/MainContent";
import { Suspense } from "react";
import ContentSkeleton from "@app/components/Skeleton/ContentSkeleton";

const BREAD_CRUMBS = [
  {
    title: "Recipes",
    url: "/recipes",
  },
  {
    title: "Bread",
    url: "/bread",
  },
  {
    title: "Quick bread",
    url: "/bread",
  },
];

export const metadata: Metadata = {
  title: "Assessments recipes page",
  description: "This is recipes page for assessments",
};

export default function Recipes() {
  return (
    <Box
      sx={{
        padding: "20px 0",
      }}
    >
      <Breadcrumb breadcrumbs={BREAD_CRUMBS} />
      <Suspense fallback={<ContentSkeleton />}>
        <MainContent page="recipes" />
      </Suspense>
    </Box>
  );
}
