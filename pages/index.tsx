import { BaseLayout } from 'components/BaseLayout';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <BaseLayout transparentNav={true}>
      <header className='container'>
        Hello
      </header>
    </BaseLayout>
  )
}

export default Home;
