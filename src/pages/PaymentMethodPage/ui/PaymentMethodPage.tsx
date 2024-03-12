import './styles.scss';

export default function PaymentMethodPage() {
  return (
    <section className="payment">
      <div className="grid mb-[120px] payment__grid">
        <div className="payment__left flex flex-col gap-[50px]">
          <h1 className="text-black font-keetano text-xl font-bold">АБОНЕМЕНТЫ</h1>
          <p className="font-involveRG text-[20px] text-black font-normal">Приобретение абонемента на игры в `Мафию` в нашем клубе - это удобное и выгодное решение для наших постоянных участников. С помощью абонемента вы получаете доступ к регулярным игровым сессиям по выгодной цене.</p>
        </div>
        <div className="payment__right flex flex-col gap-[50px]">
          <h1 className="text-black font-keetano text-xl font-bold ">ПРЕИМУЩЕСТВА</h1>
          <p className="text-black text-[20px] font-normal font-involveRG">Вместо оплаты каждой игры отдельно, вы оплачиваете единоразовую сумму и получаете возможность участвовать в играх в течение определенного периода времени. Это не только экономит ваше время и деньги, но и обеспечивает вас постоянным доступом к игровым сессиям.</p>
        </div>
      </div>
      <div className='flex gap-[60px] mb-[120px]'>
        <div className='py-10 px-8 bg-brown'>
          <h1 className='text-center mb-[30px] font-keetanoKB font-bold text-2xl text-link'>10 посещений</h1>
          <h2 className='text-center text-link text-xl font-bold font-keetano'>40 000 ТГ</h2>
        </div>
        <div className='flex flex-col gap-[50px]'>
          <h1 className='font-keetano text-left text-xl font-bold text-primary'>Приобретая абонемент на 10 посещений, вы получаете:</h1>
          <ul className=''>
            <li className='text-black font-involveRG font-normal text-[20px]'>1. Скидку на каждое посещение.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>2. Приоритетное бронирование мест на играх.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>3. Возможность участия в специальных турнирах и мероприятиях.</li>
          </ul>
        </div>
      </div>
      <div className='flex gap-[60px] mb-[120px]'>
        <div className='flex flex-col gap-[50px]'>
          <h1 className='font-keetano text-left text-xl font-bold text-primary'>Приобретая абонемент на 20 посещений, вы получаете:</h1>
          <ul className=''>
            <li className='text-black font-involveRG font-normal text-[20px]'>1. Вышеперечисленные привилегии.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>2. Дополнительная скидка на каждое посещение.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>3. Бонусные подарки на каждый 10-й визит.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>4. Персональный менеджер для организации вашего участия.</li>
          </ul>
        </div>
        <div className='py-10 px-8 bg-[#AA542A]'>
          <h1 className='text-center mb-[30px] font-keetanoKB font-bold text-2xl text-link'>20 посещений</h1>
          <h2 className='text-center text-link text-xl font-bold font-keetano'>90 000 ТГ</h2>
        </div>
      </div>
      <div className='flex gap-[60px] mb-[120px]'>
        <div className='py-10 px-8 bg-primary'>
          <h1 className='text-center mb-[30px] font-keetanoKB font-bold text-2xl text-link'>50 посещений</h1>
          <h2 className='text-center text-link text-xl font-bold font-keetano'>200 000 ТГ</h2>
        </div>
        <div className='flex flex-col gap-[50px]'>
          <h1 className='font-keetano text-left text-xl font-bold text-primary'>Приобретая абонемент на 50 посещений, вы получаете:</h1>
          <ul className=''>
            <li className='text-black font-involveRG font-normal text-[20px]'>1. Вышеперечисленные привилегии.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>2. Максимальная скидка на каждое посещение.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>3. Эксклюзивный доступ к закрытым мероприятиям и специальным игровым сессиям.</li>
            <li className='text-black font-involveRG font-normal text-[20px]'>4. Индивидуальные бонусы и вознаграждения по итогам года.</li>
          </ul>
        </div>
      </div>
      <h1 className='text-center mb-[50px] text-xl font-keetano font-bold text-black'>ЕДИНОРАЗОВАЯ ОПЛАТА</h1>
      <p className='font-involveRG text-[20px] font-normal text-center text-black'>Кроме предложенных абонементов, у нас также доступна единоразовая оплата за каждое посещение. Это удобное решение для тех, кто предпочитает гибкость в расписании или хочет оплатить игру один раз. При этом вы все равно можете насладиться атмосферой наших мероприятий и получить возможность участвовать в захватывающих играх `Мафия`.</p>
    </section>
  )
}