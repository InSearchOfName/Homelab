<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SettingsMenu from './SettingsMenu.vue'

const { t } = useI18n()
const isOpen = ref(false)

const links = computed(() => [
  { href: '#about', label: t('nav-about') },
  { href: '#seminars', label: t('nav-seminars') },
  { href: '#internationalization', label: t('nav-internationalization') },
  { href: '#personalDevelopment', label: t('nav-personalDevelopment') },
  { href: '#innovation', label: t('nav-innovation') },
  { href: '#personalProject', label: t('nav-projects') },
])

const close = () => {
  isOpen.value = false
}

const headerEl = ref<HTMLElement | null>(null)
let headerResizeObserver: ResizeObserver | null = null

const setHeaderHeightVar = () => {
  if (!headerEl.value) return
  const { height } = headerEl.value.getBoundingClientRect()
  document.documentElement.style.setProperty('--site-header-height', `${Math.round(height)}px`)
}

onMounted(() => {
  setHeaderHeightVar()

  if (typeof ResizeObserver !== 'undefined') {
    headerResizeObserver = new ResizeObserver(() => setHeaderHeightVar())
    if (headerEl.value) headerResizeObserver.observe(headerEl.value)
  }
})

onBeforeUnmount(() => {
  headerResizeObserver?.disconnect()
  headerResizeObserver = null
})
</script>

<template>
  <header ref="headerEl" class="header">
    <div class="container header__inner">
      <a class="brand" href="#top" @click="close">
        <span class="brand__name">{{ t('brand-name') }}</span>
        <span class="brand__tag">{{ t('brand-tag') }}</span>
      </a>

      <div class="header__right">
        <nav class="nav" aria-label="Primary navigation">
          <a v-for="l in links" :key="l.href" class="nav__link" :href="l.href" @click="close">
            {{ l.label }}
          </a>
        </nav>

        <div class="header__actions">
          <SettingsMenu />
          <button class="navBtn" type="button" :aria-expanded="isOpen" @click="isOpen = !isOpen">
            {{ t('mobile-menu-btn') }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="mobileNav">
      <div class="container mobileNav__inner" role="navigation" aria-label="Mobile navigation">
        <a v-for="l in links" :key="l.href" class="mobileNav__link" :href="l.href" @click="close">
          {{ l.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 900;
  background: color-mix(in oklab, var(--bg-primary) 85%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-color);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-block: var(--space-3);
}

.header__right {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  justify-content: flex-end;
  min-width: 0;
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  text-decoration: none;
}

.brand:hover {
  text-decoration: none;
}

.brand__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  font-size: 1.08rem;
}

.brand__tag {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav__link {
  color: var(--text-secondary);
  font-weight: 700;
  text-decoration: none;
  padding: 0.42rem 0.75rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.94rem;
}

.nav__link:hover {
  color: var(--text-primary);
  text-decoration: none;
  border-color: var(--border-color);
  background: color-mix(in oklab, var(--bg-secondary) 60%, var(--bg-primary));
}

.navBtn {
  display: none;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
}

.mobileNav {
  border-top: 1px solid var(--border-color);
  background: var(--bg-primary);
}

.mobileNav__inner {
  padding-block: var(--space-3);
  display: grid;
  gap: var(--space-2);
}

.mobileNav__link {
  padding: 0.75rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  text-decoration: none;
  font-weight: 700;
  color: var(--text-secondary);
}

.mobileNav__link:hover {
  text-decoration: none;
  background: var(--bg-hover);
  color: var(--text-primary);
}

@media (max-width: 860px) {
  .nav {
    display: none;
  }
  .navBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
