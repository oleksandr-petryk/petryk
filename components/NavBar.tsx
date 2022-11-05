import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/components/NavBar.module.css';

export const NavBar: NextPage<{
  transparent?: boolean
}> = ({ transparent }) => {
  return (
    <div className={[styles.navBarWrapper, !transparent ? styles.navBarWrapperBlur : ''].join(' ')}>
      <nav className={[styles.navBar, 'container'].join(' ')}>
        <Link href='/' className='text-3xl font-bold text-black sm:hidden'>Petryk</Link>

        <div className='sm:space-x-20 space-x-4 font-semibold text-lg'>
          <Link href="/" className='text-black'>home</Link>
          <Link href="/about" className='text-black'>about</Link>
        </div>
      </nav>
    </div>
  )
}
