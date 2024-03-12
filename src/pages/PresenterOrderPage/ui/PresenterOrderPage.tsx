import Image from 'next/image'
import React from 'react'
import './styles.scss';

export default function PresenterOrderPage() {
  return (
    <section className='presenter__order'>
      <div className='presenter__order__bg mb-[120px]'>
        <div className='flex items-center justify-center text-center'>
          <h1 className='text-center text-lg font-involveBQ font-normal flex items-center justify-center text-link'>Надоели скучные застолья или походы в караоке? Мафия сделает Ваш праздник запоминающимся, а наши ведущие Мафии помогут в этом. Никто не будет скучать и живое общение гарантированно, даже если гости не были знакомы до этого вечера!</h1>
        </div>
      </div>
      <h1 className='text-primary text-2xl font-bold font-keetanoKB mb-20 w-[897px]'>«МАФИЯ» НА КОРПОРАТИВЕ – ОТЛИЧНЫЙ СПОСОБ СПЛОТИТЬ КОМАНДУ!</h1>
      <div className='flex gap-[81px] mb-[90px]'>
        <Image 
          src='/presenter_order/mafia_korporativ.png'
          width={583}
          height={388}
          alt='korporativ'
        />
        <div className='flex flex-col gap-[50px]'>
          <h1 className='text-xl font-keetano font-bold text-primary'>МАФИЯ НА КОРПОРАТИВ</h1>
          <p className='text-base font-involveBQ font-normal text-primary'>`Мафия` - это удачное сочетание шахмат и покера: логика, стратегия и математика из первого, а психология, эмоции и блеф - из второго.Это идеальное развлечение для корпоративов, где каждый участник вовлечен в процесс, а формирование команд идет легко. Возможно участие от 10 до 350 человек. Наши профессиональные ведущие, сертифицированные ФИИМ, обеспечат незабываемый опыт для каждого участника.</p>
        </div>
      </div>
      <div className='flex gap-[69px]'>
        <div className='flex flex-col gap-[50px] mt-10'>
          <h1 className='text-xl font-keetano font-bold text-primary'>МАФИЯ НА ДЕНЬ РОЖДЕНИЯ</h1>
          <p className='text-primary text-base font-normal font-involveBQ'>Гости часто не знакомы между собой или совсем незнакомы. Это может привести к неловким моментам и отделению компаний друг от друга. Но когда начинается игра, все меняется! Подходит для любого мероприятия и легко проводится в любом месте - от ресторана до дома. Наши ведущие помогут разобраться в правилах, даже если вы новичок в игре. И никто не скучает, ведь игра `Мафия` - это всегда атмосферно и весело!</p>
        </div>
        <Image 
          src='/presenter_order/mafia_hbd.png'
          width={550}
          height={371}
          alt='hbd'
        />
      </div>
      <div className='flex gap-20 mt-[73px] mb-[120px]'>
        <Image 
          src='/presenter_order/mafia_hbd_det.png'
          width={586}
          height={387}
          alt='hbd_det'
        />
        <div className='flex flex-col gap-[50px] mt-10'>
          <h1 className='text-primary text-xl font-bold font-keetano'>МАФИЯ НА ДЕТСКИЙ ДЕНЬ РОЖДЕНИЯ</h1>
          <p className='text-base text-primary font-normal font-involveBQ'>Многие считают, что `Мафия` - игра исключительно для взрослых, где все серьезно и умные разговоры. Однако дети с удовольствием играют в `Мафию` на своих праздниках. В игре они активно участвуют, не скучая в ожидании других мероприятий.</p>
        </div>
      </div>
      <h1 className='text-center text-2xl mb-20 text-primary font-bold font-keetanoKB'>СТОИМОСТЬ ВАШЕГО ПРАЗДНИКА</h1>
      <div className='flex gap-[137px] ml-[75px]'>
        <div className='flex flex-col gap-5 mt-[30px]'>
          <h1 className='text-center text-xl font-keetano font-bold text-primary w-[258px]'>«ДОН МАФИИ» 7,5 тыс. руб./час</h1>
          <ul className=''>
            <li className='text-xl text-primary font-bold font-keetano'>1. Профессиональный ведущий</li>
            <li className='text-xl text-primary font-bold font-keetano'>2. Реквизит для игры</li>
            <li className='text-xl text-primary font-bold font-keetano'>3. Подбор места проведения</li>
            <li className='text-xl text-primary font-bold font-keetano'>4. Аксессуары для фотосессии</li>
          </ul>
        </div>
        <Image 
          src='/presenter_order/mafia_korporativ.png'
          width={513}
          height={332}
          alt='korporativ'
        />
      </div>
    </section>
  )
}
