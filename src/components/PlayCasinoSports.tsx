"use client";
import Image from "next/image";
import { FaBasketball } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";
import { motion } from "framer-motion";

export default function PlayCasinoSports() {
  return (
    <div className="flex gap-2 sm:gap-3">
      <motion.div
        whileHover={{ translateY: "-10px", transition: { duration: 0.3 } }}
        className="smd:h-[240px] flex flex-col  rounded-sm overflow-hidden cursor-pointer"
      >
        <div className="pt-0.5 px-0.5 bg-gradient-to-b from-blue-500/80 via-blue-500/40 to-transparent">
          <Image
            height={300}
            width={300}
            alt=""
            src="/casino.avif"
            className="rounded-t-sm"
          ></Image>
          <div className="h-[40px] px-4 flex justify-center items-center gap-1 w-full bg-foreground rounded-b-sm">
            <TbCardsFilled className="w-5 h-5 text-muted" />
            <p className="font-bold text-sm text-white">Casino</p>
            <p className="flex-grow text-xs font-bold text-white flex justify-end items-center gap-1">
              {" "}
              <span className="w-1 h-1 rounded-full bg-green-400" />
              49,516
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ translateY: "-10px", transition: { duration: 0.3 } }}
        className="smd:h-[240px] flex flex-col rounded-sm overflow-hidden cursor-pointer"
      >
        <div className="pt-0.5 px-0.5 bg-gradient-to-b from-green-500/80 via-green-500/40 to-transparent">
          <Image
            height={300}
            width={300}
            alt=""
            src="/sports.avif"
            className="rounded-t-sm"
          ></Image>
          <div className="h-[40px] px-4 flex justify-center items-center gap-1 w-full bg-foreground rounded-b-sm">
            <FaBasketball className="w-4 h-4 text-muted" />
            <p className="font-bold text-sm text-white">Sports</p>
            <p className="flex-grow text-xs font-bold text-white flex justify-end items-center gap-1">
              {" "}
              <span className="w-1 h-1 rounded-full bg-green-400" />
              16,281
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
