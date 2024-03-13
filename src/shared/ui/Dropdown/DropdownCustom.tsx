import React, { useState } from "react";
import Button from "../Button/Button";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleButtonClick}
        className="text-base text-primary text-left font-involveSB w-[210px] h-[50px] pl-[20px] py-[10px] border border-brown placeholder-brown bg-transparent"
      >
        {value || "Пол"}
      </button>
      {isOpen && (
        <select
          value={value}
          onChange={handleSelectChange}
          className="absolute w-[210px] left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
