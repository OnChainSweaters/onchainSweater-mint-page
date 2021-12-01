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
          <h1 className="text-6xl max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight">
            {/* <span className="text-yellow">100% On Chain</span>
            <span className=" text-red inline">Christmas</span> */}
            <span className=" text-red blcok ">UGLY SWEATER PATTERNS </span>
            <span className=" text-yellow ">ON-CHAIN</span>
          </h1>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt className="">
                  <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                    <img className="w-auto" src="/star.png" alt="" />
                  </div>
                  <p className="font-medium text-3xl pt-2 pb-4 ml-20 text-green">
                    Looks rare
                  </p>
                </dt>
                <dd className="text-2xl  ml-20 text-gray-200">
                  200 traits, 40+ colors, 200+ Millions possibilities. Generated
                  at mint time
                </dd>
              </div>
              <div className="relative">
                <dt className="">
                  <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                    <img className="w-auto" src="/bell.png" alt="" />
                  </div>
                  <p className="font-medium text-3xl pt-2 pb-4 ml-20 text-green">
                    100% On-Chain
                  </p>
                </dt>
                <dd className="text-2xl ml-20 text-gray-200">
                  As long as the Ethereum blockchain is around, so will be your
                  NFT
                </dd>
              </div>
              <div className="relative">
                <dt className="">
                  <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                    <img className="w-auto" src="/glove.png" alt="" />
                  </div>
                  <p className="font-medium text-3xl pt-2 pb-4 ml-20 text-green">
                    IRL Utility
                  </p>
                </dt>
                <dd className="text-2xl  ml-20 text-gray-200">
                  With dApp you can claim a neatable pattern for you NFT. This
                  pattern will include a unique ID to prove it's authenticity
                </dd>
              </div>
              <div className="relative">
                <dt className="">
                  <div className="absolute flex items-center justify-center h-20 w-20 text-white">
                    <img className="w-auto" src="/candycane.png" alt="" />
                  </div>
                  <p className="font-medium text-3xl pt-2 pb-4 ml-20 text-green">
                    VIP
                  </p>
                </dt>
                <dd className="text-2xl  ml-20 text-gray-200">
                  All hodlers of a Christmas Sweater Pattern will be whitelisted for our next drop!
                </dd>
              </div>
            </dl>
          </div>

          <h1 id="roadmap" className="text-6xl mt-20 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight">
           ROADMAP
          </h1>

          <dl className="space-y-4 text-center text-2xl text-white">
            <dt className="font-medium text-3xl pt-6 text-blue">
              500 Free Mint
            </dt>
            <dd className="">
              It's all free so far. It's a free mint what do you
              expect
            </dd>

            <dt className="font-medium text-3xl pt-6 text-blue">
              1000 Sold: The Basics
            </dt>
            <dd className="">
              Open up the discord. Rarity sites. Hire community manager.
            </dd>

            <dt className="font-medium text-3xl pt-6 text-blue">
              1500 Sold: IRL Utility
            </dt>
            <dd className="">
              Using our dApp you will be able to claim neatable pattern have it
              custom made. The claimaible mechanism include a unique has that
              prove that the physical sweater is unique.
            </dd>

            <dt className="font-medium text-3xl pt-6 text-blue">
              2000 Sold: Let's get neating
            </dt>
            <dd className="">
              {" "}
              Top 10 rarest pattern will get entitled to a free custom made
              sweater featuring their NFT. (This of all the fun XMas
              conversation this is going to spark)
            </dd>

            <dt className="font-medium text-3xl pt-6 text-blue">
              3333 Sold: And now we dance.
            </dt>
            <dd className="">
              Futur development funded. Sandbox Airdrops for all holders.
            </dd>
            <dt className="font-medium text-3xl pt-6 text-blue">BONUS</dt>
            <dd className="">
              Whitelist for our next project droping early January 2022.
            </dd>
          </dl>
        </div>


        <h1 id="roadmap" className="text-6xl mt-20 max-w-3xl mx-auto  text-yellow body-title  text-center font-pixel uppercase tracking-tight">
           Mint
          </h1>


      </div>
      <Footer />
    </div>
  );
}
