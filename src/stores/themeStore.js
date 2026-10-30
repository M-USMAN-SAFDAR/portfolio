import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const currentStyle = ref('minimal')
  const isDark = ref(true)

  if (typeof document !== 'undefined') {
    document.body.classList.add('style-minimal', 'dark')
    document.documentElement.classList.add('dark')
  }

  return { currentStyle, isDark }
})
