"use client"
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaPhone } from "react-icons/fa6";
import { logos } from "../../../utils";
import { Button } from "../button/button";
import { LoginNow } from "../../../utils/functions";
import { useState } from "react";
import NumberUtils from "../../../utils/number-utils/number-utils";
import Image from "next/image";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Início",
    link: "/",
  },
  {
    id: 1,
    navTitle: "Sobre",
    link: "../#about",
  },
  {
    id: 2,
    navTitle: "Funcionalidades",
    link: "../#functionalities",
  },
  {
    id: 3,
    navTitle: "Preços & Planos",
    link: "../#prices",
  },
  {
    id: 3,
    navTitle: "Testemunhas",
    link: "../#testimonials",
  },
  {
    id: 4,
    navTitle: "Blog",
    link: "./blogs",
  },
];

export function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },

    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const index = NumberUtils.random(0, 3);
  const initial = [
    { x: "100vw" },
    { x: "-100vw" },
    { y: "-100vh" },
    { y: "100vh" },
  ];
  const animate = [{ x: 0 }, { x: 0 }, { y: 0 }, { y: 0 }];

  return (
    <div className="">
      <motion.div
        initial={initial[index]}
        animate={animate[index]}
        transition={{ duration: 0.8, type: "spring", damping: 13 }}
        className="flex justify-between pt-6 pb-3"
      >
        <a href="/">
          <Image src={logos.logo} alt="" />
        </a>
        <div className="hidden my-auto lg:flex gap-7">
          <a href="/" className="font-semibold text-md hover-anim">
            Início
          </a>
          <a href="../#about" className="font-semibold text-md hover-anim">
            Sobre
          </a>
          <a
            href="../#functionalities"
            className="font-semibold text-md hover-anim"
          >
            Funcionalidades
          </a>

          <a href="../#prices" className="font-semibold text-md hover-anim">
            Preços e Planos
          </a>
          <a href="./#testimonials" className="font-semibold text-md hover-anim">
            Testemunhas
          </a>
          <a href="/blogs" className="font-semibold text-md hover-anim">
            Blog
          </a>
        </div>
        <Button click={LoginNow} className="hidden gap-2 my-auto lg:flex">
          Entrar agora <FaArrowRight className="my-auto" />
        </Button>

        <motion.div
          className="grid items-center px-5 py-2 my-auto border rounded-md cursor-pointer lg:hidden click font-seibold text-primary 2 border-primary"
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          Menu
        </motion.div>
      </motion.div>
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="fixed z-50"
      >
        <motion.div
          variants={mobileMenuVariant}
          className={`${mobileNavOpen ? "w-screen" : " "
            } mobile-menu gradient-sergest`}
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            Fechar
          </motion.button>
          <motion.ul variants={ulVariant}>
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  onClick={() => setMobileNavOpen(false)}
                  variants={liVariant}
                >
                  {" "}
                  <a href={navItem.link}>{navItem.navTitle}</a>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeInVariant}
            className="flex flex-col justify-center gap-0 btns"
          >
            <button
              style={{
                borderColor: "white",
                border: "1px solid white",
                color: "./#033E85",
              }}
              onClick={LoginNow}
              className="flex gap-2 text-xs font-semibold text-red-500 border-2 border-white rounded-md b1 md:gap-2"
            >
              Entrar agora <FaArrowRight className="my-auto " />
            </button>
            <button
              style={{ border: "1.5px solid white", color: "./#033E85" }}
              onClick={LoginNow}
              className="flex text-xs font-semibold text-red-500 border border-white rounded-md bg-whitee md:gap-2"
            >
              Começar a usar{" "}
              <FaArrowRight className="hidden my-auto md:block" />
            </button>
          </motion.div>
          {
            mobileNavOpen ?

              <motion.div
                variants={fadeInVariant}
                className="contacts flex justify-center mt-[10vh] flex-wrap gap-6"
              >
                <h5>
                  <a href="tel:244944836119" className="flex gap-2">
                    <FaPhone className="my-auto " />{" "}
                    <span className="my-auto "> +244 944 836 119</span>
                  </a>
                </h5>
                <h5>
                  <a
                    target="__blank"
                    href="mailto:comercial@sergest.com"
                    className="flex gap-2"
                  >
                    <FaEnvelope className="my-auto text-sm" />{" "}
                    <span className="my-auto text-sm"> comercial@sergest.com</span>
                  </a>
                </h5>
              </motion.div> : null
          }
        </motion.div>
      </motion.nav>
    </div>
  );
}
