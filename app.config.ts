export default defineAppConfig({
  projects: [
    {
      title: "NAFO",
      url: "https://eddb.unifr.ch/nafo/collection",
      apiUrl: "https://eddb9.unifr.ch/nafo",
      about: {
        path: "/items/about",
        title_criteria: "title",
        slogan_criteria: "slogan",
        description_criteria: "description",
        image_criteria: "image",
      },
      mandant: {
        name: "Prof. Cédric Brélaz",
        url: "https://www.unifr.ch/directory/fr/people/199032/23c3d"
      }
    }
  ]
})