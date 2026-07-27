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
  impact: string;
  image?: string;
  challenges?: string[];
  benefits?: string[];
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
    challengesLabel: string;
    benefitsLabel: string;
    experienceAria: string;
    experienceLabel: string;
    showMoreLabel: string;
    showLessLabel: string;
    projects: ProjectEntry[];
    experience: ExperienceEntry[];
  };
  detailModal: {
    closeAria: string;
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
      challengesLabel: 'Challenges',
      benefitsLabel: 'Impact',
      experienceAria: 'Experience',
      experienceLabel: 'Experience',
      showMoreLabel: 'Show More',
      showLessLabel: 'Show Less',
      projects: [
        {
          name: 'Logistics and Production System',
          description:
            "I built a platform that plans an order's full lifecycle, from production to delivery, wired into an ERP and CRM via RabbitMQ.",
          stack: 'Next.js · React · Node.js · RabbitMQ',
          details:
            "It covers an order's full lifecycle: production start and completion, fleet and driver scheduling, and Nota Fiscal generation. I connected it to the Protheus ERP and a CRM via RabbitMQ, keeping everything in sync in real time.",
          impact: 'High Impact',
          image: '/logistic-scheduling.png',
          benefits: [
            'I automated order planning that used to be done by hand, freeing the team to handle exceptions instead of routine scheduling.',
            'I fixed a long-standing problem for the company by virtually eliminating delivery delays.',
          ],
          challenges: [
            'This was the first time we introduced event-driven architecture at the company, so I had to really learn how it works under the hood before building on it.',
            'I had to make sure a duplicate event never caused duplicated production steps or double deliveries.',
            "I made sure a single failing event handler couldn't break the rest of the flow or leave an order's state inconsistent.",
          ],
        },
        {
          name: 'Production Control System (PCP)',
          description:
            "I replaced the company's paper-based production tracking with real-time barcode appointments on tablets, hooked into the Protheus ERP.",
          stack: 'PHP · Laravel · Vue.js · ADVPL',
          details:
            'Operators scan barcodes on tablets to appoint their part of the production, and the system generates the barcoded production reports itself, synced live with Protheus through ADVPL endpoints I wrote for the integration.',
          impact: 'High Impact',
          image: '/fabrica.png',
          benefits: [
            'I got the whole factory off paper and onto real-time tracking, used daily by more than 200 operators on the floor.',
            'Management finally had a clear, live view of order status.',
            'I pulled off an automation that other teams had already tried and failed at.',
          ],
          challenges: [
            'I had to reverse-engineer how Protheus generates production orders before building on top of it.',
            'I wrote custom ADVPL endpoints from scratch to talk to the ERP.',
          ],
        },
        {
          name: 'Event System',
          description:
            'I built the REST API that centralizes every event emitted across the company, persisting them and distributing them to other systems over RabbitMQ.',
          stack: 'Node.js · Express · RabbitMQ · Bulma',
          details:
            'Every event flowing between systems gets sent here first, persisted, and then distributed to subscribers via RabbitMQ. I also built a retry mechanism for events that fail during execution, plus a simple Bulma frontend for listing and filtering events. It became the backbone for every microservice built afterward and the way we track an order’s full lifecycle across the company.',
          impact: 'High Impact',
          image: '/event-system.png',
          benefits: [
            'I gave the company a way to track the full lifecycle of every order across all systems, something that simply didn’t exist before.',
            'It became the foundation other microservices were built on, centralizing all the information flowing between systems.',
          ],
          challenges: [
            'Dealing with duplicate events was the hardest part — I resolved it by assigning a UUID to every incoming event.',
            'I built a retry mechanism for events that failed on execution, without losing them or blocking the rest of the queue.',
            'Events could arrive out of order, so I had to make sure processing them that way never left an order in an inconsistent state.',
          ],
        },
        {
          name: 'CRM',
          description:
            'I built a full CRM covering products, budgets, orders, clients, projects, leads, and deliveries, synced live with the Protheus ERP.',
          stack: 'PHP · CodeIgniter · Vue.js',
          details:
            'A complete CRM with friendly interfaces for managing products, budgets, orders, clients, projects, leads, and deliveries. It connects to the Protheus ERP, sending and receiving data to keep everything in sync. This was the first production project I ever worked on, so I was learning how to program in a real-world setting while building something the company would actually depend on.',
          impact: 'High Impact',
          image: '/crm.png',
          benefits: [
            'Employees got friendly, purpose-built interfaces for work that used to be scattered or manual, boosting their day-to-day productivity.',
            'It became a central hub connecting sales, projects, and deliveries directly to the ERP.',
          ],
          challenges: [
            'This was my first production project, so I had to learn how to build reliable, real-world software while already building it.',
            'I had to design a two-way integration with Protheus so data stayed consistent between the CRM and the ERP.',
          ],
        },
        {
          name: 'CRM WhatsApp Extension',
          description:
            'I built a Chrome extension that embedded the CRM directly into WhatsApp Web, so sellers could register leads without ever switching tabs.',
          stack: 'JavaScript · Chrome Extension · WhatsApp Web',
          details:
            "A Chrome extension that injected the CRM's lead-registration workflow straight into the WhatsApp Web interface. Sellers could capture and manage leads from inside their conversations instead of juggling tabs between WhatsApp and the CRM. To make it work, I had to figure out how to extract data from WhatsApp Web itself, which I did by cloning the whatsapp-web.js library and adapting it to run in the browser.",
          image: '/crm-whatsapp-integration.jpg',
          impact: 'High Impact',
          benefits: [
            'Sellers could register leads directly from their WhatsApp conversations, cutting out constant tab-switching and boosting their day-to-day productivity.',
            'It made lead capture fast enough to happen in the moment, right as the conversation was happening.',
          ],
          challenges: [
            'WhatsApp Web has no public API for this kind of integration, so I had to reverse-engineer how it exposes chat data internally.',
            'I cloned and modified the whatsapp-web.js library so it could run inside a browser extension instead of a Node.js environment.',
          ],
        },
      ],
      experience: [
        {
          role: 'Senior Software Engineer / Tech Lead',
          org: 'Metadil',
          period: '2015 — 2024, 2025 — Present',
          points: [
            'Started as an IT assistant and grew into the developer who founded the company\'s development department.',
            'Now lead a team of 4, coordinating priorities from the board of directors down to delivery.',
          ],
          details:
            "I joined Metadil in 2015 as an IT assistant and grew into a developer, eventually founding the company's development department from scratch. Today I work as Senior Software Engineer / Tech Lead, coordinating a team of 4. I take the needs of the business straight from the board of directors, break them down into tasks, and delegate across the team. I mentor less experienced developers, review code to keep quality high, and stay accountable for shipping entire projects to production. After a period away, I returned in 2025 to continue leading the development team.",
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
      challengesLabel: 'Desafios',
      benefitsLabel: 'Impacto',
      experienceAria: 'Experiência',
      experienceLabel: 'Experiência',
      showMoreLabel: 'Mostrar Mais',
      showLessLabel: 'Mostrar Menos',
      projects: [
        {
          name: 'Sistema de Produção e Logística',
          description:
            'Construí uma plataforma que planeja todo o ciclo de vida do pedido, da produção à entrega, integrada a um ERP e a um CRM via RabbitMQ.',
          stack: 'Next.js · React · Node.js · RabbitMQ',
          details:
            'Cobre todo o ciclo de vida do pedido: início e fim da produção, agendamento de frota e motoristas, e emissão da Nota Fiscal. Conectei ao ERP Protheus e a um CRM via RabbitMQ, mantendo tudo sincronizado em tempo real.',
          impact: 'Alto Impacto',
          image: '/logistic-scheduling.png',
          benefits: [
            'Automatizei o planejamento de pedidos que antes era feito manualmente, liberando o time para focar em exceções em vez de agendamento rotineiro.',
            'Resolvi um problema antigo da empresa ao eliminar quase por completo os atrasos na entrega dos pedidos.',
          ],
          challenges: [
            'Foi a primeira vez que introduzimos arquitetura orientada a eventos na empresa, então tive que entender bem como ela funciona antes de construir em cima dela.',
            'Precisei garantir que um evento duplicado nunca gerasse etapas de produção ou entregas em dobro.',
            'Garanti que uma falha em um único handler não pudesse quebrar o restante do fluxo nem deixar o estado de um pedido inconsistente.',
          ],
        },
        {
          name: 'Sistema de Controle de Produção (PCP)',
          description:
            'Tirei o controle de produção da empresa do papel e implementei apontamentos com código de barras em tempo real usando tablets, integrado ao ERP Protheus.',
          stack: 'PHP · Laravel · Vue.js · ADVPL',
          details:
            'Os operadores escaneiam códigos de barras nos tablets para apontar sua etapa da produção, e o próprio sistema gera os relatórios de produção com código de barras, sincronizados em tempo real com o Protheus através de endpoints ADVPL que desenvolvi para a integração.',
          impact: 'Alto Impacto',
          image: '/fabrica.png',
          benefits: [
            'Tirei a fábrica inteira do papel e coloquei no rastreamento em tempo real, usado diariamente por mais de 200 operadores no chão de fábrica.',
            'A gestão finalmente teve uma visão clara e em tempo real do status dos pedidos.',
            'Consegui automatizar algo que outras equipes já haviam tentado e falhado.',
          ],
          challenges: [
            'Tive que entender por engenharia reversa como o Protheus gera as ordens de produção antes de construir em cima disso.',
            'Escrevi endpoints ADVPL do zero para conversar com o ERP.',
          ],
        },
        {
          name: 'Event System',
          description:
            'Construí a API REST que centraliza todos os eventos emitidos pela empresa, persistindo-os e distribuindo-os para outros sistemas via RabbitMQ.',
          stack: 'Node.js · Express · RabbitMQ · Bulma',
          details:
            'Todo evento que circula entre os sistemas passa primeiro por aqui, é persistido e depois distribuído para os assinantes via RabbitMQ. Também construí um mecanismo de retry para eventos que falham na execução, além de um frontend simples em Bulma para listar e filtrar eventos. Se tornou a base sobre a qual outros microsserviços foram construídos e a forma como rastreamos o ciclo de vida completo dos pedidos na empresa.',
          impact: 'Alto Impacto',
          image: '/event-system.png',
          benefits: [
            'Dei à empresa uma forma de rastrear o ciclo de vida completo de cada pedido em todos os sistemas, algo que simplesmente não existia antes.',
            'Se tornou a base sobre a qual outros microsserviços foram construídos, centralizando toda a informação que circula entre os sistemas.',
          ],
          challenges: [
            'Lidar com eventos duplicados foi a parte mais difícil — resolvi atribuindo um UUID a cada evento recebido.',
            'Construí um mecanismo de retry para eventos que falhavam na execução, sem perdê-los nem bloquear o restante da fila.',
            'Os eventos podiam chegar fora de ordem, então precisei garantir que processá-los assim nunca deixasse um pedido em um estado inconsistente.',
          ],
        },
        {
          name: 'CRM',
          description:
            'Construí um CRM completo abrangendo produtos, orçamentos, pedidos, clientes, projetos, leads e entregas, sincronizado em tempo real com o ERP Protheus.',
          stack: 'PHP · CodeIgniter · Vue.js',
          details:
            'Um CRM completo com interfaces amigáveis para gerenciar produtos, orçamentos, pedidos, clientes, projetos, leads e entregas. Ele se conecta ao ERP Protheus, enviando e recebendo dados para manter tudo sincronizado. Este foi o primeiro projeto em produção que trabalhei, então eu estava aprendendo a programar em um cenário real enquanto construía algo do qual a empresa realmente dependeria.',
          impact: 'Alto Impacto',
          image: '/crm.png',
          benefits: [
            'Os funcionários passaram a ter interfaces amigáveis e feitas sob medida para tarefas que antes eram dispersas ou manuais, aumentando a produtividade no dia a dia.',
            'Se tornou um hub central conectando vendas, projetos e entregas diretamente ao ERP.',
          ],
          challenges: [
            'Este foi meu primeiro projeto em produção, então tive que aprender a construir software confiável e real enquanto já o construía.',
            'Precisei projetar uma integração bidirecional com o Protheus para manter os dados consistentes entre o CRM e o ERP.',
          ],
        },
        {
          name: 'CRM WhatsApp Extension',
          description:
            'Construí uma extensão para o Chrome que integrava o CRM diretamente ao WhatsApp Web, permitindo que os vendedores cadastrassem leads sem nunca precisar trocar de aba.',
          stack: 'JavaScript · Extensão Chrome · WhatsApp Web',
          details:
            'Uma extensão para o Chrome que injetava o fluxo de cadastro de leads do CRM diretamente na interface do WhatsApp Web. Os vendedores podiam capturar e gerenciar leads direto de dentro das conversas, em vez de ficar alternando entre o WhatsApp e o CRM. Para fazer isso funcionar, precisei descobrir como extrair dados da própria interface do WhatsApp Web, o que fiz clonando a biblioteca whatsapp-web.js e adaptando-a para rodar no navegador.',
          image: '/crm-whatsapp-integration.jpg',
          impact: 'Alto Impacto',
          benefits: [
            'Os vendedores passaram a cadastrar leads direto das conversas do WhatsApp, eliminando a troca constante de abas e aumentando a produtividade no dia a dia.',
            'Tornou o cadastro de leads rápido o suficiente para acontecer no exato momento da conversa.',
          ],
          challenges: [
            'O WhatsApp Web não tem nenhuma API pública para esse tipo de integração, então precisei fazer engenharia reversa de como ele expõe os dados das conversas internamente.',
            'Clonei e modifiquei a biblioteca whatsapp-web.js para que ela rodasse dentro de uma extensão de navegador em vez de um ambiente Node.js.',
          ],
        },
      ],
      experience: [
        {
          role: 'Engenheiro de Software Sênior / Tech Lead',
          org: 'Metadil',
          period: '2015 — 2024, 2025 — Atual',
          points: [
            'Comecei como assistente de TI e me tornei o desenvolvedor que fundou o departamento de desenvolvimento da empresa.',
            'Hoje lidero uma equipe de 4 pessoas, coordenando as prioridades desde a diretoria até a entrega.',
          ],
          details:
            'Entrei na Metadil em 2015 como assistente de TI e evoluí para desenvolvedor, chegando a fundar do zero o departamento de desenvolvimento da empresa. Hoje atuo como Engenheiro de Software Sênior / Tech Lead, coordenando uma equipe de 4 pessoas. Recebo as necessidades do negócio diretamente da diretoria, desdobro em tarefas e delego para o time. Ajudo desenvolvedores menos experientes, reviso código para manter a qualidade e sou responsável por entregar projetos inteiros em produção. Após um período afastado, retornei em 2025 para continuar liderando o time de desenvolvimento.',
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
