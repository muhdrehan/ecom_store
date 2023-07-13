import Image from "next/image";
import React from "react";
import Feature from "@/components/icons/feature.webp";

const Moreprod = () => {
  return (
    <div className="flex justify-evenly mt-24 px-16">
      <div className="flex gap-12 justify-evenly mt-20 px-14 flex-row">
        <div className="w-full items-center justify-self-center">
          <h1 className="font-semibold text-2xl">
            Using Good Quality Materials
          </h1>
          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full items-center justify-self-center">
          <h1 className="font-semibold text-2xl">
            Using Good Quality Materials
          </h1>
          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full items-center justify-self-center">
          <h1 className="font-semibold text-2xl">
            Using Good Quality Materials
          </h1>
          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full items-center justify-self-center">
          <h1 className="font-semibold text-2xl">
            Using Good Quality Materials
          </h1>
          <p>Lorem ipsum dolor sit armt, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl w-full">
          Unique and Authentic Vintage Designer Jewellery
        </h1>

        <Image src={Feature} alt="feature" />
      </div>
    </div>
  );
};

export default Moreprod;
