"use client";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";
import Hobbies from "@/data/hobbies";
import TechStacks from "@/data/stacks";
import { motion } from "framer-motion";

const toolboxItems = Object.entries(TechStacks).map(
  ([key, { name, icon }]) => ({
    name,
    icon,
  })
);

const hobbies = Hobbies;

import Image from "next/image";
import { useRef } from "react";
export const AboutSection = () => {
  const constraintsRef = useRef(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          {...{
            title: "A Glimpse Into My World",
            eyebrow: "About Me",
            description:
              "Learn more about me, my background, and my journey to becoming a software engineer.",
          }}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                {...{
                  title: "My Reads",
                  description: "Explore the books shaping my perspectives.",
                }}
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                {...{
                  title: "My Toolbox",
                  description:
                    "Explore the technologies and tools I use to create awesome digital experiences.",
                  className: "",
                }}
              />
              <ToolboxItems
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
                toolboxItems={toolboxItems.slice(0, toolboxItems.length / 2)}
              />
              <ToolboxItems
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:60s]"
                toolboxItems={toolboxItems.slice(
                  toolboxItems.length / 2,
                  toolboxItems.length
                )}
              />
            </Card>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  {...{
                    title: "My Hobbies",
                    description:
                      "Explore my interests, hobbies, and other things I enjoy doing beyond the digital realm.",
                    className: "px-6 py-6",
                  }}
                />
                <div className="relative flex-1" ref={constraintsRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full py-1.5 absolute cursor-grab"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintsRef}
                      key={hobby.title}
                    >
                      <span className="font-medium text-gray-100/80">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
                <Image
                  className="h-full w-full object-cover"
                  src={mapImage}
                  alt="Map"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 p-2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 -z-10"></div>
                  <Image src={smileMemoji} alt="Smiling Memoji" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
