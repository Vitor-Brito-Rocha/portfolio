<script setup lang="ts">
import { RouterView } from "vue-router"
import { onMounted, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'
import Navbar from "@/components/Navbar.vue"

const { t, locale } = useI18n()
const { mobile } = useDisplay()
const drawer = ref(false)

const updateTitle = () => {
  document.title = t('titulo_site')
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
  drawer.value = false
}

onMounted(() => {
  updateTitle()
})

watch(locale, () => {
  updateTitle()
})
</script>

<template>
  <v-app>
    <v-app-bar
        :elevation="2"
        :height="mobile ? 56 : 64"
        class="app-bar"
    >
      <Navbar @toggle-drawer="drawer = !drawer" />
    </v-app-bar>

    <!-- Navigation drawer para mobile -->
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        :width="280"
    >
      <v-list nav class="pt-4">
        <v-list-item
            prepend-icon="mdi-information"
            @click="scrollTo('about')"
        >
          <v-list-item-title>{{ t('menu.about') }}</v-list-item-title>
        </v-list-item>

        <v-list-item
            prepend-icon="mdi-code-braces"
            @click="scrollTo('skills')"
        >
          <v-list-item-title>{{ t('menu.skills') }}</v-list-item-title>
        </v-list-item>

        <v-list-item
            prepend-icon="mdi-folder-multiple"
            @click="scrollTo('projects')"
        >
          <v-list-item-title>{{ t('menu.projects') }}</v-list-item-title>
        </v-list-item>

        <v-list-item
            prepend-icon="mdi-briefcase"
            @click="scrollTo('experience')"
        >
          <v-list-item-title>{{ t('menu.experience') }}</v-list-item-title>
        </v-list-item>

        <v-list-item
            prepend-icon="mdi-email"
            @click="scrollTo('contact')"
        >
          <v-list-item-title>{{ t('menu.contact') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
/* Estilos globais mínimos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

.app-bar {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
/* Cor da seleção de texto */
::selection {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));          /* cor do texto */
}

/* Firefox precisa desse seletor separado */
::-moz-selection {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}
/* Mobile optimizations */
@media (max-width: 600px) {
  body {
    overflow-x: hidden;
    width: 100%;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Tablet adjustments */
@media (min-width: 601px) and (max-width: 960px) {
  .v-main {
    padding-top: 64px !important;
  }
}

/* Safe area para dispositivos com notch */
@supports (padding: max(0px)) {
  body {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
  }
}
</style>