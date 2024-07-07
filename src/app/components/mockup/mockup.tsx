import { motion } from "framer-motion";
import { bgs } from "../../../utils";
import { Overlay } from "../overlay/overlay";

export function MockUp() {
  return (
    <div className="w-full relative lg:mt-[7rem] mt-[5rem] -z-10">
      <Overlay />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        src={bgs.bg_mockup.src}
        className="lg:w-[60%] mx-auto"
        alt=""
      />
    </div>
  );
}
