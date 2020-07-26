<template>
  <div
    class="border-b-2 border-transparent hover:border-blue-600 block mt-4 lg:inline-block lg:mt-0 mr-4 pb-1"
  >
    <nuxt-link class="text-lg hover:text-blue-600 text-blue-900" :to="to">
      {{ linkText }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
}
</script>
