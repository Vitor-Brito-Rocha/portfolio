<template>
  <div class="particles-wrapper">
    <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine)
}

const particlesOptions = {
  fullScreen: {
    enable: false,
    zIndex: 0
  },
  background: {
    color: {
      value: 'transparent'
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  detectRetina: true
}
</script>

<style scoped>
.particles-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.particles-wrapper :deep(#tsparticles) {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particles-wrapper :deep(canvas) {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>