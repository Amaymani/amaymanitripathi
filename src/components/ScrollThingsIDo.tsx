"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Full-Stack Wizardry",
    description:
      " I don't just build web apps. I engineer seamless digital experiences. I create lightning-fast, scalable, and intuitive applications that work flawlessly across devices. Whether it's an interactive dashboard, a social media platform, or a high-performance web app, I've got it covered.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/fullstack.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "DevOps & Cloud Sorcery",
    description:
      "I set up CI/CD pipelines, automate deployments, and optimize cloud infrastructure to ensure applications run smoothly on AWS. Whether it's scalability, security, or real-time monitoring, I make sure your system is rock-solid.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/cloud.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Speed & Performance Alchemy",
    description:
      "Nobody likes a slow website. I implement lazy loading, caching strategies, database optimization, and code splitting to make apps run ultra-fast and buttery smooth. I make sure your users get the best experience—every single time.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/car.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI & Automation Brilliance",
    description:
      "  Why work harder when you can work smarter? I develop AI-powered chatbots, workflow automation... that enhance efficiency. Whether it's personalized content, automated customer service, or smart analytics, I help you to take decisions effortlessly.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ai.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function ScrollThingsIDo() {
  return (
    <div className="p-10 ">
      <StickyScroll contentClassName="" content={content} />
    </div>
  );
}
