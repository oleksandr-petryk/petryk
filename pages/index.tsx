import { BaseLayout } from 'components/BaseLayout';
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import Picture from '../public/PetrykOleksandr.jpg';

const Home: NextPage = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    const wrapper = document.getElementById('__next');
    if (wrapper) {
      vh = window.innerHeight * 0.01;
      wrapper.style.minHeight = '0';
      wrapper.style.height = (vh * 100) + 'px';

      window.addEventListener('resize', () => {
        vh = window.innerHeight * 0.01;
        wrapper.style.minHeight = '0';
        wrapper.style.height = (vh * 100) + 'px';
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="keywords" content="Petryk Oleksandr, back-end developer" />
        <meta name="description" content="Oleksandr Petryk's website" />
        <title>Oleksandr Petryk / Back-end developer</title>
      </Head>
      <BaseLayout transparentNav={true} fullFrame={true}>
        <header className='
          h-full
          container
          flex
          2xl:items-center
          2xl:justify-between
          md:justify-around
          sm:items-start
          sm:pt-20
          sm:py-4
        '>
          <div className='
            2xl:w-50
            sm:w-full
            sm:text-center
            sm:flex
            sm:flex-col
          '>
            <div className='
              font-bold
            '>
              <h1 className='text-primary m-0'>Oleksandr Petryk</h1>
              <h2 className='m-0'>Back-end developer</h2>
            </div>

            <div className='
              mt-4
              mb-6
              text-lg
            '>
              <span>English: B1</span> <br />
              <span>Commercial experience: 6 months</span> <br />
            </div>
            <button className='
              bg-primary
              px-10
              py-2
              mt-5
              rounded-md
              flex
              items-center
              space-x-2
              sm:self-center
            '>
              <Link
                className='text-white text-xl font-bold'
                href='/about'
              >learn more</Link>
              <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L1 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className='sm:hidden ml-5'>
            <Image
              src={Picture.src}
              alt="Oleksandr Petryk's picture"
              width={2000}
              height={5000}
              className='shrink-0 rounded-md 2xl:w-80 lg:w-70'
            />
          </div>
        </header>
      </BaseLayout>
    </>
  )
}

export default Home;
