'use client';
import Image from "next/image";
import Feed from "@/components/Feed";
import DefaultStats from "@/components/Stats/SecondaryStats";
import Sponsors from "@/components/Sponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";


import Caresoul from "@/components/Carousel";
import CarouselItem from "@/components/Carousel/CarouselItem";
import FeedCard from "@/components/EventCards/FeedCard";
import FeedCardImage from "@/components/Feed/FeedCards/FeedCardImage";

export default function Home() {
  return (
    <>
      <Caresoul>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Caresoul>


      <Feed>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </Feed>

      <DefaultStats />
      <Feed>
        <FeedCardImage />
        <FeedCardImage />
        <FeedCardImage />
        <FeedCardImage />
        <FeedCardImage />
      </Feed>

      <Sponsors>
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </Sponsors>
    </>
  );
}
