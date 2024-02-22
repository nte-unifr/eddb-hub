<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <div class="flex justify-center">
    <div class="min-h-screen max-w-6xl flex flex-col mb-24">
      <h1 class="text-5xl font-bold mt-24">Projets</h1>
      <div class="divider"></div>
      <p class="mt-4 text-lg">
        Les projets EDDB montrent comment la plateforme rend les données faciles à explorer pour tous.
      </p>
      <p class="mt-2 text-lg">
        Ces projets variés vont de recherches académiques à des bases de données éducatives, certains étant accessibles au public
        via une interface simple et intuitive. Cette approche permet à chacun de découvrir et d'interagir avec les informations de manière
        fluide, favorisant ainsi le partage de connaissances et l'innovation.
      </p>
      <div class="mt-32 divider divider-neutral"><IconRocket /></div>
      <template v-for="(projectConfig, index) in config.projects">
        <Project :config="projectConfig" />
        <div v-if="!(index === config.projects.length - 1)" class="divider my-8"></div>
      </template>
    </div>
  </div>
</template>