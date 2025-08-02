"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MdInfo } from "react-icons/md";

export default function FAQSection() {
  const faqs = [
    {
      question: "Who is Stake?",
      answer:
        "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages.\n\nWith a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues.\n\nWe host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
    },
    {
      question: "Is Stake Licensed?",
      answer:
        "Stake.com is licensed by gaming authorities in Curacao, providing a safe and secure betting platform. Stake is operated by Medium Rare N.V. which is licensed by the Curaçao Gaming Authority under license number OGL/2024/1451/0918.\n\nStake is a Crypto Gambling Foundation verified operator with strong policies around Anti-Money Laundering. Stake promotes responsible gambling with a robust self-exclusion policy and various Stake Smart resources.",
    },
    {
      question: "Is Betting on Stake Safe?",
      answer:
        "Stake is committed to providing a safe environment for our community. We pride ourselves in offering the most up to date and accessible smarter gambling resources. Our responsible gambling guidelines paired with our monthly budget calculator have been developed to help our players set appropriate betting limits.\n\nWhen betting with local and crypto currencies, players can be sure their funds are securely stored using our Stake Vault feature.",
    },
    {
      question: "What Currencies Can I Bet With?",
      answer:
        "Alongside supporting local currencies, Stake.com is the world’s leading cryptocurrency casino and sportsbook, supporting 20 cryptocurrencies from Bitcoin (BTC) to Polygon (MATIC). Discover the complete list of supported crypto at Stake.com for more details.",
    },
    {
      question: "What Types of Casino Games Can I Play?",
      answer:
        "Browse our wide variety of popular casino games and enjoy a fair and fun online gaming experience. Stake's online casino platform features a range of game categories including slot games, live casino games, Stake Originals and many classics like Blackjack, Roulette, Poker, and Baccarat, right from your browser. Stake brings you the best gameplay from esteemed iGaming providers like Pragmatic Play, Hacksaw Gaming, Twist Gaming and Evolution Gaming.",
    },
    {
      question: "What Sports Can I Bet On?",
      answer:
        "From major football and basketball leagues to Dota 2 and CS:GO action, we cover all bases for sports and eSports markets. We offer industry leading odds and tailored betting resources including expert picks and predictions on our Stake News Blog.\n\nYou can bet on all major upcoming sporting events, place live bets and live stream all the biggest sporting events for free on Stake Sportsbook.",
    },
    {
      question: "How Do I Watch Live Streams?",
      answer:
        "Stake.com is the perfect place for official sports streams, with comprehensive coverage of most popular sporting events and major tournaments, from tennis matches to MMA fights.\n\nTo live stream the latest sporting events, click on the live stream icon next to the event on Stake Sportsbook. For full details, check out our comprehensive guide to live streaming your favourite sports on Stake.com.",
    },
  ];

  return (
    <section className="md:px-6 w-full bg-background text-white">
      <div className="max-w-4xl mb-4">
        <motion.p
          className="flex items-center text-lg sm:text-xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MdInfo className="mr-1 text-muted" />
          Still Have Questions?
        </motion.p>
      </div>
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#213643] rounded-sm overflow-hidden mb-2 border-none shadow-md"
            >
              <AccordionTrigger className="text-left text-xs sm:text-sm font-semibold sm:font-bold hover:no-underline h-8 sm:h-12 flex items-center px-3 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-3 font-medium  text-xs text-muted whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
