'use client'
import { useState } from "react"
import PlayerTable from "@/entities/PlayersTable/ui/PlayerTable";
import Pagination from "@/features/pagination/ui/pagination";

const data = [
  {id: 1, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 2, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 3, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 4, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 5, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 6, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 7, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 8, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 9, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 10, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
  {id: 11, name: 'Южная', points: 18, koff: "1.00", trophy: 34, games: 4, wins: 4, loses: 0},
]

export default function RatingPage() {
  const [ratingPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)

  const lastRatingIndex = currentPage * ratingPerPage;
  const firstRatingIndex = lastRatingIndex - ratingPerPage;
  const currentRating = data.slice(firstRatingIndex, lastRatingIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <section className="rating">
      <PlayerTable 
        data={currentRating}
      />
      <Pagination 
        ratingPerPage={ratingPerPage}
        totalRating={data.length}
        paginate={paginate}
      />
    </section>
  )
}