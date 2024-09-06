import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
export const CardInfo = ({ icon, text }: { icon: any; text: string }) => {
    return (


        <Card className="max-w-[200px] w-full">
                <CardBody>
                    <div className="flex justify-center items-center w-full h-full">
                        {icon}
                    </div>
                </CardBody>
                <CardFooter>
                    <p>{text}</p>
                </CardFooter>

        </Card>

    )
}