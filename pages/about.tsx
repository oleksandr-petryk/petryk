import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BaseLayout } from 'components/BaseLayout';
import { EditOnGitHub } from 'components/EditOnGitHub';

const About: NextPage = () => {
  const [markDown, setMarkDown] = useState('');

  const rawPageUrl = 'https://raw.githubusercontent.com/Sasha-hk/petryk/main/content/About.md';
  const editOnGitHubUrl = 'https://github.com/Sasha-hk/petryk/edit/main/content/About.md';

  useEffect(() => {
    const getMd = async (url: string) => {
      try {
        const { status, data } = await axios.get(
          url,
          {
            params: {
              t: new Date().getTime()
            },
          }
        );

        if (status === 200) {
          setMarkDown(data);
        }
      } catch (e: any) {
        console.log(e)
      }
    };

    getMd(rawPageUrl);
  }, []);

  return (
    <>
      <Head>
        <meta name="keywords" content="About Petryk Oleksandr, Oleksandr Petryk's CV" />
        <meta name="description" content="Oleksandr Petryk's technical skills" />
        <title>About Oleksandr Petryk</title>
      </Head>
      <BaseLayout>
        <section className='container'>
          {
            markDown.length !== 0
              ? <>
                <ReactMarkdown remarkPlugins={[remarkGfm]} >{markDown}</ReactMarkdown>
                <EditOnGitHub url={editOnGitHubUrl} />
              </>
              : <div className='flex justify-center mt-20'>
                <ReactLoading
                  type='spokes'
                  color='gray'
                  height={70}
                  width={70}
                />
              </div>
          }
        </section>
      </BaseLayout>
    </>
  )
}

export default About;
