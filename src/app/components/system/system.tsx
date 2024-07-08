"use client"

import { motion } from "framer-motion";
import { bgs } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { Overlay } from "../overlay/overlay";
import { handleClick, startUse } from "../../../utils/functions";
import { FaPlay } from "react-icons/fa6";

export function SystemComponent() {
  return (
    <div className="gradient-sergest mx-auto z-500 grid items-center lg:mt-[14rem] 2xl:pt-[9rem] mt-[48rem] md:mt-[32rem]  pt-[6rem]">
      <div className="flex lg:flex-row flex-col container">
        <div className="lg:w-6/12 2xl:w-7/12 items-center grid">
          <div className="text-center mt-[-2rem] lg:text-start md:-mt-10 sm:px-14">
            <h1 className="sm:text-5xl 2xl:text-6xl text-2xl sm:mt-[2rem] lg:mt-2  font-bold text-white ">
              O sistema ideal para a sua empresa!
            </h1> 
            <p className="text-white my-3 w-9/12 lg:w-full mx-auto lg:mx-0 mb-[1rem] lg:mb-0">
              Tenha todos os controles essenciais do seu negócio num único
              lugar. Entre a partir de qualquer dispositivo.
            </p> 
            <div className="flex my-2 justify-center lg:justify-start mb-[2rem] lg:mb-0 gap-4">
              <ButtonSecondary click={startUse}>Começar a usar</ButtonSecondary>
              <button
                onClick={handleClick}
                className="bg border-2 flex gap-2 border-white text-white font-bold rounded-md  px-4"
              >
                <span className="my-auto">Como usar</span>{" "}
                <FaPlay className="my-auto" />
              </button>
            </div>
            
            <p className="font-bold mt-3 text-white  ">
            Teste o SERGEST <span className="underline">gratuitamente</span>  durante 15 dias.
            </p>
          </div>
        </div>

        <div className="lg:w-6/12 text-end relative flex justify-end">
          <Overlay />
          <motion.img
            viewport={{ once: true }}
            initial={{ x: -180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={bgs.bg_system.src}
            className=" md:w-[120%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
