import { motion } from "framer-motion";
import { bgs, circles } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import Image from "next/image";

export function Founder() {
  return (
    <div className="resp-founder  lg:mt-[58rem] md:pt-[28rem] 2xl:mt-[60rem] mt-[162rem] sm:mt-[90rem]  pt-[13rem] lg:pt-[14rem]">
      <div className="flex flex-col lg:flex-row md:gap-24 ">
        <div className="relative flex justify-start w-full text-end">
          <Overlay />
          <Image
            src={circles.circle_3}
            className="absolute bottom-[12rem] -z-10 2xl:-left-[20rem] -left-[5rem] md:-left-[15rem]  md:-bottom-[8rem] 2xl:-bottom-[12rem]"
            alt=""
          />
          <motion.img
            initial={{ x: -190, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={bgs.bg_founder.src}
            className="sm:w-[65%] lg:w-full  "
            alt=""
          />
        </div>
        <div className="relative grid w-full text-start ">
          <div className="my-auto md:px-4">
            <h1 className="mt-8 text-4xl font-bold md:text-5xl sm:mt-0">
              Sérgio Mateus <ColoredText>Founder</ColoredText> da Sergest
            </h1>
            <br />
            <motion.p
              viewport={{ once: true }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              Sérgio Mateus é um Empreendedor e Inovador em Gestão Empresarial,
              Estrategista de Marketing e BenchMarking.
            </motion.p>
            <br />

            <motion.p
              viewport={{ once: true }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Apaixonado por simplificar processos e impulsionar negócios,
              Fundador e CEO do SERGEST, vem Transformando a forma como as
              empresas lidam com a faturação.
            </motion.p>
            <br />
            <motion.p
              viewport={{ once: true }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              Sérgio Mateus Formado em Gestão de Empresas, possui uma Base
              sólida para inovar e liderar no mundo dos negócios.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
