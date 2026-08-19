import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-x-6 bg-black text-white px-4">
      <div className="mt-30">
        {/* Foto de perfil */}
        <img
          src="profile.jpeg"
          alt="Foto de perfil"
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>
      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center">
        Full-Stack Developer
        <span className="text-[#3178C6]"> TypeScript</span>,{" "}
        <span className="text-[#61DAFB]">React</span> and{" "}
        <span className="text-[#339933]">Node.js</span>
      </h1>

      {/* Descrição */}
      <p className="text-3xl text-center text-gray-400 max-w-5xl ">
        I work with technologies such as React, React Native, Next.js, Node.js, NestJS, Python/FastAPI, PostgreSQL, Docker and AI tools (RAG, MCP).
      </p>

      {/* Botões */}
      <div className="flex gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/matheus-braz-silva/"
          target="_blank"
          rel="noopener noreferrer"
          className="color-inherit flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A66C2] text-white font-medium hover:opacity-90 transition"
        >
          <FaLinkedin className="w-7 h-7" />
          LinkedIn
        </a>

        <a
          href="https://github.com/mateusbra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black border border-gray-700 text-white font-medium hover:bg-gray-900 transition"
        >
          <FaGithub className="w-7 h-7" />
          GitHub
        </a>
      </div>
      <section className="mt-16 max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          ABOUT ME
        </h2>
        <p className=" text-2xl text-gray-400 leading-relaxed text-justify">
          I'm a Full-Stack Developer transitioning from Junior to Mid-level, with hands-on, end-to-end experience across React, React Native, Node.js/NestJS, Python/FastAPI, PostgreSQL and Docker. My background spans IT infrastructure, mobile development (an app published on Google Play), e-commerce platforms (Magento/WordPress) and growth analytics, and more recently I've been moving into AI-driven products, including Retrieval-Augmented Generation (RAG) pipelines and MCP (Model Context Protocol) servers.
          <br /><br />
          I have experience building and maintaining complete systems, taking part in the full development cycle, from understanding requirements and business rules through implementation, testing, deployment and ongoing maintenance. I've worked on projects of different sizes, including a long-term remote engagement with a US-based company, dealing with production code, bug fixes, feature development and code review across multiple platforms.
          <br /><br />
          I place strong value on clean code, best practices, scalability and technical quality, always aiming to build well-structured, reliable and maintainable solutions. I enjoy working close to the business side and turning complex problems into simple, efficient solutions, with a focus on performance, organization and long-term software sustainability. I'm a self-taught, adaptable developer with strong written English (B2) looking for a remote or relocation opportunity with an international team.
        </p>
      </section>

      <section className="mt-16 max-w-5xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          EXPERIENCE
        </h2>


        <section className="w-full flex justify-start gap-6 border-neutral-800 border-l pb-16 max-w-5xl">
          {/* Marker */}
          <div className="relative">
            <div className="w-4 h-4 rounded-full absolute -left-2 outline-neutral-900 bg-blue-500">
              <div className="w-4 h-4 rounded-full -z-10 bg-blue-500 animate-ping">

              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-2 -mt-3 text-base">
            <h3 className="text-white text-xl">
              Full-Stack Developer at Fundação CERTI • <span className="text-neutral-300">Feb 2026 – Present</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              Full-stack developer working on internal projects, combining web development, AI collaboration and infrastructure work.
              <br />
            </p>
            <p className="text-gray-400 leading-relaxed mt-2 text-xl">
              Key responsibilities
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400 text-xl">
              <li>Develop full-stack features using React (frontend) and NestJS (backend) as the core stack for the main project.</li>
              <li>Set up and maintain remote development environments to streamline the engineering team's workflow.</li>
              <li>Deepened hands-on expertise in Docker for containerized development and deployment.</li>
              <li>Collaborated with the AI team, using Python and FastAPI to help build a Retrieval-Augmented Generation (RAG) AI system.</li>
              <li>Currently contributing to a second internal project built with Python (FastAPI) and React.</li>
            </ul>
            <span className="text-gray-400 text-xl">
              Technologies used
              <br />
              React, NestJS, Python, FastAPI, Docker.
            </span>
          </div>
        </section>

        <section className="w-full flex justify-start gap-6 border-neutral-800 border-l pb-16 max-w-5xl">
          {/* Marker */}
          <div className="relative">
            <div className="w-4 h-4 rounded-full absolute -left-2 outline-neutral-900">
              <div className="w-4 h-4 rounded-full -z-10 bg-neutral-800">

              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-2 -mt-3 text-base">
            <h3 className="text-white text-xl">
              React Native Developer at Upwork (Freelance), Client: Expensify • <span className="text-neutral-300">2023 – 2025</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              Long-term freelance engagement for Expensify, a major US-based fintech company, found through the Upwork platform.
              <br />
            </p>
            <p className="text-gray-400 leading-relaxed mt-2 text-xl">
              Key responsibilities
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400 text-xl">
              <li>Delivered React Native frontend features for Expensify, paid in USD.</li>
              <li>Collaborated remotely with an international, English-speaking team over a 2-year period, adapting to distributed agile workflows.</li>
            </ul>
            <span className="text-gray-400 text-xl">
              Technologies used
              <br />
              JavaScript, React, React Native.
            </span>
          </div>
        </section>

        <section className="w-full flex justify-start gap-6 border-neutral-800 border-l pb-16 max-w-5xl">
          {/* Marker */}
          <div className="relative">
            <div className="w-4 h-4 rounded-full absolute -left-2 outline-neutral-900">
              <div className="w-4 h-4 rounded-full -z-10 bg-neutral-800">

              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-2 -mt-3 text-base">
            <h3 className="text-white text-xl">
              Full-Stack Developer at Blitz.gg (Freelance) • <span className="text-neutral-300">2023 (1 month)</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              Short-term freelance engagement for a gaming analytics platform.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400 text-xl">
              <li>Built and maintained features across the stack using React, Express and PostgreSQL.</li>
            </ul>
            <span className="text-gray-400 text-xl">
              Technologies used
              <br />
              React, Express, PostgreSQL.
            </span>
          </div>
        </section>

        <section className="w-full flex justify-start gap-6  pb-16 max-w-5xl">
          {/* Marker */}
          <div className="relative">
            <div className="w-4 h-4 rounded-full absolute -left-2 outline-neutral-900">
              <div className="w-4 h-4 rounded-full -z-10 bg-neutral-800">

              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-2 -mt-3 text-base">
            <h3 className="text-white text-xl">
              IT & Development Intern at Simili Música • <span className="text-neutral-300">2022 – 2023</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              IT and full-stack development at Simili Música, a musical instruments store and school.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2 text-xl">
              Key responsibilities
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400 text-xl">
              <li>Managed company IT infrastructure: computers, local network, and general technical support.</li>
              <li>Designed, developed and published a React Native mobile app to the Google Play Store.</li>
              <li>Maintained and updated the company's e-commerce site (Magento/PHP) and a WordPress site.</li>
              <li>Built sales funnels and managed tracking/reporting via Google Analytics and Google Merchant Center.</li>
            </ul>
            <span className="text-gray-400 text-xl">
              Technologies used
              <br />
              JavaScript, React Native, PHP, Magento, WordPress, Google Analytics, Google Merchant Center.
            </span>
          </div>
        </section>
        <section className="mt-16 max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Skills & Tools
          </h2>
          <p className=" text-2xl text-gray-400 leading-relaxed text-justify">
            Through hands-on experience, I've built a solid set of technical skills and proficiency across the tools essential to modern full-stack and AI-driven software development.
          </p>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Core Skills
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">TYPESCRIPT</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>REACT</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>REACT NATIVE</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>NEXT.JS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>NODE.JS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>PYTHON</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Backend
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">NESTJS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>EXPRESS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>FASTAPI</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>REST APIS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>JWT AUTHENTICATION</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Database
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">POSTGRESQL</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>DYNAMODB</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>MONGODB</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>QUERY OPTIMIZATION</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            AI
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">RETRIEVAL-AUGMENTED GENERATION (RAG)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>MCP (MODEL CONTEXT PROTOCOL) SERVERS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>LLM INTEGRATION</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            CMS / E-commerce
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">MAGENTO (PHP)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>WORDPRESS</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            DevOps & Infrastructure
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">DOCKER</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>GIT</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>CI/CD (GITHUB ACTIONS)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>LINUX</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>REMOTE DEV ENVIRONMENT SETUP</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Marketing & Analytics
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">GOOGLE ANALYTICS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>GOOGLE MERCHANT CENTER</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>SALES FUNNEL DESIGN</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Engineering Practices
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">CLEAN CODE</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>API CONTRACTS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>DEBUGGING</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>CODE REFACTORING</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>AGILE METHODOLOGY (SCRUM)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>UNIT & INTEGRATION TESTING</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
