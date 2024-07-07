'use-client'
import { FaPlay } from "react-icons/fa6";
import { bgs } from "../../../utils";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { startUse } from "../../../utils/functions";
import Image from "next/image";
//import { useState, useEffect } from "react";

export function Hero() {
  const handleClick = () => {
    window.open(
      "https://youtube.com/@sergestoficial1640?si=z22ZmasRfQ5LV9Wy",
      "_blank"
    );
  };

  /*
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
*/
  return (
    <div className="flex flex-col md:flex-row mt-[3rem] -z-10 sm:-mt-8 lg:mt-20 2xl:mt-[3rem] h-[400px]">
      <div className="grid lg:w-6/12 md:w-8/12 text-start">
        <div className="my-auto text-center md:text-start">
          <h1 className="w-11/12 mx-auto text-4xl font-bold lg:text-7xl resp-h1 md:text-5xl md:mx-0 md:w-full lg:mt-10 text-grayser">
            Software de <ColoredText>Faturação</ColoredText> online
          </h1>
          <p className="mt-[1rem] text-lg font-bold  lg:mt-[.6rem]">
            Certificado pela AGT Nº <span className="undelrine">310</span>
          </p>
          <p className=" md:w-10/12 md:text-sm 2xl:text-lg">
            Factura pelo computador, tablet ou telemóvel a qualquer hora. Teste
            o SERGEST{" "}
            <span className="font-bold color-text text-underline">
              gratuitamente
            </span>{" "}
            durante
            <span className="font-bold"> 15 dias</span>.
          </p>
          <div className="flex justify-center md:justify-start mt-[1.5rem] gap-3 md:mt-[.8rem] lg:mt-[1rem]">
            <ButtonSecondary className="md:text-xs lg:text-normal md:mb-6 lg:mb-auto " click={startUse}>Começar a usar</ButtonSecondary>
            <button
              onClick={handleClick}
              className="flex gap-2 px-4 py-2 text-sm font-bold text-red-500 border-2 border-red-500 rounded-md sm:text-md sm:py-[.65rem] md:text-xs lg:text-medium md:mb-6 lg:mb-auto "
            >
              <span className="my-auto">Como usar</span>{" "}
              <FaPlay className="my-auto" />
            </button>
          </div>
        </div>
      </div>


      <div className="relative grid lg:w-6/12 md:w-6/12 -z-10">
        <Overlay />
        <Image
          src={bgs.bg_hero}
          className="w-full mt-6 md:my-auto -z-10"
          alt=""
        />
      </div>
    </div>
  );
}
