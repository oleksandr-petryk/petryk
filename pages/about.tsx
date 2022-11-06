import type { NextPage } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react';

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
          <ReactMarkdown remarkPlugins={[remarkGfm]} >{ markDown }</ReactMarkdown>

          <EditOnGitHub url={editOnGitHubUrl} />
        </section>
      </BaseLayout>
    </>
  )
}

export default About;
