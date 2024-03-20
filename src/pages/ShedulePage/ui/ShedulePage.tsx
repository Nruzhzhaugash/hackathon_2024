'use client'
import React, { useState } from 'react';
import SheduleList from '@/entities/SheduleList/ui/SheduleList';
import Pagination from '@/features/pagination/ui/pagination';

const data = [
  {id: 1, dataTime: '11 марта 2024', time: '20:00 до 02:00', address: 'м. Тульская, Серпуховский вал, дом 17,', record: 'Записаться'},
  {id: 2, dataTime: '11 марта 2024', time: '20:00 до 02:00', address: 'м. Тульская, Серпуховский вал, дом 17,', record: 'Записаться'},
  {id: 3, dataTime: '11 марта 2024', time: '20:00 до 02:00', address: 'м. Тульская, Серпуховский вал, дом 17,', record: 'Записаться'},
  {id: 4, dataTime: '11 марта 2024', time: '20:00 до 02:00', address: 'м. Тульская, Серпуховский вал, дом 17,', record: 'Записаться'},
  {id: 5, dataTime: '11 марта 2024', time: '20:00 до 02:00', address: 'м. Тульская, Серпуховский вал, дом 17,', record: 'Записаться'},
  {id: 6, dataTime: '11 марта 2024', time: '20:00 до 02:00', address: 'м. Тульская, Серпуховский вал, дом 17,', record: 'Записаться'},
]

export default function ShedulePage() {
  const [shedulePerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastSheduleIndex = currentPage * shedulePerPage;
  const firstSheduleIndex = lastSheduleIndex - shedulePerPage;
  const currentShedule = data.slice(firstSheduleIndex, lastSheduleIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <section className='shedule'>
      <SheduleList
        data={currentShedule}
      />
      <Pagination 
        ratingPerPage={shedulePerPage}
        totalRating={data.length}
        paginate={paginate}
      />
    </section>
  )
}
