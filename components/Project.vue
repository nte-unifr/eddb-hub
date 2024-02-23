<script setup lang="ts">
import type { ProjectConfig } from "@/types/index"
import type { Project } from "@/types/project"

const props = defineProps<{
  config: ProjectConfig
}>()

const path = `${props.config.apiUrl}${props.config.about.path}`
const { data: project } = useFetch<Project>(path, {
  transform: (response: any) => directusProject(props.config, response.data)
})
</script>

<template>
  <div v-if="project" class="flex flex-col lg:flex-row-reverse my-16 px-4">
    <div class="flex justify-center items-center mb-4 lg:w-1/3 lg:ml-8 ">
      <img v-if="project.image" :src="project.image" class="rounded-lg shadow-2xl size-64" />
      <img v-else src="~/assets/img/eddb-art.png" class="rounded-lg shadow-2xl size-64" />
    </div>
    <div class="lg:w-2/3">
      <h2 class="text-4xl font-bold">{{ project.title }}</h2>
      <h3 v-if="project.slogan" class="text-2xl font-bold opacity-70">{{ project.slogan }}</h3>
      <div v-if="project.description" v-html="project.description" class="pt-6"></div>
      <p class="my-4">
        <strong>Responsable des données :</strong> <a :href="config.mandant.url" class="link link-primary">{{ config.mandant.name }}</a>
      </p>
      <div class="mt-4">
        <NuxtLink v-if="config.url" :to="config.url" class="btn btn-primary mr-2"><IconSquareArrowRightFilled /> Découvrir la collection</NuxtLink>
        <NuxtLink :to="config.apiUrl" class="btn btn-primary"><IconLockSquareRoundedFilled /> Admin</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>