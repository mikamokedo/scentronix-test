import Breadcrumb from "@app/components/Breadcrumb";
import { Box } from "@mui/material";
import { Metadata } from "next";
import MainContent from "@app/components/MainContent";
import { Suspense } from "react";
import ContentSkeleton from "@app/components/Skeleton/ContentSkeleton";

const BREAD_CRUMBS = [
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "Bread",
    url: "/bread",
  },
  {
    title: "Quick bread",
    url: "/quick",
  },
];

export const metadata: Metadata = {
  title: "Assessments blog page",
  description: "This is blog page for assessments",
};

export default function Blogs() {
  return (
    <Box
      sx={{
        padding: "20px 0",
      }}
    >
      <Breadcrumb breadcrumbs={BREAD_CRUMBS} />
      <Suspense fallback={<ContentSkeleton />}>
        <MainContent page="blog" />
      </Suspense>
    </Box>
  );
}
