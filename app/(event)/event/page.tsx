import Caresoul from "@/components/Carousel";
import CarouselItem from "@/components/Carousel/CarouselItem";
import Sponsors from "@/components/Sponsors";
import SponsorCard from "@/components/Sponsors/SponsorCard";

import EventMenu from "@/components/EventMenu";
import EventSearch from "@/components/EventSearch";

export default function EventHome() {
  return (
    <>
    <EventSearch />
      <Caresoul insert={<EventMenu />}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Caresoul>


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
