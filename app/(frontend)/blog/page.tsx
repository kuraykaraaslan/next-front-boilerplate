'use client';
import Image from "next/image";
import DefaultCaresoulSmooth from "@/components/Carousels/DefaultCaresoulSmooth";
import DefaultFeedWithImage from "@/components/Feed/DefaultFeedWithImage";
import DefaultStats from "@/components/Stats/SecondaryStats";
import DefaultSponsors from "@/components/Sponsors/DefaultSponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";
import DefaultFeedNoContent from "@/components/Feed/DefaultFeedNoContent";
import CaresoulItemCentered from "@/components/Carousels/CaresoulItemCentered";
import DefaultBreadcrumb from "@/components/Breadcrumb/DefaultBreadcrumb";

export default function Blog() {
  return (
    <>
      <DefaultBreadcrumb title="Blog" />
      <DefaultFeedWithImage hideTitle={true} />

    </>
  );
}
