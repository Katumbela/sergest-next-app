import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { logos } from "../../../utils";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="gradient-sergest border-t-[6px] border-primary py-8 2xl:pt-[7rem] 2xl:pb-[6rem] mt-[10rem]">
      <div className="container">
        <div className="sm:grid gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
          <div className="w-full col-span-2 md:pe-5">
            {" "}
            <Image
              src={logos.logo}
              className="h-[3em] bg-white rounded-lg py-2 px-4 "
              alt=""
            />
            <p className="text-white text-xs sm:text-sm mt-4">
              Com a Nossa plataforma, tudo é mais fácil! Oferecemos uma ampla
              gama de serviços que você pode acessar confortavelmente de onde
              estiver, através do nosso site ou aplicativo.
            </p>
          </div>
          <div className="text-white mt-8 sm:mt-3">
            <b>Produto</b>
            <br />
            <br />
            <ul className="footer-link">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#functionalities">Funcionalidades</a>
              </li>
              <li>
                <a href="#prices">Preços & Planos</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="text-white mt-8 sm:mt-3">
            <b>Info & Serviços</b>
            <br />
            <br />
            <p className="text-xs">
              Localização: Avenida Deolinda Rodrigues, sentido primeiro de maio,
              ao lado oposto ao catetão do petro, EDF 25, rés do chão
              apartamento 2.
            </p>
            <br />
            <ul className="footer-link">
              <li>
                <a href="tel:244944836119" className="flex gap-2">
                  <FaPhone className="my-auto text-sm" />{" "}
                  <span className="text-sm my-auto"> +244 944 836 119</span>
                </a>
              </li>
              <li>
                <a href="tel:244923395846" className="flex gap-2">
                  <FaPhone className="my-auto text-sm" />{" "}
                  <span className="text-sm my-auto"> +244 923 395 846</span>
                </a>
              </li>
              <li>
                <a
                  target="__blank"
                  href="mailto:comercial@sergest.com"
                  className="flex gap-2"
                >
                  <FaEnvelope className="my-auto text-sm" />{" "}
                  <span className="text-sm my-auto">
                    {" "}
                    comercial@sergest.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-white mt-8 sm:mt-3">
            <b>Acompanhe nossas redes sociais</b>
            <br />
            <br />
            <ul className="flex gap-6">
              <li>
                <a
                  target="__blank"
                  href="https://www.facebook.com/share/nvfGuLZgAywUdq95/?mibextid=LQQJ4d"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="__blank"
                  href="https://www.linkedin.com/company/sermar-sistemas-tecnol-gicos/"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="__blank"
                  href="https://www.instagram.com/sergest.angola?igsh=cmNrcmZ5b216ZW5l&utm_source=qr"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="__blank"
                  href="https://youtube.com/@sergestoficial1640?si=z22ZmasRfQ5LV9Wy"
                >
                  <FaYoutube className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10" />
        <center>
          <span className="text-white text-sm">
            © SERGEST 2024 - Todos os direitos reservados | Política de
            Privacidade
          </span>
        </center>
      </div>

      {showScrollButton && (
        <button
          onClick={handleScrollTop}
          className="fixed flex items-center gap-2 sm:px-4 py-3 px-3 sm:py-4 text-center text-white rounded-full shadow-lg md:px-4 click bg-primary place-content-center bottom-4 right-4 "
        >
          <FaArrowUp className="sm:text-3xl" />
        </button>
      )}
    </div>
  );
}
