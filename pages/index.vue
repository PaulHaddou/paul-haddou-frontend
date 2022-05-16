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
          <div class="project_description">
            <p>{{ project.name }}</p>
            <p>{{ project.subtitle }}</p>
          </div>
        </nuxt-link>
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
<style
  lang="scss"
  scoped
>
  .main
  {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    .main_projects
    {
        width: 80%;
        display: flex;
        gap: 80px 38px;
        flex-wrap: wrap;
        justify-content: space-between;
        .projects_project
        {
            background-color: $color-p-blue;
            width: 37vw;
            height: 22.25vw;
            transition: $globalTransition;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            box-shadow: $shadow-projects-widget;
            a
            {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img
                {
                    width: 100%;
                }
                video
                {
                    width: 111%;
                }
            }
            .project_description
            {
                width: 100%;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 0;
                background-color: $color-p-blue;
                transition: $globalTransition;
                p:nth-child(1)
                {
                    padding: 0;
                    margin: 0;
                    color: $color-p-white;
                    font-family: $primary-font;
                    font-weight: bold;
                    font-size: 14px;
                }
                p:nth-child(2)
                {
                    padding: 0;
                    margin: 0;
                    color: $color-p-grey;
                    font-family: $primary-font;
                    font-weight: bold;
                    font-size: 10px;
                }
            }
            .more-soon_text
            {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                p
                {
                    color: $color-p-white;
                    font-size: 26px;
                    font-weight: bold;
                }
            }
        }
        .projects_project:hover .project_description
        {
            transform: translateY(-100%);
            transition: $globalTransition;
        }
    }
    .projects_button
    {
      width: 39vw;
      height: 45px;
      margin-top: 72px;
      background-color: $color-p-blue;
      transition: $globalTransition;
      display: flex;
      justify-content: center;
      align-items: center;
        .projects_button_download
        {
            color: $color-p-white;
            text-decoration: none;
            font-family: $primary-font;
            font-weight: bold;
            font-size: 20px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .projects_button:hover
    {
      box-sizing: border-box;
      border: 2px solid $color-p-blue;
      background-color: $color-p-white;
      transition: $globalTransition;
        .projects_button_download
        {
            color: $color-p-blue;
        }
    }
  }

</style>
