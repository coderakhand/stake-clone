import BottomBar from "@/components/BottomBar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LiveBets from "@/components/LiveBets";
import PlayCasinoSports from "@/components/PlayCasinoSports";
import SearchBox from "@/components/SearchBox";
import SideBar from "@/components/SideBar";
import SignUpCard from "@/components/SignUpCard";
import TopBar from "@/components/TopBar";
import TrendingGamesSection from "@/components/TrendingGamesSection";
import TrendingSportsSection from "@/components/TrendingSportsSection";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen flex justify-center">
      <div className="max-w-[1600px] min-h-screen bg-background flex overflow-hidden">
        <SideBar />
        <div className="w-full h-screen overflow-y-auto">
          <TopBar />
          <main className="bg-background">
            <div className="flex items-center justify-center gap-3 bg-cover bg-[url(/header-bg.png)] w-full  py-4 md:px-8">
              <SignUpCard />
              <div className="max-md:hidden flex-grow flex justify-end">
                <PlayCasinoSports />
              </div>
            </div>
            <div className="px-2 smd:px-4 sm:px-6 md:px-10 py-6">
              <SearchBox />
            </div>
            <div className="max-smd:px-2 md:hidden w-full flex justify-center items-center">
              <PlayCasinoSports />
            </div>
            <div className="md:px-4 flex flex-col max-smd:gap-2 max-smd:py-4">
              <TrendingGamesSection />
              <TrendingSportsSection />
            </div>
            <div className="px-4 w-full mb-3 smd:mb-10">
              <LiveBets />
            </div>
            <div className="px-4 w-full mb-10">
              <FAQSection />
            </div>
          </main>
          <footer className="bg-[#081E2A] w-full px-4 py-6 flex justify-center items-center">
            <Footer />
          </footer>
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
