'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MImage from '@/shared/ui/Image/Image';
import './styles.scss';

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

export default function PresenterOrderPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false }}
      ref={ref}
      className='presenter__order'
    >
      <div className='presenter__order__bg mb-[120px] mmd:mb-[21px]'>
        <div className='flex items-center justify-center text-center'>
          <h1 className='text-center text-lg font-involveBQ font-normal flex items-center justify-center text-link'>Надоели скучные застолья или походы в караоке? Мафия сделает Ваш праздник запоминающимся, а наши ведущие Мафии помогут в этом. Никто не будет скучать и живое общение гарантированно, даже если гости не были знакомы до этого вечера!</h1>
        </div>
      </div>
      <motion.h1 initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} custom={0.2} variants={textAnimation2} className='mmd:text-[16px] text-primary text-2xl font-bold font-keetanoKB mb-20 w-[897px] mmd:w-auto mmd:mb-[15px]'>«МАФИЯ» НА КОРПОРАТИВЕ – ОТЛИЧНЫЙ СПОСОБ СПЛОТИТЬ КОМАНДУ!</motion.h1>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='mmd:gap-[27px] flex gap-[81px] mb-[90px] mmd:mb-[19px]'>
        <MImage
          variants={textAnimation2}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          className='mmd:w-[163px]'
          src='/presenter_order/mafia_korporativ.png'
          alt='korporativ'
        />
        <div className='mmd:gap-2.5 flex flex-col gap-[50px]'>
          <motion.h1 variants={textAnimation} custom={1} className='text-xl font-keetano font-bold text-primary mmd:text-[12px]'>МАФИЯ НА КОРПОРАТИВ</motion.h1>
          <motion.p variants={textAnimation} custom={2} className='text-base font-involveBQ font-normal text-primary mmd:text-[7px] mmd:w-[164px]'>`Мафия` - это удачное сочетание шахмат и покера: логика, стратегия и математика из первого, а психология, эмоции и блеф - из второго.Это идеальное развлечение для корпоративов, где каждый участник вовлечен в процесс, а формирование команд идет легко. Возможно участие от 10 до 350 человек. Наши профессиональные ведущие, сертифицированные ФИИМ, обеспечат незабываемый опыт для каждого участника.</motion.p>
        </div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='flex gap-[69px] mmd:gap-7'>
        <div className='mmd:gap-2 flex flex-col gap-[50px] mt-10 mmd:mt-0'>
          <motion.h1 custom={1} variants={textAnimation2} className='text-xl font-keetano font-bold text-primary mmd:text-[12px]'>МАФИЯ НА ДЕНЬ РОЖДЕНИЯ</motion.h1>
          <motion.p custom={2} variants={textAnimation2} className='text-primary text-base font-normal font-involveBQ mmd:text-[7px] mmd:w-[164px]'>Гости часто не знакомы между собой или совсем незнакомы. Это может привести к неловким моментам и отделению компаний друг от друга. Но когда начинается игра, все меняется! Подходит для любого мероприятия и легко проводится в любом месте - от ресторана до дома. Наши ведущие помогут разобраться в правилах, даже если вы новичок в игре. И никто не скучает, ведь игра `Мафия` - это всегда атмосферно и весело!</motion.p>
        </div>
        <MImage 
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_hbd.png'
          className='mmd:w-[163px]'
          alt='hbd'
        />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='mmd:gap-7 flex gap-20 mt-[73px] mb-[120px] mmd:mb-4 mmd:mt-[30px]'>
        <MImage 
          variants={textAnimation2}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_hbd_det.png'
          className='mmd:w-[164px]'
          alt='hbd_det'
        />
        <div className='mmd:gap-2.5 flex flex-col gap-[50px] mt-10 mmd:mt-[13px]'>
          <motion.h1 variants={textAnimation} custom={1} className='text-primary text-xl font-bold font-keetano mmd:text-[12px] mmd:w-[134px]'>МАФИЯ НА ДЕТСКИЙ ДЕНЬ РОЖДЕНИЯ</motion.h1>
          <motion.p variants={textAnimation} custom={2} className='text-base text-primary font-normal font-involveBQ mmd:text-[7px] mmd:w-[169px]'>Многие считают, что `Мафия` - игра исключительно для взрослых, где все серьезно и умные разговоры. Однако дети с удовольствием играют в `Мафию` на своих праздниках. В игре они активно участвуют, не скучая в ожидании других мероприятий.</motion.p>
        </div>
      </motion.div>
      <motion.h1 initial="hidden" whileInView="visible" variants={textAnimation3} custom={1} viewport={{ amount: 0.2, once: true }} className='text-center mmd:mb-4 text-2xl mb-20 text-primary font-bold font-keetanoKB mmd:text-[12px]'>СТОИМОСТЬ ВАШЕГО ПРАЗДНИКА</motion.h1>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='flex gap-[137px] mmd:gap-7 ml-[75px] mmd:ml-1'>
        <div className='flex flex-col gap-5 mmd:gap-3 mt-[30px] mmd:mt-[7px]'>
          <motion.h1 variants={textAnimation2} custom={1} className='mmd:text-[11px] text-center text-xl font-keetano font-bold text-primary w-[258px] mmd:w-[79px]'>«ДОН МАФИИ» 7,5 тыс. руб./час</motion.h1>
          <motion.ul variants={textAnimation2} custom={2} className='mmd:pb-2'>
            <li className='whitespace-nowrap text-xl mmd:text-[11px] text-primary font-bold font-keetano'>1. Профессиональный ведущий</li>
            <li className='whitespace-nowrap text-xl mmd:text-[11px] text-primary font-bold font-keetano'>2. Реквизит для игры</li>
            <li className='whitespace-nowrap text-xl mmd:text-[11px] text-primary font-bold font-keetano'>3. Подбор места проведения</li>
            <li className='whitespace-nowrap text-xl mmd:text-[11px] text-primary font-bold font-keetano'>4. Аксессуары для фотосессии</li>
          </motion.ul>
        </div>
        <MImage 
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_korporativ.png'
          className='mmd:w-[162px] mmd:h-[106px]'
          alt='korporativ'
        />
      </motion.div>
    </motion.section>
  )
}
