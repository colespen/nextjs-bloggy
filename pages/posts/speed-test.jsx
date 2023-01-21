import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

import { useEffect } from 'react';


export default function SpeedTest() {
  
  const goToTop = () => {
    window.scrollTo({
        top: 5000,
        behavior: 'smooth',
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToTop();
      return () => clearTimeout(timer)
    }, 500)
  }, [])


    const lightning = <h1>Lightning fast eh</h1>
    const lightningList = []
    for (let i = 0; i <=100; i++) {
      lightningList.push(lightning);
  }
  
  
  return (
      <Layout>
        <Head>
          <title>Speed Test</title>
          <link rel="icon" href="/images/brush-cursor.png" />
        </Head>
        {lightningList}
        <h2>
          <Link href="/"></Link>
        </h2>
      </Layout>
  );
}