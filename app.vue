<script setup lang="ts">
const theme = useState('app-theme', () => 'light')

useHead({
  title: 'EDDB - Educational Databases',
  meta: [{ name: 'description', content: 'Educational Databases' }]
})
</script>

<template>
  <div id="app" :data-theme="theme" class="bg-base-300">
    <Navbar />
    <div class="pt-24 mb-8 print:pt-2 mx-4">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
