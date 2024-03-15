"use client";
import Button from "@/shared/ui/Button/Button";
import NewsFeed from "@/features/news/ui/News";
// import Raiting from "@/features/raiting/ui/Raiting";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Articles from "@/features/articles/ui/Articles";
import Slider from "@/features/Slider/ui/Slider";
import MImage from "@/shared/ui/Image/Image";

const newData = [
  {
    id: 1,
    title: "02 января 2019г.",
    content:
      "Друзья! Приглашаем вас принять участние в мини турнире «Мафия с Консильери»! Да ориентировочно с 2.01 по 07.01 уточняется",
  },
  {
    id: 2,
    title: "24 марта 2016г.",
    content:
      "Друзья! В сентябре состоится второй чемпионат Европы по мафии (EUROMAF 2016), который проходит при поддержке нашего клуба! В предверии этого события мы приготовили для вас сюрприз!",
  },
  {
    id: 3,
    title: "18 февраля 2016г.",
    content:
      "Друзья! Впереди 3 дня праздников и Маф-Клуб Showtime приготовил для вас насыщенную программу!",
  },
];

const articleData = [
  {
    id: 1,
    title: "18 февраля 2016г.",
    rank: "Новичкам",
    content:
      "Дорогие игроки! Мы решили облегчить вам всем жизнь, особенно, новичкам, которым теперь будет быстрее, комфортнее постигать захватывающий мир  «Мафии», и впервые обобщили в один самый полный и подробный Словарь всю мафиозную терминологию и сленг, которые на настоящий момент используются в этой замечательной игре. Для вашего удобства мы расположили все термины в алфавитном порядке.  С уважением, Евгений Рогачевский и Григор Дердьян. ",
  },
  {
    id: 2,
    title: "29 ноября 2015г.",
    rank: "Любителям",
    content:
      "Автор статьи — г-н Наполеон, член маф-клуба» «Мафия. Закрытые игры»» г.Минск. Известный белорусский игрок в МАФИЮ с неординарным стилем игры. Участник многочисленного количества турниров Белоруссии, России и Украины!",
  },
];

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.7, damping: 10, stiffness: 100, mass: 0.5 },
  }),
};

const textAnimation2 = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.7, damping: 10, stiffness: 100, mass: 0.5 },
  }),
};

const textAnimation3 = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.7, damping: 10, stiffness: 100, mass: 0.5 },
  }),
};

export const MainPage = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false }}
      ref={ref}
    >
      <div className="mt-[60px] mb-[120px] relative h-[700px] w-[1295px] flex items-center justify-center">
        <Slider />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="my-[120px]"
      >
        <motion.h2
          variants={textAnimation2}
          custom={0.8}
          className="text-2xl mb-[80px] font-keetanoKB"
        >
          СОЦИАЛЬНАЯ РОЛЕВАЯ ИГРА «МАФИЯ»: ТАКТИКА И СТРАТЕГИЯ ПО КЛАССИЧЕСКИМ
          ПРАВИЛАМ
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="flex items-center justify-between mb-[70px]"
        >
          <MImage
            variants={textAnimation2}
            initial="hidden"
            whileInView="visible"
            custom={1.5}
            viewport={{ amount: 0.2, once: true }}
            src="/main/people3.png"
            alt="photo"
          />
          <div className="w-[630px]">
            <motion.h3
              variants={textAnimation}
              custom={1}
              className="text-xl mb-[50px]"
            >
              СЕКРЕТЫ ИГРЫ МАФИЯ
            </motion.h3>
            <motion.p
              variants={textAnimation}
              custom={2}
              className="text-base font-involveBQ"
            >
              Правила и суть игры «Мафия» на первый взгляд довольны просты.
              Играющих может быть 10 человек. Ведущий раздает каждому участнику
              по карте и этим определяет их роли в игре «Мафия». 7 красных карт
              получат игроки, которые будут представлять команду мирных жителей.
              Один из них – Шериф, возглавляющий всю команду. Те, кто получает
              черные карты, становятся группой мафиози, предводителем которой
              является Дон...
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="flex items-center justify-between"
        >
          <div className="w-[630px]">
            <motion.h3
              variants={textAnimation2}
              custom={1}
              className="text-xl mb-[50px]"
            >
              Интеллектуальная игра «Мафия»: как научиться играть?
            </motion.h3>
            <motion.p
              variants={textAnimation2}
              custom={2}
              className="text-base font-involveBQ"
            >
              Общая стратегия игры в «Мафию» приблизительно одинакова во всех
              разновидностях и основывается на правилах, хотя в последнее время
              появляется все больше аналогов и интересных дополнительных
              нюансов. Однако в любом случае каждый игрок использует чисто
              индивидуальные приемы: тактика и секреты игры в классическую Мафию
              разрабатываются в зависимости от собственного опыта. Ведь недаром
              считается, что это — психологическая игра...
            </motion.p>
          </div>
          <MImage
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={1.5}
            viewport={{ amount: 0.2, once: true }}
            src="/main/people2.png"
            alt="photo"
          />
        </motion.div>
        <div></div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="flex items-center justify-between my-[120px]"
      >
        <NewsFeed news={newData} />
        {/* <Raiting /> */}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="my-[120px]"
      >
        <Articles articles={articleData} />
      </motion.div>
    </motion.section>
  );
};
