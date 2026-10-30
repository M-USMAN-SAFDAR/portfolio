<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { portfolioData } from '../data/portfolioData'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Work', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-black/90 border-b border-white/10 shadow-sm">
    <div class="max-w-[1800px] mx-auto px-6 md:px-12 xl:px-20 h-20 flex items-center justify-between">
      <!-- LOGO -->
      <router-link to="/" class="flex items-center gap-3 group active-spring" v-ripple>
        <div class="w-10 h-10 rounded-xl overflow-hidden shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110 bg-white/10 border border-white/20 flex items-center justify-center p-0.5">
          <span class="font-headline font-black text-primary text-lg" aria-hidden="true">US</span>
        </div>
        <span class="font-headline font-black text-xl tracking-[calc(-0.04em)] uppercase text-on-surface">
          {{ portfolioData.profile.name.split(' ')[1] }}<span class="text-primary">.dev</span>
        </span>
      </router-link>

      <!-- DESKTOP NAV -->
      <div class="hidden lg:flex items-center gap-8">
        <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
          class="font-label text-xs font-black tracking-[0.2em] uppercase hover:text-primary transition-colors text-on-surface/80 px-2 py-1 rounded-md active-spring"
          active-class="text-primary !opacity-100" v-ripple>
          {{ link.name }}
        </router-link>

      </div>

      <!-- MOBILE TOGGLE -->
      <div class="flex items-center gap-4 lg:hidden">
        <button @click="toggleMenu" class="p-2 text-on-surface" aria-label="Toggle Navigation Menu">
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div v-if="isMenuOpen" class="lg:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 animate-fade-in shadow-2xl">
      <div class="flex flex-col gap-6">
        <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
          @click="isMenuOpen = false"
          class="font-headline text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors py-2 px-4 rounded-xl active-spring" v-ripple>
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
