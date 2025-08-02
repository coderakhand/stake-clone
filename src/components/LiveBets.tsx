import Image from "next/image";
import { Button } from "./ui/button";

const liveBets = [
  {
    game: "Japanese Baccarat",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$1,025.00",
    multiplier: "0.00×",
    payout: "-$1,025.00",
    coin: "/crypto/tether.svg",
  },
  {
    game: "Platinum Privé Blackjack 3",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$2,100.00",
    multiplier: "0.88×",
    payout: "-$250.00",
    coin: "/crypto/bitcoin.svg",
  },
  {
    game: "Gold Party 2 - After Hours",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$68.43",
    multiplier: "84.17×",
    payout: "$5,759.28",
    coin: "/crypto/solana.svg",
  },
  {
    game: "Sweet Bonanza 1000",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$2,462.11",
    multiplier: "1.61×",
    payout: "$3,955.87",
    coin: "/crypto/usdc.svg",
  },
  {
    game: "Duck Hunters",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$89.99",
    multiplier: "52.73×",
    payout: "$4,745.13",
    coin: "/crypto/ethereum.svg",
  },
  {
    game: "Salon Privé Baccarat H",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$4,922.17",
    multiplier: "0.00×",
    payout: "-$4,922.17",
    coin: "/crypto/solana.svg",
  },
  {
    game: "Blackjack VIP R",
    user: "Hidden",
    time: "12:40 AM",
    amount: "$1,200.00",
    multiplier: "3.57×",
    payout: "$4,280.00",
    coin: "/crypto/bitcoin.svg",
  },
];

export default function LiveBets() {
  return (
    <div className="flex flex-col gap-1 smd:gap-3 md:px-4">
      <div className="w-full smd:max-w-[470px] flex justify-around smd:gap-2 items-center smd:justify-center bg-[#0F212D] rounded-full h-12 smd:h-14 px-1 my-1 smd:my-4">
        <Button
          size="lg"
          className="font-bold text-white bg-foreground hover:bg-foreground rounded-full h-10 smd:h-12"
        >
          Casino Bets
        </Button>
        <Button
          size="lg"
          className="font-bold text-white hover:bg-foreground rounded-full h-10 smd:h-12"
        >
          Sports Bets
        </Button>
        <Button
          size="lg"
          className="max-smd:hidden font-bold text-white hover:bg-foreground rounded-full h-12 flex items-center gap-1"
        >
          Race Leaderboard
          <span className="bg-[#1DFF21] w-2 h-2 rounded-full inline-block"></span>
        </Button>
      </div>
      <div className="flex justify-center items-center w-full ">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-white text-sm font-bold">
              <th className="px-3 py-2 rounded-l-lg text-left">Game</th>
              <th className="max-sm:hidden px-3 py-2 text-left">User</th>
              <th className="max-lg:hidden px-3 py-2 text-left">Time</th>
              <th className="max-md:hidden px-3 py-2 text-right">Bet Amount</th>
              <th className="max-smd:hidden px-3 py-2 text-right">
                Multiplier
              </th>
              <th className="px-3 py-2 rounded-r-lg text-right">Payout</th>
            </tr>
          </thead>
          <tbody>
            {liveBets.map((bet, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 ? "bg-[#213643]" : "bg-background"
                } text-muted font-medium text-xs smd:text-sm`}
              >
                <td className="px-3 py-2 rounded-l-sm text-left font-semibold text-white/90">
                  {bet.game}
                </td>
                <td className="max-sm:hidden px-3 py-2 text-left">
                  {bet.user}
                </td>
                <td className="max-lg:hidden px-3 py-2 text-left">
                  {bet.time}
                </td>
                <td className="max-md:hidden px-3 py-2 text-right whitespace-nowrap">
                  <span className="inline-flex items-center gap-1">
                    {bet.amount}
                    <Image src={bet.coin} width={14} height={14} alt="" />
                  </span>
                </td>
                <td className="max-smd:hidden px-3 py-2 text-right">
                  {bet.multiplier}
                </td>
                <td
                  className={`px-3 py-2 rounded-r-sm font-bold text-right whitespace-nowrap ${
                    bet.payout.startsWith("-") ? "text-muted" : "text-[#1DFF21]"
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    {bet.payout}
                    <Image src={bet.coin} width={14} height={14} alt="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
