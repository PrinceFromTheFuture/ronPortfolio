"use client";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";

export function CarouselComp({ items }: { items: React.ReactNode[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="">
        {items.map((item, index) => {
          return (
            <CarouselItem key={index} className=" w-full overflow-hidden     aspect-[16/9]">
              {item}
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className=" w-full flex justify-center items-center  gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className={cn(
              "transition-all size-2 mt-2  rounded-full",
              index + 1 === current ? "bg-black/60" : "bg-black/20"
            )}
            key={index}
          />
        ))}
      </div>
    </Carousel>
  );
}
