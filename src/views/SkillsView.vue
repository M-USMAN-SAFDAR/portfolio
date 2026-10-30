<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick, computed, watch } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { useThemeStore } from '../stores/themeStore'
import { Layers, Cpu, Database, PanelsTopLeft } from 'lucide-vue-next'
import FuzzyText from '../components/FuzzyText.vue'

const themeStore = useThemeStore()
const { skills } = portfolioData
const viewRoot = ref(null)

// Setup categories
const categories = [
  { name: 'Frontend', icon: Layers },
  { name: 'Backend & Database', icon: Database },
  { name: 'CMS & E-commerce', icon: PanelsTopLeft },
  { name: 'Tools', icon: Cpu }
]

const activeCategory = ref('Frontend')
const selectedSkill = ref(null)
const scrambleSkillName = ref('')
const scrambleInterval = ref(null)

// Computed filtered skills list
const filteredSkills = computed(() => {
  return skills.filter(s => s.category === activeCategory.value)
})

// Scramble text function to simulate futuristic console decrypt
const startScramble = (targetText) => {
  if (scrambleInterval.value) clearInterval(scrambleInterval.value)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'
  let iterations = 0
  const maxIterations = 8
  
  scrambleInterval.value = setInterval(() => {
    scrambleSkillName.value = targetText.split('').map((char, index) => {
      if (char === ' ') return ' '
      if (index < iterations) return targetText[index]
      return chars[Math.floor(Math.random() * chars.length)]
    }).join('')
    
    if (iterations >= targetText.length) {
      scrambleSkillName.value = targetText
      clearInterval(scrambleInterval.value)
    }
    iterations += 1
  }, 25)
}

// Update selected skill details and start title scrambler
const selectSkill = (skill) => {
  selectedSkill.value = skill
  startScramble(skill.name)
}

// Find projects in portfolioData associated with the selected skill
const associatedProjects = computed(() => {
  if (!selectedSkill.value) return []
  const currentSkill = selectedSkill.value.name.toLowerCase().replace(/[^a-z0-9]/g, '')
  return portfolioData.projects.filter(proj => {
    return proj.tech.some(t => {
      const formatTech = t.toLowerCase().replace(/[^a-z0-9]/g, '')
      return formatTech === currentSkill || 
             (currentSkill === 'javascript' && formatTech === 'javascript') ||
             (currentSkill === 'vuejs' && formatTech === 'vue3') ||
             (currentSkill === 'vuejs' && formatTech === 'vuejs') ||
             (currentSkill === 'tailwindcss' && formatTech === 'tailwind')
    })
  })
})

// Enriched stats for the selected skill
const selectedMeta = computed(() => {
  if (!selectedSkill.value) return { description: '', layer: '', snippet: '' }
  return {
    description: `${selectedSkill.value.name} is included in Muhammad Usman's ${selectedSkill.value.category.toLowerCase()} toolkit.`,
    layer: selectedSkill.value.category,
    snippet: `// ${selectedSkill.value.name}\nconst technology = "${selectedSkill.value.name}";`
  }
})

// Auto select first skill when category changes
watch(filteredSkills, (newSkills) => {
  if (newSkills.length > 0) {
    selectSkill(newSkills[0])
  }
}, { immediate: true })

