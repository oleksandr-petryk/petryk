import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/components/NavBar.module.css';

export const NavBar: NextPage<{
  transparent?: boolean
}> = ({ transparent }) => {
  return (
    <div className={[styles.navBarWrapper, !transparent ? styles.navBarWrapperBlur : ''].join(' ')}>
      <nav className={[styles.navBar, 'container'].join(' ')}>
        <a href='#' className='text-3xl font-bold sm:hidden'>Petryk</a>

        <div className='sm:space-x-20 space-x-4 font-semibold text-lg'>
          <Link href="/" className=''>home</Link>
          <Link href="/about" className=''>about</Link>
        </div>
      </nav>
    </div>
  )
}
