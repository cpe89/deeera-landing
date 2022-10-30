import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Deeera!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Deeera website!" />
        <p className="description">
          Stay tuned, We are coming soon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
