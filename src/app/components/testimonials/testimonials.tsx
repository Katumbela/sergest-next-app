"use client"
import { testimonials_dummy } from "../../../infra/ddummies";
import { Cardtestimonial } from "../card-testimonial/card-testimonial";
import { circles } from "../../../utils";
import { motion } from "framer-motion";
import { ColoredText } from "../colored-text/colored-text";
import Image from "next/image";

export function Testimonials() {
  return (
    <div id="testimonials" className=" 2xl:mt-[15rem] relative sm:mt-[5rem] mt-[4rem] h-[400px]">
      <div className="absolute -z-20 md:w-[80%] 2xl:w-[85%] 2xl:-right-[50rem] md:-right-[35rem]  md:-bottom-[4rem] 2xl:-bottom-[6rem]">
        <Image
          src={circles.circle_2}
          className=" md:w-[50%] 2xl:w-[50%] "
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="sm:text-[45px] text-[35px] leading-none lg:w-9/12 mx-auto font-bold">
          Descubra o que nossos clientes têm a dizer.
        </h1>

        <p className="2xl:w-3/12 relative whitespace-break-spaces md:w-5/12 text-primary mt-[1rem] sm:text-xl mx-auto">
          <ColoredText className="text-8xl comma font-bold -mt-3 absolute ms-[-2rem]">
            <span>&quot;</span>
          </ColoredText>{" "}
          <span className="text-xl">Experiências que inspiram sucesso</span>
          <ColoredText className="text-8xl comma font-bold -mt-3 absolute me-[-2rem]">
            <span>&quot;</span>
          </ColoredText>{" "}
        </p>

      </div>
      <br />
      <br />
      <div className="cards z-10 2xl:mt-[2rem]">
        <div className="grid gap-8 place-content-center mx-auto items-center lg:grid-cols-3 sm:grid-cols-2">
          {testimonials_dummy.map((test) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 180, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * test.id }} // Correção aqui
              key={test.id}
            >
              <Cardtestimonial
                desc={test.desc}
                nome={test.nome}
                pic={test.pic}
                role={test.role}
              />
            </motion.div>
          ))}
        </div>
        <br />
        <br />

        {/*
 <center>
          <Button className="mx-auto md:mt-[2rem] ">Mostrar mais</Button>
        </center>
          */}

        <br />

        <br />
      </div>
    </div>
  );
}
