'use client'

import { useState } from "react";
import { Modal } from "flowbite-react";
import Input from "@/shared/ui/Input/Input";
import { motion } from 'framer-motion';
import './styles.scss';

interface ModalProps {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  onSelectCity?: (city: string) => void;
}

const data = [
  {city: 'Москва'},
  {city: 'Алмата'},
  {city: 'Нур-Султан'},
  {city: 'Санкт-Петербург'},
  {city: 'Астана'},
  {city: 'Новосибирск'},
  {city: 'Екатеринбург'},
  {city: 'Казань'},
  {city: 'Челябинск'},
  {city: 'Омск'},
  {city: 'Самара'},
  {city: 'Пермь'},
  {city: 'Уфа'},
  {city: 'Волгоград'},
  {city: 'Красноярск'},
];

export default function ModalOpen({ active, setActive, onSelectCity }: ModalProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCitySelect = (city: string) => {
    if (onSelectCity) {
      onSelectCity(city);
    }
    setActive(false);
  };

  const filteredCities = data.filter(({ city }) => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Modal dismissible show={active} onClose={() => setActive(false)} className="bg__modal">
        <Modal.Body className="py-[50px] px-20 overflow-x-hidden bg-link modal__active overscroll-y-contain">
          <div className="mb-[50px] p-2.5 border-primary border-[1px] border-solid">
            <Input 
              className="w-[565px] text-brown text-[16px] font-normal font-involveRG "
              placeholder="Для поиска введите название города"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="grid modal__grid">
            {filteredCities.map(({ city }, index) => (
              <motion.li 
                key={index} 
                className="modal__list hover:p-3 cursor-pointer p-3 flex items-center justify-center" 
                onClick={() => handleCitySelect(city)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="whitespace-nowrap hover:opacity-80 text-[16px] text-primary font-involveRG font-normal">{city}</span>
              </motion.li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}