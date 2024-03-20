'use client'
import MImage from '@/shared/ui/Image/Image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function AboutPage() {
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
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/about/people.png"
            alt="background"
          />
        </div>
        <div className="relative flex flex-col mt-[260px] items-center justify-center text-center text-link">
          <h1 className="text-xl mb-[50px]">
            Добро пожаловать в клуб мафии `SHOWTIME`!
          </h1>
          <div className="text-center w-[770px] mb-[240px]">
            <p className="text-base font-involveRG">
              Начиная с 16 декабря 2010 года, наш клуб стал неотъемлемой частью
              игровой культуры города Москвы. Начав с городской мафии, мы с
              годами стали проводить регулярные игры в классическую мафию,
              погружаясь в захватывающие интриги и стратегии.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[120px] text-primary">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} custom={0.2} variants={textAnimation2} className="text-[48px] mb-[80px] font-keetanoKB">
          СОЦИАЛЬНАЯ РОЛЕВАЯ ИГРА «МАФИЯ»: ТАКТИКА И СТРАТЕГИЯ ПО КЛАССИЧЕСКИМ
          ПРАВИЛАМ
        </motion.h2>
        <div className="flex  justify-between mb-[80px]">
          <MImage
            variants={textAnimation2}
            custom={1.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            src="/about/people2.png"
            alt="photo"
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className="w-[630px]">
            <motion.h3 variants={textAnimation} custom={1} className="text-xl  mb-[50px]">КЛУБ SHOWTIME</motion.h3>
            <motion.p variants={textAnimation} custom={2} className="text-base font-involveBQ">
              Это уютное пространство, где каждый может окунуться в
              захватывающий мир игры `Мафия`. Мы гордимся своим многолетним
              опытом в проведении игровых вечеров и мероприятий, организованных
              для наших участников.
            </motion.p>
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className="flex justify-between mb-[80px]">
          <div className="w-[630px]">
            <motion.h3 variants={textAnimation2} custom={1} className="text-xl mb-[50px]">
              Что делает наш клуб особенным?
            </motion.h3>
            <motion.p variants={textAnimation2} custom={2} className="text-base font-involveBQ">
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
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={1.5}
            variants={textAnimation} 
            src="/about/people3.png" 
            alt="photo"
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className="flex  justify-between mb-[80px]">
          <MImage 
            initial="hidden"
            whileInView="visible"
            variants={textAnimation2}
            custom={1.5}
            viewport={{ amount: 0.2, once: true }}
            src="/about/people4.png"
            alt="photo"
          />
          <div className="w-[630px]">
            <motion.h3 variants={textAnimation} custom={1} className="text-xl  mb-[50px]">СЕКРЕТЫ ИГРЫ МАФИЯ</motion.h3>
            <motion.p variants={textAnimation} custom={2} className="text-base font-involveBQ">
              Мы не просто проводим игры, мы создаем целые истории, в которые
              вовлечены все участники. Наши интересные сценарии разработаны с
              учетом всех деталей, чтобы каждый ход игры был органичным и
              захватывающим. Мы учитываем предпочтения и интересы наших игроков,
              чтобы обеспечить максимальное удовольствие от игрового процесса.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className="my-[120px] text-primary">
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className="flex flex-col items-center justify-between mb-[50px]">
          <motion.h2 variants={textAnimation3} custom={1} className="text-[48px] font-keetanoKB mb-[40px]">
            Часто задаваемые вопросы
          </motion.h2>
          <div className="text-center w-[810px] mb-[50px]">
            <motion.p variants={textAnimation3} custom={1.1} className="text-base font-involveBQ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
              volutpat sed cras ornare arcu dui vivamus.
            </motion.p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className="flex flex-wrap items-center justify-between mb-[120px]">
          <div className="">
            <div className="w-[500px] mb-[50px]">
              <motion.h3 variants={textAnimation2} custom={1.2} className="text-xl mb-[20px]">Где проводятся игры?</motion.h3>
              <motion.p variants={textAnimation2} custom={2.2} className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </motion.p>
            </div>
            <div className="w-[500px]">
              <motion.h3 variants={textAnimation2} custom={1.4} className="text-xl mb-[20px]">Будут ли бонусы за друзей?</motion.h3>
              <motion.p variants={textAnimation2} custom={2.4} className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </motion.p>
            </div>
          </div>
          <div className="">
            <div className="w-[500px] mb-[50px]">
              <motion.h3 variants={textAnimation} custom={1.6} className="text-xl mb-[20px]">Сколько стоит сессия?</motion.h3>
              <motion.p variants={textAnimation} custom={2.6} className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </motion.p>
            </div>
            <div className="w-[500px]">
              <motion.h3 variants={textAnimation} custom={1.8} className="text-xl mb-[20px]">Могу ли я стать ведущим?</motion.h3>
              <motion.p variants={textAnimation} custom={2.8} className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
