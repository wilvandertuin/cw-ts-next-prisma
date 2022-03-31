import type { NextPage } from 'next'
import Head from 'next/head'
import Shifts from '../components/Shifts'
import AuthBanner from '../components/AuthBanner'

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Shift App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-10'>
        {/* <h1 className='text-2xl font-bold'>Shift App</h1> */}
        <Shifts />
        <div className="mt-4">
          <AuthBanner />
        </div>
      </main>
    </div>
  )
}

export default Home
