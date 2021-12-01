import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SweaterCarousel from "@components/SweaterCarousel";
import HeroBG from "@components/HeroBG";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Next.js Starter!</title>
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

      <SweaterCarousel />
      <div id="wat" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="z-10 mx-auto  relative  ">
          <h1 className="text-6xl mx-auto title-shadow  text-yellow body-title  text-center font-pixel uppercase tracking-tight">
            <span className="text-yellow">UGLY </span>
            <span className=" text-green inline">Christmas </span>
            <span className=" text-red ">PATTERNS </span>
            <span className=" text-blue block">ON-CHAIN</span>
          </h1>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
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
                  200 traits, 40+ colors, 200+ Millions possibilities. Generated
                  at mint time.
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
                  As long as the Ethereum blockchain is around, so will your
                  NFT.
                </dd>
              </div>
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
                  Every pattern can claim a knittable template.
                  <br />{" "}
                  <i>
                    Geek note: You'll even have a hash that'll prove that you
                    are the owner of IRL sweater.
                  </i>
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
                  All hodlers of a Christmas Sweater Pattern will be whitelisted
                  for our next drop!
                </dd>
              </div>
            </dl>
          </div>

          <h1
            id="roadmap"
            className=" title-shadow text-7xl mt-28 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight"
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
              Let's get Knitted
            </dt>
            <dd className="text-gray-200 text-2xl opacity-80">
              Top 10 rarest Ugly Patterns can claim a free, custom made sweater
              featuring their NFT. (This of all the fun XMas conversation this
              is going to spark)
            </dd>

            <dt className="font-medium text-3xl pt-12 text-white">
              <span className="block font-semibold text-blue text-lg tracking-wide uppercase">
                SOLD OUT!
              </span>
              And now we dance
            </dt>
            <dd className="text-gray-200 text-2xl opacity-80">
              Futur development funded. Sandbox Airdrops for all holders.
            </dd>

            <dt className="font-medium text-3xl pt-6 text-blue">BONUS</dt>

            <dd className="text-gray-200 text-2xl opacity-80">
              Whether we sale 2 or 3000, you will get a Whitelist access for our
              next drop. It combines unique DEFI mechanisms with NFTs. Coming
              early January 2022.
            </dd>
          </dl>
        </div>

        <h1
          id="roadmap"
          className="text-6xl mt-20 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight"
        >
          Mint
        </h1>
      </div>
      <Footer />
    </div>
  );
}
