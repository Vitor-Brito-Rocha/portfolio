// types/portfolio.ts
export interface MenuItem {
    id: string
    label: string
}

export interface Skill {
    name: string
    icon: string
    color: string
}

export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    demo?: string
    github?: string,
    active_demo?: boolean
    active_github?: boolean
}

export interface ContactInfo {
    email: string
    linkedin: string
    github: string
}

export type Locale = 'pt' | 'en'