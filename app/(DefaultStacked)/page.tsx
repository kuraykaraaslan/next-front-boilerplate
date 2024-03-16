'use client';
import Image from "next/image";
import DefaultCaresoulSmooth from "@/components/Carousels/DefaultCaresoulSmooth";
import DefaultFeedWithImage from "@/components/Feed/DefaultFeedWithImage";
import DefaultStats from "@/components/Stats/SecondaryStats";
import DefaultSponsors from "@/components/Sponsors/DefaultSponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";
import DefaultFeedNoContent from "@/components/Feed/DefaultFeedNoContent";
import CaresoulItemCentered from "@/components/Carousels/CaresoulItemCentered";

export default function Home() {
  return (
    <>
      <DefaultCaresoulSmooth>
      <CaresoulItemCentered />

        <img src="https://picsum.photos/1920/1080?grayscale" alt="1" width={1920} height={1080} />
        <img src="https://picsum.photos/1920/1080?blur" alt="2" width={1920} height={1080} />
        <img src="https://picsum.photos/1920/1080?random" alt="3" width={1920} height={1080} />

      </DefaultCaresoulSmooth>
      <DefaultFeedWithImage />
      <DefaultStats />
      <DefaultFeedNoContent />

      <DefaultSponsors>
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </DefaultSponsors>
    </>
  );
}
