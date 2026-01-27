import common from "@/locales/common.ts";

export default {
    ...common,
    titulo_site: 'Portfolio - Vitor Brito Rocha',
    name: 'Your Name',
    menu: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact'
    },
    hero: {
        greeting: 'Full-Stack Developer & Software Engineer',
        role: 'Technology and Law Enthusiast',
        downloadCV: 'Access CV',
        contact: 'Get in Touch',
        cvLink: '/cvs/cv-en.pdf'
    },
    about: {
        title: 'About Me',
        description: 'A developer passionate about creating elegant and efficient solutions. With experience in Full-Stack development, I focus on delivering high-quality products that make a difference, contributing to my colleagues’ professional growth and solving real customer pain points.'
    },
    skills: {
        title: 'Technical Skills',
        vue: 'Vue.js',
        typescript: 'TypeScript',
        node: 'Node.js',
        csharp: 'C# .NET',
        database: 'Database',
        java: 'Java',
        git: 'Git',
        angular: 'Angular.js'
    },
    projects: {
        title: 'My Projects',
        demo: 'View Demo',
        code: 'Code',
        project1: {
            title: 'VRestaurantes',
            description: 'SaaS web application for restaurants, featuring order, tab, and payment management, built using core software engineering principles such as SOLID.',
        },
        project2: {
            title: 'C# .NET – Scalable REST API',
            description: 'RESTful API built with C# .NET and SQL Server (outdated image).',
        },
        project3: {
            title: 'Contact List',
            description: 'My first Vue.js project, developed to better understand the framework.'
        }
    },
    experience: {
        title: 'Professional Experience',
        exp1: {
            period: '03/2025 - Present',
            title: 'Front-End Developer',
            company: 'Prolins IT Solution & Outsourcing',
            description: 'Development of scalable web applications using Vue.js (2 and 3) and Angular.js. Contribution to legacy systems, database modeling, and performance optimization.'
        },
    },
    contact: {
        title: "Let's Talk?",
        email: 'vitorbritorochaa@email.com',
        emailLabel: 'Email',
        linkedin: 'https://www.linkedin.com/in/vitor-rocha-557317348/?locale=en_US',
        linkedinLabel: 'Connect with me',
        github: 'https://github.com/Vitor-Brito-Rocha',
        githubLabel: 'Check out my projects',
    },
    footer: {
        by: 'Created by Vitor © 2025'
    },
    stats: {
        projects: 'Projects',
        experience: 'Years',
        clients: 'Clients',
        awards: 'Awards'
    },
}
