<template>
  <article>
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
const { data: page } = await useAsyncData('produkte-index', () =>
  queryCollection('content').path('/pages/produkte').first()
)

useHead({
  title: page.value?.title || 'Unsere Produkte - Schlossbauer Haimendorf',
  meta: [
    {
      name: 'description',
      content:
        page.value?.description ||
        'Bio-Senföl und Bio-Leindotteröl vom Schlossbauer Haimendorf.',
    },
  ],
})
</script>
