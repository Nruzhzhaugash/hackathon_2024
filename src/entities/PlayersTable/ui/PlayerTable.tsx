"use client";

import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import './styles.scss';
import Link from 'next/link';
import Arrow from '@/shared/ui/icons/rating/arrow';

type PlayerData = {
  id: number;
  name: string;
  points: number;
  koff: string;
  trophy: number;
  games: number;
  wins: number;
  loses: number;
};

interface PlayersTableProps {
  data: PlayerData[];
  currentPage: number;
  sortColumn: keyof PlayerData;
  sortOrder: SortOrder;
  changeSortCategory: (columnName: keyof PlayerData) => void;
}

type SortOrder = "asc" | "desc";

export default function PlayerTable({
  data,
  currentPage,
  sortColumn,
  sortOrder,
  changeSortCategory,
}: PlayersTableProps): JSX.Element {
  const [sortedData, setSortedData] = useState<PlayerData[]>([]);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const newData = [...data].sort((a, b) => {
      if (sortColumn === "name") {
        return a.name.localeCompare(b.name) * (sortOrder === "asc" ? 1 : -1);
      } else {
        return (b[sortColumn] - a[sortColumn]) * (sortOrder === "asc" ? 1 : -1);
      }
    });
    setSortedData(newData);
  }, [data, sortColumn, sortOrder]);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (columnName: keyof PlayerData) => {
    changeSortCategory(columnName);
  };

  return (
    <div className='overflow-x-auto'>
      <Table className='bg-transaprent'>
        <Table.Head className=' bg-transparent rating__table border-primary'>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>№</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>ID</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Имя игрока</Table.HeadCell>
          <Table.HeadCell className='hover:underline cursor-pointer pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary flex ' onClick={() => handleSort('points')}>Очки {sortColumn === 'points' && <Arrow direction={sortOrder} />}</Table.HeadCell>
          <Table.HeadCell className='hover:underline cursor-pointer pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary' onClick={() => handleSort('koff')}>Коэфф. {sortColumn === 'koff' && <Arrow direction={sortOrder} />}</Table.HeadCell>
          <Table.HeadCell className='hover:underline cursor-pointer pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary flex' onClick={() => handleSort('trophy')}>Трофеи {sortColumn === 'trophy' && <Arrow direction={sortOrder} />}</Table.HeadCell>
          <Table.HeadCell className='hover:underline cursor-pointer pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary' onClick={() => handleSort('games')}>Игры {sortColumn === 'games' && <Arrow direction={sortOrder} />}</Table.HeadCell>
          <Table.HeadCell className='hover:underline cursor-pointer pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary flex' onClick={() => handleSort('wins')}>Победы {sortColumn === 'wins' && <Arrow direction={sortOrder} />}</Table.HeadCell>
          <Table.HeadCell className='pb-5 bg-transparent font-normal font-involveRG normal-case text-[20px] text-primary'>Поражения</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {sortedData.map(({ id, name, points, koff, trophy, games, wins, loses }) => (
            <Table.Row key={id} className='rating__table border-primary'>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{id}</Table.Cell>
              <Table.Cell className='text-[20px] py-5 text-primary font-normal font-involveRG'>{id}</Table.Cell>
              <Table.Cell className='hover:underline text-[20px] py-5 text-primary font-normal font-involveRG'><Link href={''}>{name}</Link></Table.Cell>
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
  );
}
