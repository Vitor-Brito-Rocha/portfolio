<script setup lang="ts">
import {RouterView} from "vue-router";
import { watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Função para atualizar o título
const updateTitle = () => {
  // 'titulo_site' deve estar no seu JSON de tradução
  document.title = t('titulo_site')
}

// 1. Atualiza assim que o componente monta
onMounted(() => {
  updateTitle()
})

// 2. Observa quando o idioma ('locale') muda e atualiza o título automaticamente
watch(locale, () => {
  updateTitle()
})
</script>

<template>
<router-view v-slot="{ Component }">
  <Component :is="Component" />
</router-view>
</template>

<style scoped></style>
