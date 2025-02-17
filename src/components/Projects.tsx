import React from 'react'
import { FollowerPointerCard } from './ui/following-pointer';
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';


const blogContent1 = {
    slug: "ohmuse",
    author: "Oh-Muse",
    date: "Amay Mani Tripathi",
    title: "Oh-Muse - Social media app",
    description:
        "Full Stack social media web app. It has been made with the practices that makes this app highly scalable. Tons of optimizations has been used in back-end.",
    image: "/Ohmuse-mockup.png",
    authorAvatar: "",
};

const blogContent2 = {
    slug: "strocker",
    author: "Strocker",
    date: "Amay Mani Tripathi",
    title: "Strocker - Stock Portfolio Tracker",
    description:
        "Full Stack social media web app. It has been made with the practices that makes this app highly scalable. Tons of optimizations has been used in back-end.",
    image: "/Strocker-mockup.png",
    authorAvatar: "",
};



const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => {
    return (
        <div className="flex space-x-2 items-center">
            <div className="w-[20px] h-[20px] bg-gradient-to-r from-purple-500 to-purple-800 rounded-full"></div>

            <p>{title}</p>
        </div>)
};
type sendToParent=(str:string)=> void;
interface props{
    sendToParent:sendToParent;


}



const Projects:React.FC<props> = ({sendToParent}) => {

    const [ids,setIds]= useState("");



    

    
    return (
        <div className='flex flex-col  xl:flex-row md:mx-[20%] justify-center items-center'>
            <div className="w-80 mx-auto mt-5 xl:mt-0">
                <FollowerPointerCard
                    title={
                        <TitleComponent
                            title={blogContent1.author}
                            avatar={blogContent1.authorAvatar}
                        />
                    }
                >
                    <div onMouseEnter={()=>{setIds("1"); sendToParent(ids)}} onMouseLeave={()=>{setIds("0");sendToParent(ids)}} className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                        <div className="w-full h-48 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                            <Image
                                src={blogContent1.image}
                                alt="thumbnail"
                                layout="fill"
                                objectFit="cover"
                                className={`group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200 `}
                            />
                        </div>
                        <div className=" p-4">
                            <h2 className="font-bold my-4 text-lg text-zinc-700">
                                {blogContent1.title}
                            </h2>
                            <h2 className="font-normal my-4 text-sm text-zinc-500">
                                {blogContent1.description}
                            </h2>
                            <div className="flex flex-row justify-between items-center mt-10">
                                <span className="text-sm text-gray-500">{blogContent1.date}</span>
                                <Link href={"https://oh-muse.vercel.app/"} className=" cursor-none relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </FollowerPointerCard>
            </div>

            <div className="w-80 mx-auto mt-5 xl:mt-0">
                <FollowerPointerCard
                    title={
                        <TitleComponent
                            title={blogContent2.author}
                            avatar={blogContent2.authorAvatar}
                        />
                    }
                >
                    <div onMouseEnter={()=>{setIds("1"); sendToParent(ids)}} onMouseLeave={()=>{setIds("0");sendToParent(ids)}} className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                        <div className="w-full h-48 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                            <Image
                                src={blogContent2.image}
                                alt="thumbnail"
                                layout="fill"
                                objectFit="cover"
                                className={`group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200 `}
                            />
                        </div>
                        <div className=" p-4">
                            <h2 className="font-bold my-4 text-lg text-zinc-700">
                                {blogContent2.title}
                            </h2>
                            <h2 className="font-normal my-4 text-sm text-zinc-500">
                                {blogContent2.description}
                            </h2>
                            <div className="flex flex-row justify-between items-center mt-10">
                                <span className="text-sm text-gray-500">{blogContent1.date}</span>
                                <Link href={"https://oh-muse.vercel.app/"} className=" cursor-none relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </FollowerPointerCard>
            </div>
        </div>
    )
}

export default Projects