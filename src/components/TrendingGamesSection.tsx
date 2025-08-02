import { TbCardsFilled } from "react-icons/tb";
import GamesCard from "./GamesCard";

export default function TrendingGamesSection() {
  return (
    <GamesCard
      heading="Trending Games"
      logo={<TbCardsFilled className="w-5 h-5 smd:w-8 smd:h-8 text-muted" />}
      cardList={[
        "https://mediumrare.imgix.net/73754d4bf421b78fbd3895bbc7890d379797588cb699d6cbe47f3656aa93613b?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/631492c465b7163dbb1218accdde2ea5c86ce4989556d82e0fb7c38039823343?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/1a0e35b08ed34bb9d43667ced7cc45ee25ae878f69e7c91f4fa737e8d30a4c33?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/9ba19ce82c77d01eaa3dffef73c8334a2f9a644ccbf6de9dc1a3da0c66127a36?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/26767b8164062b9f2c82f0cb3641efb2c414d2671c83aacb0e99f4776efc7b1b?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/cd5e0127e4506bd6ef97bceecf5191ed29fe29b2c2103d68a7481b364d192daa?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/2859df47036f5c6d3f33fead0d26c9538046589c90d5b59621306d9e4e7bfcc0?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/bdff3ebf4d04f586ecab90203923fa65b39626ef03359106209089e0c8b1d0d3?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/73318f9e220e1637c4b11338d10f377cd997d0232636f5f5a1940167ad0451cd?w=360&h=472&fit=min&auto=format",
        "https://mediumrare.imgix.net/383f81d1bf236a963e6b58484ec95049a8574003b25f03cc0fbd5757b6a26bd8?w=360&h=472&fit=min&auto=format",
      ]}
    />
  );
}
