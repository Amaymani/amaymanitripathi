import React from 'react'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const ThingsIDoMain = () => {
  return (
    <div className="relative mb-96 flex w-[100vw] flex-col items-center justify-center overflow-hidden">
              <VelocityScroll className="dark:bg-zinc-950" defaultVelocity={2} numRows={2}>
                &#x2022; Full-Stack Development
                &#x2022; IoT
                &#x2022; Performance Optimization&#x2022; DevOps & Cloud
                </VelocityScroll>
                <VelocityScroll className='dark:bg-zinc-950' defaultVelocity={3} numRows={1}>
                &#x2022; DevOps & Cloud
                &#x2022; Blockchain & Web3
                &#x2022; AI & Automation
                </VelocityScroll>
              <div className="pointer-events-none absolute left-0 inset-y-0  w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute right-0 inset-y-0  w-1/4 bg-gradient-to-l from-background"></div>
            </div>
  )
}

export default ThingsIDoMain