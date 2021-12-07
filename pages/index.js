import Head from "next/head";
import Header from "@components/Header";
import SweaterCarousel from "@components/SweaterCarousel";
import HeroBG from "@components/HeroBG";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
const footerNav = [
  {
    name: "Twitter",
    href: "https://twitter.com/SweaterOnChain",
    icon: <SocialIcon url="https://twitter.com/SweaterOnChain" />,
  },
];
const faqs = [
  {
    question: "What does 100% on-chain means?",
    answer:
      "It means all code and art for this NFT collection lives on the Ethereum blockchain." +
      "It has no outside dependencies. This is good because your NFT does not really on anything " +
      "but ethereum to exists. So as long as the Ethereum blockchain is around, so is your NFT.",
  },
  {
    question: "Wen mint?",
    answer:
      "Shuu.. this is a surprise. Protip: Follow our Twitter and turn-on notifications.",
  },
  {
    question: "What does it mean to claim a Sweater?",
    answer:
      "Every Sweater NFT can be claimmed for either a physical verion (will require a fee), either just the knitting pattern. Either way, this can only be done once per NFT.",
  },
  {
    question: "How much is the mint?",
    answer: "The first 500 NFTs are free, then 0.03 per mint",
  },
  {
    question: "How will burning mechanism work",
    answer:
      "The plan is to allow buring two 128x128 px sweater to generate a new 256x256 one. We are still working out of the detail so this may change.",
  },
  // {
  //   question: "Why on-chain?",
  //   answer:
  //     '',
  // },
  {
    question: "How many NFT per wallet address?",
    answer: "10 max per wallet. 10 per transaction.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Home() {
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
      </main>

      {/* <SweaterCarousel /> */}
      <div className="content-wrap">
        <div className="max-w-7xl mx-auto px-4 mt-8 sm:px-6 lg:px-8">
          <div className="z-10 mx-auto    ">
            <h1 className="text-3xl md:text-6xl mx-auto title-shadow  text-yellow body-title  text-center font-pixel uppercase tracking-tight">
              <span className="text-yellow">Knittable </span>
              <span className=" text-green inline">Christmas </span>
              <span className=" text-red ">PATTERNS </span>
              <span className=" text-blue block">ON-CHAIN</span>
            </h1>

            <div className="mt-16">
              <h1 className="max-w-7xl mx-auto px-4 mt-8 sm:px-6 lg:px-8w text-center">
                <img className="anmiatedPeek" src={`/animated_peak_2.gif`} alt="" />
              </h1>
              <dl className="space-y-10 mt-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt className="">
                    <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                      <img className="w-auto" src="/glove.png" alt="" />
                    </div>
                    <p className="font-medium text-3xl pb-4 ml-24 text-green">
                      IRL Utility
                    </p>
                  </dt>
                  <dd className="text-2xl  ml-24 text-gray-200">
                    We want to bring NFTs into physical world. For this
                    collection you will be able to claim a knittable version of
                    your NFT and have it knitted.
                    {/* <br /> */}
                    {/* <i>
                    You can do that once per NFT. A unique hash will generated to identify the physical sweater.
                  </i> */}
                  </dd>
                </div>

                <div className="relative">
                  <dt className="">
                    <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                      <img className="w-auto" src="/star.png" alt="" />
                    </div>
                    <p className="font-medium text-3xl pb-4 ml-24 text-green">
                      Looks Rare
                    </p>
                  </dt>
                  <dd className="text-2xl  ml-24 text-gray-200">
                    200 traits, 40+ colors, 200+ Millions possibilities.
                    Generated at mint time.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="">
                    <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                      <img className="w-auto" src="/bell.png" alt="" />
                    </div>
                    <p className="font-medium text-3xl pb-4 ml-24 text-green">
                      100% On-Chain
                    </p>
                  </dt>
                  <dd className="text-2xl ml-24 text-gray-200">
                    128x128px of resolution generated on-chain. As long as the
                    Ethereum blockchain is around, so will your NFT.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="">
                    <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                      <img className="w-auto" src="/burn.png" alt="" />
                    </div>
                    <p className="font-medium text-3xl pb-4 ml-24 text-green">
                      Deflationary
                    </p>
                  </dt>
                  <dd className="text-2xl ml-24 text-gray-200">
                    Burn two of the 128x128px sweaters to mint a 256x256px one.
                    Traits will be rerolled. Limited to 1000.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="">
                    <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                      <img className="w-auto" src="/candycane.png" alt="" />
                    </div>
                    <p className="font-medium text-3xl pb-4 ml-24 text-green">
                      VIP
                    </p>
                  </dt>
                  <dd className="text-2xl  ml-24 text-gray-200">
                    All hodlers of a Christmas Sweater Pattern will be
                    whitelisted for our next drop!
                  </dd>
                </div>
                <div className="relative">
                  <dt className="">
                    <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                      <img className="w-auto" src="/present.png" alt="" />
                    </div>
                    <p className="font-medium text-3xl pb-4 ml-24 text-green">
                      Affordable
                    </p>
                  </dt>
                  <dd className="text-2xl  ml-24 text-gray-200">
                    First 500 mints are free. Then only 0.03Ξ.
                  </dd>
                </div>
              </dl>
            </div>

            <h1
              id="roadmap"
              className=" title-shadow text-3xl md:text-6xl mt-28 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight"
            >
              THE ROADMAP
            </h1>

            <dl className="space-y-2 max-w-3xl mx-auto text-center text-3xl">
              <dt className="font-medium text-3xl pt-12 text-white">
                <span className="block font-semibold text-blue text-lg tracking-wide uppercase">
                  First 500 NFTs
                </span>
                The Free Mint
              </dt>
              <dd className="text-gray-200 text-2xl opacity-80">
                It's all free so far, what do you expect?
              </dd>

              <dt className="font-medium text-3xl pt-12 text-white">
                <span className="block font-semibold text-blue text-lg tracking-wide uppercase">
                  1000 NFTs Sold
                </span>
                The Basics
              </dt>
              <dd className="text-gray-200 text-2xl opacity-80">
                Open up the Discord. Listing on Rarity sites. Hire a Merry and
                Cherry community manager.
              </dd>

              <dt className="font-medium text-3xl pt-12 text-white">
                <span className="block font-semibold text-blue text-lg tracking-wide uppercase">
                  1500 NFTs Sold
                </span>
                Sweater claim enabled
              </dt>
              <dd className="text-gray-200 text-2xl opacity-80">
                Using our dApp you will be able to claim Knittable template of
                your NFT. The claiming mechanism includes a unique hash to
                authentify the sweater IRL. Learn more in the Discord.
              </dd>

              <dt className="font-medium text-3xl pt-12 text-white">
                <span className="block font-semibold text-blue text-lg tracking-wide uppercase">
                  2000 NFTs Sold
                </span>
                Let's get knitting!
              </dt>
              <dd className="text-gray-200 text-2xl opacity-80">
                Top 10 rarest Ugly Patterns can claim for free, one custom made
                sweater featuring their NFT. Imagine the fun Christmas
                conversations that this is going to spark.
              </dd>

              <dt className="font-medium text-3xl pt-12 text-white">
                <span className="block font-semibold text-blue text-lg tracking-wide uppercase">
                  SOLD OUT!
                </span>
                And now we start
              </dt>
              <dd className="text-gray-200 text-2xl opacity-80">
                Futur developments in the "textile on-chain" serie.
                <br />
                We will partnering with clothing artisan through the world to
                produce unique pieces for our NFT patterns.
                <br />
                Summer collection.
                <br />
                Sandbox wearable Airdrops for all holders.
              </dd>

              <dt className="font-medium text-3xl pt-6 text-blue">BONUS</dt>

              <dd className="text-gray-200 text-2xl opacity-80">
                Whitelist access for our next drop regardless of what milestone
                we reach. That next drop combines unique DEFI mechanisms with
                NFTs as well as real world utility. <br />
                Coming early 2022.
              </dd>
            </dl>
          </div>

          <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto ">
                <h1
                  id="roadmap"
                  className=" title-shadow text-3xl md:text-6xl mt-28 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight"
                >
                  FAQs
                </h1>

                <dl className="mt-0 space-y-6 divide-y divide-brown">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-blue">
                              <span className="font-medium text-2xl pt-3 text-blue">
                                {faq.question}
                              </span>
                              <span className="ml-6 h-16 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-6 w-6 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-gray-200 text-2xl opacity-80 ">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <h1
            id="roadmap"
            className="text-5xl md:text-6xl mt-20 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight"
          >
            <span className="text-yellow">AND </span>
            <span className=" text-green inline">MERRY </span>
            <span className=" text-red ">CHRISTMAS! </span>
          </h1>
        </div>
      </div>

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
