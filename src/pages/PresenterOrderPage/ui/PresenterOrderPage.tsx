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
      <div className='presenter__order__bg mb-[120px]'>
        <div className='flex items-center justify-center text-center'>
          <h1 className='text-center text-lg font-involveBQ font-normal flex items-center justify-center text-link'>Надоели скучные застолья или походы в караоке? Мафия сделает Ваш праздник запоминающимся, а наши ведущие Мафии помогут в этом. Никто не будет скучать и живое общение гарантированно, даже если гости не были знакомы до этого вечера!</h1>
        </div>
      </div>
      <motion.h1 initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} custom={0.2} variants={textAnimation2} className='text-primary text-2xl font-bold font-keetanoKB mb-20 w-[897px]'>«МАФИЯ» НА КОРПОРАТИВЕ – ОТЛИЧНЫЙ СПОСОБ СПЛОТИТЬ КОМАНДУ!</motion.h1>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='flex gap-[81px] mb-[90px]'>
        <MImage
          variants={textAnimation2}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_korporativ.png'
          width={583}
          height={388}
          alt='korporativ'
        />
        <div className='flex flex-col gap-[50px]'>
          <motion.h1 variants={textAnimation} custom={1} className='text-xl font-keetano font-bold text-primary'>МАФИЯ НА КОРПОРАТИВ</motion.h1>
          <motion.p variants={textAnimation} custom={2} className='text-base font-involveBQ font-normal text-primary'>`Мафия` - это удачное сочетание шахмат и покера: логика, стратегия и математика из первого, а психология, эмоции и блеф - из второго.Это идеальное развлечение для корпоративов, где каждый участник вовлечен в процесс, а формирование команд идет легко. Возможно участие от 10 до 350 человек. Наши профессиональные ведущие, сертифицированные ФИИМ, обеспечат незабываемый опыт для каждого участника.</motion.p>
        </div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='flex gap-[69px]'>
        <div className='flex flex-col gap-[50px] mt-10'>
          <motion.h1 custom={1} variants={textAnimation2} className='text-xl font-keetano font-bold text-primary'>МАФИЯ НА ДЕНЬ РОЖДЕНИЯ</motion.h1>
          <motion.p custom={2} variants={textAnimation2} className='text-primary text-base font-normal font-involveBQ'>Гости часто не знакомы между собой или совсем незнакомы. Это может привести к неловким моментам и отделению компаний друг от друга. Но когда начинается игра, все меняется! Подходит для любого мероприятия и легко проводится в любом месте - от ресторана до дома. Наши ведущие помогут разобраться в правилах, даже если вы новичок в игре. И никто не скучает, ведь игра `Мафия` - это всегда атмосферно и весело!</motion.p>
        </div>
        <MImage 
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_hbd.png'
          width={550}
          height={371}
          alt='hbd'
        />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='flex gap-20 mt-[73px] mb-[120px]'>
        <MImage 
          variants={textAnimation2}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_hbd_det.png'
          width={586}
          height={387}
          alt='hbd_det'
        />
        <div className='flex flex-col gap-[50px] mt-10'>
          <motion.h1 variants={textAnimation} custom={1} className='text-primary text-xl font-bold font-keetano'>МАФИЯ НА ДЕТСКИЙ ДЕНЬ РОЖДЕНИЯ</motion.h1>
          <motion.p variants={textAnimation} custom={2} className='text-base text-primary font-normal font-involveBQ'>Многие считают, что `Мафия` - игра исключительно для взрослых, где все серьезно и умные разговоры. Однако дети с удовольствием играют в `Мафию` на своих праздниках. В игре они активно участвуют, не скучая в ожидании других мероприятий.</motion.p>
        </div>
      </motion.div>
      <motion.h1 initial="hidden" whileInView="visible" variants={textAnimation3} custom={1} viewport={{ amount: 0.2, once: true }} className='text-center text-2xl mb-20 text-primary font-bold font-keetanoKB'>СТОИМОСТЬ ВАШЕГО ПРАЗДНИКА</motion.h1>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} className='flex gap-[137px] ml-[75px]'>
        <div className='flex flex-col gap-5 mt-[30px]'>
          <motion.h1 variants={textAnimation2} custom={1} className='text-center text-xl font-keetano font-bold text-primary w-[258px]'>«ДОН МАФИИ» 7,5 тыс. руб./час</motion.h1>
          <motion.ul variants={textAnimation2} custom={2} className=''>
            <li className='text-xl text-primary font-bold font-keetano'>1. Профессиональный ведущий</li>
            <li className='text-xl text-primary font-bold font-keetano'>2. Реквизит для игры</li>
            <li className='text-xl text-primary font-bold font-keetano'>3. Подбор места проведения</li>
            <li className='text-xl text-primary font-bold font-keetano'>4. Аксессуары для фотосессии</li>
          </motion.ul>
        </div>
        <MImage 
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ amount: 0.2, once: true }}
          src='/presenter_order/mafia_korporativ.png'
          width={513}
          height={332}
          alt='korporativ'
        />
      </motion.div>
    </motion.section>
  )
}
