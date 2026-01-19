<template>
  <div>
    <div
      v-if="$route.path === to"
      class="border-b-2 border-emerald-600 block mt-6 lg:inline-block lg:mt-0 mr-6 pb-2 transition-all duration-300"
    >
      <NuxtLink
        class="text-lg text-emerald-600 transition-all duration-300"
        :to="to"
      >
        {{ linkText }}
      </NuxtLink>
    </div>
    <div
      v-else
      class="border-b-2 border-transparent hover:border-emerald-600 block mt-6 lg:inline-block lg:mt-0 mr-6 pb-2 transition-all duration-300"
    >
      <NuxtLink
        class="text-lg hover:text-emerald-600 text-emerald-900 transition-all duration-300"
        :to="to"
      >
        {{ linkText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
})
</script>
