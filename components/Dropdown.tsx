'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import React, { useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

type Props = {
  label: string;
  options: { id: string; value: string }[];
  selected: string;
  setSelected: (value: string) => void;
}

const Dropdown = ({ label, options, selected, setSelected }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(dropdownRef, setIsOpen);

  return (
    <div className="relative w-full">
      <div className="w-full flex-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-black">{options.find(option => option.id === selected)?.value}</p>
        </div>
        <IoChevronDown className="text-gray-500 text-lg" />
      </div>
      {isOpen && (
        <div ref={dropdownRef} className="absolute top-[105%] left-0 w-full p-2 max-h-[200px] overflow-y-auto bg-white shadow-md rounded-md border border-solid border-gray-200 z-10">
          {options.map((option, index) => (
            <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer border-b border-solid border-gray-200 last:border-b-0 flex-between" onClick={() => {
              setSelected(option.id);
              setIsOpen(false);
            }}>
              <p>{option.value}</p>
              {selected === option.id && <FaCheck className='text-green-500' />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown;
