<template>
  <div>
    <Navbar />
    <div
      class="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl"
    >
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
