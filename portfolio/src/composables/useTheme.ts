import { ref } from 'vue'

type Theme = 'light' | 'dark'

const getSavedTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'

  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

const applyToDocument = (next: Theme) => {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}

/** Single shared ref for every `useTheme()` caller */
const theme = ref<Theme>('light')

if (typeof window !== 'undefined') {
  theme.value = getSavedTheme()
  applyToDocument(theme.value)
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setTheme = (newTheme: Theme) => {
  if (newTheme === theme.value) return

  const commit = () => {
    theme.value = newTheme
    applyToDocument(newTheme)
  }

  if (prefersReducedMotion() || typeof document.startViewTransition !== 'function') {
    commit()
    return
  }

  document.startViewTransition(() => {
    commit()
  })
}

export const useTheme = () => ({
  theme,
  setTheme,
})
