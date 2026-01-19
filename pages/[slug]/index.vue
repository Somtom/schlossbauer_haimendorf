<template>
  <article>
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: page } = await useAsyncData(`page-${slug}`, () =>
  queryCollection('content').path(`/pages/${slug}`).first()
)
</script>
