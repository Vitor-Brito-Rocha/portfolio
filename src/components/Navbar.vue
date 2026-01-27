<!-- components/Navbar.vue -->
<template>
  <template v-if="!mobile">
    <!-- Desktop Navigation -->
    <v-toolbar-title class="text-h6 font-weight-bold">
    Vitor Brito Rocha
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
        v-for="item in menuItems"
        :key="item.id"
        text
        @click="scrollTo(item.id)"
        class="nav-btn"
    >
      {{ $t(item.label) }}
    </v-btn>

    <v-btn
        icon
        @click="toggleTheme"
        class="mx-2"
        aria-label="Toggle theme"
    >
      <v-icon>
        {{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
      </v-icon>
    </v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" aria-label="Language selector">
          <v-avatar size="28">
            <v-img :src="currentFlag" alt="Flag" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list density="compact">
        <v-list-item @click="loadLocale('pt')">
          <template v-slot:prepend>
            <v-avatar size="24">
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="BR" />
            </v-avatar>
          </template>
          <v-list-item-title>Português</v-list-item-title>
        </v-list-item>
        <v-list-item @click="loadLocale('en')">
          <template v-slot:prepend>
            <v-avatar size="24">
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="US" />
            </v-avatar>
          </template>
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>

  <template v-else>
    <!-- Mobile Navigation -->
    <v-toolbar-title class="text-body-1 font-weight-bold">
      {{ $t('name') }}
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
        icon
        @click="toggleTheme"
        class="mx-1"
        size="small"
        aria-label="Toggle theme"
    >
      <v-icon size="small">
        {{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
      </v-icon>
    </v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="small" aria-label="Language selector">
          <v-avatar size="24">
            <v-img :src="currentFlag" alt="Flag" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list density="compact">
        <v-list-item @click="loadLocale('pt')">
          <template v-slot:prepend>
            <v-avatar size="24">
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="BR" />
            </v-avatar>
          </template>
          <v-list-item-title>Português</v-list-item-title>
        </v-list-item>
        <v-list-item @click="loadLocale('en')">
          <template v-slot:prepend>
            <v-avatar size="24">
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="US" />
            </v-avatar>
          </template>
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-app-bar-nav-icon
        @click="emit('toggleDrawer')"
        aria-label="Menu"
    ></v-app-bar-nav-icon>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme, useDisplay } from 'vuetify'
import type { MenuItem } from '@/types/portfolio'
import { loadLocale } from "@/i18n.ts"

const { mobile } = useDisplay()
const { locale } = useI18n()
const theme = useTheme()

// Emit event to parent
const emit = defineEmits<{
  toggleDrawer: []
}>()

const menuItems: MenuItem[] = [
  { id: 'about', label: 'menu.about' },
  { id: 'skills', label: 'menu.skills' },
  { id: 'projects', label: 'menu.projects' },
  { id: 'experience', label: 'menu.experience' },
  { id: 'contact', label: 'menu.contact' }
]

const currentFlag = computed<string>(() => {
  return locale.value === 'pt'
      ? 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
})

const toggleTheme = (): void => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}

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
</script>

<style scoped>
.nav-btn {
  transition: all 0.3s ease;
}

.nav-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  :deep(.v-toolbar-title) {
    font-size: 1rem !important;
  }
}
</style>