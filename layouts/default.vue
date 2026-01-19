<template>
  <div>
    <Navbar />
    <div
      class="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl"
    >
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Schlossbauer Haimendorf',
  meta: [
    {
      name: 'description',
      content: 'Dies ist die Internetpräsenz der Schlossbauern in Haimendorf',
    },
    {
      name: 'keywords',
      content:
        'schlossbauer, haimendorf, bauernhof haimendorf, schlossbauer haimendorf,zimmer haimendorf, zimmer Montagearbeiter',
    },
  ],
})
</script>
