import Head from 'next/head'
import BaseLayout from '../components/Layouts/BaseLayout.js'


const About = () => {
    const newBG = (
        <style jsx global>
            {`
                body{
                    background: #1B2735;
                }
            `}
        </style>
    )
    return (
        <BaseLayout>
            <Head>
                <meta name="keywords" content="about Petryk Oleksandr, CV of Petryk Oleksandr" />
                <meta name="description" content="Description of technical skills of Petryk Oleksandr" />
                <title>About Petryk Oleksandr</title>
            </Head>
            {newBG}

            <div className="container">

                <h2>About me</h2>

                <p>
                    Four years ago, I was a simple guy who didn't know what to do after school, but it so happened that I got acquainted with programming, that's how it all started. Now I am working on my projects and looking for a job, I want to work in a big team. I like to interact with team members and achieve a common goal. The environment plays a big role so I think I would be even more productive in the team. I'm learning fast enough. I also respect the opinions and beliefs of others, so I don't usually cause misunderstandings.
                </p>
                
            </div>

            <div className="container">

                <h2>Languages</h2>

                <p className="text-clean">I know three languages:</p>

                <ul>
                    <li>Ukrainian / native</li>
                    <li>Russian / native</li>
                    <li>English / B2</li>
                </ul>

                <p>I really like to learn and use English, it helpful when I read documentation etc.</p>
                
            </div>

            <div className="container">

                <h2>Skills</h2>

                <p>I like good website architecture. I separete backend or API and frontend parts of website. To create this I use:</p>

                <ul>
                    <li>Express.js - to create backend / API </li>
                    <li>React.js / Next.js - to create user interfaces and SSR</li>
                </ul>

                <p>Of course I know HTML and CSS. I used Python(Django) to write a backend, but now I'm starting to use Node. Yes I know also Python.</p>

                <p>Ready product require to server, so I can set up Linux servers, I use:</p>

                <ul>
                    <li>SSH - to interact with the server</li>
                    <li>VIM - to edit data in the server, I like it</li>
                    <li>Nginx - I use it as web server</li>
                </ul>

            </div>
            
        </BaseLayout>
    )
}


export default About
