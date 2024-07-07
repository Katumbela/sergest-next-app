import { motion } from "framer-motion";
import { circles, screens } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import Image from "next/image";
 

export function Proccess() {
  return (
    <div
      id="functionalities"
      className="md:mt-[8rem] mb-[14rem] 2xl:mt-[10rem]"
    >
      <div className="text-center relative mt-[6rem] mb-20">
        <Image
          src={circles.circle_2}
          className="top-0 left-0 right-0 bottom-0 -z-10 2xl:w-[60%] md:w-[70%] mx-auto absolute "
          alt=""
        />{" "}
        <Image
          src={circles.circle_2}
          className="top-0 animate-ping left-0 right-0 bottom-0 -z-10 2xl:w-[60%] md:w-[70%] mx-auto absolute "
          alt=""
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="mt-[2rem] sm:mt-[1rem]">
            <h1 className="font-bold text-4xl text-grayser">
              <ColoredText>Facturação</ColoredText>
            </h1>
            <h1 className="font-bold text-4xl text-grayser">no telemóvel</h1>
            <Image
              src={circles.ceta}
              className="mx-auto h-[5em] my-4 anim"
              alt=""
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={screens.screen_proccess_1.src}
              className="mx-auto shadow-xl bg-white w-[60%] border-[8px] rounded-3xl border-primary"
              alt=""
            />
          </div>
          <div className="md:pt-[10rem] 2xl:pt-[14rem]">
            <h1 className="font-bold text-4xl text-grayser">
              <ColoredText>Cliente</ColoredText>
            </h1>
            <h1 className="font-bold text-4xl text-grayser">conta corrente</h1>
            <Image
              src={circles.ceta}
              className="mx-auto h-[5em] my-4 anim"
              alt=""
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={screens.screen_proccess_2.src}
              className="mx-auto shadow-xl bg-white w-[60%] border-[8px] rounded-3xl border-primary"
              alt=""
            />
          </div>
          <div className="mt-[2rem] sm:mt-[1rem]">
            <h1 className="font-bold text-4xl text-grayser">
              Listagem
            </h1>
            <h1 className="font-bold text-4xl text-grayser">
              <ColoredText>Produtos </ColoredText></h1>
            <Image
              src={circles.ceta}
              className="mx-auto h-[5em] my-4 anim"
              alt=""
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ y: 190, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              src={screens.screen_list_product.src}
              className="mx-auto shadow-xl bg-white w-[60%] border-[8px] rounded-3xl border-primary"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
