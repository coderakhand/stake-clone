"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function GamesCard({
  heading,
  logo,
  cardList,
}: {
  heading: string;
  logo: React.ReactNode;
  cardList: string[];
}) {
  return (
    <Card className="border-none rounded-none shadow-none gap-2">
      <CardHeader>
        <div className="relative flex items-center">
          <div>{logo}</div>
          <p className="text-lg font-bold text-white">{heading}</p>
          <div className="absolute left-0 top-1/2">
            <button></button>
            <button></button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 overflow-x-auto no-scrollbar flex gap-3 w-full">
        {cardList.map((cardLink, idx) => (
          <motion.div
            whileHover={{ translateY: "-8px", transition: { duration: 0.3 } }}
            key={idx}
            className="relative min-w-[140px] rounded-sm overflow-hidden cursor-pointer group"
          >
            <div className="absolute bottom-1 right-1 invisible group-hover:visible bg-foreground flex justify-center items-center p-1 rounded-sm w-8 h-8">
              <FiExternalLink className="text-white" />
            </div>
            <div className="absolute top-4 left-0 bg-background text-white px-2 py-1 rounded-r-sm  z-10 text-md font-bold">
              {idx + 1}
            </div>

            <Image
              src={cardLink}
              width={140}
              height={300}
              alt=""
              className=""
            />
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}
