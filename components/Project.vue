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
  <div v-if="project" class="flex flex-col lg:flex-row-reverse mt-16">
    <img v-if="project.image" :src="project.image" class="max-w-sm rounded-lg shadow-2xl size-64" />
    <div>
      <h2 class="text-4xl font-bold">{{ project.title }}</h2>
      <h3 v-if="project.slogan" class="text-2xl font-bold opacity-70">{{ project.slogan }}</h3>
      <div v-if="project.description" v-html="project.description" class="pt-6"></div>
      <p class="my-4">
        <strong>Responsable des données :</strong> <a :href="config.mandant.url" class="link link-primary">{{ config.mandant.name }}</a>
      </p>
      <NuxtLink :to="config.url" class="btn btn-primary"><IconSquareArrowRightFilled /> Découvrir la collection</NuxtLink>
    </div>
  </div>
</template>