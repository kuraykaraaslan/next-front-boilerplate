import DefaultArticle from "@/components/Article/DefaultArticle";
import DefaultBreadcrumb from "@/components/Breadcrumb/DefaultBreadcrumb";
import React from "react";


export default function BlogPost() {
  return (
    <>
      <DefaultBreadcrumb title="Blog Post" />
      <DefaultArticle />
    </>
  );
}