"use client";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";

export default function SearchBox() {
  return (
    <div className="w-full flex bg-[#0F212D] border-[#2F4453] border-2 rounded-sm hover:border-[#557086] transition-all duration-150">
      <div className="border-r-2 border-[#2F4453]">
        <div className="flex h-full w-full justify-center p-2 items-center text-white text-sm font-semibold">
          {"Casino"} <LuChevronDown className="mx-0.5 mt-1 stroke-3" />
        </div>
      </div>
      <div className="px-3 flex items-center">
        <FaSearch className="w-5 h-5 text-[#2F4453]" />
      </div>
      <input
        type="text"
        placeholder="Search your game"
        className="w-full h-10 bg-[#0F212D] rounded-sm  outline-none text-white placeholder-[#2F4453] font-semibold text-sm cursor-text"
      />
    </div>
  );
}
