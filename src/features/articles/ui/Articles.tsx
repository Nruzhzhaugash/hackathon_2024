'use client'
import React from "react";
import { motion } from 'framer-motion';

interface Article {
  id: number;
  title: string;
  rank: string;
  content: string;
}
interface ArticleFeedProps {
  articles: Article[];
}
interface rankColor {
  colorByRank: "Новичкам" | "Любителям" | "Профи";
}

const textAnimation2 = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.7, damping: 10, stiffness: 100, mass: 0.5 },
  })
}

const textAnimation3 = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.7, damping: 10, stiffness: 100, mass: 0.5 },
  })
}

const Articles: React.FC<ArticleFeedProps> = ({ articles }) => {
  return (
    <div className="mb-[120px]">
      <div className="flex items-center justify-between">
        <motion.h2 variants={textAnimation2} custom={1} className="text-2xl text-primary mb-[20px] font-keetanoKB">
          Статьи
        </motion.h2>
        <div className="flex items-center">
          <div className="flex items-center mr-[40px]">
            <motion.div variants={textAnimation3} custom={0.8} className="bg-green rounded-full w-5 h-5 mr-[3px]"></motion.div>
            <motion.p variants={textAnimation3} custom={1} className="text-base text-green">Новичкам</motion.p>
          </div>
          <div className="flex items-center mr-[40px]">
            <motion.div variants={textAnimation3} custom={1} className="bg-orangeSecond rounded-full w-5 h-5 mr-[3px]"></motion.div>
            <motion.p variants={textAnimation3} custom={1.1} className="text-base text-orangeSecond">Любителям</motion.p>
          </div>
          <div className="flex items-center mr-[40px]">
            <motion.div variants={textAnimation3} custom={1.2} className="bg-black rounded-full w-5 h-5 mr-[3px]"></motion.div>
            <motion.p variants={textAnimation3} custom={1.3} className="text-base text-black">Профи</motion.p>
          </div>
        </div>
      </div>
      <div>
        {articles.map((item) => (
          <div key={item.id} className="mb-[20px]">
            <motion.h2 variants={textAnimation2} custom={1} className="text-base text-orange mb-[9px]">{item.title}</motion.h2>
            <motion.p
              variants={textAnimation2}
              custom={2}
              className={`text-base mb-[10px] ${
                item.rank == "Новичкам" ? "text-green" : ""
              }
                                    ${
                                      item.rank == "Любителям"
                                        ? "text-orangeSecond"
                                        : ""
                                    }
                                    ${
                                      item.rank == "Профи" ? "text-black" : ""
                                    }`}
            >
              {item.rank}
            </motion.p>
            <motion.p variants={textAnimation2} custom={2.5} className="text-base text-primary">{item.content}</motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
