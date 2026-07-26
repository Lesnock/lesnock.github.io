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
    techShowcaseViewDetails: string;
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
      techShowcaseViewDetails: 'View details',
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
            "I've made it my weapon of choice for building scalable systems over the last 10 years.",
        },
        {
          name: 'TypeScript',
          description:
            'I love JavaScript, but I love TypeScript even more — it catches my mistakes before they reach production.',
        },
        {
          name: 'React',
          description:
            'I use it as my favorite way to turn coffee into user interfaces.',
        },
        {
          name: 'Next.js',
          description:
            'Whenever performance, SEO, or developer experience matters, I reach for Next.js.',
        },
        {
          name: 'Laravel',
          description:
            "It's the PHP framework that convinced me PHP could actually be elegant.",
        },
        {
          name: 'PHP',
          description:
            "I've been writing PHP for so long it feels like one of my oldest companions — we've both grown a lot over the last 10 years.",
        },
        {
          name: 'Docker',
          description:
            "I like to say it works on my machine... because my machine is a container.",
        },
        {
          name: 'RabbitMQ',
          description:
            'I reach for it when services need to talk without yelling at each other.',
        },
        {
          name: 'Redis',
          description:
            'Need something faster? I throw Redis at it. (Usually works.)',
        },
        {
          name: 'MySQL',
          description:
            "I've probably written enough SQL queries to fill a small book. Performance tuning and database design are part of the fun.",
        },
        {
          name: 'PostgreSQL',
          description:
            "It's my go-to choice whenever a project needs powerful SQL features and rock-solid reliability.",
        },
        {
          name: 'SQL Server',
          description:
            "Most of my SQL Server experience comes from integrating and extending TOTVS Protheus, where performance and reliability aren't optional.",
        },
        {
          name: 'AWS',
          description:
            "I'm currently expanding my cloud expertise with AWS, learning how to build scalable and resilient infrastructure—not just scalable applications.",
        },
        {
          name: 'Git',
          description:
            "It's saved me from my own mistakes more times than I can count, and it's been essential for collaborating on large teams and complex projects.",
        },
        {
          name: 'System Design',
          description:
            'I enjoy designing systems that stay maintainable long after the first deployment. DDD, Clean Architecture, and event-driven design are some of my favorite tools.',
        },
        {
          name: 'REST API',
          description:
            "I've designed and integrated dozens of REST APIs over the years, connecting everything from ERPs to third-party services and internal platforms.",
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
      techShowcaseViewDetails: 'Ver detalhes',
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
            'Fiz dele minha arma de escolha para construir sistemas escaláveis nos últimos 10 anos.',
        },
        {
          name: 'TypeScript',
          description:
            'Eu amo JavaScript, mas amo TypeScript ainda mais — ele pega meus erros antes que cheguem à produção.',
        },
        {
          name: 'React',
          description:
            'Uso como minha forma favorita de transformar café em interfaces de usuário.',
        },
        {
          name: 'Next.js',
          description:
            'Sempre que performance, SEO ou uma ótima experiência de desenvolvimento importam, eu recorro ao Next.js.',
        },
        {
          name: 'Laravel',
          description:
            'É o framework PHP que me convenceu de que PHP pode ser elegante de verdade.',
        },
        {
          name: 'PHP',
          description:
            'Escrevo PHP há tanto tempo que ele parece um dos meus companheiros mais antigos — nós dois crescemos bastante nos últimos 10 anos.',
        },
        {
          name: 'Docker',
          description:
            'Gosto de dizer que funciona na minha máquina... porque minha máquina é um container.',
        },
        {
          name: 'RabbitMQ',
          description:
            'Recorro a ele quando os serviços precisam conversar sem gritar uns com os outros.',
        },
        {
          name: 'Redis',
          description:
            'Preciso que fique mais rápido? Eu jogo um Redis nisso. (Geralmente funciona.)',
        },
        {
          name: 'MySQL',
          description:
            'Provavelmente já escrevi queries SQL suficientes para encher um livro pequeno. Performance tuning e modelagem de banco de dados fazem parte da diversão.',
        },
        {
          name: 'PostgreSQL',
          description:
            'É minha escolha preferida sempre que um projeto precisa de recursos SQL poderosos e confiabilidade inabalável.',
        },
        {
          name: 'SQL Server',
          description:
            'A maior parte da minha experiência com SQL Server vem de integrar e estender o TOTVS Protheus, onde performance e confiabilidade não são opcionais.',
        },
        {
          name: 'AWS',
          description:
            'Estou atualmente expandindo minha expertise em nuvem com AWS, aprendendo a construir infraestrutura escalável e resiliente—não apenas aplicações escaláveis.',
        },
        {
          name: 'Git',
          description:
            'Ele já me salvou dos meus próprios erros mais vezes do que consigo contar, e tem sido essencial para colaborar em grandes equipes e projetos complexos.',
        },
        {
          name: 'System Design',
          description:
            'Gosto de projetar sistemas que continuam fáceis de manter muito depois do primeiro deploy. DDD, Clean Architecture e design orientado a eventos estão entre minhas ferramentas favoritas.',
        },
        {
          name: 'REST API',
          description:
            'Projetei e integrei dezenas de APIs REST ao longo dos anos, conectando desde ERPs a serviços de terceiros e plataformas internas.',
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
