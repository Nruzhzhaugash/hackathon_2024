"use client";
import { useState } from "react";
import PlayerTable from "@/entities/PlayersTable/ui/PlayerTable";
import Pagination from "@/features/pagination/ui/pagination";

const initialData = [
  {
    id: 1,
    name: "Южная",
    points: 18,
    koff: "1.01",
    trophy: 30,
    games: 0,
    wins: 0,
    loses: 0,
  },
  {
    id: 2,
    name: "Южная",
    points: 25,
    koff: "1.02",
    trophy: 31,
    games: 0,
    wins: 0,
    loses: 0,
  },
  {
    id: 3,
    name: "Южная",
    points: 12,
    koff: "1.03",
    trophy: 32,
    games: 1,
    wins: 1,
    loses: 0,
  },
  {
    id: 4,
    name: "Южная",
    points: 30,
    koff: "1.04",
    trophy: 33,
    games: 2,
    wins: 2,
    loses: 0,
  },
  {
    id: 5,
    name: "Южная",
    points: 21,
    koff: "1.05",
    trophy: 34,
    games: 3,
    wins: 3,
    loses: 0,
  },
  {
    id: 6,
    name: "Южная",
    points: 17,
    koff: "1.06",
    trophy: 34,
    games: 4,
    wins: 4,
    loses: 0,
  },
  {
    id: 7,
    name: "Южная",
    points: 23,
    koff: "1.07",
    trophy: 35,
    games: 5,
    wins: 5,
    loses: 0,
  },
  {
    id: 8,
    name: "Южная",
    points: 15,
    koff: "1.08",
    trophy: 36,
    games: 6,
    wins: 6,
    loses: 0,
  },
  {
    id: 9,
    name: "Южная",
    points: 19,
    koff: "1.09",
    trophy: 37,
    games: 7,
    wins: 7,
    loses: 0,
  },
  {
    id: 10,
    name: "Южная",
    points: 22,
    koff: "1.10",
    trophy: 38,
    games: 8,
    wins: 8,
    loses: 0,
  },
  {
    id: 11,
    name: "Южная",
    points: 28,
    koff: "1.11",
    trophy: 38,
    games: 8,
    wins: 8,
    loses: 0,
  },
];

type SortOrder = "asc" | "desc";

export default function RatingPage() {
  const [ratingPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data] = useState(initialData);
  const [sortColumn, setSortColumn] = useState<any>("points");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedData = [...data].sort((a, b) => {
    if (sortColumn === "name") {
      return a.name.localeCompare(b.name) * (sortOrder === "asc" ? 1 : -1);
    } else {
      return (b[sortColumn] - a[sortColumn]) * (sortOrder === "asc" ? 1 : -1);
    }
  });

  const lastRatingIndex = currentPage * ratingPerPage;
  const firstRatingIndex = lastRatingIndex - ratingPerPage;
  const currentRating = sortedData.slice(firstRatingIndex, lastRatingIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const changeSortCategory = (columnName: keyof PlayerData) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortOrder("desc");
    }
  };

  return (
    <section className="rating">
      <PlayerTable
        data={currentRating}
        currentPage={currentPage}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        changeSortCategory={changeSortCategory}
      />
      <Pagination
        ratingPerPage={ratingPerPage}
        totalRating={sortedData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}
