'use client'
import { CardInfo } from "./cardInfo"
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { Input, Pagination, Select, SelectItem } from "@nextui-org/react";


import * as motion from "framer-motion/client"
import { useState } from "react";

const data = [
    {
        name: 'Next.JS',
        category: 'Framework',
        icon: <RiNextjsFill className="text-6xl" />
    },
    {
        name: 'React',
        category: 'Framework',
        icon: <FaReact className="text-6xl" />
    },
    {
        name: 'Node.JS',
        category: 'Framework',
        icon: <FaNodeJs className="text-6xl" />
    },
    {
        name: 'JavaScript',
        category: 'Language',
        icon: <IoLogoJavascript className="text-6xl" />
    },
    {
        name: 'TypeScript',
        category: 'Language',
        icon: <SiTypescript className="text-6xl" />
    },
    {
        name: 'GitHub',
        category: 'Tool',
        icon: <SiTypescript className="text-6xl" />
    },
    {
        name: 'Express',
        category: 'Framework',
        icon: <SiTypescript className="text-6xl" />
    },
    {
        name: 'Tailwind',
        category: 'Design',
        icon: <SiTypescript className="text-6xl" />
    },
    {
        name: 'Figma',
        category: 'Design',
        icon: <SiTypescript className="text-6xl" />
    },
]

export const HomeComponent = () => {
    const items_per_page = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * items_per_page;
    const indexOfFirstItem = indexOfLastItem - items_per_page;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / items_per_page);

    return (
        <div className="w-full flex justify-center items-center p-4 gap-2 flex-wrap">
        
            <h1 className="text-start w-full">Ferramentas</h1>
            
            <div className="w-full flex justify-center items-center p-4 gap-2 flex-wrap">
                {
                    currentItems.map((item, index) => {
                        return (
                            <CardInfo
                                text={item.name}
                                icon={item.icon}
                                key={index}
                            />
                        )
                    })
                }
            </div>
            <Pagination 
                initialPage={1}
                total={totalPages}
                onChange={(value)=>setCurrentPage(value)}
                />

        </div>
    )
}