import { ThemeProvider } from "next-themes"
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { BaseLayout } from 'components/BaseLayout'

import '../styles/globals.css'
import '../styles/ui.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
