import React from 'react'

interface PaginationProps {
  ratingPerPage: number;
  totalRating: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ ratingPerPage, totalRating, paginate }: PaginationProps) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalRating / ratingPerPage); i++) pageNumbers.push(i);

  return (
    <div className='mt-[50px]'>
      <ul className='flex justify-center items-center tracking-[5px]'>
        {
          pageNumbers.map(number => (
            <li key={number}>
              <a 
                href={`#=${number}list`} 
                className='font-involveSB text-lg text-primary font-semibold'
                onClick={() => paginate(number)}
              >{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
