import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/components/NavBar.module.css';

export const NavBar: NextPage<{
  transparent?: boolean
}> = ({ transparent }) => {
  return (
    <div className={[styles.navBarWrapper, !transparent ? styles.navBarWrapperBlur : ''].join(' ')}>
      <nav className={[styles.navBar, 'container'].join(' ')}>
        <Link href='/' className='text-inherit text-3xl font- sm:hidden'>Petryk</Link>

        <div className='sm:space-x-20 space-x-4 font-semibold text-lg'>
          <Link href="/" className='text-inherit'>home</Link>
          <Link href="/about" className='text-inherit'>about</Link>
        </div>
      </nav>
    </div>
  )
}
