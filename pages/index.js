import Head from 'next/head'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import DefaultLayout from '../layouts/Defaults'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats world</title>
        <meta name="description" content="I don sabi this thing ooo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DefaultLayout>
          <Jumbotron />
        </DefaultLayout>
        
        
      </main>

      
    </div>
  )
}
