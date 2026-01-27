<template>
  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <ParticlesBackground />
    <v-container fluid class="hero-container">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="6" class="text-center hero-content">
          <v-avatar
              size="200"
              class="mb-6 elevation-8 hero-avatar"
              ref="avatarRef"
          >
            <v-img src="/photo.jpg" alt="Profile" />
          </v-avatar>
          <h1 class="text-h2 mb-4 hero-title" ref="titleRef">
            {{ $t('hero.greeting') }}
          </h1>
          <h2 class="text-h4 mb-6 text-grey-lighten-1 hero-subtitle" ref="subtitleRef">
            {{ $t('hero.role') }}
          </h2>
          <div class="hero-buttons" ref="buttonsRef">
            <v-btn
                size="large"
                color="white"
                variant="outlined"
                :href="$t('hero.cvLink')"
                target="_blank"
                prepend-icon="mdi-download"
                class="ma-2"
                @mouseenter="onButtonHover"
                @mouseleave="onButtonLeave"
            >
              {{ $t('hero.downloadCV') }}
            </v-btn>
            <v-btn
                size="large"
                color="white"
                prepend-icon="mdi-email"
                class="ma-2"
                @click="scrollTo('contact')"
                @mouseenter="onButtonHover"
                @mouseleave="onButtonLeave"
            >
              {{ $t('hero.contact') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" @click="scrollTo('about')">
        <v-icon color="white" size="40">mdi-chevron-down</v-icon>
      </div>
    </v-container>
  </section>

  <!-- About Section -->
  <v-container id="about" class="py-16">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 mb-8 text-center fade-in-element">
          {{ $t('about.title') }}
        </h2>
      </v-col>
      <v-col cols="12" md="8" offset-md="2">
        <p class="text-h6 text-center fade-in-element">
          {{ $t('about.description') }}
        </p>
      </v-col>
    </v-row>

    <!-- Stats -->
    <v-row class="mt-8">
      <v-col
          v-for="stat in stats"
          :key="stat.label"
          cols="6"
          md="3"
          class="fade-in-element"
      >
        <v-card class="text-center pa-6" elevation="4">
          <h3 class="text-h3 font-weight-bold" :style="{ color: stat.color }">
            <span :ref="el => { if (el) statRefs[stat.label] = el as HTMLElement }">0</span>{{ stat.suffix }}
          </h3>
          <p class="text-body-1 text-grey mt-2">{{ $t(stat.label) }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Skills Section -->
  <v-container id="skills" class="py-16" :class="skillsBackground">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 mb-8 text-center fade-in-element">
          {{ $t('skills.title') }}
        </h2>
      </v-col>
      <v-col
          v-for="skill in skills"
          :key="skill.name"
          cols="12"
          sm="6"
          md="4"
          lg="3"
      >
        <v-card
            class="pa-4 skill-card slide-in-element"
            hover
            elevation="4"
            :style="{ borderTop: `4px solid ${skill.color}` }"
            @mouseenter="onSkillHover"
            @mouseleave="onSkillLeave"
        >
          <div class="text-center">
            <v-icon size="64" :color="skill.color" class="skill-icon">
              {{ skill.icon }}
            </v-icon>
            <h3 class="text-h6 mt-4 mb-2">{{ $t(skill.name) }}</h3>
            <v-progress-linear
                :model-value="skill.level"
                :color="skill.color"
                height="8"
                rounded
                class="mt-4 skill-progress"
            />
            <span class="text-caption text-grey">{{ skill.level }}%</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Projects Section -->
  <v-container id="projects" class="py-16">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 mb-8 text-center fade-in-element">
          {{ $t('projects.title') }}
        </h2>
      </v-col>
      <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          md="6"
          lg="4"
      >
        <v-card
            hover
            class="project-card scale-in-element"
            height="100%"
            @mouseenter="onProjectHover"
            @mouseleave="onProjectLeave"
        >
          <v-img
              :src="project.image"
              height="220"
              cover
              class="project-image"
          >
            <div class="project-overlay">
              <v-chip
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  size="small"
                  class="ma-1"
                  color="white"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-img>
          <v-card-title class="text-h6">{{ $t(project.title) }}</v-card-title>
          <v-card-text>
            <p class="text-body-2">{{ $t(project.description) }}</p>
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-btn
                :href="project.demo"
                target="_blank"
                color="primary"
                variant="tonal"
                prepend-icon="mdi-open-in-new"
                size="small"
            >
              {{ $t('projects.demo') }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                :href="project.github"
                target="_blank"
                variant="text"
                icon="mdi-github"
                size="small"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Experience Timeline -->
  <v-container id="experience" class="py-16" :class="skillsBackground">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 mb-8 text-center fade-in-element">
          {{ $t('experience.title') }}
        </h2>
      </v-col>
      <v-col cols="12" md="8" offset-md="2">
        <v-timeline side="end" align="start">
          <v-timeline-item
              v-for="(exp, index) in experiences"
              :key="index"
              :dot-color="exp.color"
              size="small"
              class="fade-in-element"
          >
            <template v-slot:opposite>
              <div class="text-caption font-weight-bold">{{ $t(exp.period) }}</div>
            </template>
            <v-card elevation="4">
              <v-card-title class="text-h6">{{ $t(exp.title) }}</v-card-title>
              <v-card-subtitle>{{ $t(exp.company) }}</v-card-subtitle>
              <v-card-text>{{ $t(exp.description) }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>

  <!-- Contact Section -->
  <v-container id="contact" class="py-16 contact-section">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 mb-8 text-center text-white fade-in-element">
          {{ $t('contact.title') }}
        </h2>
      </v-col>
      <v-col cols="12" md="6" offset-md="3">
        <v-card class="pa-6 elevation-12 scale-in-element">
          <v-list lines="two">
            <v-list-item
                :href="`mailto:${$t('contact.email')}`"
                link
                class="contact-item"
            >
              <template v-slot:prepend>
                <v-avatar color="primary" size="40">
                  <v-icon color="white">mdi-email</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>{{ $t('contact.emailLabel') }}</v-list-item-title>
              <v-list-item-subtitle>{{ $t('contact.email') }}</v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                :href="$t('contact.linkedin')"
                target="_blank"
                link
                class="contact-item"
            >
              <template v-slot:prepend>
                <v-avatar color="blue" size="40">
                  <v-icon color="white">mdi-linkedin</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>LinkedIn</v-list-item-title>
              <v-list-item-subtitle>{{ $t('contact.linkedinLabel') }}</v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                :href="$t('contact.github')"
                target="_blank"
                link
                class="contact-item"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-darken-3" size="40">
                  <v-icon color="white">mdi-github</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>GitHub</v-list-item-title>
              <v-list-item-subtitle>{{ $t('contact.githubLabel') }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Footer -->
  <v-footer class="bg-grey-darken-4 text-center py-4">
    <v-col cols="12">
      <p class="text-grey-lighten-1 mb-0">
        {{ $t('footer.madeWith') }}
        <v-icon color="red" size="small" class="heart-icon">mdi-heart</v-icon>
        {{ $t('footer.by') }}
      </p>
    </v-col>
  </v-footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
import type { Skill, Project } from '@/types/portfolio'

gsap.registerPlugin(ScrollTrigger)

const { locale } = useI18n()
const theme = useTheme()

// Refs
const avatarRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()
const buttonsRef = ref<HTMLElement>()
const statRefs = ref<Record<string, HTMLElement>>({})

// Stats
const stats = ref([
  { label: 'stats.projects', value: 50, suffix: '+', color: '#667eea' },
  { label: 'stats.experience', value: 5, suffix: '+', color: '#42b883' },
  { label: 'stats.clients', value: 30, suffix: '+', color: '#f29111' },
  { label: 'stats.awards', value: 10, suffix: '+', color: '#ff5252' }
])

// Skills
const skills = ref<Skill[]>([
  { name: 'skills.vue', icon: 'mdi-vuejs', level: 90, color: '#42b883' },
  { name: 'skills.typescript', icon: 'mdi-language-typescript', level: 85, color: '#3178c6' },
  { name: 'skills.node', icon: 'mdi-nodejs', level: 80, color: '#68a063' },
  { name: 'skills.python', icon: 'mdi-language-python', level: 75, color: '#3776ab' },
  { name: 'skills.database', icon: 'mdi-database', level: 80, color: '#f29111' },
  { name: 'skills.docker', icon: 'mdi-docker', level: 70, color: '#2496ed' },
  { name: 'skills.git', icon: 'mdi-git', level: 85, color: '#f05032' },
  { name: 'skills.figma', icon: 'mdi-pencil-ruler', level: 75, color: '#f24e1e' }
])

// Projects
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'projects.project1.title',
    description: 'projects.project1.description',
    image: '/projects/project1.jpg',
    technologies: ['Vue.js', 'TypeScript', 'Vuetify', 'Firebase'],
    demo: 'https://demo1.com',
    github: 'https://github.com/usuario/project1'
  },
  {
    id: 2,
    title: 'projects.project2.title',
    description: 'projects.project2.description',
    image: '/projects/project2.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    demo: 'https://demo2.com',
    github: 'https://github.com/usuario/project2'
  },
  {
    id: 3,
    title: 'projects.project3.title',
    description: 'projects.project3.description',
    image: '/projects/project3.jpg',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    demo: 'https://demo3.com',
    github: 'https://github.com/usuario/project3'
  }
])

// Experience
const experiences = ref([
  {
    period: 'experience.exp1.period',
    title: 'experience.exp1.title',
    company: 'experience.exp1.company',
    description: 'experience.exp1.description',
    color: 'primary'
  },
  {
    period: 'experience.exp2.period',
    title: 'experience.exp2.title',
    company: 'experience.exp2.company',
    description: 'experience.exp2.description',
    color: 'secondary'
  }
])

// Computed
const skillsBackground = computed<string>(() => {
  return theme.global.current.value.dark ? 'bg-grey-darken-4' : 'bg-grey-lighten-4'
})

// Methods
const scrollTo = (id: string): void => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const onButtonHover = (event: MouseEvent): void => {
  const target = event.currentTarget as HTMLElement
  gsap.to(target, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const onButtonLeave = (event: MouseEvent): void => {
  const target = event.currentTarget as HTMLElement
  gsap.to(target, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const onSkillHover = (event: MouseEvent): void => {
  const card = event.currentTarget as HTMLElement
  const icon = card.querySelector('.skill-icon')

  gsap.to(card, {
    y: -10,
    duration: 0.3,
    ease: 'power2.out'
  })

  if (icon) {
    gsap.to(icon, {
      scale: 1.2,
      rotation: 360,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
  }
}

const onSkillLeave = (event: MouseEvent): void => {
  const card = event.currentTarget as HTMLElement
  const icon = card.querySelector('.skill-icon')

  gsap.to(card, {
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  })

  if (icon) {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const onProjectHover = (event: MouseEvent): void => {
  const card = event.currentTarget as HTMLElement
  gsap.to(card, {
    y: -10,
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const onProjectLeave = (event: MouseEvent): void => {
  const card = event.currentTarget as HTMLElement
  gsap.to(card, {
    y: 0,
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const counterAnimation = (element: HTMLElement, target: number): void => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: 'power1.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString()
    }
  })
}

// Animações ao montar
// Animações ao montar
onMounted(() => {
  // Animação de entrada do hero
  const tl = gsap.timeline({
    onComplete: () => {
      // Garante que tudo está clicável após as animações
      if (buttonsRef.value) {
        const buttons = buttonsRef.value.querySelectorAll('.v-btn')
        buttons.forEach(btn => {
          (btn as HTMLElement).style.pointerEvents = 'auto'
        })
      }
    }
  })

  if (avatarRef.value) {
    tl.from(avatarRef.value, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
  }

  if (titleRef.value) {
    tl.from(titleRef.value, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
  }

  if (subtitleRef.value) {
    tl.from(subtitleRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
  }

  if (buttonsRef.value) {
    tl.from(buttonsRef.value.children, {
      y: 30,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out',
      onComplete: function() {
        // Força pointer-events auto após cada botão terminar animação
        this.targets().forEach((target: any) => {
          target.style.pointerEvents = 'auto'
        })
      }
    }, '-=0.2')
  }

  // Animação do scroll indicator
  gsap.to('.scroll-indicator', {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // Animação do coração
  gsap.to('.heart-icon', {
    scale: 1.3,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // Animação de fade in para elementos
  const fadeInElements = gsap.utils.toArray('.fade-in-element')
  fadeInElements.forEach((element: any) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    })
  })

  // Animação de slide para skills
  const slideElements = gsap.utils.toArray('.slide-in-element')
  slideElements.forEach((element: any, index: number) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      duration: 0.8,
      delay: (index % 4) * 0.1,
      ease: 'power3.out'
    })
  })

  // Animação de scale para projects
  const scaleElements = gsap.utils.toArray('.scale-in-element')
  scaleElements.forEach((element: any, index: number) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: (index % 3) * 0.15,
      ease: 'back.out(1.7)'
    })
  })

  // Animação dos contadores
  stats.value.forEach(stat => {
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top center',
      once: true,
      onEnter: () => {
        const element = statRefs.value[stat.label]
        if (element) {
          counterAnimation(element, stat.value)
        }
      }
    })
  })

  // Animação das barras de progresso
  gsap.utils.toArray('.skill-progress').forEach((progress: any) => {
    ScrollTrigger.create({
      trigger: progress,
      start: 'top bottom-=100',
      once: true,
      onEnter: () => {
        gsap.from(progress, {
          scaleX: 0,
          duration: 1.5,
          ease: 'power3.out',
          transformOrigin: 'left'
        })
      }
    })
  })
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}

.hero-container {
  position: relative;
  z-index: 2;
  height: 100%;
}

.hero-content {
  position: relative;
  z-index: 3;
}

.hero-avatar,
.hero-title,
.hero-subtitle {
  position: relative;
  z-index: 4;
}

.hero-avatar {
  border: 4px solid white;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.hero-buttons {
  position: relative;
  z-index: 10;
  pointer-events: auto !important;
}

.hero-buttons :deep(.v-btn) {
  z-index: 11 !important;
  pointer-events: auto !important;
  position: relative;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.hero-buttons :deep(.v-btn:hover),
.hero-buttons :deep(.v-btn:focus),
.hero-buttons :deep(.v-btn:active) {
  pointer-events: auto !important;
}

.scroll-indicator {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto !important;
}

.scroll-indicator:hover {
  transform: translateX(-50%) scale(1.2);
}

/* ===== CONTACT SECTION ===== */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.contact-item {
  transition: all 0.3s ease;
}

.contact-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateX(5px);
}

/* ===== SKILL CARDS ===== */
.skill-card {
  transition: all 0.3s ease;
  height: 100%;
}

/* ===== PROJECT CARDS ===== */
.project-card {
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-image {
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}
/* ===== CONTACT SECTION ===== */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.contact-item {
  transition: all 0.3s ease;
}

.contact-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateX(5px);
}

/* ===== SKILL CARDS ===== */
.skill-card {
  transition: all 0.3s ease;
  height: 100%;
}

/* ===== PROJECT CARDS ===== */
.project-card {
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-image {
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}
</style>