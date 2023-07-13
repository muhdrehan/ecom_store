import Image from "next/image";
import React from "react";
import Snap1 from "@/components/icons/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png";
import Snap2 from "@/components/icons/bf4d73c91b7c7c2875fbfbb8e1a9c8113c82e90a-370x394.png";
import Snap3 from "@/components/icons/ffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png";

const products = () => {
  return (
    <div className="flex justify-evenly gap-24 mt-24">
      <div>
        <Image src={Snap1} alt="Snap1" className="w-full"/>
        <h1 className="font-extrabold ">
          {" "}
          Brushed Shirt <br /> 325${" "}
        </h1>
      </div>
      <div>
        <Image src={Snap2} alt="Snap2" className="w-full" />
        <h1 className="font-extrabold ">
          {" "}
          Sash Tee Shirt <br /> 379${" "}
        </h1 >
      </div>
      <div>
        <Image src={Snap3} alt="Snap3" className="w-full h-96"/>
        <h1 className="font-extrabold ">
          {" "}
          Flex Sweat Tee shirt <br /> 175${" "}
        </h1>
      </div>
    </div>
  );
};

export default products;
