'use-client'
import { FaPlay } from "react-icons/fa6";
import { screens } from "../../../utils";
import { handleClick, startUse } from "../../../utils/functions";
import { ButtonSecondary } from "../button-secondary/button-secondary";
import Image from "next/image";

export function SubHero() {
  return (
    <div className="relative">
      <Image
        src={screens.screen_dash}
        className="absolute bottom-[-19rem] sm:bottom-[-3rem] shadow-2xl -rotate-6 left-[5%] border-[8px] rounded-xl border-primary w-[13rem] z-10"
        alt=""
      />

      <Image
        src={screens.screen_login}
        className="absolute md:hidden lg:block w-[12rem] bottom-[-22rem] sm:bottom-[-8rem]  border-[8px] rounded-xl rotate-6 shadow-2xl border-primary left-[42%] sm:left-[20%] z-10"
        alt=""
      />

      <div className="flex clip mt-[170px] mt-t md:mt-[-4.5rem]   lg:mt-[4rem] rounded-[30px] sm:rounded-[65px] gradient-sergest h-[410px] lg:h-[450px]">
        <div className="sm:w-6/12 "></div>
        <div className="lg:w-6/12 sm:w-8/12 sm:text-start mt-6 sm:mt-[4rem] lg:my-auto">
          <div className="text-center sm:pe-6 sm:text-start lg:px-20">
            <h1 className="px-4 text-xl font-semibold text-white md:px-0 sm:text-3xl">
              Sem preocupações, onde estiveres estamos também.
            </h1>
            <p className="w-10/12 mx-auto mt-2 text-xs text-white sm:mt-8 sm:mx-0 sm:w-auto sm:text-sm sm:ps-14 lg:ps-0 lg:text-md 2xl:text-lg">
              Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
              gama de serviços que você pode acessar confortavelmente de onde
              estiver, através da nossa plataforma.
            </p>
            <div className="flex justify-center w-full gap-4 mt-4 mb-3 sm:justify-end sm:pe-6 lg:pe-0 lg:justify-start">
              <ButtonSecondary click={startUse}>Começar a usar</ButtonSecondary>
              <button
                onClick={handleClick}
                className="flex gap-2 px-4 font-bold text-white border-2 border-white rounded-md bg"
              >
                <span className="my-auto">Como usar</span>{" "}
                <FaPlay className="my-auto" />
              </button>
            </div>
            <span className="font-bold text-sm sm:text-md text-white mt-[1rem] ">
              Teste o SERGEST gratuitamente durante 15 dias.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
