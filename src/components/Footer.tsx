import Image from "next/image";
import React from "react";
import Logo from "@/components/icons/Logo.webp";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" px-16 mt-20 flex justify-evenly">
      <div>
        <Image src={Logo} alt="Logo" className=" h-8 text-xl" />

        <h1 className="mt-8">
          {" "}
          Small, artisan label that offers a thoughtfully <br />
          curated collection of high quality everyday essentials made.{" "}
        </h1>

        <div className=" flex mt-24 gap-8">
          <BsTwitter className="text-2xl w-12 h-12 bg-slate-200 rounded-xl items-center" />
          <RiFacebookFill className="text-2xl w-12 h-12 bg-slate-200 rounded-xl items-center" />
          <GrLinkedinOption className="text-2xl w-12 h-12 bg-slate-200 rounded-xl items-center" />
        </div>
      </div>
      <div>
        <ul>
          <li className="font-semibold">Company </li>
          <li>About </li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-semibold">Support </li>
          <li>Support Cares </li>
          <li>24H Service </li>
          <li>Quick Chat</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-semibold">Contact </li>
          <li>WhatsApp </li>
          <li>Support 24H</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
