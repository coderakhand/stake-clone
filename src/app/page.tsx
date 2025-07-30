import Footer from "@/components/Footer";
import PlayCasinoSports from "@/components/PlayCasinoSports";
import SideBar from "@/components/SideBar";
import SignUpCard from "@/components/SignUpCard";
import TopBar from "@/components/TopBar";
import TrendingGamesSection from "@/components/TrendingGamesSection";
import TrendingSportsSection from "@/components/TrendingSportsSection";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-background flex overflow-hidden">
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
          <div className="flex flex-col gap-5">
            <TrendingGamesSection/>
            <TrendingSportsSection/>
          </div>
        </main>
        <footer className="bg-[#081E2A] w-full px-4 py-6 flex justify-center items-center">
          <Footer/>
        </footer>
      </div>
    </div>
  );
}
