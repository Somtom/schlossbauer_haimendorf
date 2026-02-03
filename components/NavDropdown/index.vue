<template>
  <div>
    <!-- Desktop dropdown (hover) -->
    <div
      class="hidden lg:inline-block relative mr-6"
      @mouseenter="open = true"
      @mouseleave="open = false"
    >
      <button
        class="text-lg pb-2 border-b-2 transition-all duration-300"
        :class="
          isChildActive
            ? 'text-emerald-600 border-emerald-600'
            : 'text-emerald-900 border-transparent hover:text-emerald-600 hover:border-emerald-600'
        "
      >
        {{ label }}
        <svg
          class="inline-block w-3 h-3 ml-1 transition-transform duration-300"
          :class="{ 'rotate-180': open }"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <transition name="dropdown">
        <div
          v-if="open"
          class="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-lg py-3 min-w-48 z-50"
        >
          <NuxtLink
            v-for="child in children"
            :key="child.to"
            :to="child.to"
            class="block px-6 py-2 text-emerald-900 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
          >
            {{ child.label }}
          </NuxtLink>
        </div>
      </transition>
    </div>

    <!-- Mobile dropdown (click) -->
    <div class="lg:hidden block mt-6">
      <button
        class="text-lg pb-2 border-b-2 transition-all duration-300 w-full text-left"
        :class="
          isChildActive
            ? 'text-emerald-600 border-emerald-600'
            : 'text-emerald-900 border-transparent hover:text-emerald-600 hover:border-emerald-600'
        "
        @click="mobileOpen = !mobileOpen"
      >
        {{ label }}
        <svg
          class="inline-block w-3 h-3 ml-1 transition-transform duration-300"
          :class="{ 'rotate-180': mobileOpen }"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <transition name="dropdown">
        <div v-if="mobileOpen" class="pl-6 mt-2">
          <NuxtLink
            v-for="child in children"
            :key="child.to"
            :to="child.to"
            class="block py-2 transition-all duration-300"
            :class="
              $route.path === child.to
                ? 'text-emerald-600'
                : 'text-emerald-900 hover:text-emerald-600'
            "
          >
            {{ child.label }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  children: {
    type: Array,
    required: true,
  },
})

// eslint-disable-next-line no-unused-vars
const open = ref(false)
// eslint-disable-next-line no-unused-vars
const mobileOpen = ref(false)
const route = useRoute()

// eslint-disable-next-line no-unused-vars
const isChildActive = computed(() =>
  props.children.some((child) => route.path === child.to)
)
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
