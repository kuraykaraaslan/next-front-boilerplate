'use client';
import Image from "next/image";
import DefaultFeedWithImage from "@/components/Feed/DefaultFeedWithImage";
import DefaultStats from "@/components/Stats/SecondaryStats";
import DefaultSponsors from "@/components/Sponsors/DefaultSponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";
import DefaultFeedNoContent from "@/components/Feed/DefaultFeedNoContent";


import Caresoul from "@/components/Carousel";
import CarouselItem from "@/components/Carousel/CarouselItem";

export default function Home() {
  return (
    <>
      <Caresoul>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Caresoul>


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
