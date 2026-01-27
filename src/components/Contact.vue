<template>
  <v-container id="contact" :class="mobile ? 'py-8 contact-section' : 'py-16 contact-section mt-4 mb-4'">
    <v-row>
      <v-col cols="12">
        <h2 :class="mobile ? 'text-h4 mb-6' : 'text-h3 mb-8'" class="text-center text-white data-animate">
          {{ t('contact.title') }}
        </h2>
      </v-col>

      <v-col cols="12" :md="6" :offset-md="mobile ? 0 : 3">
        <v-card :class="mobile ? 'pa-4 elevation-12 data-animate' : 'pa-8 elevation-12 data-animate'">

          <!-- Email -->
          <a
              :href="`mailto:${t('contact.email')}`"
              class="contact-link"
              style="text-decoration: none; color: inherit;"
          >
            <div class="d-flex align-center pa-4 contact-item">
              <v-avatar color="primary" :size="mobile ? 40 : 48" class="mr-4">
                <v-icon color="white" :size="mobile ? 24 : 28">mdi-email</v-icon>
              </v-avatar>
              <div>
                <div class="text-subtitle-1 font-weight-medium">{{ t('contact.emailLabel') }}</div>
                <div class="text-body-2 text-grey-darken-1">{{ t('contact.email') }}</div>
              </div>
            </div>
          </a>

          <v-divider class="my-2"></v-divider>

          <!-- LinkedIn -->
          <a
              :href="t('contact.linkedin')"
              target="_blank"
              class="contact-link"
              style="text-decoration: none; color: inherit;"
          >
            <div class="d-flex align-center pa-4 contact-item">
              <v-avatar color="blue" :size="mobile ? 40 : 48" class="mr-4">
                <v-icon color="white" :size="mobile ? 24 : 28">mdi-linkedin</v-icon>
              </v-avatar>
              <div>
                <div class="text-subtitle-1 font-weight-medium">LinkedIn</div>
                <div class="text-body-2 text-grey-darken-1">{{ t('contact.linkedinLabel') }}</div>
              </div>
            </div>
          </a>

          <v-divider class="my-2"></v-divider>

          <!-- GitHub -->
          <a
              :href="t('contact.github')"
              target="_blank"
              class="contact-link"
              style="text-decoration: none; color: inherit;"
          >
            <div class="d-flex align-center pa-4 contact-item">
              <v-avatar color="grey-darken-3" :size="mobile ? 40 : 48" class="mr-4">
                <v-icon color="white" :size="mobile ? 24 : 28">mdi-github</v-icon>
              </v-avatar>
              <div>
                <div class="text-subtitle-1 font-weight-medium">GitHub</div>
                <div class="text-body-2 text-grey-darken-1">{{ t('contact.githubLabel') }}</div>
              </div>
            </div>
          </a>

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

.contact-item {
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-item:hover {
  background-color: rgba(0, 0, 0, 0.04);
  transform: translateX(5px);
}

.contact-link {
  display: block;
}
</style>