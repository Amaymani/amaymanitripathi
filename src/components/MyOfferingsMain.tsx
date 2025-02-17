import React from 'react'
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShineBorder } from "@/components/magicui/shine-border";
import OfferMain from "@/components/OfferMain";
import { motion } from 'motion/react';


const MyOfferingsMain = () => {
  return (
    <div className="mb-96">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="">
            <ShineBorder
              className="relative w-[90vw] 2xl:w-[70vw] rounded-lg"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <TextAnimate animation="blurInUp" by="character" duration={2000} className="text-3xl font-bold my-7">
                What do I offer you?
              </TextAnimate>

              <OfferMain/>
                <div className='mx-10 bg-zinc-100 drop-shadow-xl  dark:bg-zinc-900 p-5 rounded-xl flex justify-center items-center mb-10 text-lg font-thin'>
              <p className=''>Some call me a <span className='font-bold'>  Full-Stack Engineer </span> but I like to think of myself as a digital problem-solver, code magician, and occasional bug whisperer. 🙂</p>
              </div>



            </ShineBorder>

          </motion.div>


        </div>
  )
}

export default MyOfferingsMain