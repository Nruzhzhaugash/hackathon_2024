"use client";
import { useEffect, useState } from "react";
import PlayerTable from "@/entities/PlayersTable/ui/PlayerTable";
import Pagination from "@/features/pagination/ui/pagination";
import ModalOpen from "@/features/Modal/ui/Modal";
import Input from "@/shared/ui/Input/Input";

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
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data] = useState(initialData); 
  const [sortColumn, setSortColumn] = useState<any>('points');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [selectedCity, setSelectedCity] = useState<string>('Алмата');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const sortedData = [...data].sort((a, b) => {
    if (sortColumn === "name") {
      return a.name.localeCompare(b.name) * (sortOrder === "asc" ? 1 : -1);
    } else {
      return (b[sortColumn] - a[sortColumn]) * (sortOrder === "asc" ? 1 : -1);
    }
  });

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
  };

  
  const lastRatingIndex = currentPage * ratingPerPage;
  const firstRatingIndex = lastRatingIndex - ratingPerPage;
  const currentRating = sortedData.slice(firstRatingIndex, lastRatingIndex);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleSearch = (searchTerm: string) => setSearchTerm(searchTerm);

  const changeSortCategory = (columnName: keyof PlayerData) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortOrder("desc");
    }
  };

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const overallRating = () => {
    setSortColumn('points');
    setSortOrder('asc');
  }

  return (
    <section className="rating">
      <div className="flex items-center justify-between mb-[50px]">
      <h1 className="text-primary text-2xl font-bold">Рейтинг игроков</h1>
      <div className="border-primary border-[1px] border-solid p-2.5">
        <Input 
          className="font-involveRG font-normal text-[16px] text-brown w-[296px]"
          placeholder="Для поиска введите никнейм игрока"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      </div>
      <li className="flex gap-[60px] mb-[50px]">
        <ul onClick={() => overallRating()} className="cursor-pointer text-[20px] font-involveRG font-semibold text-primary">Общий рейтинг</ul>
        <ul onClick={() => setOpenModal(true)} className="cursor-pointer text-[20px] font-involveRG font-semibold text-primary">{selectedCity || 'Выберите город'}</ul>
      </li>
      <PlayerTable 
        data={currentRating}
        searchTerm={searchTerm} 
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
      <ModalOpen 
        active={openModal}
        setActive={setOpenModal}
        onSelectCity={handleSelectCity}
      />
    </section>
  );
}
