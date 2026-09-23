<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="hero__kicker">{{ t('hero-kicker') }}</p>
        <h1 class="hero__title">{{ t('hero-title') }}</h1>
        <p class="hero__subtitle">
          {{ t('hero-subtitle') }}
        </p>

        <div class="pill-row" aria-label="Highlights">
          <span class="pill">{{ t('hero-pill-1') }}</span>
          <span class="pill">{{ t('hero-pill-2') }}</span>
          <span class="pill">{{ t('hero-pill-3') }}</span>
        </div>

        <div class="btn-row">
          <a class="btn btn--primary" href="#personalProject">{{ t('hero-cta-primary') }}</a>
          <a
            class="btn"
            href="https://github.com/InSearchOfName"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('hero-cta-github') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(3rem, 6vw, 5.5rem);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: -30% -10%;
  background:
    radial-gradient(
      800px 500px at 20% 20%,
      color-mix(in oklab, var(--bg-accent) 22%, transparent),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 70% 35%,
      color-mix(in oklab, var(--bg-accent) 15%, transparent),
      transparent 60%
    );
  pointer-events: none;
}

.hero__inner {
  position: relative;
  max-width: 980px;
}

.hero__kicker {
  margin: 0 0 var(--space-2) 0;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.82rem;
  color: var(--text-tertiary);
}

.hero__title {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  letter-spacing: -0.04em;
  line-height: 0.98;
  text-wrap: balance;
}

.hero__subtitle {
  margin: var(--space-4) 0 0 0;
  color: var(--text-secondary);
  max-width: 66ch;
  font-size: 1.08rem;
}

.pill-row {
  margin-top: var(--space-4);
}
</style>
