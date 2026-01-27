// types/portfolio.ts
export interface MenuItem {
    id: string
    label: string
}

export interface Skill {
    name: string
    icon: string
    level: number
    color: string
}

export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    demo: string
    github: string
}

export interface ContactInfo {
    email: string
    linkedin: string
    github: string
}

export type Locale = 'pt' | 'en'