import { Divider } from "@nextui-org/react";
import { About } from "./components/about";
import { HomeComponent } from "./components/homeComponent";
import { NavBar } from "./components/navbar";
import { Test } from "./components/test";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-start flex-col">
      <NavBar/>

      <About/>
      <Divider className="my-4" />
      <HomeComponent/>
      <Divider className="my-4" />
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
    </div>
  );
}
