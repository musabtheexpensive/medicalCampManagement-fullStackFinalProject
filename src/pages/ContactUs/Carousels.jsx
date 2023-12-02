import React from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
const Carousels = () => {
    return (
        <div className="bg-neutral-800">
          <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-orange-800">
              Any Emergency Reason 
            </span>
          </div>
          <HorizontalScrollCarousel />
          <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-slate-500">
            Get in touch without any worries
            </span>
          </div>
        </div>
      );
    };
    
    const HorizontalScrollCarousel = () => {
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: targetRef,
        });
      
        const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
      
        return (
          <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
              <motion.div style={{ x }} className="flex gap-4">
                {cards.map((card) => {
                  return <Card card={card} key={card.id} />;
                })}
              </motion.div>
            </div>
          </section>
        );
      };
      
      const Card = ({ card }) => {
        return (
          <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
          >
            <div
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                {/* {card.title} */}
              </p>
            </div>
          </div>
        );
      };
      
export default Carousels;

const cards = [
    {
      url: "https://i.ibb.co/h1g5T5y/banner4.jpg",
      
      id: 1,
    },
    {
      url: "https://i.ibb.co/0sr6fTw/banner3.webp",
     
      id: 2,
    },
    {
      url: "https://i.ibb.co/Wcsqx94/banner2.webp",
      
      id: 3,
    },
    {
      url: "https://i.ibb.co/y09VqgX/banner7.webp",
     
      id: 4,
    },
    {
      url: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      
      id: 5,
    },
    {
      url: "https://i.ibb.co/Km9hzV1/topbanner.jpg",
      
      id: 6,
    },
    {
      url: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    //   title: "Title 7",
      id: 7,
    },
  ];