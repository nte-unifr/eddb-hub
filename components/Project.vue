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
  <div v-if="project" class="flex flex-col lg:flex-row-reverse mt-16 mb-24">
    <img v-if="project.image" :src="project.image" class="max-w-sm rounded-lg shadow-2xl size-64 lg:ml-8 mb-4" />
    <div>
      <h2 class="text-4xl font-bold">{{ project.title }}</h2>
      <h3 v-if="project.slogan" class="text-2xl font-bold opacity-70">{{ project.slogan }}</h3>
      <div v-if="project.description" v-html="project.description" class="pt-6"></div>
      <p class="my-4">
        <strong>Responsable des données :</strong> <a :href="config.mandant.url" class="link link-primary">{{ config.mandant.name }}</a>
      </p>
      <NuxtLink v-if="config.url" :to="config.url" class="btn btn-primary mr-2"><IconSquareArrowRightFilled /> Découvrir la collection</NuxtLink>
      <NuxtLink :to="config.apiUrl" class="btn btn-primary"><IconLockSquareRoundedFilled /> Admin</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>