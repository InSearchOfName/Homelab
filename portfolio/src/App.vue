<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SeminarsSection from './components/SeminarsSection.vue'
import InternationalizationSection from './components/InternationalizationSection.vue'
import PersonalDevelopmentSection from './components/PersonalDevelopmentSection.vue'
import InnovationSection from './components/InnovationSection.vue'
import AboutSection from './components/AboutSection.vue'
import PersonalProjectsSection from './components/PersonalProjectsSection.vue'
</script>

<template>
  <div id="top" class="app-shell">
    <SiteHeader />
    <HeroSection />
    <AboutSection />
    <SeminarsSection />
    <InternationalizationSection />
    <PersonalDevelopmentSection />
    <InnovationSection />
    <PersonalProjectsSection />
  </div>
</template>

<style>
@import './styles/theme.css';
@import './styles/base.css';

.app-shell {
  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(
      760px 460px at 9% 7%,
      color-mix(in oklab, var(--bg-accent) 16%, transparent),
      transparent 63%
    ),
    radial-gradient(
      920px 540px at 84% 17%,
      color-mix(in oklab, var(--bg-accent) 13%, transparent),
      transparent 62%
    ),
    radial-gradient(
      820px 500px at 31% 44%,
      color-mix(in oklab, var(--bg-accent) 11%, transparent),
      transparent 61%
    ),
    radial-gradient(
      880px 520px at 73% 58%,
      color-mix(in oklab, var(--bg-accent) 10%, transparent),
      transparent 63%
    ),
    radial-gradient(
      980px 600px at 43% 90%,
      color-mix(in oklab, var(--bg-accent) 11%, transparent),
      transparent 64%
    ),
    var(--bg-primary);
}

.app-shell::before {
  content: none;
}

.app-shell > :not(.header) {
  position: relative;
  z-index: 1;
}

</style>
