<template>
  <v-container id="contact" :class="mobile ? 'py-8 contact-section' : 'py-16 contact-section mt-4 mb-4'">
    <v-row>
      <v-col cols="12">
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center text-white data-animate">
          {{ t('contact.title') }}
        </h2>
      </v-col>

      <v-col cols="12" :md="6" :offset-md="mobile ? 0 : 3">
        <v-card :class="mobile ? 'pa-4 elevation-12 data-animate' : 'pa-6 elevation-12 data-animate'">
          <v-list :lines="mobile ? 'one' : 'two'">

            <v-list-item
                :href="`mailto:${t('contact.email')}`"
            >
              <template v-slot:prepend>
                <v-avatar color="primary" :size="mobile ? 32 : 40">
                  <v-icon :size="mobile ? 20 : 24">mdi-email</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>{{ t('contact.emailLabel') }}</v-list-item-title>
              <v-list-item-subtitle>{{ t('contact.email') }}</v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                :href="t('contact.linkedin')"
                target="_blank"
            >
              <template v-slot:prepend>
                <v-avatar color="blue" :size="mobile ? 32 : 40">
                  <v-icon :size="mobile ? 20 : 24">mdi-linkedin</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>LinkedIn</v-list-item-title>
              <v-list-item-subtitle>{{ t('contact.linkedinLabel') }}</v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                :href="t('contact.github')"
                target="_blank"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-darken-3" :size="mobile ? 32 : 40">
                  <v-icon :size="mobile ? 20 : 24">mdi-github</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>GitHub</v-list-item-title>
              <v-list-item-subtitle>{{ t('contact.githubLabel') }}</v-list-item-subtitle>
            </v-list-item>

          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

const { t } = useI18n()
const { mobile } = useDisplay()
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>