import Breadcrumb from "@app/components/Breadcrumb";
import { Box } from "@mui/material";
import { Metadata } from "next";
import MainContent from "@app/components/MainContent";
import { Suspense } from "react";
import ContentSkeleton from "@app/components/Skeleton/ContentSkeleton";

const BREAD_CRUMBS = [
  {
    title: "Home",
    url: "/",
  },
];

export const metadata: Metadata = {
  title: "Assessments home page",
  description: "This is home page for assessments",
};

export default function Home() {
  return (
    <Box
      sx={{
        padding: "20px 0",
      }}
    >
      <Breadcrumb breadcrumbs={BREAD_CRUMBS} />
      <Suspense fallback={<ContentSkeleton />}>
        <MainContent page="home" />
      </Suspense>
    </Box>
  );
}
