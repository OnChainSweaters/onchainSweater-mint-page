import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import SweaterCarousel from '@components/SweaterCarousel'
import HeroBG from '@components/HeroBG'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <SweaterCarousel/>
        <HeroBG/>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
