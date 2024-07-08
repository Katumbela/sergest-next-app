'use client'
import { FaStar } from "react-icons/fa6";
import { Overlay } from "../overlay/overlay";
import { ReactPropTypes } from "react";
import Image from "next/image";

interface CTProps {
  pic: string;
  nome: string;
  props?: ReactPropTypes;
  desc: string;
  role: string
}

export function Cardtestimonial({ props, nome, role, desc, pic }: CTProps) {
  return (
    <div {...props} className="    bg-white transition-all hover:border-gray-200 border border-white  rounded-xl shadow-xl py-14 px-6">
      <div className="text-center gap-6 relative">
        <Overlay />
        <Image
          src={pic}
          width={100}
          height={100}
          className="w-[4em] border-2 border-primary rounded-full mx-auto"
          alt=""
        />
        <h1 className="text-2xl mt-auto text-grayser font-bold">{nome}</h1>
        <span className="text-sm text-gray-500 font-normal">{role}</span>
      </div>
      <div className="mt-4 text-center">
        <p className="text-grayser">{desc}</p>
        <br />
        <div className="flex justify-center gap-4">
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}
