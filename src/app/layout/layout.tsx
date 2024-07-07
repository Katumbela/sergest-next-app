'use-client'
import { ReactNode } from "react";
import { motion } from "framer-motion";
import NumberUtils from "../../utils/number-utils/number-utils";

//import { NumberUtils } from "";

type LayoutProps = {
  children: ReactNode;
  animateBg?: boolean;
};

export function Layout({ children }: LayoutProps) {
  return (
    <main className={``}>
     
       <div className="     ">
        {children}
      </div>
    </main>
  );
}

export function LayoutBody({ children }: Omit<LayoutProps, "animateBg">) {
  const index = NumberUtils.random(0, 2);
  const initial = [
    { x: "100vw" },
    { x: "-100vw" },
    { y: "-100vh" },
    { y: "100vh" },
  ];
  const animate = [{ x: 0 }, { x: 0 }, { y: 0 }, { y: 0 }];
  return (
    <motion.div
      initial={initial[index]}
      animate={animate[index]}
      transition={{ duration: 0.8, type: "spring", damping: 13 }}
      className="     -z-10 "
    >
      {children}
    </motion.div>
  );
}
