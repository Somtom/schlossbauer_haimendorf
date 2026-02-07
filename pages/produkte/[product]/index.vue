<template>
  <article>
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
const route = useRoute()
const product = route.params.product

const { data: page } = await useAsyncData(`produkt-${product}`, () =>
  queryCollection('content').path(`/pages/produkte/${product}`).first()
)

useHead({
  title: page.value?.title || 'Produkt - Schlossbauer Haimendorf',
  meta: [
    {
      name: 'description',
      content:
        page.value?.description || 'Produkt vom Schlossbauer Haimendorf.',
    },
  ],
})
</script>
