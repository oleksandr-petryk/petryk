import type { NextPage } from 'next';
import Link from 'next/link';
import { ThemeSwitch } from 'components/ThemeSwitch';

import styles from '../styles/components/NavBar.module.css';

export const NavBar: NextPage<{
  transparent?: boolean
}> = ({ transparent }) => {
  return (
    <div className={[styles.navBarWrapper, !transparent ? styles.navBarWrapperBlur : ''].join(' ')}>
      <nav className={[styles.navBar, 'container'].join(' ')}>
        <Link href='/' className='text-inherit text-3xl font- sm:hidden'>Petryk</Link>

        <div className='sm:space-x-8 space-x-4 font-semibold text-lg flex'>
          <Link href="/" className='text-inherit self-center'>home</Link>
          <Link href="/about" className='text-inherit self-center'>about</Link>
        </div>

        <div className='flex items-center'>
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}
