"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { testimonials_dummy } from "../../../infra/ddummies";
import { Cardtestimonial } from "../card-testimonial/card-testimonial";

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials_dummy.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials_dummy.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="carousel-container"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <button onClick={prevTestimonial}>Previous</button>
      <div style={{ display: "flex" }}>
        <AnimatePresence initial={false} custom={activeIndex}>
          {testimonials_dummy.map((test, index) => (
            <motion.div
              key={index} // Corrigindo a chave aqui
              style={{ flex: "0 0 auto" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                x: index === activeIndex ? 0 : 100,
              }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Cardtestimonial
                role={test.role}
                desc={test.desc}
                nome={test.nome}
                pic={test.pic}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button onClick={nextTestimonial}>Next</button>
    </div>
  );
}
