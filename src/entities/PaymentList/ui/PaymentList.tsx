'use client'
import MButton from '@/shared/ui/Button/Button';
import { Table } from 'flowbite-react';
import './styles.scss'
import { useState } from 'react';

type PaymentData = {
  id: number;
  typeOfPurchase: string;
  price: number;
  quantity: number;
}

interface PaymentListProps {
  data: PaymentData[];
}

export default function PaymentList({ data }: PaymentListProps) {
  const [quantityMap, setQuantityMap] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (id: number, delta: number) => {
    if (quantityMap[id] === 0 && delta == -1) {
      return 0
    } else {
      setQuantityMap(prevState => ({
        ...prevState,
        [id]: (prevState[id] || 0) + delta,
      }));
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    data.forEach(({ id, price }) => {
      const quantity = quantityMap[id] || 0;
      totalPrice += price * quantity;
    });
    return totalPrice;
  };

  return (
    <div className='overflow-x-none overflow-hidden h-[100%]'>
      <Table className='bg-transparent'>
        <Table.Head className='payment__table border-primary'>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-lg text-primary'>Вид покупки</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-lg text-primary'>Цена</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-lg text-primary text-right'>Кол - во</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-lg text-primary text-right'>Итоговая цена</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data.map(({ id, typeOfPurchase, price }) => (
            <Table.Row key={id} className=''>
              <Table.Cell className='payment__table border-primary text-lg py-[30px] text-primary font-normal font-involveRG'>{typeOfPurchase}</Table.Cell>
              <Table.Cell className='payment__table border-primary text-lg py-[30px] text-primary font-normal font-involveRG'>{price.toLocaleString()} тг</Table.Cell>
              <Table.Cell className='text-right payment__table border-primary text-lg py-[30px] text-primary font-normal font-involveRG'><button className='mr-[15px] cursor-pointer' onClick={() => handleQuantityChange(id, 1)}>+</button> {quantityMap[id] || 0}<button onClick={() => handleQuantityChange(id, -1)} className='w-5 cursor-pointer ml-[15px]'>-</button></Table.Cell>
              <Table.Cell className='relative left-10 text-center payment__table border-primary text-lg py-[30px] text-primary font-normal font-involveRG'>
                {(price * (quantityMap[id] || 0)).toLocaleString()} тг
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row >
            <Table.Cell className='text-primary pt-[50px] font-normal text-lg font-involveRG'>Общая сумма</Table.Cell>
            <Table.Cell className='text-primary pt-[50px] font-medium text-lg font-involveRG'>{calculateTotalPrice().toLocaleString()} тг</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell className='text-right pt-[50px]'>
              <MButton 
                className='py-[16px] px-[60px] bg-primary text-[32px] text-link font-obrazec font-extrabold'
                label='Оплатить'
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}