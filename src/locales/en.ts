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
        greeting: 'Hi, I\'m a Full Stack Developer',
        role: 'Vue.js • TypeScript • Node.js',
        downloadCV: 'Download CV',
        contact: 'Get in Touch',
        cvLink: '/cv-en.pdf'
    },
    about: {
        title: 'About Me',
        description: 'Passionate developer focused on creating elegant and efficient solutions. With full stack development experience, I focus on delivering high-quality products that make a difference.'
    },
    skills: {
        title: 'Technical Skills',
        vue: 'Vue.js',
        typescript: 'TypeScript',
        node: 'Node.js',
        python: 'Python',
        database: 'Database',
        docker: 'Docker',
        git: 'Git',
        figma: 'UI/UX Design'
    },
    projects: {
        title: 'My Projects',
        demo: 'View Demo',
        code: 'Code',
        project1: {
            title: 'Full E-commerce',
            description: 'Sales platform with cart, integrated payment and admin panel'
        },
        project2: {
            title: 'Scalable REST API',
            description: 'Robust backend with JWT authentication, Redis cache and Swagger documentation'
        },
        project3: {
            title: 'Analytics Dashboard',
            description: 'Real-time data analysis system with interactive charts'
        }
    },
    experience: {
        title: 'Professional Experience',
        exp1: {
            period: '2022 - Present',
            title: 'Senior Full Stack Developer',
            company: 'Tech Company',
            description: 'Development of scalable web applications using Vue.js and Node.js'
        },
        exp2: {
            period: '2020 - 2022',
            title: 'Frontend Developer',
            company: 'Startup XYZ',
            description: 'Creating modern and responsive interfaces with Vue.js and Vuetify'
        }
    },
    contact: {
        title: 'Let\'s Talk?',
        emailLabel: 'Email',
        email: 'your@email.com',
        linkedinLabel: 'Connect with me',
        linkedin: 'https://linkedin.com/in/your-profile',
        githubLabel: 'See my projects',
        github: 'https://github.com/your-username'
    },
    footer: {
        madeWith: 'Made with',
        by: 'by You • 2025'
    },
    // Adicione em pt.ts e en.ts
    stats: {
        projects: 'Projects',
        experience: 'Years',
        clients: 'Clients',
        awards: 'Awards'
    },
}