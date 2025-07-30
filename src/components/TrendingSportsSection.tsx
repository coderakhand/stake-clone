import GamesCard from "./GamesCard";
import { FaBasketball } from "react-icons/fa6";

export default function TrendingSportsSection() {
  return (
    <GamesCard
      heading="Trending Sports"
      logo={<FaBasketball className="w-5 h-5 text-muted" />}
      cardList={[
        "https://mediumrare.imgix.net/soccer-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/tennis-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/baseball-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/cricket-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/basketball-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/racing-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/counter-strike-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/league-of-legends-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/dota-2-en.png?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/volleyball-en.png?w=360&h=472&fit=min&auto=format",
      ]}
    ></GamesCard>
  );
}
