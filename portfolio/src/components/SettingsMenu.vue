<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, setTheme } = useTheme()
const root = ref<HTMLElement | null>(null)
const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

const close = () => {
  open.value = false
}

const selectLightTheme = () => {
  setTheme('light')
  close()
}

const selectDarkTheme = () => {
  setTheme('dark')
  close()
}

const onDocPointerDown = (e: PointerEvent) => {
  if (!open.value || !root.value) return
  const t = e.target as Node
  if (!root.value.contains(t)) close()
}

onMounted(() => document.addEventListener('pointerdown', onDocPointerDown, true))
onUnmounted(() => document.removeEventListener('pointerdown', onDocPointerDown, true))
</script>

<template>
  <div ref="root" class="settings">
    <button
      class="settings__trigger"
      type="button"
      :aria-expanded="open"
      aria-haspopup="true"
      aria-label="Appearance settings"
      @click.stop="toggle"
    >
      <svg
        class="settings__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div v-show="open" class="settings__panel" role="menu" aria-label="Theme">
      <p class="settings__label">Theme</p>
      <div class="settings__segment" role="group" aria-label="Color theme">
        <button
          type="button"
          role="menuitemradio"
          :aria-checked="theme === 'light'"
          class="settings__seg"
          :class="{ 'settings__seg--on': theme === 'light' }"
          @click="selectLightTheme"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.75" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
            />
          </svg>
          Light
        </button>
        <button
          type="button"
          role="menuitemradio"
          :aria-checked="theme === 'dark'"
          class="settings__seg"
          :class="{ 'settings__seg--on': theme === 'dark' }"
          @click="selectDarkTheme"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Dark
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings {
  position: relative;
  flex-shrink: 0;
}

.settings__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: color-mix(in oklab, var(--bg-secondary) 70%, var(--bg-primary));
  color: var(--text-secondary);
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.settings__trigger:hover {
  color: var(--text-primary);
  border-color: color-mix(in oklab, var(--border-color) 80%, var(--text-tertiary));
  background: color-mix(in oklab, var(--bg-secondary) 90%, var(--bg-primary));
}

.settings__trigger:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--bg-accent) 65%, transparent);
  outline-offset: 2px;
}

.settings__icon {
  display: block;
}

.settings__panel {
  position: absolute;
  top: calc(100% + 0.45rem);
  right: 0;
  min-width: 11.5rem;
  padding: 0.65rem 0.65rem 0.7rem;
  border-radius: var(--radius-lg, 14px);
  border: 1px solid var(--border-color);
  background: color-mix(in oklab, var(--bg-secondary) 92%, var(--bg-primary));
  box-shadow: 0 12px 40px var(--shadow-color);
  z-index: 950;
}

.settings__label {
  margin: 0 0 0.45rem 0.35rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.settings__segment {
  display: flex;
  gap: 0.25rem;
  padding: 0.2rem;
  border-radius: 999px;
  background: color-mix(in oklab, var(--bg-primary) 55%, var(--bg-secondary));
  border: 1px solid var(--border-color);
}

.settings__seg {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.45rem 0.55rem;
  border: none;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: transparent;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.settings__seg:hover {
  color: var(--text-primary);
}

.settings__seg--on {
  background: var(--bg-primary);
  color: var(--text-primary);
  box-shadow: 0 1px 3px color-mix(in oklab, var(--shadow-color) 80%, transparent);
}

.settings__seg:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--bg-accent) 55%, transparent);
  outline-offset: 1px;
}
</style>
