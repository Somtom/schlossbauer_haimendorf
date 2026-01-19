<template>
  <article>
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
const { data: page } = await useAsyncData('index-page', () =>
  queryCollection('content').path('/pages').first()
)
</script>
