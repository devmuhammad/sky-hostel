"use client";

import { useEffect, useState } from "react";
import { blocks, roomTypes } from "@/constants/properties";
import Image from "next/image";
import React from "react";
import { IoBedOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { TbBuildings } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

const Hero = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0].id.toString());
  const [selectedBlock, setSelectedBlock] = useState(blocks[0].id.toString());
  const [selectedStudents, setSelectedStudents] = useState("4");

  useEffect(() => {
    setSelectedStudents(roomTypes.find(room => room.id === +selectedRoomType)?.id.toString() || "4");
  }, [selectedRoomType]);

  return (
    <div className="w-full h-[85vh] bg-[#e6eef9] grid grid-cols-2 relative">
      <div className="absolute w-full h-full">
        <div className="container-cont w-full h-full flex items-center">
          <div>
            <p className="text-5xl font-semibold">Find the perfect</p>
            <p className="text-5xl font-semibold mb-4">room for your stay</p>
            <p className="text-lg">Stay, explore, and make memories—</p>
            <p className="text-lg">The Ultimate Hostel Experience Awaits!</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="w-full h-full relative">
        <Image src="/hero.webp" alt="hero" fill className="object-cover" />
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] bg-white p-2 rounded-xl flex-between">
        <div className="w-[86%] grid grid-cols-3 gap-2">
          <div className="w-full p-2 rounded-md border border-solid border-gray-300 flex-align gap-2">
            <div className="bg-gray-200 text-gray-500 text-2xl size-10 min-w-10 rounded flex-center">
              <IoBedOutline />
            </div>
            <Dropdown
              label="Room Type"
              options={roomTypes.map((room) => ({ id: room.id.toString(), value: room.name }))}
              selected={selectedRoomType}
              setSelected={setSelectedRoomType}
            />
          </div>
          <div className="w-full p-2 rounded-md border border-solid border-gray-300 flex-align gap-2">
            <div className="bg-gray-200 text-gray-500 text-2xl size-10 min-w-10 rounded flex-center">
              <TbBuildings />
            </div>
            <Dropdown
              label="Blocks"
              options={blocks.map((block) => ({ id: block.id.toString(), value: block.name }))}
              selected={selectedBlock}
              setSelected={setSelectedBlock}
            />
          </div>
          <div className="w-full p-2 rounded-md border border-solid border-gray-300 flex-align gap-2">
            <div className="bg-gray-200 text-gray-500 text-2xl size-10 min-w-10 rounded flex-center">
              <FiUsers />
            </div>
            <Dropdown
              label="Students"
              options={Array.from({ length: +selectedRoomType }).flatMap((_, index) => {
                return {
                  id: `${index + 1}`,
                  value: `${index + 1} Student${index + 1 > 1 ? "s" : ""}`,
                };
              })}
              selected={selectedStudents}
              setSelected={setSelectedStudents}
            />
          </div>
        </div>
        <div className="w-[12%]">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md w-full">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
