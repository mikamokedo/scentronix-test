import Breadcrumb from "@app/components/Breadcrumb";
import { Box } from "@mui/material";
import { Metadata } from "next";
import MainContent from "@app/components/MainContent";
import { Suspense } from "react";
import ContentSkeleton from "@app/components/Skeleton/ContentSkeleton";

const BREAD_CRUMBS = [
  {
    title: "Learn",
    url: "/learn",
  },
  {
    title: "Bread",
    url: "/bread",
  },
  {
    title: "Learn",
    url: "/learn",
  },
];

export const metadata: Metadata = {
  title: "Assessments learn page",
  description: "This is learn page for assessments",
};

export default function Learn() {
  return (
    <Box
      sx={{
        padding: "20px 0",
      }}
    >
      <Breadcrumb breadcrumbs={BREAD_CRUMBS} />
      <Suspense fallback={<ContentSkeleton />}>
        <MainContent page="learn" />
      </Suspense>
    </Box>
  );
}
