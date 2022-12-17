import Link from 'next/link';
import { FC } from 'react';

import { ThemeSwitch } from 'components/ThemeSwitch';
import styles from '../styles/components/NavBar.module.css';

export const NavBar: FC = () => {
  return (
    <div className={styles.navBarWrapper}>
      <nav className={[styles.navBar, 'container'].join(' ')}>
        <Link href='/' className='text-inherit dark:text-inherit text-3xl font- sm:hidden' shallow={true}>Petryk</Link>

        <div className='sm:space-x-8 space-x-4 font-semibold text-lg flex'>
          <Link href="/" className='text-inherit dark:text-inherit self-center' shallow={true}>home</Link>
          <Link href="/about" className='text-inherit dark:text-inherit self-center' shallow={true}>about</Link>
        </div>

        <div className='flex items-center'>
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}
