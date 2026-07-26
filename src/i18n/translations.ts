export const LANGUAGES = {
  en: { label: 'English', shortLabel: 'EN' },
  'pt-BR': { label: 'Portuguese', shortLabel: 'PT' },
} as const;

export type Language = keyof typeof LANGUAGES;

export const DEFAULT_LANGUAGE: Language = 'en';

interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
  details: string;
  difficulty: number;
  impact: string;
}

interface AttributeEntry {
  label: string;
  value: number;
  max: number;
  hint?: string;
}

interface TechEntry {
  name: string;
  description: string;
}

interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  points: string[];
  details: string;
}

export interface TranslationDict {
  contactNav: {
    aria: string;
    github: string;
    linkedin: string;
    email: string;
  };
  languageSwitcher: {
    aria: string;
  };
  hero: {
    profileAria: string;
    eyebrow: string;
    title: string;
    statusOnline: string;
    greeting: string;
    summaryIntro: string;
    summaryYears: string;
    summaryOutro: string;
    viewWork: string;
    getInTouch: string;
    scroll: string;
    scrollAria: string;
  };
  resume: {
    techShowcaseAria: string;
    techShowcaseLabel: string;
    techShowcaseHint: string;
    techShowcaseBackAria: string;
    systemAnalysisTitle: string;
    systemAnalysisBody: string;
    systemAnalysisAttributes: AttributeEntry[];
    techExperience: TechEntry[];
    projectsAria: string;
    projectsLabel: string;
    experienceAria: string;
    experienceLabel: string;
    projects: ProjectEntry[];
    experience: ExperienceEntry[];
  };
  detailModal: {
    closeAria: string;
    difficultyLabel: string;
  };
  boot: {
    initializing: string;
    poweringOn: string;
    systemReady: string;
    readyButton: string;
    messages: string[];
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    contactNav: {
      aria: 'Contact',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    languageSwitcher: {
      aria: 'Change language',
    },
    hero: {
      profileAria: 'Profile',
      eyebrow: 'Profile',
      title: 'Senior Full Stack Software Engineer',
      statusOnline: 'Online',
      greeting: 'Hi!👋',
      summaryIntro: "I'm Caio, a Software Engineer with",
      summaryYears: '10+ years',
      summaryOutro:
        'of experience building scalable web applications. Feel free to explore my projects and learn a bit more about my professional journey.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      scroll: 'Scroll',
      scrollAria: 'Scroll to projects',
    },
    resume: {
      techShowcaseAria: 'Toolbox',
      techShowcaseLabel: 'Toolbox',
      techShowcaseHint: 'Click a module to see more',
      techShowcaseBackAria: 'Back to toolbox',
      systemAnalysisTitle: 'System Analysis',
      systemAnalysisBody:
        'Every project presents a different challenge, but my goal remains the same: deliver software that is reliable, scalable, and enjoyable to work on. I enjoy modeling complex business domains, designing clean architectures, and leveraging Domain-Driven Design and event-driven systems to build applications that are easy to evolve and maintain.',
      systemAnalysisAttributes: [
        { label: 'Technical Ability', value: 5, max: 5, hint: 'Full-stack breadth across languages and infra' },
        { label: 'Intelligence', value: 5, max: 5, hint: 'Architecture, DDD, event-driven systems' },
        { label: 'Cool', value: 5, max: 5, hint: 'Reliability under production pressure' },
        { label: 'Reflexes', value: 5, max: 5, hint: 'Fast iteration, CI/CD-driven delivery' },
        { label: 'Leadership', value: 5, max: 5, hint: '10+ years owning systems end-to-end' },
      ],
      techExperience: [
        {
          name: 'Node.js',
          description:
            "Primary backend runtime for most of the APIs and services I've built over the years — from REST endpoints to event-driven workers.",
        },
        {
          name: 'TypeScript',
          description:
            'Default language for anything beyond a quick script — static types catch entire classes of bugs before they reach production.',
        },
        {
          name: 'React',
          description:
            'Go-to library for building interactive UIs, from small widgets to full single-page applications.',
        },
        {
          name: 'Next.js',
          description:
            'Used for full-stack React applications that need server-side rendering, routing, and API routes in one place.',
        },
        {
          name: 'Laravel',
          description:
            'Framework of choice for PHP backends — clean architecture, Eloquent ORM, and a mature ecosystem for building APIs quickly.',
        },
        {
          name: 'PHP',
          description:
            'Years of experience building and maintaining production PHP applications, from legacy codebases to modern Laravel projects.',
        },
        {
          name: 'Docker',
          description:
            'Containerize every service I ship — local development environments mirror production, and deployments become predictable.',
        },
        {
          name: 'RabbitMQ',
          description:
            'Message broker of choice for decoupling services and building event-driven, asynchronous workflows.',
        },
        {
          name: 'Redis',
          description:
            'Used extensively for caching, session storage, and rate limiting in high-traffic applications.',
        },
        {
          name: 'MySQL',
          description:
            'Primary relational database for most projects — schema design, query optimization, and replication.',
        },
        {
          name: 'PostgreSQL',
          description:
            'Reach for Postgres when I need advanced querying, strong data integrity, or JSONB flexibility.',
        },
        {
          name: 'SQL Server',
          description:
            'Experience working with SQL Server in enterprise environments — stored procedures, indexing, and integration with .NET systems.',
        },
        {
          name: 'AWS',
          description:
            "Deploy and manage infrastructure on AWS — EC2, S3, RDS, Lambda, and more, depending on the project's needs.",
        },
        {
          name: 'Git',
          description:
            'Version control for every project, from solo work to coordinating large teams with branching strategies and code review.',
        },
        {
          name: 'System Design',
          description:
            'Enjoy designing scalable architectures — from monoliths to distributed, event-driven systems — that are built to evolve.',
        },
        {
          name: 'REST API',
          description:
            'Designed and consumed REST APIs across dozens of projects — from public-facing endpoints to internal microservices.',
        },
      ],
      projectsAria: 'Projects',
      projectsLabel: 'Projects',
      experienceAria: 'Experience',
      experienceLabel: 'Experience',
      projects: [
        {
          name: 'Placeholder Project One',
          description:
            'Placeholder one-line description of what this project does and why it matters.',
          stack: 'TypeScript · React · Node',
          details:
            'Placeholder expanded write-up of Project One — the problem it solved, the approach taken, and the outcome or impact once shipped.',
          difficulty: 5,
          impact: 'High Impact',
        },
        {
          name: 'Placeholder Project Two',
          description:
            'Placeholder one-line description of what this project does and why it matters.',
          stack: 'Python · PostgreSQL',
          details:
            'Placeholder expanded write-up of Project Two — the problem it solved, the approach taken, and the outcome or impact once shipped.',
          difficulty: 5,
          impact: 'High Impact',
        },
      ],
      experience: [
        {
          role: 'Senior Full-Stack Engineer',
          org: 'Placeholder Company',
          period: '2023 — Present',
          points: [
            'Placeholder highlight about a system designed or shipped.',
            'Placeholder highlight about scale, performance, or impact.',
          ],
          details:
            'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
        },
        {
          role: 'Full-Stack Engineer',
          org: 'Placeholder Company',
          period: '2020 — 2023',
          points: [
            'Placeholder highlight about ownership or cross-team work.',
            'Placeholder highlight about a specific technical outcome.',
          ],
          details:
            'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
        },
        {
          role: 'Software Engineer',
          org: 'Placeholder Company',
          period: '2018 — 2020',
          points: ['Placeholder highlight about early career work or growth.'],
          details:
            'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
        },
        {
          role: 'Software Engineer',
          org: 'Placeholder Company',
          period: '2018 — 2020',
          points: ['Placeholder highlight about early career work or growth.'],
          details:
            'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
        },
        {
          role: 'Software Engineer',
          org: 'Placeholder Company',
          period: '2018 — 2020',
          points: ['Placeholder highlight about early career work or growth.'],
          details:
            'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
        },
      ],
    },
    detailModal: {
      closeAria: 'Close details',
      difficultyLabel: 'Difficulty',
    },
    boot: {
      initializing: 'Initializing...',
      poweringOn: 'Powering On...',
      systemReady: 'System Ready',
      readyButton: '[ Meet Caio ]',
      messages: [
        'Loading UI...',
        'Loading Components...',
        'Loading Projects...',
        'Loading Experience...',
        'Finalizing...',
      ],
    },
  },
  'pt-BR': {
    contactNav: {
      aria: 'Contato',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail',
    },
    languageSwitcher: {
      aria: 'Mudar idioma',
    },
    hero: {
      profileAria: 'Perfil',
      eyebrow: 'Perfil',
      title: 'Desenvolvedor Full Stack Sênior',
      statusOnline: 'Online',
      greeting: 'Olá!👋',
      summaryIntro: 'Eu sou o Caio, Desenvolvedor Sênior com',
      summaryYears: '10+ anos',
      summaryOutro:
        'de experiência construindo aplicações web escaláveis. Fique à vontade para explorar meus projetos e conhecer um pouco mais sobre minha trajetória profissional.',
      viewWork: 'Ver Meus Projetos',
      getInTouch: 'Entrar em Contato',
      scroll: 'Rolar',
      scrollAria: 'Rolar até os projetos',
    },
    resume: {
      techShowcaseAria: 'Caixa de Ferramentas',
      techShowcaseLabel: 'Caixa de Ferramentas',
      techShowcaseHint: 'Clique em um módulo para ver mais',
      techShowcaseBackAria: 'Voltar para a caixa de ferramentas',
      systemAnalysisTitle: 'Análise do Sistema',
      systemAnalysisBody:
        'Cada projeto apresenta um desafio diferente, mas meu objetivo continua o mesmo: entregar software confiável, escalável e agradável de se trabalhar. Gosto de modelar domínios de negócio complexos, projetar arquiteturas limpas e utilizar Domain-Driven Design e sistemas orientados a eventos para construir aplicações fáceis de evoluir e manter.',
      systemAnalysisAttributes: [
        { label: 'Habilidade Técnica', value: 5, max: 5, hint: 'Amplitude full-stack em linguagens e infraestrutura' },
        { label: 'Inteligência', value: 5, max: 5, hint: 'Arquitetura, DDD, sistemas orientados a eventos' },
        { label: 'Sangue-Frio', value: 5, max: 5, hint: 'Confiabilidade sob pressão em produção' },
        { label: 'Reflexos', value: 5, max: 5, hint: 'Iteração rápida, entrega orientada a CI/CD' },
        { label: 'Liderança', value: 5, max: 5, hint: 'Mais de 10 anos responsável por sistemas de ponta a ponta' },
      ],
      techExperience: [
        {
          name: 'Node.js',
          description:
            'Runtime principal para a maioria das APIs e serviços que construí ao longo dos anos — de endpoints REST a workers orientados a eventos.',
        },
        {
          name: 'TypeScript',
          description:
            'Linguagem padrão para qualquer coisa além de um script rápido — tipagem estática evita classes inteiras de bugs antes de chegarem à produção.',
        },
        {
          name: 'React',
          description:
            'Biblioteca principal para construir interfaces interativas, de pequenos widgets a aplicações single-page completas.',
        },
        {
          name: 'Next.js',
          description:
            'Utilizado para aplicações React full-stack que precisam de renderização no servidor, roteamento e rotas de API em um só lugar.',
        },
        {
          name: 'Laravel',
          description:
            'Framework de escolha para backends em PHP — arquitetura limpa, ORM Eloquent e um ecossistema maduro para construir APIs rapidamente.',
        },
        {
          name: 'PHP',
          description:
            'Anos de experiência construindo e mantendo aplicações PHP em produção, de bases de código legadas a projetos modernos em Laravel.',
        },
        {
          name: 'Docker',
          description:
            'Containerizo todos os serviços que entrego — os ambientes de desenvolvimento local espelham a produção e os deploys se tornam previsíveis.',
        },
        {
          name: 'RabbitMQ',
          description:
            'Message broker de escolha para desacoplar serviços e construir fluxos assíncronos orientados a eventos.',
        },
        {
          name: 'Redis',
          description:
            'Usado extensivamente para cache, armazenamento de sessão e rate limiting em aplicações de alto tráfego.',
        },
        {
          name: 'MySQL',
          description:
            'Banco de dados relacional principal na maioria dos projetos — modelagem de esquema, otimização de queries e replicação.',
        },
        {
          name: 'PostgreSQL',
          description:
            'Recorro ao Postgres quando preciso de queries avançadas, forte integridade de dados ou flexibilidade com JSONB.',
        },
        {
          name: 'SQL Server',
          description:
            'Experiência trabalhando com SQL Server em ambientes corporativos — stored procedures, indexação e integração com sistemas .NET.',
        },
        {
          name: 'AWS',
          description:
            'Implanto e gerencio infraestrutura na AWS — EC2, S3, RDS, Lambda e outros serviços, conforme a necessidade do projeto.',
        },
        {
          name: 'Git',
          description:
            'Controle de versão em todos os projetos, do trabalho individual à coordenação de grandes equipes com estratégias de branching e code review.',
        },
        {
          name: 'System Design',
          description:
            'Gosto de projetar arquiteturas escaláveis — de monólitos a sistemas distribuídos orientados a eventos — feitas para evoluir.',
        },
        {
          name: 'REST API',
          description:
            'Projetei e consumi APIs REST em dezenas de projetos — de endpoints públicos a microsserviços internos.',
        },
      ],
      projectsAria: 'Projetos',
      projectsLabel: 'Projetos',
      experienceAria: 'Experiência',
      experienceLabel: 'Experiência',
      projects: [
        {
          name: 'Projeto Placeholder Um',
          description:
            'Descrição placeholder de uma linha sobre o que este projeto faz e por que ele importa.',
          stack: 'TypeScript · React · Node',
          details:
            'Descrição expandida placeholder do Projeto Um — o problema resolvido, a abordagem adotada e o resultado ou impacto após o lançamento.',
          difficulty: 5,
          impact: 'Alto Impacto',
        },
        {
          name: 'Projeto Placeholder Dois',
          description:
            'Descrição placeholder de uma linha sobre o que este projeto faz e por que ele importa.',
          stack: 'Python · PostgreSQL',
          details:
            'Descrição expandida placeholder do Projeto Dois — o problema resolvido, a abordagem adotada e o resultado ou impacto após o lançamento.',
          difficulty: 5,
          impact: 'Alto Impacto',
        },
      ],
      experience: [
        {
          role: 'Engenheiro Full-Stack Sênior',
          org: 'Empresa Placeholder',
          period: '2023 — Atual',
          points: [
            'Destaque placeholder sobre um sistema projetado ou entregue.',
            'Destaque placeholder sobre escala, performance ou impacto.',
          ],
          details:
            'Descrição expandida placeholder deste cargo — escopo de responsabilidade, projetos notáveis e como o cargo evoluiu ao longo do tempo.',
        },
        {
          role: 'Engenheiro Full-Stack',
          org: 'Empresa Placeholder',
          period: '2020 — 2023',
          points: [
            'Destaque placeholder sobre responsabilidade ou trabalho entre equipes.',
            'Destaque placeholder sobre um resultado técnico específico.',
          ],
          details:
            'Descrição expandida placeholder deste cargo — escopo de responsabilidade, projetos notáveis e como o cargo evoluiu ao longo do tempo.',
        },
        {
          role: 'Engenheiro de Software',
          org: 'Empresa Placeholder',
          period: '2018 — 2020',
          points: ['Destaque placeholder sobre trabalho ou crescimento no início de carreira.'],
          details:
            'Descrição expandida placeholder deste cargo — escopo de responsabilidade, projetos notáveis e como o cargo evoluiu ao longo do tempo.',
        },
        {
          role: 'Engenheiro de Software',
          org: 'Empresa Placeholder',
          period: '2018 — 2020',
          points: ['Destaque placeholder sobre trabalho ou crescimento no início de carreira.'],
          details:
            'Descrição expandida placeholder deste cargo — escopo de responsabilidade, projetos notáveis e como o cargo evoluiu ao longo do tempo.',
        },
        {
          role: 'Engenheiro de Software',
          org: 'Empresa Placeholder',
          period: '2018 — 2020',
          points: ['Destaque placeholder sobre trabalho ou crescimento no início de carreira.'],
          details:
            'Descrição expandida placeholder deste cargo — escopo de responsabilidade, projetos notáveis e como o cargo evoluiu ao longo do tempo.',
        },
      ],
    },
    detailModal: {
      closeAria: 'Fechar detalhes',
      difficultyLabel: 'Dificuldade',
    },
    boot: {
      initializing: 'Inicializando...',
      poweringOn: 'Ligando...',
      systemReady: 'Sistema Pronto',
      readyButton: '[ Conhecer Caio ]',
      messages: [
        'Carregando UI...',
        'Carregando Componentes...',
        'Carregando Projetos...',
        'Carregando Experiência...',
        'Finalizando...',
      ],
    },
  },
};
