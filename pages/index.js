import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import HomeLayout from '../components/HomeLayout/HomeLayout';


function Home() {
  return (
    <div>
      <Head>
        <title>Hunters Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/register/Step1">
          <button className={styles.home__btn}>Register</button>
        </Link>
      </main>

      {/* <footer></footer> */}
    </div>
  )
}

Home.Layout = HomeLayout;

export default Home;

