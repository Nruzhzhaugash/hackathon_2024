'use client'

import React from 'react';
import { Table } from 'flowbite-react';
import Link from 'next/link';
import './styles.scss';

type SheduleData = {
  id: number;
  dataTime: string;
  time: string;
  address: string;
  record: string;
}

interface SheduleListProps {
  data: SheduleData[];
}

export default function SheduleList({ data }: SheduleListProps) {
  return (
    <div className='overflow-x-auto'>
      <Table className='bg-transparent'>
        <Table.Head className='shedule__table border-primary'>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Дата</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Время</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Адрес</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Запись</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data.map(({ id, dataTime, time, address, record }) => (
            <Table.Row key={id} className='shedule__table border-primary'>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{dataTime}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{time}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{address}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-bold font-involveRG'>
                <Link className='hover:underline duration-200 transition-all' href={''}>{record}</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
