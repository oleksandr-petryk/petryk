import type React from 'react';
import type { FC } from 'react';

import { NavBar } from 'components/NavBar';
import { useRecoilValue } from 'recoil';
import { layoutState } from 'state/layout.state';

export const BaseLayout: FC<{
  children: React.ReactNode,
  fullFrame?: boolean,
}> = ({ children, fullFrame }) => {
  const layout = useRecoilValue(layoutState);

  return (
    <>
      <NavBar />

      <div className={['2xl:py-16 sm:pt-4 sm:pb-24', layout.fullFrame || fullFrame ? 'h-full' : 'min-h-full'].join(' ')}>
        {children}
      </div>
    </>
  )
}
