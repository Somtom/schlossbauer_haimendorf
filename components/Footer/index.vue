<template>
  <footer class="bg-emerald-900 text-white mt-18">
    <div
      class="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl px-6 py-12"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-9">
        <!-- Column 1: About -->
        <div>
          <h3 class="text-xl font-semibold mb-5 text-emerald-300">
            Schlossbauer Haimendorf
          </h3>
          <p class="text-emerald-100 leading-relaxed">
            Naturland zertifizierter Bio-Bauernhof mit komfortabler
            Zimmervermietung in ruhiger Lage.
          </p>
        </div>

        <!-- Column 2: Contact -->
        <div>
          <h3 class="text-xl font-semibold mb-5 text-emerald-300">Kontakt</h3>
          <ul class="space-y-3 text-emerald-100">
            <li class="flex items-start">
              <span class="mr-2">📍</span>
              <span
                >Fam. Schmidt<br />Am Wasserschloss 12<br />90552
                Haimendorf</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">📞</span>
              <span>Tel.: 09120/180 96 96<br />Fax: 09120/180 96 97</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">✉️</span>
              <a
                href="mailto:info@schlossbauer-haimendorf.de"
                class="hover:text-emerald-300 transition-all duration-300"
                >info@schlossbauer-haimendorf.de</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-9 border-t border-emerald-700 text-center">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p class="text-emerald-200 text-sm">
            &copy; {{ new Date().getFullYear() }} Schlossbauer Haimendorf
          </p>
          <NuxtLink
            to="/impressum"
            class="text-emerald-200 hover:text-emerald-300 transition-all duration-300 text-sm"
            >Impressum</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
