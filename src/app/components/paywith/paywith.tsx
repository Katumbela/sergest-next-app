"use client"

import { motion } from "framer-motion";
import { screens } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { Overlay } from "../overlay/overlay";
import { handleClick, startUse } from "../../../utils/functions";
import { FaPlay } from "react-icons/fa6";

export function PayWith() {
  return (
    <div className="gradient-sergest lg:pt-[4rem] border-b-[8px] border-primary mx-auto overflow-hidden lg:h-[550px] sm:h-[500px] h-[700px] grid items-center pt-[1rem] 2xl:pt-[2rem]">
      <div className="flex flex-col md:flex-row  container">
        <div className=" sm:w-6/12 mb-[4rem] sm:mb-0 items-center grid">
          <div className="sm:text-end text-center my-auto  ">
            <h1 className="lg:text-5xl mt-[2rem] sm:mt-0 text-3xl ms-auto md:w-9/12 2xl:w-6/12 font-bold text-white ">
              Pague com o Express
            </h1>
            <br />
            <p className="text-white text-xs lg:text-md md:w-9/12 2xl:w-8/12 ms-auto">
              Não precisas preocupar-te com as filas dos bancos ou nos ATMs
              porque podes fazer os pagamentos diretamente na plataforma usando
              o Express.
            </p>
            <br />
            <div className="flex gap-4 justify-center sm:justify-end">
              <ButtonSecondary click={startUse}>Começar a usar</ButtonSecondary>
              <button
                onClick={handleClick}
                className="bg border-2 flex gap-2 border-white text-white font-bold rounded-md  px-4"
              >
                <span className="my-auto">Como usar</span>{" "}
                <FaPlay className="my-auto" />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 sm:w-9/12 relative text-end flex justify-end">
          <Overlay />
          <div className="flex gap-8">
            <motion.img
              viewport={{ once: true }}
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              src={screens.screen_pay.src}
              className="absolute bottom-[-9rem] 2xl:bottom-auto rounded-3xl 2xl:left-[3rem] md:left-[2rem] md:w-[15rem] 2xl:w-[17rem]"
              alt=""
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              src={screens.screen_pay_exp.src}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="sm:absolute  rounded-3xl  md:left-[19rem] 2xl:left-[24rem]   md:top-[-1.5rem] 2xl:top-[-5rem] md:w-[15rem] 2xl:w-[17rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
