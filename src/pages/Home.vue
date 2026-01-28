<template>
  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <ParticlesBackground />
    <v-container fluid class="hero-container">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" class="text-center hero-content">
          <v-avatar
              :size="mobile ? 150 : 200"
              class="mb-6 elevation-8 hero-avatar"
              ref="avatarRef"
          >
            <v-img src="/photo.jpg" alt="Profile" />
          </v-avatar>
          <h1 :class="mobile ? 'text-h3 mb-3' : 'text-h2 mb-4'" class="hero-title" ref="titleRef">
            {{ $t('hero.greeting') }}
          </h1>
          <h2 :class="mobile ? 'text-h5 mb-4' : 'text-h4 mb-6'" class="text-grey-lighten-1 hero-subtitle" ref="subtitleRef">
            {{ $t('hero.role') }}
          </h2>
          <div class="hero-buttons" :class="{ 'hero-buttons-mobile': mobile }" ref="buttonsRef">
            <v-btn
                :size="mobile ? 'default' : 'large'"
                color="white"
                variant="outlined"
                :href="$t('hero.cvLink')"
                target="_blank"
                prepend-icon="mdi-download"
                :class="mobile ? 'mb-2 w-100' : 'ma-2'"
            >
              {{ $t('hero.downloadCV') }}
            </v-btn>
            <v-btn
                :size="mobile ? 'default' : 'large'"
                color="white"
                prepend-icon="mdi-email"
                :class="mobile ? 'w-100' : 'ma-2'"
                @click="scrollTo('contact')"
            >
              {{ $t('hero.contact') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" @click="scrollTo('about')">
        <v-icon color="white" :size="mobile ? 32 : 40">mdi-chevron-down</v-icon>
      </div>
    </v-container>
  </section>

  <!-- About Section -->
  <v-container id="about" :class="mobile ? 'py-8' : 'py-16'">
    <v-row>
      <v-col cols="12">
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center data-animate">
          {{ $t('about.title') }}
        </h2>
      </v-col>
      <v-col cols="12" :md="8" :offset-md="mobile ? 0 : 2">
        <p :class="mobile ? 'text-body-1 text-center px-2' : 'text-h6 text-center'" class="data-animate">
          {{ $t('about.description') }}
        </p>
      </v-col>
    </v-row>

    <!-- Stats -->
    <v-row :class="mobile ? 'mt-4' : 'mt-8 justify-space-evenly'">
      <v-col
          v-for="stat in stats"
          :key="stat.label"
          cols="6"
          :md="3"
          class="data-animate"
      >
        <v-card :class="mobile ? 'text-center pa-4' : 'text-center pa-6'" elevation="4">
          <h3 :class="mobile ? 'text-h4 font-weight-bold' : 'text-h3 font-weight-bold'" :style="{ color: stat.color }">
            <span :ref="el => { if (el) statRefs[stat.label] = el as HTMLElement }">0</span>{{ stat.suffix }}
          </h3>
          <p :class="mobile ? 'text-body-2 text-grey mt-1' : 'text-body-1 text-grey mt-2'">{{ $t(stat.label) }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Skills Section -->
  <v-container id="skills" :class="[mobile ? 'py-8' : 'py-16', skillsBackground]">
    <v-row>
      <v-col cols="12">
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center data-animate">
          {{ $t('skills.title') }}
        </h2>
      </v-col>
      <v-col
          v-for="skill in skills"
          :key="skill.name"
          cols="6"
          :sm="6"
          :md="4"
          :lg="3"
      >
        <v-card
            :class="mobile ? 'pa-3 skill-card data-animate' : 'pa-4 skill-card data-animate'"
            hover
            elevation="4"
            :style="{ borderTop: `4px solid ${skill.color}` }"
        >
          <div class="text-center">
            <v-icon :size="mobile ? 48 : 64" :color="skill.color" class="skill-icon">
              {{ skill.icon }}
            </v-icon>
            <h3 :class="mobile ? 'text-body-1 mt-2 mb-1' : 'text-h6 mt-4 mb-2'">{{ $t(skill.name) }}</h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Projects Section -->
  <v-container id="projects" :class="mobile ? 'py-8' : 'py-16'">
    <v-row>
      <v-col cols="12">
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center data-animate">
          {{ $t('projects.title') }}
        </h2>
      </v-col>
      <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          :md="6"
          :lg="4"
      >
        <v-card
            class="project-card data-animate"
            height="100%"
        >
          <v-img
              :src="project.image"
              :height="mobile ? 180 : 220"
              cover
              class="project-image"
          >
            <div class="project-overlay">
              <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  class="ma-1"
                  color="white"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-img>
          <v-card-title :class="mobile ? 'text-body-1' : 'text-h6'">{{ $t(project.title) }}</v-card-title>
          <v-card-text>
            <p :class="mobile ? 'text-caption' : 'text-body-2'">{{ $t(project.description) }}</p>
          </v-card-text>
          <v-card-actions :class=" mobile ? 'pa-3' : 'pa-4'">
            <v-btn
                v-if="project.active_demo !== false"
                :href="project.demo"
                target="_blank"
                color="primary"
                variant="tonal"
                prepend-icon="mdi-open-in-new"
            >
              {{ $t('projects.demo') }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                v-if="project.active_github !== false"
                :href="project.github"
                target="_blank"
                variant="elevated"
                icon="mdi-github"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- Contact Section -->
  <v-container id="contact" :class="mobile ? 'py-8 contact-section' : 'py-16 contact-section mt-4 mb-4'">
    <v-row>
      <v-col>
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center text-white data-animate">
          {{ $t('contact.title') }}
        </h2>
      </v-col>
      <v-col>
        <v-card :class="mobile ? 'pa-4 elevation-12' : 'pa-6 elevation-12'">
          <v-list class="w-100 h-100 ">
            <v-list-item
                :href="`mailto:${t('contact.email')}`"
                link
                class="contact-item"
            >
              <template v-slot:prepend>
                <v-avatar color="primary" :size="mobile ? 32 : 40">
                  <v-icon color="white" :size="mobile ? 20 : 24">mdi-email</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title :class="mobile ? 'text-body-2' : ''">{{ $t('contact.emailLabel') }}</v-list-item-title>
              <v-list-item-subtitle :class="mobile ? 'text-caption' : ''">{{ $t('contact.email') }}</v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                :href="$t('contact.linkedin')"
                target="_blank"
                link
                class="contact-item"
            >
              <template v-slot:prepend>
                <v-avatar color="blue" :size="mobile ? 32 : 40">
                  <v-icon color="white" :size="mobile ? 20 : 24">mdi-linkedin</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title :class="mobile ? 'text-body-2' : ''">LinkedIn</v-list-item-title>
              <v-list-item-subtitle :class="mobile ? 'text-caption' : ''">{{ $t('contact.linkedinLabel') }}</v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                :href="t('contact.github')"
                target="_blank"
                link
                class="contact-item"
            >

              <template v-slot:prepend>
                <v-avatar color="grey-darken-3" :size="mobile ? 32 : 40">
                  <v-icon color="white" :size="mobile ? 20 : 24">mdi-github</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title :class="mobile ? 'text-body-2' : ''">GitHub</v-list-item-title>
              <v-list-item-subtitle :class="mobile ? 'text-caption' : ''">{{ $t('contact.githubLabel') }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- Experience Timeline -->
  <v-container id="experience" :class="[mobile ? 'py-8' : 'py-16', skillsBackground]">
    <v-row>
      <v-col cols="12">
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center data-animate">
          {{ $t('experience.title') }}
        </h2>
      </v-col>
      <v-col cols="12" :md="8" :offset-md="mobile ? 0 : 2">
        <v-timeline :side="mobile ? 'end' : 'end'" align="start" :density="mobile ? 'compact' : 'default'">
          <v-timeline-item
              v-for="(exp, index) in experiences"
              :key="index"
              :dot-color="exp.color"
              :size="mobile ? 'x-small' : 'small'"
              class="data-animate"
          >
            <template v-slot:opposite>
              <div :class="mobile ? 'text-caption font-weight-bold' : 'text-caption font-weight-bold'">{{ $t(exp.period) }}</div>
            </template>
            <v-card elevation="4">
              <v-card-title :class="mobile ? 'text-body-1' : 'text-h6'">{{ $t(exp.title) }}</v-card-title>
              <v-card-subtitle :class="mobile ? 'text-caption' : ''">{{ $t(exp.company) }}</v-card-subtitle>
              <v-card-text :class="mobile ? 'text-caption' : ''">{{ $t(exp.description) }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>

  <!-- Footer -->
  <v-footer class="bg-grey-darken-4 text-center py-4 ">
    <v-col cols="12">
      <p :class="mobile ? 'text-caption text-grey-lighten-1 mb-0' : 'text-grey-lighten-1 mb-0'">
        {{ $t('footer.by') }}
      </p>
    </v-col>
  </v-footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme, useDisplay } from 'vuetify'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
import type { Skill, Project } from '@/types/portfolio'

gsap.registerPlugin(ScrollTrigger)

const { locale, t, messages } = useI18n()
const theme = useTheme()
const { mobile } = useDisplay()
// Refs
const avatarRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()
const buttonsRef = ref<HTMLElement>()
const statRefs = ref<Record<string, HTMLElement>>({})

// Stats
const stats = ref([
  { label: 'stats.experience', value: 1, suffix: '+', color: '#42b883' },
])

// Skills
const skills = ref<Skill[]>([
  { name: 'skills.vue', icon: 'mdi-vuejs', color: '#42b883' },
  { name: 'skills.node', icon: 'mdi-nodejs', color: '#68a063' },
  { name: 'skills.angular', icon: 'mdi-angular', color: '#dd0031' },
  { name: 'skills.csharp', icon: 'mdi-language-csharp', color: '#512bd4' },
  { name: 'skills.typescript', icon: 'mdi-language-typescript', color: '#3178c6' },
  { name: 'skills.git', icon: 'mdi-git', color: '#f05032' },
  { name: 'skills.database', icon: 'mdi-database', color: '#f29111' },
  { name: 'skills.java', icon: 'mdi-language-java', color: '#007396' }
])

// Projects
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'projects.project1.title',
    description: 'projects.project1.description',
    image: '/projects/restaurante.png',
    technologies: ['Vue.js', 'TypeScript', 'Vuetify', 'Node.js', 'Express.js', 'Sequelize', 'PostgreSQL'],
    active_demo: false,
    github: 'https://github.com/Vitor-Brito-Rocha/restaurante-front'
  },
  {
    id: 2,
    title: 'projects.project2.title',
    description: 'projects.project2.description',
    image: '/projects/csharp.jpg',
    technologies: ['C# .NET', 'SQLSERVER'],
    active_demo: false,
    active_github: false,
    github: 'https://github.com/usuario/project2'
  },
  {
    id: 3,
    title: 'projects.project3.title',
    description: 'projects.project3.description',
    image: '/projects/listacontatos.jpg',
    technologies: ['Vuejs', 'Vuetify', 'Viacep'],
    demo: 'https://demo3.com',
    active_demo: false,
    github: 'https://github.com/Vitor-Brito-Rocha/list-of-contacts'
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
])

// Computed
const skillsBackground = computed<string>(() => {
  return theme.global.current.value.dark ? 'bg-grey-darken-4' : 'bg-grey-lighten-4'
})

// Methods
const scrollTo = (id: string): void => {
  const element = document.getElementById(id)
  if (element) {
    const offset = mobile.value ? 56 : 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
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
onMounted(() => {
  if (mobile.value) return
  // Animação de entrada do hero
  const tl = gsap.timeline({
    onComplete: () => {
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


  gsap.utils.toArray('[data-animate]').forEach((el: any) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom-=100',
        once: true
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out'
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
})
</script>

<style scoped>
:root {
  font-family: 'Rockwell', sans-serif;
}

.hero-section {
  min-height: 100vh;
  min-height: 100dvh; /* Para mobile, usando dynamic viewport height */
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, rgb(var(--v-theme-secondary)) 100%);
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
  padding: 16px;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: 0 16px;
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
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-buttons-mobile {
  flex-direction: column;
  align-items: stretch;
  max-width: 300px;
  margin: 0 auto;
  gap: 12px;
}

.hero-buttons :deep(.v-btn) {
  z-index: 11 !important;
  pointer-events: auto !important;
  position: relative;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.w-100 {
  width: 100%;
}

.scroll-indicator {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto !important;
  z-index: 5;
}

.scroll-indicator:hover {
  transform: translateX(-50%) scale(1.2);
}

/* Contact Section */
.contact-section {
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);*/
   background: #667eea;
 }

/* .contact-item {
   transition: all 0.3s ease;
 }*/

 .contact-item:hover {
   /*background-color: rgba(0, 0, 0, 0.05);
   transform: translateY(-2px)*/
 }

 /* Skill Cards */
.skill-card {
  transition: all 0.3s ease;
  height: 100%;
}

/* Project Cards */
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
.project-card:hover {
  transform: translateY(-8px) scale(1.02);
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

/* Mobile specific adjustments */
@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem !important;
    line-height: 1.2 !important;
  }

  .hero-subtitle {
    font-size: 1.25rem !important;
    line-height: 1.3 !important;
  }

  .hero-container {
    padding-bottom: 80px;
  }

  .scroll-indicator {
    bottom: -30px;
  }
}

/* Tablet adjustments */
@media (min-width: 601px) and (max-width: 960px) {
  .hero-container {
    padding: 24px;
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
 /* .contact-item:active {
    background-color: rgba(0, 0, 0, 0.1);
  } */

  .project-overlay {
    opacity: 1;
  }
}
.hero-buttons :deep(.v-btn) {
  transition: transform 0.3s ease;
  will-change: transform;
}

@media (hover: hover) {
  .hero-buttons :deep(.v-btn):hover {
    transform: scale(1.05);
  }
}
.skill-card {
  transition: transform 0.3s ease;
  will-change: transform;
}

.skill-icon {
  transition: transform 0.5s ease;
  will-change: transform;
}

@media (hover: hover) {
  .skill-card:hover {
    transform: translateY(-10px);
  }

  .skill-card:hover .skill-icon {
    transform: scale(1.2) rotate(360deg);
  }
}
.project-card {
  transition: transform 0.3s ease;
  will-change: transform;
}

@media (hover: hover) {
  .project-card:hover {
    transform: translateY(-10px) scale(1.02);
  }
}
.scroll-indicator {
  animation: bounce 1.2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

</style>