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
      content:
        'Schlossbauer Haimendorf — EU Bio zertifizierter Bauernhof mit Senföl, Leindotteröl und Zimmervermietung bei Nürnberg. Kontrollstellnummer DE001.',
    },
    {
      name: 'keywords',
      content:
        'schlossbauer, haimendorf, bio-bauernhof, naturland, senföl, leindotteröl, fressermast, zimmervermietung, bauernhof haimendorf, zimmer haimendorf',
    },
  ],
})
</script>
