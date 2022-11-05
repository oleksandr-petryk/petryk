import type { NextPage } from 'next';
import type React from 'react';

import { Content } from 'components/Content';
import { NavBar } from 'components/NavBar';

export const BaseLayout: NextPage<{
  children: React.ReactNode,
  transparentNav?: boolean
}> = ({ children, transparentNav }) => {
  return (
    <div className='
      min-h-full
      2xl:py-20
      sm:py-4
    '>
      <NavBar transparent={transparentNav} />

      <Content className='h-full'>
        { children }
      </Content>
    </div>
  )
}
