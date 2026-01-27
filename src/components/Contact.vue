<template xmlns="http://www.w3.org/1999/html">
  <v-container id="contact" :class="mobile ? 'py-8 contact-section' : 'py-16 contact-section mt-4 mb-4'">
      <div>
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center text-white data-animate">
          {{ t('contact.title') }}
        </h2>
      </div>

      <div>
        <v-card>
          <div>

            <div
                :href="`mailto:${t('contact.email')}`"
            >
<!--              <template v-slot:prepend>-->
                <v-avatar color="primary" :size="mobile ? 32 : 40">
                  <v-icon :size="mobile ? 20 : 24">mdi-email</v-icon>
                </v-avatar>
<!--              </template>-->
              <v-list-item-title>{{ t('contact.emailLabel') }}</v-list-item-title>
              <v-list-item-subtitle>{{ t('contact.email') }}</v-list-item-subtitle>
            </div>

            <v-divider class="my-2"></v-divider>

            <div
                :href="t('contact.linkedin')"
                target="_blank"
            >
<!--              <template v-slot:prepend>-->
                <v-avatar color="blue" :size="mobile ? 32 : 40">
                  <v-icon :size="mobile ? 20 : 24">mdi-linkedin</v-icon>
                </v-avatar>
<!--              </template>-->
              <v-list-item-title>LinkedIn</v-list-item-title>
              <v-list-item-subtitle>{{ t('contact.linkedinLabel') }}</v-list-item-subtitle>
            </div>

            <v-divider class="my-2"></v-divider>

            <div
                :href="t('contact.github')"
                target="_blank"
            >
<!--              <template v-slot:prepend>-->
                <v-avatar color="grey-darken-3" :size="mobile ? 32 : 40">
                  <v-icon :size="mobile ? 20 : 24">mdi-github</v-icon>
                </v-avatar>
<!--              </template>-->
              <v-list-item-title>GitHub</v-list-item-title>
              <v-list-item-subtitle>{{ t('contact.githubLabel') }}</v-list-item-subtitle>
            </div>

          </div>
        </v-card>
      </div>
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