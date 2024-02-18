'use client';
import Image from "next/image";
import Carousel from "@/components/Carousels/DefaultCaresoul";
import DefaultFeed from "@/components/Feed/DefaultFeed";
import DefaultStats from "@/components/Stats/SecondaryStats";
import DefaultSponsors from "@/components/Sponsors/DefaultSponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";

export default function Home() {
  return (
    <>
      <Carousel>
        <img src="https://picsum.photos/1920/1080?grayscale" alt="1" width={1920} height={1080} />
        <img src="https://picsum.photos/1920/1080?blur" alt="2" width={1920} height={1080} />
        <img src="https://picsum.photos/1920/1080?random" alt="3" width={1920} height={1080} />

      </Carousel>
      <DefaultFeed />
      <DefaultStats />
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
