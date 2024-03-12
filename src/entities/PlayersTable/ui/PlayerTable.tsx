'use client'

import React from 'react';
import { Table } from "flowbite-react";
import './styles.scss';

type PlayerData = {
  id: number;
  name: string;
  points: number;
  koff: string;
  trophy: number;
  games: number;
  wins: number;
  loses: number;
}

interface PlayersTableProps {
  data: PlayerData[];
} 

export default function PlayerTable({ data }: PlayersTableProps) {
  return (
    <div className='overflow-x-auto'>
      <Table className='bg-transaprent'>
        <Table.Head className='bg-transparent rating__table border-primary'>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>№</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>ID</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Имя игрока</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Очки</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Коэфф.</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Трофеи</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Игры</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Побед</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Поражений</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data.map(({ id, name, points, koff, trophy, games, wins, loses }) => (
            <Table.Row key={id} className='rating__table border-primary'>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{id}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{id = 4000}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{name}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{points}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{koff}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{trophy}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{games}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{wins}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{loses}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
