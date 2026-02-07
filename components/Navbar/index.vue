<template>
  <nav
    class="backdrop-blur-lg bg-white/90 pt-6 px-6 shadow-lg sticky top-0 z-50 rounded-b-xl transition-all duration-300"
  >
    <div
      class="flex items-center justify-between flex-wrap lg:justify-center flex-shrink-0 text-emerald-900"
    >
      <span class="uppercase font-semibold text-xl">
        <NuxtLink to="/">
          <img class="h-20" src="~/assets/logo.png" />
        </NuxtLink>
      </span>

      <div class="lg:hidden">
        <button
          class="flex items-center px-5 py-3 border rounded-xl text-emerald-900 border-emerald-900 hover:text-emerald-700 hover:border-emerald-700 transition-all duration-300 hover:shadow-lg"
          @click="showMenu = !showMenu"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <transition name="fade">
        <div
          v-if="showMenu"
          class="lg:hidden w-full block flex-grow max-h-full"
        >
          <div class="text-sm lg:flex-grow">
            <template v-for="item in navItems" :key="item.label">
              <NavDropdown
                v-if="item.children"
                :key="'drop-mobile-' + item.label"
                :label="item.label"
                :children="item.children"
              />
              <NavItem
                v-else
                :key="'nav-mobile-' + item.label"
                :to="item.to"
                :link-text="item.label"
              />
            </template>
          </div>
        </div>
      </transition>
    </div>

    <div class="mt-5">
      <div
        class="hidden w-full flex justify-center flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <template v-for="item in navItems" :key="item.label">
          <NavDropdown
            v-if="item.children"
            :key="'drop-' + item.label"
            :label="item.label"
            :children="item.children"
          />
          <NavItem
            v-else
            :key="'nav-' + item.label"
            :to="item.to"
            :link-text="item.label"
          />
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

// eslint-disable-next-line no-unused-vars
const showMenu = ref(false)

const { data: navData } = await useAsyncData('navigation', () =>
  queryCollection('content').path('/navigation').first()
)

// eslint-disable-next-line no-unused-vars
const navItems = computed(() => navData.value?.meta?.navItems || [])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
