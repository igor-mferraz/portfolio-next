'use client'
import {  Divider } from "@nextui-org/react"
import Image from "next/image"
import { BsDatabaseFillGear } from "react-icons/bs"
import { IoIosDesktop } from "react-icons/io"

export const About = () => {
    return (
        <div className="flex justify-start items-center w-full h-full gap-4 flex-col sm:flex-row">


            <div className="flex-1 flex flex-col">

                <div className="flex-1 flex justify-center items-center h-full">

                    <Image
                        className="flex justify-center items-center rounded-full mt-2 bg-transparent"
                        src="/assets/avatar.jpg"
                        alt="avatar"
                        width={200}
                        height={200}

                    />
                </div>
                <div className="flex-1 justify-center items-center h-full">
                    <h1 className="flex justify-center items-center h-full text-start font-bold p-8">Meu nome é Igor, sou desenvolvedor Full-Stack</h1>
                </div>
            </div>

            <div className="flex-1 p-8 flex gap-4 flex-col">

                <div className="flex justify-center items-center gap-2">
                    <div className="w-20">
                        <IoIosDesktop className="w-20 text-6xl"/>
                    </div>
                    <p className="flex-1">
                        Desenvolvo interfaces responsivas e atraentes com as melhores e atuais tecnologias, integrando design e experiência do usuário para criar aplicações funcionais e intuitivas.
                    </p>
                </div>

                <Divider className="my-4" />

                <div className="flex justify-center items-center gap-2">
                    <div className="w-20">
                        <BsDatabaseFillGear className="w-20 text-6xl "/>
                    </div>
                    <p>
                        Construa a lógica por trás das aplicações com tecnologias robustas e escaláveis, garantindo que elas sejam eficientes e possam crescer conforme necessário.
                    </p>
                </div>
                
            </div>
        </div>
    )
}