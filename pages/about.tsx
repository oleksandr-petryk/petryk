import type { NextPage } from 'next';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import remarkGfm from 'remark-gfm'


import { BaseLayout } from 'components/BaseLayout';
import { useEffect, useState } from 'react';

const About: NextPage = ({ ...props }: any) => {
  const [markDown, setMarkDown] = useState('');

  const url = 'https://raw.githubusercontent.com/Sasha-hk/petryk/main/content/About.md';

  useEffect(() => {
    const getMd = async () => {
      try {
        const { status, data } = await axios.get(
          url,
        );

        if (status === 200) {
          setMarkDown(data);
        }
      } catch (e: any) {
        console.log(e)
      }
    };

    getMd();
  }, []);

  return (
    <BaseLayout>
      <section className='container'>
        <ReactMarkdown remarkPlugins={[remarkGfm]} >{ markDown }</ReactMarkdown>
      </section>
    </BaseLayout>
  )
}

export default About;
