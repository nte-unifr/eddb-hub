declare module 'nuxt/schema' {
  interface AppConfigInput {
    projects: ProjectConfig[]
  }
}

export interface ProjectConfig {
  title: string
  url: string
  apiUrl: string
  about: {
    path: string
    title_criteria: string
    slogan_criteria: string
    description_criteria: string
    image_criteria: string
  }
  mandant: {
    name: string
    url: string
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}