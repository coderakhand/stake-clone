import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { TbCardsFilled } from "react-icons/tb";
import { Button } from "./ui/button";
import {
  FaBasketball,
  FaGift,
  FaRegNewspaper,
  FaHandshake,
} from "react-icons/fa6";
import { TbAffiliateFilled } from "react-icons/tb";
import { HiMiniTrophy } from "react-icons/hi2";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldHalf } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { LuAlignJustify } from "react-icons/lu";

export default function SideBar() {
  return (
    <div className="hidden  md:flex md:flex-col gap-3 w-[54px] lg:h-screen bg-[#0F212D]">
      <button className="w-full flex justify-center items-center h-[60px] bg-[#0F212E]/80 shadow-md">
        <LuAlignJustify className="w-6 h-6 text-muted stroke-3" />
      </button>

      <div className="px-2 flex flex-col gap-3">
        <Button
          size={"lg"}
          className="relative bg-cover bg-[url(https://stake.com/_app/immutable/assets/default-casino-mini.CQlEkEv9.svg)] hover:bg-[url(https://stake.com/_app/immutable/assets/default-sports-mini.BJ4yNOA9.svg)]"
        >
          <div className="absolute w-full h-full rounded-sm hover:bg-green-400/60 "></div>
          <TbCardsFilled className="w-8 h-8 text-muted" />
        </Button>

        <Button
          size={"lg"}
          className=" bg-cover bg-[url(https://stake.com/_app/immutable/assets/default-sports-mini.BJ4yNOA9.svg)] hover:bg-[url(https://stake.com/_app/immutable/assets/active-sports-mini.DzJgZyvU.svg)]"
        >
          <FaBasketball className="w-5 h-5 text-muted" />
        </Button>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <FaGift className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Promotion
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <TbAffiliateFilled className="w-6 h-6 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Affiliate
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <HiMiniTrophy className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            VIP Club
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <FaRegNewspaper className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Blog
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <BiSolidMessageRoundedDots className="w-6 h-6 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Forum
          </HoverCardContent>
        </HoverCard>

        <div className="w-full flex justify-center">
          <hr className="bg-[#2F4453] h-[2px] w-6"></hr>
        </div>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <FaHandshake className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Sponsorship
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <IoShieldHalf className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Responsible Gambling
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <RiCustomerServiceFill className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Live Support
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Button className="w-full" variant={"sideIcon"}>
              <IoIosGlobe className="w-5 h-5 text-muted" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white z-50 ml-1 mt-1 p-2 rounded-xs text-xs font-bold">
            Languages: English
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
