'use-client'
import { motion } from "framer-motion";
import { logos } from "../../../utils";
import { ColoredText } from "../colored-text/colored-text";
import { Overlay } from "../overlay/overlay";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export function Action() {
  return (
    <div className=" lg:mt-[20rem] md:mt-[16rem]  mt-[29rem] h-[400px]">
      <div className="text-center">
        <h1 className="md:text-[56px] leading-tight text-4xl font-bold">
          Três Palavras & uma <ColoredText>Plataforma</ColoredText>{" "}
        </h1>
        <p className="lg:w-3/12 px-1 mt-3 md:mt-0 md:px-0 md:w-5/12 mx-auto">
          Factura pelo computador, tablet ou telemóvel a qualquer hora.
        </p>
      </div>
      <br />
      <br />
      <div className="cards lg:mt-[2rem] 2xl:mt-[3rem]">
        <div className="flex-col flex md:grid lg:gap-8 2xl:gap-16 md:gap-6 gap-9 lg:grid-cols-3 grid-cols-1 grid-rows-3 md:grid-cols-2">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="card hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border rounded-xl shadow-xl py-8 px-6"
          >
            <div className="flex flex-col  gap-1 relative">
              <Overlay />
              <Image src={logos.logo_agt} className="w-[11em]" alt="" />
              <h1 className="text-2xl my-auto font-bold">
                Certificado pela AGT
              </h1>
            </div>
            <div className="mt-2 text-start">
              <ul>
                <li className="flex gap-2 ">
                  <FaCheckCircle className="my-auto text-primary" />
                  Documentos aceites pela AGT;
                </li>
                <li className="flex gap-2 ">
                  <FaCheckCircle className="my-auto text-primary" />
                  Cálculo automático de impostos;
                </li>
                <li className="flex gap-2 ">
                  <FaCheckCircle className="my-auto text-primary" />
                  Exportação do ficheiro SAF-T AO;
                </li>
                <li className="flex gap-2 ">
                  <FaCheckCircle className="my-auto text-primary" />
                  Software Certificado nº310
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="card hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border gradient-sergest rounded-xl shadow-xl py-8 px-6"
          >
            <div className="flex gap-6 relative">
              <Overlay />
              <Image src={logos.logo_shield} className="w-[4em]" alt="" />
              <h1 className="text-3xl my-auto font-bold text-white">
                Fácil & Segura
              </h1>
            </div>
            <div className="mt-4 text-start">
              <p className="text-white text-sm">
                Pagamentos Integrados com o Multicaixa Express! Segurança
                robustas para proteger os dados sensíveis dos usuários, com uma
                interface do usuário simples e fácil de usar, recursos
                intuitivos que permitam aos usuários navegar facilmente pelo
                software.
              </p>
            </div>
          </motion.div>
          {/*


   <motion.div
            viewport={{ once: true }}
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="card hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border rounded-xl shadow-xl py-8 px-6"
          >
            <div className="flex gap-6 relative">
              <Overlay />
              <Image src={logos.logo_lamp} className="w-[4em]" alt="" />
              <h1 className="text-3xl my-auto font-bold">Fácil</h1>
            </div>
            <div className="mt-4 text-start">
              <p className="text-grayser">
                Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
                gama de serviços que você pode acessar confortavelmente de onde
                estiver, através do nosso site ou aplicativo.
              </p>
            </div>
          </motion.div>
  */}
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="card mx-auto col-span-2 lg:col-span-1 sm:w-6/12 lg:w-full hover:shadow-primary/20 transition-all hover:translate-y-[-1px] border rounded-xl shadow-xl py-8 px-6"
          >
            <div className="flex gap-6 relative">
              <Overlay />
              <Image src={logos.logo_angola} className="w-[4em]" alt="" />
              <h1 className="text-3xl my-auto font-bold">Angolano</h1>
            </div>
            <div className="mt-4 text-start">
              <p className="text-grayser">
                Software em conformidade com as leis e regulamentações
                fiscais angolanas, incluindo requisitos de faturação eletrônica
                e relatórios fiscais Certificado pela AGT n•310
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
