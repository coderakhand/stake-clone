import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

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
    <Card className="border-none rounded-none shadow-none">
      <CardHeader>
        <div className="relative flex items-center gap-2">
          <div>{logo}</div>
          <p className="text-lg font-bold text-white">{heading}</p>
          <div className="absolute left-0 top-1/2">
          <button></button>
          <button></button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto no-scrollbar flex gap-2 w-full">
        {cardList.map((cardLink, idx) => (
          <div key={idx} className="relative min-w-[140px]">
            <div className="absolute top-4 left-0 bg-background text-white px-2 py-1 rounded-r-sm  z-10 text-md font-bold">
              {idx + 1}
            </div>
            <Image src={cardLink} width={140} height={300} alt="" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