onMounted(async () => {
  await nextTick()

  setTimeout(async () => {
    const root = viewRoot.value
    if (!root) return
    
    const { default: g } = await import('gsap')

    // Hero reveal animation
    g.fromTo(root.querySelectorAll('.skills-header > *'), 
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' }
    )

    // Sub-console grids stagger entry
    g.fromTo(root.querySelectorAll('.gsap-console-enter'),
      { autoAlpha: 0, scale: 0.97 },
      { autoAlpha: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
    )
  }, 100)
})

onBeforeUnmount(() => {
  if (scrambleInterval.value) clearInterval(scrambleInterval.value)
})
</script>

<template>
  <div ref="viewRoot" class="max-w-[1800px] mx-auto px-6 md:px-12 xl:px-20 pt-16 md:pt-24 pb-16 overflow-visible relative">

    <!-- MAIN INTERACTIVE DECK CONSOLE -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
      
      <!-- LEFT HAND PANEL: FILTERS & CARDS DECK (md:7 cols) -->
      <div class="md:col-span-7 lg:col-span-7 flex flex-col gap-6">

        <!-- HERO HEADER (nested inside left column and scaled down by 30%) -->
        <header class="mb-6 skills-header">
          <div class="max-w-3xl">
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-headline font-black text-on-background tracking-[calc(-0.06em)] leading-none mb-4 uppercase flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
              <span>ENGINEERING</span>
              <FuzzyText 
                color="var(--color-primary)" 
                font-style="italic"
                font-size="clamp(1.8rem, 4.5vw, 4.4rem)"
                font-weight="900"
                font-family="inherit"
                class-name="text-primary italic inline-block select-none"
                :base-intensity="0.15"
                :hover-intensity="0.45"
                :fuzz-range="18"
                :enable-hover="true"
              >
                ARSENAL.
              </FuzzyText>
            </h1>
          </div>
        </header>
        <!-- CYBERNETIC CONTROL TABS -->
        <div class="flex gap-2.5 border-b border-on-surface/10 pb-4 gsap-console-enter overflow-x-auto scrollbar-none px-1">
          <button 
            v-for="cat in categories" 
            :key="cat.name"
            @click="activeCategory = cat.name"
            class="shrink-0 flex items-center gap-2.5 px-4 py-2.5 text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 relative border cursor-pointer select-none"
            :style="{ borderRadius: 'calc(var(--app-radius) / 2)' }"
            :class="[
              activeCategory === cat.name 
                ? 'bg-primary text-background border-primary shadow-lg shadow-primary/20 scale-[1.02]' 
                : 'bg-surface-container-low text-on-surface/75 border-primary/10 hover:border-primary/40 hover:text-on-surface',
              themeStore.currentStyle === 'brutal' ? 'brutal-card border-2 font-mono' : '',
              themeStore.currentStyle === 'street' ? 'street-card font-mono' : ''
            ]"
          >
            <component :is="cat.icon" class="w-3.5 h-3.5" />
            {{ cat.name }}
          </button>
        </div>

        <!-- CARDS DECK -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 gsap-console-enter">
          <div 
            v-for="skill in filteredSkills" 
            :key="skill.name"
            @click="selectSkill(skill)"
            class="skill-card p-4 sm:p-5 transition-all duration-500 cursor-pointer border relative overflow-hidden flex flex-col justify-between group active-spring min-h-[140px]"
            :style="{ borderRadius: 'var(--app-radius)' }"
            :class="[
              selectedSkill?.name === skill.name
                ? 'border-primary ring-2 ring-primary/25 bg-surface-container-high' 
                : 'border-primary/5 bg-surface-container-low hover:bg-surface-container hover:border-primary/20',
              themeStore.currentStyle === 'brutal' 
                ? `brutal-card border-4 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]` 
                : '',
              themeStore.currentStyle === 'street' 
                ? 'street-card border-primary/20 shadow-[0_0_15px_rgba(0,255,255,0.02)] hover:shadow-[0_0_20px_rgba(0,255,255,0.08)]' 
                : ''
            ]"
          >
            <!-- Selected Tech Glow Bar -->
            <div 
              v-if="selectedSkill?.name === skill.name" 
              class="absolute top-0 left-0 right-0 h-[3px]"
              :style="{ backgroundColor: skill.color }"
            ></div>

            <div class="flex flex-col gap-2.5 mb-4 w-full">
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-3 min-w-0">
                  <!-- Icon Frame -->
                  <div class="w-10 h-10 flex items-center justify-center p-2 rounded shadow-inner bg-surface border border-primary/10 transition-transform duration-500 group-hover:scale-105 shrink-0"
                    :style="{ color: skill.color, borderRadius: 'calc(var(--app-radius) / 4)' }"
                    :class="themeStore.currentStyle === 'brutal' ? 'border-2 border-on-surface' : ''"
                  >
                    <i v-if="skill.faIcon" :class="skill.faIcon" class="text-xl" :style="{ color: skill.color }"></i>
                    <div v-else-if="skill.iconUrl && skill.iconUrl.includes('simple-icons')"
                      class="w-full h-full"
                      :style="{
                        backgroundColor: skill.color,
                        mask: `url(${skill.iconUrl}) no-repeat center / contain`,
                        webkitMask: `url(${skill.iconUrl}) no-repeat center / contain`
                      }"
                    ></div>
                    <img v-else :src="skill.iconUrl || `https://skillicons.dev/icons?i=${skill.slug}`" 
                      :alt="skill.name" 
                      width="40"
                      height="40"
                      class="w-full h-full object-contain grayscale" />
                  </div>

                  <!-- Skill Name next to Icon (Desktop) -->
                  <h4 class="hidden lg:block text-sm md:text-base font-headline font-black uppercase tracking-tight text-on-surface truncate">
                    {{ skill.name }}
                  </h4>
                </div>

                <!-- Skill Category -->
                <span 
                  class="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-surface border border-primary/5 text-on-surface/60 shrink-0"
                  :class="themeStore.currentStyle === 'brutal' ? 'border-2 border-on-surface' : ''"
                >
                  {{ skill.category }}
                </span>
              </div>

              <!-- Skill Name in its own row (Mobile/Tablet) -->
              <h4 class="lg:hidden text-xs sm:text-sm font-headline font-black uppercase tracking-tight text-on-surface truncate">
                {{ skill.name }}
              </h4>
            </div>

            <div class="mt-auto h-1.5 w-full rounded-full opacity-70" :style="{ backgroundColor: skill.color }"></div>
          </div>
        </div>
      </div>

      <!-- RIGHT HAND PANEL: TELEMETRY DETAIL HUD (md:5 cols) -->
      <div class="md:col-span-5 lg:col-span-5 gsap-console-enter md:sticky md:top-24">
        <div 
          class="hud-terminal border p-6 md:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl"
          :style="{ 
            borderRadius: 'var(--app-radius)',
            borderColor: selectedSkill?.color ? `${selectedSkill.color}25` : 'var(--primary-color)'
          }"
          :class="[
            themeStore.currentStyle === 'brutal' 
              ? 'brutal-card border-4 border-on-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-surface' 
              : 'bg-surface-container-low/80',
            themeStore.currentStyle === 'street' 
              ? 'street-card shadow-[0_0_30px_rgba(255,0,255,0.05)] border-primary/30' 
              : ''
          ]"
        >
          <!-- Corner Decors -->
          <div class="absolute top-2 left-2 w-2 h-2 border-t border-l opacity-50" :style="{ borderColor: selectedSkill?.color }"></div>
          <div class="absolute top-2 right-2 w-2 h-2 border-t border-r opacity-50" :style="{ borderColor: selectedSkill?.color }"></div>
          <div class="absolute bottom-2 left-2 w-2 h-2 border-b border-l opacity-50" :style="{ borderColor: selectedSkill?.color }"></div>
          <div class="absolute bottom-2 right-2 w-2 h-2 border-b border-r opacity-50" :style="{ borderColor: selectedSkill?.color }"></div>

          <!-- Active Panel Header -->
          <div class="flex items-center justify-between border-b border-on-surface/10 pb-5 mb-6">
            <div class="min-w-0">
              <span class="text-[9px] font-bold tracking-[0.3em] uppercase opacity-50 block mb-1">SELECTED COMPONENT</span>
              <h2 class="text-2xl md:text-3xl font-headline font-black uppercase tracking-tight text-on-surface font-mono break-words leading-none">
                {{ scrambleSkillName }}
              </h2>
            </div>
            
            <!-- Skill Color Pulsing Indicator -->
            <div class="relative w-8 h-8 rounded-full border border-primary/10 shrink-0 flex items-center justify-center">
              <div class="w-3.5 h-3.5 rounded-full animate-pulse" :style="{ backgroundColor: selectedSkill?.color }"></div>
            </div>
          </div>

          <div class="mb-6 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-primary/10">
            <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: selectedSkill?.color }"></span>
            <span class="text-xs font-black uppercase tracking-widest text-on-surface">{{ selectedMeta.layer }}</span>
          </div>

          <!-- Description Section -->
          <div class="mb-6">
            <span class="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40 block mb-2">FUNCTIONAL OVERVIEW</span>
            <p class="text-sm leading-relaxed text-on-surface-variant/90 opacity-90 font-medium">
              {{ selectedMeta.description }}
            </p>
          </div>

          <!-- Associated Projects list (Dynamic Portfolio Integration) -->
          <div v-if="associatedProjects.length > 0" class="mb-6">
            <span class="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40 block mb-2.5">DYNAMIC SYSTEM LINKAGE</span>
            <div class="flex flex-wrap gap-2">
              <a 
                v-for="proj in associatedProjects" 
                :key="proj.id"
                href="#projects"
                class="flex items-center gap-2 px-3 py-1.5 rounded bg-surface border border-primary/10 text-xs font-bold uppercase tracking-wider text-on-surface/85 transition-all duration-300 hover:border-primary hover:text-primary active-spring"
                :class="themeStore.currentStyle === 'brutal' ? 'border-2 border-on-surface font-mono' : ''"
              >
                <div class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: selectedSkill?.color }"></div>
                {{ proj.title }}
              </a>
            </div>
          </div>

          <!-- Mock Code Terminal Box -->
          <div>
            <span class="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40 block mb-2">TELEMETRY CODE VIEW</span>
            <div 
              class="rounded bg-black/60 border border-primary/10 p-4 font-mono text-[11px] text-white overflow-x-auto relative"
              :class="themeStore.currentStyle === 'brutal' ? 'border-2 border-on-surface' : ''"
            >
              <div class="absolute top-2 right-2 flex gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-white/35"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-white/60"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-white"></span>
              </div>
              <pre class="leading-relaxed select-all"><code>{{ selectedMeta.snippet }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FLOATING DECORATIVE MARQUEE -->
    <div class="mt-32 -mx-6 md:-mx-12 overflow-hidden py-10 opacity-5 pointer-events-none">
      <div class="flex gap-20 animate-scroll-left whitespace-nowrap">
        <span v-for="skill in skills" :key="skill.name" 
          class="text-8xl md:text-9xl font-black font-headline uppercase leading-none"
          :style="{ color: skill.color }">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hud-terminal {
  box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.015);
}

.animate-scroll-left {
  animation: scroll-left 55s linear infinite;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
