import { useEffect } from 'react';
import Head from 'next/head';
import Navigation from '../components/Base/Navigation.js';
import Footer from '../components/Base/Footer.js';
import BlankLayout from '../components/Layouts/BlankLayout.js';
import Background from '../components/Background/Background.js';

import cls from '../styles/home/main.module.css';

const Home = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    const wrapper = document.querySelector('.wrapper');
    vh = window.innerHeight * 0.01;
    wrapper.style.minHeight = '0';
    wrapper.style.height = (vh * 100) + 'px';

    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01;
      wrapper.style.minHeight = '0';
      wrapper.style.height = (vh * 100) + 'px';
    });
  }, []);

  return (
    <BlankLayout>
      <Head>
        <meta name="keywords" content="Petryk Oleksandr, Petryk Oleksandr web developer" />
        <meta name="description" content="Website of web developer - Petryk Oleksandr" />
        <title>Petryk Oleksandr / Web developer</title>
      </Head>

      <div className="container">
        <div className={cls.navigationWrapper}>
          <Navigation />
        </div>

        <Background />

        <header className={cls.header}>
          <div className={cls.inscription}>
            <h4>Petryk Oleksandr</h4>
            <h1>Web developer</h1>
          </div>
        </header>

        <div className={cls.foorerWrapper}>
          <Footer />
        </div>
      </div>
    </BlankLayout>
  );
};

export default Home;
