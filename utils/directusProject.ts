import type { ProjectConfig } from "@/types/index"
import type { Project } from "@/types/project"

export const directusProject = (config: ProjectConfig, data: any): Project => {
  const { title_criteria, slogan_criteria, description_criteria, image_criteria } = config.about

  return {
    title: data[title_criteria] || config.title,
    ...(slogan_criteria ? { slogan: data[slogan_criteria] } : {}),
    ...(description_criteria ? { description: data[description_criteria] } : {}),
    ...(image_criteria ? { image: `${config.apiUrl}/assets/${data[image_criteria]}?fit=cover&width=512` } : {})
  }
}