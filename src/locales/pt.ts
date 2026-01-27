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
        greeting: 'Desenvolvedor Full-Stack & Engenheiro de Software',
        role: 'Entusiasta da Tecnologia e do Direito',
        downloadCV: 'Acessar CV',
        contact: 'Entre em Contato',
        cvLink: '/cvs/cv-pt.pdf'
    },
    about: {
        title: 'Sobre Mim',
        description: 'Desenvolvedor apaixonado por criar soluções elegantes e eficientes. Com experiência em desenvolvimento Full-Stack, foco em entregar produtos de alta qualidade que fazem a diferença, contribuo com o desenvolvimento profissional de colegas e resolvo a "dor" do cliente.'
    },
    skills: {
        title: 'Habilidades Técnicas',
        vue: 'Vue.js',
        typescript: 'TypeScript',
        node: 'Node.js',
        csharp: 'C# .NET',
        database: 'Banco de Dados',
        java: 'Java',
        git: 'Git',
        angular: 'Angular.js'
    },
    projects: {
        title: 'Meus Projetos',
        demo: 'Ver Demo',
        code: 'Código',
        project1: {
            title: 'VRestaurantes',
            description: 'SaaS no formato de web app responsivo para restaurantes com controle de pedidos, comandas e pagamentos, utilizando fundamentos do desenvolvimento de software como SOLID',
        },
        project2: {
            title: 'C# .NET - API REST Escalável',
            description: 'API RESTFUL utilizando C# .NET + SQLSERVER (Imagem desatualizada).',
        },
        project3: {
            title: 'Lista de Contatos',
            description: 'Primeiro projeto em Vue.js para melhor compreensão do Framework'
        }
    },
    experience: {
        title: 'Experiência Profissional',
        exp1: {
            period: '03/2025 - Presente',
            title: 'Desenvolvedor Front End',
            company: 'Prolins IT Solution & Outsourcing',
            description: 'Desenvolvimento de aplicações web escaláveis usando Vue.js (2 e 3) e Angular.js - Contribuição com sistemas legados, modelagem de banco de dados e otimização de performance.'
        },
    },
    contact: {
        ...common.contact,
        title: 'Vamos Conversar?',
        emailLabel: 'Email',
        linkedinLabel: 'Conecte-se comigo',
        linkedin: 'https://www.linkedin.com/in/vitor-rocha-557317348/',
        githubLabel: 'Veja meus projetos',
    },
    footer: {
        by: 'Criado por Vitor © 2025'
    },
    stats: {
        projects: 'Projetos',
        experience: 'Anos',
        clients: 'Clientes',
        awards: 'Prêmios'
    },
}