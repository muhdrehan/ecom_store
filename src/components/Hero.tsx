import React from "react";
import { Button } from "./ui/button";
import Feature1 from "@/components/icons/Featured1.webp";
import Feature2 from "@/components/icons/Featured2.webp";
import Feature3 from "@/components/icons/Featured3.webp";
import Feature4 from "@/components/icons/Featured4.webp";
import Image from "next/image";
import Header from "@/components/icons/header.webp"
import {BsCart4} from "react-icons/bs"

const Hero = () => {
  return (
    <section className="flex px-9 py-6 items-center justify-evenly">
      <div className="">
        <Button className="bg-[#e1edff] text-lg text-blue-600 rounded-md">
          {" "}
          Sale 70%{" "}
        </Button>
        <h1 className="text-5xl items-center justify-center font-extrabold mt-24">
          {" "}
          An Industrial Take on Streetwear{" "}
        </h1>
        <p className="mt-12">
          {" "}
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
          <Button className=" flex bg-black text-white font-semibold w-60 h-12 rounded-md items-center mt-16">
            {" "}
            <BsCart4 className="items-start gap-7 "/>
            Start Shopping{" "}
            
          </Button>
          <div className="flex gap-24 pt-28">
            <Image src={Feature1} alt="Feature1" className="w-20"></Image>
            <Image src={Feature2} alt="Feature2" className="w-20"></Image>
            <Image src={Feature3} alt="Feature3" className="w-20"></Image>
            <Image src={Feature4} alt="Feature4" className="w-20"></Image>
          </div>
        </p>
      </div>

      <div className=" w-auto h-auto rounded-full bg-[#f1f1f1] items-center">
        <Image src={Header} alt="header"/>
         
      </div>
    </section>
  );
};

export default Hero;
