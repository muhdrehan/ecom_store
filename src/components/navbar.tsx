import Logo from "@/components/icons/Logo.webp";
import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";

const navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Image src={Logo} alt="Image" className="w-40" />
      <ul className="flex gap-x-14">
        <li className="text-lg "> Male </li>
        <li className="text-lg "> Female </li>
        <li className="text-lg "> Kids </li>
        <li> All Products </li>
      </ul>
         
    <input placeholder="Search" className="border-[2px] text-lg border-[#f1f1f1]"/>
     
      <div className="w-12 h-12 bg-[#f1f1f1] rounded-full flex justify-center items-center hover">
        <PiShoppingCartSimple className="text-2xl" />
      </div>
    </div>
  );
};

export default navbar;
