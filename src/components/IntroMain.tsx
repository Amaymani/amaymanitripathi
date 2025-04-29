import React from 'react'
import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useScroll, motion } from "motion/react";


interface Props {
  name: string
}


const IntroMain = ({name}:Props) => {
  return (
    <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} className="mt-[80vh]">
        <BlurFade delay={0.25 * 2} inView>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
           { name}
          </span>
        </BlurFade>
        <div className="text-4xl  flex mt-3 items-center font-bold">
          <span>I</span> &nbsp;
          <AuroraText>
            <WordRotate
              duration={2500}
              className="text-4xl tracking-tighter  font-bold"
              words={["Design Websites", "make Scalable Apps", "make tools for you"]}
            />
            </AuroraText>
        </div>
      </motion.div>
  )
}

export default IntroMain