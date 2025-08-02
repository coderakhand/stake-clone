import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { TbCardsFilled } from "react-icons/tb";
import { FaBasketball } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";

export default function BottomBar() {
  return (
    <div className="z-100 md:hidden sticky bottom-0 h-14 w-full bg-[#0F212D] text-white flex justify-around py-2 items-center">
      <BottomBarButton>
        <MdManageSearch className="w-6 h-6 text-muted" />
        <p className="font-semibold text-xs">Browse</p>
      </BottomBarButton>
      <BottomBarButton>
        <TbCardsFilled className="w-6 h-6 text-muted" />
        <p className="font-semibold text-xs">Casino</p>
      </BottomBarButton>
      <BottomBarButton>
        <BsCardChecklist className="w-6 h-6 text-muted" />
        <p className="font-semibold text-xs">Bets</p>
      </BottomBarButton>

      <BottomBarButton>
        <FaBasketball className="w-5 h-5 text-muted" />
        <p className="font-semibold text-xs">Sports</p>
      </BottomBarButton>
      <BottomBarButton>
        <BiSolidMessageRoundedDots className="w-6 h-6 text-muted" />
        <p className="font-semibold text-xs">Chat</p>
      </BottomBarButton>
    </div>
  );
}

function BottomBarButton({ children }: { children: React.ReactNode }) {
  return <button className="flex flex-col items-center">{children}</button>;
}
