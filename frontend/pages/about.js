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
          I am 18 years old. I am a web developer, I have been doing this for three years. I like to
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

        <p>I like good website architecture. I separete backend or API and frontend parts of website. To create this I use:</p>

        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript (TypeScript, Node.js, React.js, Next.js, Redux, Express.js, Sequelize, Prisma)</li>
          <li>Python (Django, DRF)</li>
          <li>C++ (Basics: OOP, pointers)</li>
        </ul>

        <p>Other tools:</p>

        <ul>
          <li>Git / GitHub</li>
          <li>Docker</li>
          <li>SSH</li>
          <li>VIM</li>
        </ul>
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
