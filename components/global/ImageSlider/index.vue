<template>
  <div class="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-18">
    <div class="flex flex-col">
      <div class="w-full relative">
        <!-- Slides -->
        <!-- eslint-disable vue/no-template-key, vue/require-v-for-key -->
        <template v-for="(image, i) in images" :key="i">
          <img
            v-show="currentIndex === i"
            class="w-full h-96 object-cover rounded-xl transition-all duration-300"
            :src="image"
            alt="image slide"
          />
        </template>
        <!-- eslint-enable vue/no-template-key, vue/require-v-for-key -->

        <!-- Prev/Next Arrows -->
        <div class="absolute inset-0 flex">
          <div class="flex items-center justify-start w-1/2">
            <button
              class="backdrop-blur-md bg-white/80 text-emerald-900 hover:text-emerald-600 font-bold hover:shadow-lg rounded-xl w-14 h-14 ml-2 opacity-75 hover:opacity-100 transition-all duration-300"
              @click="prevImage"
            >
              &#8592;
            </button>
          </div>
          <div class="flex items-center justify-end w-1/2">
            <button
              class="backdrop-blur-md bg-white/80 text-emerald-900 hover:text-emerald-600 font-bold hover:shadow-lg rounded-xl w-14 h-14 mr-2 opacity-75 hover:opacity-100 transition-all duration-300"
              @click="nextImage"
            >
              &#8594;
            </button>
          </div>
        </div>
        <!-- Buttons -->
        <div class="absolute w-full flex items-center justify-center px-6">
          <!-- eslint-disable vue/no-template-key, vue/require-v-for-key -->
          <template v-for="(image, i) in images" :key="i">
            <button
              class="flex w-4 h-4 mt-6 mx-3 mb-0 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-emerald-300 hover:shadow-lg hover:scale-125"
              :class="{
                'bg-emerald-600': currentIndex === i,
                'bg-emerald-900 opacity-75': currentIndex !== i,
              }"
              @click="currentIndex = i"
            ></button>
          </template>
          <!-- eslint-enable vue/no-template-key, vue/require-v-for-key -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    }
  },

  mounted() {
    this.resetTimer()
  },

  methods: {
    nextImage() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1
      this.resetTimer()
    },

    prevImage() {
      this.currentIndex =
        this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1
      this.resetTimer()
    },

    resetTimer() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.nextImage()
      }, 6000)
    },
  },
}
</script>
<style>
.snap-x {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.snap-start {
  scroll-snap-align: start;
}
</style>
