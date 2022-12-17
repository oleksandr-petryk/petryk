import dynamic from 'next/dynamic';
import type React from 'react';
import { FC } from 'react';

import { NavBar } from 'components/NavBar';
import { useRecoilValue } from 'recoil';
import { layoutState } from 'state/layout.state';

const BackgroundGradient = dynamic(
  () => import('../components/BackgroundGradient'),
  { ssr: false }
);

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

      <BackgroundGradient />
    </>
  )
}
