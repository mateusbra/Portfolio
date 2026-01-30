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
        Engenheiro Full-Stack
        <span className="text-[#3178C6]"> TypeScript</span>,{" "}
        <span className="text-[#61DAFB]">React</span> e{" "}
        <span className="text-[#339933]">Node.js</span>
      </h1>

      {/* Descrição */}
      <p className="text-3xl text-center text-gray-400 max-w-5xl ">
        Trabalho com tecnologias como Next.js, React, Tailwind CSS, Node.js, Express e ferramentas de IA.
      </p>

      {/* Botões */}
      <div className="flex gap-4 mt-4">
        <a
          href="https://linkedin.com/in/matheus-braz-240b52266/"
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
          SOBRE MIM
        </h2>
        <p className=" text-2xl text-gray-400 leading-relaxed text-justify">
          Sou desenvolvedor Full Stack com experiência sólida na stack JavaScript/TypeScript, atuo há alguns anos no desenvolvimento de aplicações web e mobile utilizadas em ambientes reais de produção. Trabalho com Node.js no back-end, utilizando Express, e no front-end com React, Next.js e Vue, além de experiência no desenvolvimento de aplicações mobile com React Native.
          <br /><br />
          Tenho vivência na construção e manutenção de sistemas completos, participando de todo o ciclo de desenvolvimento, desde o entendimento de requisitos e regras de negócio até a implementação, testes, deploy e manutenção contínua. Já atuei em projetos de diferentes portes, incluindo colaboração com empresa estrangeira, lidando com código em produção, correção de bugs, evolução de funcionalidades e revisão de aplicações em múltiplas plataformas.
          <br /><br />
          Prezo fortemente por clean code, boas práticas, escalabilidade e qualidade técnica, buscando sempre criar soluções bem estruturadas, confiáveis e fáceis de manter. Gosto de trabalhar próximo ao negócio e de transformar problemas complexos em soluções simples e eficientes, mantendo foco em desempenho, organização e sustentabilidade do software a longo prazo.
        </p>
      </section>

      <section className="mt-16 max-w-5xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          EXPERIÊNCIA
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
              Engenheiro de Software (Desenvolvedor Front-end) na Upwork • <span className="text-neutral-300">Set 2021 – Atualmente</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              Freelancer para Expensify via plataforma Upwork, atuando com desenvolvimento e manutenção de aplicações web e mobile.
              <br />
            </p>
            <p className="text-gray-400 leading-relaxed mt-2 text-xl">
              Principais responsabilidades
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400 text-xl">
              <li>Desenvolvimento e correção de bugs relacionados ao front-end da aplicação utilizando javascript com frameworks React e React Native.</li>
              <li>Implementação de testes unitários.</li>
              <li>Revisão das implementações em diferentes tipos de dispositivo (iPhone, Android, mac, web...).</li>
            </ul>
            <span className="text-gray-400 text-xl">
              Tecnologias utilizadas
              <br />
              JavaScript, React, React Native, Redux, Jest.
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
              TI e desenvolvedor (Desenvolvedor Full-stack) na Simili Música • <span className="text-neutral-300">Out 2020 – Set 2021</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              TI e desenvolvedor full-stack na Simili Música, loja e escola de instrumentos musicais.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2 text-xl">
              Principais responsabilidades
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400 text-xl">
              <li>Manutenção e implementação de novas features no site de vendas utilizando framework Magento (PHP).</li>
              <li>Manutenção e implementação de novas features do site de escola utilizando framework Wordpress (PHP).</li>
              <li>Desenvolvimento de App Mobile utilizando framework React Native.</li>
              <li>Manutenção dos dispositivos físicos (PCs e impressoras) e infraestrutura de rede local.</li>
              <li>Integração dos serviços Google Merchant Center e Google Ads no site para avaliação de métricas.</li>
              <li>Suporte ao cliente em tempo real durante compras no site.</li>
              <li>Criação e manutenção do funil de vendas operado pela equipe do marketing utilizando o CRM Pipedrive.</li>
            </ul>
            <span className="text-gray-400 text-xl">
              Tecnologias utilizadas
              <br />
              JavaScript, PHP, React Native, MongoDB, phpMyAdmin, Magento, WordPress, CRM Pipedrive, Zapier.
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
              Desenvolvedor Freelancer na UNIVALI • <span className="text-neutral-300">Set 2017 – Out 2020</span>
            </h3>
            <span className="text-gray-400 text-xl">
              Tecnologias utilizadas
              <br />
              C, C++, C#, Java, Python.
            </span>
          </div>
        </section>
        <section className="mt-16 max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Habilidades e Ferramentas
          </h2>
          <p className=" text-2xl text-gray-400 leading-relaxed text-justify">
            Com anos de experiência prática, desenvolvi um conjunto sólido de habilidades técnicas e proficiência em diversas ferramentas essenciais para o desenvolvimento de software.
          </p>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Habilidades Principais
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
              <span>VUE.JS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>NODE.JS</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Backend
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">EXPRESS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>REST APIS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>INTEGRAÇÃO COM APIS</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>AUTENTICAÇÃO (JWT)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>DESIGN DDD</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>PRISMA ORM</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Banco de dados
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">MYSQL</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>MONGODB</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>POSTGRESQL</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>OTIMIZAÇÃO DE QUERYS</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            DevOps e Infraestrutura
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">GIT</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>CI/CD (GITHUB ACTIONS)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>LINUX</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>ESLint</span>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-white mb-6">
            Práticas de engenharia
          </h3>
          <div className="flex flex-row flex-wrap gap-4 text-white text-sm">
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span className="p-2">CÓDIGO LIMPO</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>CONTRATOS DE API</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>DEBUGGING</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>REFATORAMENTO DE CÓDIGO</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>METODOLOGIA ÁGIL (SCRUM)</span>
            </div>
            <div className="bg-neutral-700 rounded-sm px-2 py-1">
              <span>TESTES UNITÁRIOS E INTEGRAÇÃO</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
