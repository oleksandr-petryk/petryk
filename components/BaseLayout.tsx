import type { NextPage } from 'next';
import type React from 'react';

import { Content } from 'components/Content';
import { NavBar } from 'components/NavBar';

export const BaseLayout: NextPage<{
  children: React.ReactNode,
  transparentNav?: boolean
}> = ({ children, transparentNav }) => {
  return (
    <>
      <div>
        <NavBar transparent={transparentNav} />

        <Content>
          { children }
        </Content>
      </div>
    </>
  )
}
