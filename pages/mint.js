import Head from "next/head";
import Header from "@components/Header";
import MintBox from "@components/MintBox";
import HeroBG from "@components/HeroBG";
import { Disclosure } from "@headlessui/react";
import { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
const footerNav = [
  {
    name: "Twitter",
    href: "https://twitter.com/SweaterOnChain",
    icon: <SocialIcon url="https://twitter.com/SweaterOnChain" />,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Mint() {
  const [mintOpen, setMintOpen] = useState(false)
  return (
    <div className="relative">
      <Head>
        <title>
          SweatersOnChain. The first fully tilable Christmas pattern with real
          world utility. 100% On-Chain
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Header />
        <HeroBG />

        <MintBox />

      </main>

      <footer>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {footerNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; SweatersOnChain 2021
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
