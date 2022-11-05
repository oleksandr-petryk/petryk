import type { NextPage } from 'next';
import type React from 'react';

export const Content: NextPage<{
  children: React.ReactNode,
} & Record<string, any>> = ({ children, ...props }) => {
  return (
    <div className='2xl:py-16 sm:py-4' { ...props } >
      { children }
    </div>
  )
}
