import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const footerList = [
  {
    name: "Casino",
    items: [
      "Casino Games",
      "Slots",
      "Live Casino",
      "Roulette",
      "Blackjack",
      "Poker",
      "Providers",
      "Promos & Competitions",
      "Stake Engine",
    ],
  },
  {
    name: "Sports",
    items: [
      "Sportsbook",
      "Live Sports",
      "Soccer",
      "Basketball",
      "Tennis",
      "eSports",
      "Bet Bonuses",
      "Sports Rules",
      "Racing Rules",
    ],
  },
  {
    name: "Support",
    items: [
      "Help Center",
      "Fairness",
      "Gambling Helpline",
      "Live Support",
      "Self Exclusion",
      "Law Enforcement Request",
    ],
  },
  {
    name: "About Us",
    items: [
      "VIP Club",
      "Affiliate",
      "Privacy Policy",
      "AML Policy",
      "Terms of Service",
    ],
  },
  {
    name: "Payment Info",
    items: [
      "Deposit & Withdrawals",
      "Currency Guide",
      "Crypto Guide",
      "Supported Crypto",
      "How to Use the Vault",
      "How Much to Bet With",
    ],
  },
  {
    name: "FAQ",
    items: [
      "How-to Guides",
      "Online Casino Guide",
      "Sports Betting Guide",
      "How to Live Stream Sports",
      "Stake VIP Guide",
      "House Edge Guide",
    ],
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-center gap-10 max-md:hidden">
        {footerList.map((footerItem, idx) => (
          <div key={idx} className={`flex flex-col gap-2 ${idx == 2 ? "lg:ml-12" : idx == 3 ? "lg:mr-12" : ""}`}>
            <div className="font-bold text-white">{footerItem.name}</div>
            <div className="flex flex-col gap-0.5">
              {footerItem.items.map((item, idx) => (
                <div key={idx} className="text-muted font-semibold text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-around md:justify-end gap-2 text-white">
        <FaNewspaper />
        <TiMessages />
        <IoLogoFacebook />
        <RiTwitterXLine />
        <RiInstagramFill />
        <FaYoutube />
        <FaCartShopping />
      </div>
      <hr className="h-4 text-muted" />
      <div className="text-muted text-xs font-medium">
        <p className="">© 2025 Stake.com | All Rights Reserved.</p>
        <p className="my-4">
          Stake is owned and operated by Medium Rare N.V., registration number:
          145353, registered address: Seru Loraweg 17 B, Curaçao. Payment agent
          companies are Medium Rare Limited and MRS Tech Limited. Contact us at
          support@stake.com.
        </p>
        <p>
          Stake is committed to responsible gambling, for more information visit
          <a className="text-white font-bold"> Gamblingtherapy.org</a>
        </p>
        <p className="mt-2 text-muted font-bold">
          This is not official website of stake. It is created with educational
          purpose only. The developer of this website is{" "}
          <a href="https://www.coderakhand.xyz" className="text-white">
            coderakhand
          </a>
        </p>
      </div>
      <div className="w-full flex flex-col items-center py-4">
        <p className="text-muted font-medium text-sm">1 BTC = $117,785.63</p>
        <Image src="/stake_logo.tiff" height={100} width={100} alt=""></Image>
        <Image src="/gcb.svg" height={100} width={100} alt=""></Image>
      </div>
    </div>
  );
}
