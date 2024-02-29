<script setup lang="ts">
const theme = useState('app-theme')
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content max-w-7xl grid">
      <div class="flex flex-col lg:flex-row-reverse items-center">
        <img src="~/assets/img/eddb-art.png" class="max-w-48 md:max-w-96 rounded-lg shadow-2xl mb-8" />
        <div>
          <h1 class="text-5xl font-bold lg:hidden">Educational Databases</h1>
          <img v-if="theme == 'light'" src="~/assets/img/eddb-banner-light.png" class="w-2/3 mb-8 hidden lg:block" />
          <img v-if="theme == 'dark'" src="~/assets/img/eddb-banner-dark.png" class="w-2/3 mb-8 hidden lg:block" />
          <div class="md:text-justify pr-8">
            <p class="py-6 text-xl">
              <strong><em>EDDB</em></strong>, pour Educational Databases ou Bases de données éducationnelles, est une plateforme
              innovante conçue pour faciliter la mise en place rapide de bases de données dédiées à l'enseignement et à la recherche.
              Ce projet se divise en deux composantes majeures, conçues pour fonctionner de manière autonome tout en étant interopérables.
            </p>
            <p class="py-2 text-base">
              La première composante est un outil de gestion de bases de données relationnelles accessible via le web. La plateforme favorise le travail collaboratif sur les données relationnelles, intégrant la gestion
              des textes, des images, des fichiers divers, ainsi que des informations spatiales et géographiques. Cet outil se
              distingue par sa capacité à gérer l'authentification et les différents rôles des utilisateur·rices, sa flexibilité et sa
              configurabilité, en plus de proposer un système d'API complet.
            </p>
            <p class="py-2 text-base">
              La seconde composante est une interface web conçue pour la présentation des données. Elle vise à rendre les informations
              accessibles au grand public ou à la communauté de l'Université de Fribourg de façon intuitive et ergonomique, grâce à
              un système de recherche avancé. Alimentée directement par le système de gestion des données, cette interface s'ajuste
              parfaitement aux besoins spécifiques de chaque projet.
            </p>
            <p class="py-4 text-xl">
              Pour toute demande : <a class="link link-primary italic" href="mailto:nte@unifr.ch">nte@unifr.ch</a>
            </p>
          </div>
        </div>
      </div>
      <NuxtLink to="/projects" class="mt-10 btn btn-lg btn-primary"><IconSquareArrowRightFilled /> Découvrir les projets</NuxtLink>
    </div>
  </div>
</template>