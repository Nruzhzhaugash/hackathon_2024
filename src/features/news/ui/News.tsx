'use client'
import React from "react";
import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  content: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) =>  ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.7, damping: 10, stiffness: 100, mass: 0.5 }
  })
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

const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  return (
    <div className="w-[665px] text-">
      <motion.h1 variants={textAnimation2} custom={0.8} className="text-2xl text-primary mb-[20px] font-keetanoKB">
        Новости
      </motion.h1>
      <div className="flex flex-col items-center justify-center">
        {news.map((item) => (
          <div key={item.id} className="w-[665px] mb-[20px] overflow-hidden">
            <div className="">
              <motion.h2 variants={textAnimation2} custom={1} className="text-base text-orange mb-2">{item.title}</motion.h2>
              <motion.p variants={textAnimation2} custom={2} className="text-lg text-primary">{item.content}</motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
