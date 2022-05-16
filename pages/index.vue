<template>
  <div class="main">
    <div class="main_projects">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="projects_project"
      >
        <nuxt-link :to="project.internalLink">
          <img v-if="project.isImg" :src="project.img" :alt="project.alt">
          <video
            v-else
            playsinline
            autoplay
            muted
            loop
            :src="project.video"
            :alt="project.alt"
          />
        </nuxt-link>
        <div class="project_description">
          <p>{{ project.name }}</p>
          <p>{{ project.subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="projects_button">
      <a class="projects_button_download" href="pdf/Paul-Haddou_Portfolio_FR.pdf" download>Télécharge mon pdf sale chien></a>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '~/constants/home/'
export default {
  name: 'HomePage',
  data () {
    return {
      projects: PROJECTS
    }
  }
}
</script>
