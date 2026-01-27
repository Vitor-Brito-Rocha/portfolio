import common from "@/locales/common.ts";
// locales/pt.ts
export default {
    ...common,
    titulo_site: 'Portfólio - Vitor Brito Rocha',
    name: 'Seu Nome',
    menu: {
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        experience: 'Experiência',
        contact: 'Contato'
    },
    hero: {
        greeting: 'Olá, sou Desenvolvedor Full Stack',
        role: 'Vue.js • TypeScript • Node.js',
        downloadCV: 'Baixar CV',
        contact: 'Entre em Contato',
        cvLink: '/cv-pt.pdf'
    },
    about: {
        title: 'Sobre Mim',
        description: 'Desenvolvedor apaixonado por criar soluções elegantes e eficientes. Com experiência em desenvolvimento full stack, foco em entregar produtos de alta qualidade que fazem a diferença.'
    },
    skills: {
        title: 'Habilidades Técnicas',
        vue: 'Vue.js',
        typescript: 'TypeScript',
        node: 'Node.js',
        python: 'Python',
        database: 'Banco de Dados',
        docker: 'Docker',
        git: 'Git',
        figma: 'UI/UX Design'
    },
    projects: {
        title: 'Meus Projetos',
        demo: 'Ver Demo',
        code: 'Código',
        project1: {
            title: 'E-commerce Completo',
            description: 'Plataforma de vendas com carrinho, pagamento integrado e painel administrativo'
        },
        project2: {
            title: 'API REST Escalável',
            description: 'Backend robusto com autenticação JWT, cache Redis e documentação Swagger'
        },
        project3: {
            title: 'Dashboard Analytics',
            description: 'Sistema de análise de dados em tempo real com gráficos interativos'
        }
    },
    experience: {
        title: 'Experiência Profissional',
        exp1: {
            period: '2022 - Presente',
            title: 'Desenvolvedor Full Stack Sênior',
            company: 'Tech Company',
            description: 'Desenvolvimento de aplicações web escaláveis usando Vue.js e Node.js'
        },
        exp2: {
            period: '2020 - 2022',
            title: 'Desenvolvedor Frontend',
            company: 'Startup XYZ',
            description: 'Criação de interfaces modernas e responsivas com Vue.js e Vuetify'
        }
    },
    contact: {
        title: 'Vamos Conversar?',
        emailLabel: 'Email',
        email: 'seu@email.com',
        linkedinLabel: 'Conecte-se comigo',
        linkedin: 'https://linkedin.com/in/seu-perfil',
        githubLabel: 'Veja meus projetos',
        github: 'https://github.com/seu-usuario'
    },
    footer: {
        madeWith: 'Feito com',
        by: 'por Você • 2025'
    },
    stats: {
        projects: 'Projetos',
        experience: 'Anos',
        clients: 'Clientes',
        awards: 'Prêmios'
    },
}