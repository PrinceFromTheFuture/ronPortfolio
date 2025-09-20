import Image from "next/image";
import FadeInOnScroll from "./FadeIn";
import Menu from "./Menu";
import { ArrowRight, Linkedin } from "lucide-react";
import VideoPlayer from "./Video";
import Feature from "./Feature";
import { CarouselComp } from "./CarouselComp";
import Accordion from "./Accordion";
import { whatsappLink } from "@/constants";
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col  overflow-hidden ">
      <div className=" absolute mt-4 px-4 lg:px-30 z-20 gap-4 w-full ">
        <div className=" flex gap-3 items-center ">
          <div
            className=" bg-black size-5  rounded-full
              "
          ></div>
          <div className="text-3xl mt-1">RON</div>
        </div>
      </div>
      <Menu />

      <div className="px-6 lg:px-30 w-full mx-auto   ">
        <FadeInOnScroll>
          <div className="relative overflow-hidden rounded-b-full w-full  h-[50vh] lg:h-[100vh] lg:w-[550px] mx-auto  ">
            <Image
              src="/hero.png"
              alt="Ron - Graphic Designer & Game Artist"
              className="object-cover "
              fill
            />
          </div>
        </FadeInOnScroll>
        <div className=" lg:absolute left-0 top-32 z-50  lg:px-30 w-full mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="">
            <div className=" max-w-[400px]">
              <FadeInOnScroll>
                <section className=" mt-6">
                  <h2 className=" font-secondary text-black text-4xl">Hey. Im Ron,</h2>
                  <h2 className="  text-black text-[100px]/24">a Graphic</h2>
                  <h2 className=" font-secondary italic text-black text-[85px]/18 ">& Game</h2>
                  <h2 className="  text-black text-[100px]/24">Artist</h2>
                </section>
              </FadeInOnScroll>
              <FadeInOnScroll className="font-secondary   text-3xl mt-4">
                <div className=" "></div>
                Creating immersive visual experiences through graphic design and game art that brings stories
                to life and captivates audiences.
              </FadeInOnScroll>
              <FadeInOnScroll
                href={whatsappLink}
                className="bg-black cursor-pointer p-3 w-min whitespace-nowrap  rounded-full  flex items-center gap-6  text-xl mt-6  pl-8"
              >
                <div className=" text-white">contact me</div>
                <div className=" p-2 rounded-full bg-white">
                  <ArrowRight />
                </div>
              </FadeInOnScroll>
            </div>
          </div>
          <FadeInOnScroll className=" lg:grid-cols-1 lg:grid-rows-4 grid grid-cols-2 grid-rows-2 lg:h-7/8  gap-8 mt-10 ">
            <div>
              <div className=" text-5xl">8+</div>
              <div className=" font-secondary text-black/50 text-xl">Years Experience</div>
            </div>
            <div>
              <div className=" text-5xl">150+</div>
              <div className=" font-secondary text-black/50 text-xl">Projects Completed</div>
            </div>
            <div>
              <div className=" text-5xl">25+</div>
              <div className=" font-secondary text-black/50 text-xl">Game Titles</div>
            </div>
            <div>
              <div className=" text-5xl">50+</div>
              <div className=" font-secondary text-black/50 text-xl">Brand Identities</div>
            </div>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll className=" mb-24 grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 lg:gap-8 grid-rows-2 w-full mt-16">
          <div className=" pr-6 pb-6 lg:border-r lg:border-r-black/40 lg:pb-0 lg:border-0 lg:pr-8  border-r border-r-black/40 border-b border-b-black/40">
            <div className=" text-2xl ">Character Design</div>
            <div className=" font-secondary text-black/50 text-lg">
              Bringing unique personalities to life through detailed character concepts and 3D modeling.
            </div>
          </div>
          <div className=" pl-6 pb-6 lg:border-r lg:border-r-black/40 lg:pl-0 lg:pb-0 lg:border-0 lg:pr-8  border-b border-b-black/40">
            <div className=" text-2xl">Environment Art</div>
            <div className=" font-secondary text-black/50 text-lg">
              Crafting immersive worlds and atmospheric environments that enhance gameplay experiences.
            </div>
          </div>
          <div className=" pr-6 pt-6 lg:border-r lg:border-r-black/40 lg:pt-0 lg:border-0 lg:pr-8  border-r border-r-black/40 ">
            <div className=" text-2xl">Brand Identity</div>
            <div className=" font-secondary text-black/50 text-lg">
              Creating memorable visual identities that communicate brand values and connect with audiences.
            </div>
          </div>
          <div className=" pl-6 pt-6 lg:border-r lg:border-r-black/40 lg:pl-0 lg:pt-0 lg:border-0  ">
            <div className=" text-2xl">UI/UX Design</div>
            <div className=" font-secondary text-black/50 text-lg">
              Designing intuitive interfaces that enhance user experience and drive engagement.
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll className="   text-6xl lg:text-8xl  ">PORTFOLIO</FadeInOnScroll>
        <div className="lg:px-24">
          <FadeInOnScroll>
            <Feature
              content={
                <CarouselComp
                  items={[
                    <VideoPlayer key="/candle.mp41" src="/candle.mp4" />,
                    <div key="/candle.mp42" className=" relative w-full   h-full">
                      <Image
                        src="/candle.png"
                        alt="Mystical Candle Collection - 3D Product Visualization"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                    <div key="/candle.mp444" className=" relative w-full   h-full">
                      <Image
                        src="/3candles.png"
                        alt="Premium Candle Set - Brand Photography"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                  ]}
                />
              }
              description="A luxury candle brand identity featuring premium 3D product visualization, atmospheric lighting, and sophisticated packaging design. This project showcases expertise in product photography, 3D modeling, and brand storytelling through visual elements that evoke warmth, elegance, and premium quality."
              title="Mystical Candle Collection"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Feature
              content={
                <CarouselComp
                  items={[
                    <VideoPlayer key="/candle.mp413424" src="/box.mp4" />,
                    <div key="/candle.mp41432" className=" relative w-full   h-full">
                      <Image
                        key="/candle.mp41511"
                        src="/box.avif"
                        alt="Interactive 3D Box - Game Asset"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                  ]}
                />
              }
              description="An interactive 3D treasure box asset designed for mobile puzzle games. Features detailed wood textures, metallic accents, and smooth animations. The asset includes multiple states (closed, opening, open) and is optimized for real-time rendering across various platforms."
              title="Interactive Treasure Box"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Feature
              content={
                <CarouselComp
                  items={[
                    <div key="/candle.mp411" className=" relative w-full   h-full">
                      <Image
                        src="/golden.png"
                        alt="Golden Age Game Environment"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                    <div key="/candle.mp412" className=" relative w-full   h-full">
                      <Image
                        key="/candle.mp415"
                        src="/golden1.png"
                        alt="Medieval Castle Interior - Game Art"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                  ]}
                />
              }
              description="A medieval fantasy environment for an RPG game featuring golden architecture, intricate details, and atmospheric lighting. This project demonstrates expertise in environment design, texture painting, and creating immersive game worlds that enhance player engagement and storytelling."
              title="Golden Age Environment"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Feature
              content={
                <CarouselComp
                  items={[
                    <div key="/candle.mp416" className=" relative w-full   h-full">
                      <Image
                        key="/candle.mp41432"
                        src="/poker.png"
                        alt="Poker Game UI Design"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                    <div key="/candle.mp41243" className=" relative w-full   h-full">
                      <Image
                        key="/candle.mp41982734"
                        src="/poker1.jpg"
                        alt="Card Game Interface - Mobile Design"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                    <div key="/candle.mp4103" className=" relative w-full   h-full">
                      <Image
                        key="/candle.mp41124"
                        src="/poker3.jpg"
                        alt="Casino Game Branding"
                        className="object-cover rounded-2xl"
                        fill
                      />
                      ,
                    </div>,
                  ]}
                />
              }
              description="Complete UI/UX design for a mobile poker game featuring intuitive card layouts, engaging animations, and casino-inspired aesthetics. The project includes user interface design, iconography, and visual effects that create an authentic gaming experience while maintaining usability across different screen sizes."
              title="Poker Game Interface"
            />
          </FadeInOnScroll>
        </div>
        <div className=" flex flex-col gp">
          <FadeInOnScroll className=" mt-16 lg:mt-24 text-4xl">
            Crafting Immersive Visual Experiences
          </FadeInOnScroll>
          <FadeInOnScroll className=" mt-8 text-3xl  font-secondary ">
            Hey, I&apos;m Ron, a passionate graphic designer and game artist with over 8 years of experience
            creating compelling visual content across multiple industries.
          </FadeInOnScroll>
          <FadeInOnScroll className=" mt-8 text-xl text-black/70 font-secondary ">
            Specializing in character design, environment art, and brand identity, I bring a unique blend of
            artistic vision and technical expertise to every project. From concept to completion, I work
            closely with clients and development teams to create visuals that not only look stunning but also
            serve their intended purpose—whether that&apos;s enhancing gameplay, building brand recognition,
            or engaging users. My experience spans mobile games, console titles, brand campaigns, and digital
            products, always with a focus on quality, creativity, and user experience.
          </FadeInOnScroll>
        </div>
        <div className=" lg:flex lg:gap-20 justify-between items-center">
          <div className=" lg:w-[1000px]">
            <FadeInOnScroll>
              <div className=" mt-20 lg:mt-30  text-6xl lg:text-8xl ">Frequently Asked Questions</div>
              <h2 className=" font-secondary text-black/60 text-xl mt-2">
                If you have any other questions, please contact me directly.
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll
              href={whatsappLink}
              className="bg-black cursor-pointer p-3 w-min whitespace-nowrap  rounded-full  flex items-center gap-6  text-xl mt-4 mb-12  pl-8"
            >
              <div className=" text-white">contact me</div>
              <div className=" p-2 rounded-full bg-white">
                <ArrowRight />
              </div>
            </FadeInOnScroll>
          </div>
          <div className=" lg:w-full">
            <Accordion
              question="What services do you offer?"
              answer="I specialize in graphic design and game art services including character design, environment art, 3D modeling, UI/UX design, brand identity, logo design, and visual effects. I work with both indie developers and established studios, as well as businesses looking for compelling visual branding."
            />
            <Accordion
              question="What's your typical project timeline?"
              answer="Project timelines vary depending on scope and complexity. A character design might take 1-2 weeks, while a complete game environment could take 4-8 weeks. Brand identity projects typically range from 2-4 weeks. I always provide detailed timelines during the initial consultation and keep clients updated throughout the process."
            />
            <Accordion
              question="Do you work with specific game engines or software?"
              answer="I'm proficient in industry-standard tools including Blender, Maya, Photoshop, Illustrator, Figma, and Unity. I can create assets optimized for Unity, Unreal Engine, and other popular game engines. I also stay updated with the latest software and techniques to ensure the highest quality deliverables."
            />
            <Accordion
              question="What's included in your pricing?"
              answer="My pricing includes concept development, revisions (typically 2-3 rounds), final deliverables in requested formats, and source files. Additional services like animation, rigging, or extensive revisions may incur extra costs. I provide transparent pricing upfront with no hidden fees."
            />
          </div>
        </div>
        <FadeInOnScroll>
          <footer className=" p-4 mt-24 mb-8">
            <h1 className=" text-5xl">RON </h1>
            <h3 className=" text-xl mt-2">Graphic Designer & Game Artist based in London</h3>
            <p className=" text-black/70 mt-3  text-lg font-secondary">
              Hi, I&apos;m Ron – a passionate graphic designer and game artist dedicated to creating immersive
              visual experiences that captivate audiences and bring creative visions to life.
            </p>{" "}
            <nav className=" mt-6">
              <h2 className=" text-2xl mb-4">Social</h2>
              <ul className=" font-secondary flex flex-col gap-4   text-xl text-black/70">
                <a href={whatsappLink} className=" flex gap-4 items-center ">
                  <Linkedin />
                  ArtStation
                </a>
                <a href={whatsappLink} className=" flex gap-4 items-center ">
                  <Linkedin />
                  LinkedIn
                </a>
                <a href={whatsappLink} className=" flex gap-4 items-center ">
                  <Linkedin />
                  Instagram
                </a>
                <a href={whatsappLink} className=" flex gap-4 items-center ">
                  <Linkedin />
                  Behance
                </a>
              </ul>
            </nav>
          </footer>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
