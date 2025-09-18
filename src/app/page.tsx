import Image from "next/image";
import FadeInOnScroll from "./FadeIn";
import Menu from "./Menu";
import { ArrowRight, Expand } from "lucide-react";
import ReactPlayer from "react-player";
import VideoPlayer from "./Video";
import Dialog from "./Dialog";
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col  ">
      <div className=" absolute mt-4 px-4 z-20 gap-4 w-full ">
        <div className=" flex gap-3 items-center ">
          <div
            className=" bg-black size-5  rounded-full
              "
          ></div>
          <div className="text-3xl mt-1">RON</div>
        </div>
      </div>
      <Menu />

      <div className="px-6 w-full mx-auto   ">
        <FadeInOnScroll>
          <div className="relative overflow-hidden rounded-b-full w-full  h-[50vh]">
            <Image src="/1.png" alt="fsd" className="object-cover " fill />
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <section className=" mt-6">
            <h2 className=" font-secondary text-black text-4xl">Hey. I'm Ron,</h2>
            <h2 className="  text-black text-[110px]/24">a UI/UX</h2>
            <h2 className=" font-secondary italic text-black text-[85px]/18 ">& Brand</h2>
            <h2 className="  text-black text-[110px]/24">designer</h2>
          </section>
        </FadeInOnScroll>
        <FadeInOnScroll className="font-secondary  text-3xl mt-4">
          Transforming ideas into stunning visuals—UI/UX and brand design that captivates, engages, and delivers results.
        </FadeInOnScroll>
        <FadeInOnScroll className="bg-black p-3 w-min whitespace-nowrap  rounded-full  flex items-center gap-6  text-xl mt-4  pl-8">
          <div className=" text-white">contact me</div>
          <div className=" p-2 rounded-full bg-white">
            <ArrowRight />
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll className=" grid grid-cols-2 grid-rows-2 w-full gap-4 mt-10 ">
          <div>
            <div className=" text-4xl">15+</div>
            <div className=" font-secondary text-black/50 text-xl">Years Of Expirance</div>
          </div>
          <div>
            <div className=" text-4xl">15+</div>
            <div className=" font-secondary text-black/50 text-xl">Years Of Expirance</div>
          </div>
          <div>
            <div className=" text-4xl">15+</div>
            <div className=" font-secondary text-black/50 text-xl">Years Of Expirance</div>
          </div>
          <div>
            <div className=" text-4xl">15+</div>
            <div className=" font-secondary text-black/50 text-xl">Years Of Expirance</div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll className=" grid grid-cols-2 grid-rows-2 w-full mt-10">
          <div className=" pr-4 pb-4 border-r border-r-black/40 border-b border-b-black/40">
            <div className=" text-3xl ">User-Centered Design</div>
            <div className=" font-secondary text-black/50 text-lg">Intuitive and engaging experiences tailored for your audience.</div>
          </div>
          <div className=" pl-4 pb-4 border-b border-b-black/40">
            <div className=" text-3xl">User-Centered Design</div>
            <div className=" font-secondary text-black/50 text-lg">Intuitive and engaging experiences tailored for your audience.</div>
          </div>
          <div className=" pr-4 pt-4 border-r border-r-black/40 ">
            <div className=" text-3xl">User-Centered Design</div>
            <div className=" font-secondary text-black/50 text-lg">Intuitive and engaging experiences tailored for your audience.</div>
          </div>
          <div className=" pl-4 pt-4 ">
            <div className=" text-3xl">User-Centered Design</div>
            <div className=" font-secondary text-black/50 text-lg">Intuitive and engaging experiences tailored for your audience.</div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll className=" mt-16 text-5xl">Crafting Meaningful Brands & Intuitive Experiences</FadeInOnScroll>
        <FadeInOnScroll className=" mt-8 text-3xl  font-secondary ">
          Hey, I'm Solt, a UI/UX and brand designer passionate about creating visually compelling and user-friendly digital experiences.{" "}
        </FadeInOnScroll>
        <FadeInOnScroll className=" mt-8 text-xl text-black/70 font-secondary ">
          With a keen eye for aesthetics and a deep understanding of user behavior, I design brands and interfaces that not only look great but also
          resonate with audiences. Whether it's building a brand identity from the ground up or refining a digital product for seamless usability, I
          blend strategy, creativity, and functionality to bring ideas to life. Let's collaborate and make something extraordinary."
        </FadeInOnScroll>
        <FadeInOnScroll className=" mt-20 text-6xl ">PORTFOLIO</FadeInOnScroll>

        <FadeInOnScroll className=" px-2 pt-6 hover:bg-black/10 transition-all mt-8 border-t border-t-black/40 ">
          <Dialog description="fds" title="fsd">
            <div className="  flex w-full justify-between items-start mb-2 ">
              <div className="text-4xl ">Somthing</div>
              <div className=" rounded-full text-white bg-main p-3">
                <Expand className=" size-4" />
              </div>
            </div>
            <div className="text-xl text-black/70 font-secondary mb-4 ">
              With a keen eye for aesth etics and a deep und erstanding of user fbehavioreso
            </div>
            <VideoPlayer src="/file.mp4" />
          </Dialog>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
