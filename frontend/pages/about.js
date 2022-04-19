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
          I am a web developer, I have been doing this for three years. I like to
          constantly learn something new and improve. I like to work on interesting projects, in which
          case I can fully focus on the tasks performed. I like cleanliness in projects, when everything
          is in place and when all the components work together. I like to plan everything to go to the
          goal step by step. I like to spend time actively, go in for sports. I have no bad habits. I like to
          work in team. I like to listen music.
        </p>
      </div>

      <div className="container">
        <h2>Languages</h2>

        <p className="text-clean">I know three languages:</p>

      <ul>
          <li>Ukrainian / native</li>
          <li>English / B2</li>
        </ul>

        <p>I really like to learn and use English, it helpful when I read documentation etc.</p>
      </div>

      <div className="container">
        <h2>Skills</h2>

        <p>Behind my back I have an experience in working with:</p>

        <ul>
          <li>HTML / CSS</li>
          <li>Node.js (JavaScript, TypeScript)</li>
          <li>Front-end (React.js, Next.js, Redux)</li>
          <li>Back-end (Express.js, Nest.js, Sequelize, Prisma, Jest.js)</li>
          <li>C++ (Basics: OOP, pointers)</li>
          <li>Computer Science: Algorithms &amp; Data Structures, OOP,  UNIX, HTTP</li>
          <li>Dev tools: GIT &amp; GitHub, Docker, VIM, SSH, VS Code</li>
          <li>Database: PostgreSQL</li>
          <li>Operating System: Linux</li>
          <li>Methodologies: Kanban, CI/CD</li>
          <li>Other knowledge: JWT, OAtuh2.0, unit &amp; Integration testing </li>
          <li>Bling typing</li>
        </ul>

        <p>My main technology stack is Node.js (JS, TS), but other than that I really like C++, it's like a hobby.</p>
      </div>

      <div className="container">
        <h2>Motivation</h2>

        <p>
          I want to take part in the development of a commercial project, it will be useful for me to gain
          new experience. In return, the company will be able to hire a good developer who will do his
          job effectively and bring the company a profit. Since I plan to develop, in the future I can raise
          my level and work on more complex projects, which will be beneficial for the company.
        </p>
      </div>
    </BaseLayout>
  )
}


export default About
