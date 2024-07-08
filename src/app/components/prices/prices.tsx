"use client"

import { FaArrowRight } from "react-icons/fa6";
import { plans_dummies } from "../../../infra/plans_dummies";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { LoginNow } from "../../../utils/functions";
import { InNumbers } from "../in-numbers/in-numbers";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export function Prices() {
  return (
    <div id="prices" className=" h-[400px]">
      <div className="text-center">
        <h1 className="sm:text-[56px] text-[30px] leading-none font-bold">
          Preços & Planos da <ColoredText>Plataforma !</ColoredText>{" "}
        </h1>
        <p className="mx-auto mt-4 lg:w-3/12 lg:text-xl sm:w-6/12 text-grayser">
          Escolha o Planos perfeito para a Gestão do seu negócio
        </p>
      </div>
      <br />
      <br />
      <div className="cards">
        <div className="grid mt-[1rem] lg:mt-[3rem] lg:gap-8 gap-6  lg:grid-cols-3 sm:grid-cols-2">
          {plans_dummies.map((plan) => (
            <div
              key={plan.id}
              className={`card ${plan.id == 2
                  ? "gradient-sergest shadow-2xl lg:shadow-primary text-white"
                  : "hover:bg-primary/5"
                }  transition-all hover:-translate-y-2 border rounded-xl shadow-xl py-8 px-6`}
            >
              <div className="relative flex gap-6">
                <Overlay />
                <Image src={plan.logo.src} className="w-[4em]" alt="" />
                <h1 className={`sm:text-3xl text-2xl  my-auto font-bold`}>
                  {plan.plan}
                </h1>
              </div>
              <p
                className={`text-sm sm:text-sm 2xl:text-lg mt-4 ${plan.id == 2 ? "  text-white" : "text-grayser"
                  } `}
              >
                {plan.desc}
              </p>
              <div className="mt-4 text-start">
                <b className="text-secondary">Benefícios</b>
                <br />
                <ul className="pl-2 text-sm list-disc sm:text-md lg:text-md">
                  {plan.benefits.split("|").map((benefit, index) => (
                    <li key={index} className="flex my-[.2rem]">
                      <FiCheckCircle
                        className={`text- ${plan.id != 2 ? "text-primary " : ""
                          } my-auto`}
                      />
                      <span
                        className={`ml-2  ${plan.id != 2 ? "text-grayser " : ""
                          }`}
                      >
                        {benefit.trim()}
                      </span>
                    </li>
                  ))}
                </ul>

                <br />
                <b className="text-secondary">{plan.invest}</b>
                <p
                  className={`  ${plan.id != 2 ? " font-normal " : "font-bold"
                    }`}
                >
                  Teste{" "}
                  {plan.id != 2 ? (
                    <ColoredText className="font-semibold underline">
                      <span className="underline text-underline">grátis </span>
                    </ColoredText>
                  ) : (
                    <span className="font-bold">grátis </span>
                  )}
                  por <span className="underline">15</span> dias
                </p>

                {plan.id != 2 ? (
                  <>
                    <br />
                    <ColoredText className={`text-5xl h2 font-bold mt-2`}>
                      {" "}
                      {plan.price}
                    </ColoredText>
                    <br />
                  </>
                ) : (
                  <h2 className={`text-5xl h2 font-bold mt-2`}>{plan.price}</h2>
                )}

                <br />
                <button
                  onClick={LoginNow}
                  className={`border-2 ${plan.id !== 2 ? "bg-primary border-primary" : ""
                    } py-4 click px-6 rounded-md font-semibold text-white`}
                >
                  {plan.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <button onClick={() => window.location.href = '/blogs'} className="flex gap-3 py-3 mx-auto font-bold text-white rounded-lg click bg-secondary px-9">
          <span className="my-auto">Blog</span>
          <FaArrowRight className="my-auto " />
        </button>
        <br />
      </div>

      <InNumbers />
    </div>
  );
}
