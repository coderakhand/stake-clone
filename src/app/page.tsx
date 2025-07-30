import Footer from "@/components/Footer";
import LiveBets from "@/components/LiveBets";
import PlayCasinoSports from "@/components/PlayCasinoSports";
import SideBar from "@/components/SideBar";
import SignUpCard from "@/components/SignUpCard";
import TopBar from "@/components/TopBar";
import TrendingGamesSection from "@/components/TrendingGamesSection";
import TrendingSportsSection from "@/components/TrendingSportsSection";
import { FaSearch } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";

export default function Home() {

  return (
    <div className="min-w-screen min-h-screen flex justify-center">
      <div className="max-w-[1600px] min-h-screen bg-background flex overflow-hidden">
        <SideBar />
        <div className="w-full h-screen overflow-y-auto">
          <TopBar />
          <main className="bg-background">
            <div className="flex items-center justify-center gap-3 bg-cover bg-[url(/header-bg.png)] w-full  py-8 px-6 md:px-8">
              <SignUpCard />
              <div className="flex-grow flex justify-end">
                <PlayCasinoSports />
              </div>
            </div>
            <div className="px-10 py-6">
              <div className="w-full flex bg-[#0F212D] border-[#2F4453] border-2 rounded-sm">
                <div className="border-r-2 border-[#2F4453]">
                  <div className="flex h-full w-full justify-center p-2 items-center text-white font-bold">
                    {"Casino"}{" "}
                    <LuChevronDown className="mx-0.5 mt-1 stroke-3" />
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
            </div>
            <div className="px-4 flex flex-col">
              <TrendingGamesSection />
              <TrendingSportsSection />
            </div>
            <div className="px-4 w-full mb-10">
              <LiveBets />
            </div>
          </main>
          <footer className="bg-[#081E2A] w-full px-4 py-6 flex justify-center items-center">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
