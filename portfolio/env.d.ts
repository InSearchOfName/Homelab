/// <reference types="vite/client" />

/** View Transitions API (theme switch) */
interface ViewTransition {
  finished: Promise<void>
  ready: Promise<void>
  updateCallbackDone: Promise<void>
  skipTransition(): void
}

declare global {
  interface Document {
    startViewTransition?(updateCallback: () => void | Promise<void>): ViewTransition
  }
}

export {}
