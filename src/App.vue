<script setup lang="ts">
import { RouterView } from "vue-router"
import {onMounted, watch} from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from "@/components/Navbar.vue"

const { t, locale } = useI18n()

const updateTitle = () => {
  document.title = t('titulo_site')
}

onMounted(() => {
  updateTitle()
})

// 2. Observa quando o idioma ('locale') muda e atualiza o título automaticamente
watch(locale, () => {
  updateTitle()
})
</script>

<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <v-app-bar elevation="2">
        <Navbar />
      </v-app-bar>
      <v-main>
        <Component :is="Component" />
      </v-main>
    </router-view>
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
}
</style>