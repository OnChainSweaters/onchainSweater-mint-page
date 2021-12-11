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
  {
    name: "Discord",
    href: "https://discord.gg/DFNcUshk",
    icon: <SocialIcon url="https://discord.gg/DFNcUshk" />,
  },
];
const faqs = [
  {
    question: "What does 100% on-chain means?",
    answer:
      "It means all code and art for this NFT collection lives on the Ethereum blockchain." +
      "It has no outside dependencies. As long as the Ethereum blockchain is around, so is your NFT.",
  },
  {
    question:
      "What will happen to my NFT(s) when the Xmas is behind us?",
    answer:
      "Fear not. We have your back! If we don't mint the whole collection and reveal before the 20th of December, then we will scrap the Christmas theme and enable holders to choose their theme before revealing their pattern. Theses themes will be: Sci-fi, Crypto and Christmas. Note: you will be able to make this choice only once.",
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
    answer: "The first 333 NFTs are free, then 0.02 per mint",
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
  {
    question: "Wen reveal",
    answer:
      "We will trigger the reveal after sellout or in case the minting does not finish, after we reached token ID 600 so that we can cover gas fees",
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


<script async src="https://www.googletagmanager.com/gtag/js?id=G-6DVND8L786"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-6DVND8L786');
</script>
      </Head>

      <main>
        <Header />
        <HeroBG />
      </main>

      {/* <SweaterCarousel /> */}
      <div className="content-wrap">
        <div className="max-w-6xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
          <div className="z-10 mx-autox">
            <h1
              id="wat"
              className="text-5xl md:text-7xl mx-auto title-shadow  text-yellow body-title  text-center font-pixel uppercase tracking-tight"
            >
              <span className="text-yellow">100% On-Chain </span>
              <span className=" text-green inline">Christmas </span>
              <span className=" text-red ">PATTERNS </span>
            </h1>

            <div className="mt-8 md:mt-12">
              <h1 className="max-w-7xl mx-auto px-4 mt-8 sm:px-6 lg:px-8w text-center">
                <img
                  className="anmiatedPeek"
                  src={`/animated_peek.gif`}
                  alt=""
                />
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
                    First 333 mints are free. Then only 0.02Ξ.
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
                  First 333 NFTs
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
                  id="faq"
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
            <a
              href="https://opensea.io/collection/xmas-sweaters-onchain"
              className="text-gray-400 hover:text-gray-500 social-nav"
            >
              <span className="sr-only">Opensea</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="none"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#2081E2"
                  d="M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z"
                />
                <path
                  fill="#fff"
                  d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
                />
                <path
                  fill="#fff"
                  d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
                />
              </svg>
            </a>

            {footerNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500 social-nav"
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
