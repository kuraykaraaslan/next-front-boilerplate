'use client';
import Image from "next/image";
import Caresoul from "@/components/Carousel";
import CarouselItem from "@/components/Carousel/CarouselItem";

import DefaultFeedWithImage from "@/components/Feed/DefaultFeedWithImage";
import DefaultStats from "@/components/Stats/SecondaryStats";
import DefaultSponsors from "@/components/Sponsors/DefaultSponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";
import DefaultFeedNoContent from "@/components/Feed/DefaultFeedNoContent";

import EventMenu from "@/components/EventMenu";

export default function EventHome() {
  return (
    <>
      <Caresoul insert={<EventMenu />}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Caresoul>

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
