<template>
  <div class="main">
    <div class="main_project">
      <img
        class="main_project-img main_project-img-mobile-w100"
        src="/assets/images/projects/liminal/Paul-Haddou_Project-liminal_Main-Picture.jpg"
        alt="Image illustrant le projet"
      >
      <h2 class="main_project-title">
        {{ $t('projects.liminal.name') }}
      </h2>
      <div class="main_project-infos">
        <div class="infos_content">
          <div class="content_texts">
            <div class="texts_roles">
              <p>{{ $t('projects.liminal.header.jobs[0]') }}</p>
              <p
                v-for="index in $t('projects.liminal.header.jobs').length - 1"
                :key="index"
              >
                {{ $t('projects.liminal.header.jobs['+ index +']') }}
              </p>
            </div>
            <div class="texts_tools">
              <p>{{ $t('projects.liminal.header.tools[0]') }}</p>
              <p
                v-for="index in $t('projects.liminal.header.tools').length - 1"
                :key="index"
              >
                {{ $t('projects.liminal.header.tools['+ index +']') }}
              </p>
            </div>
            <div class="texts_date">
              <p>Date</p>
              <p>{{ $t('projects.liminal.header.date') }}</p>
            </div>
          </div>
          <div class="content_button">
            <div class="buttons_ytb">
              <a
                href="https://liminal-website.netlify.app/"
                target="_blank"
              >
                Site
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="main_project-description_bloc-text-picture">
        <p class="description_bloc-text-picture_text" />
        <img
          class="description_bloc-text-picture_picture"
          src="/assets/images/projects/liminal/Paul-Haddou_Project-liminal_Description-Picture_1.jpg"
          alt="Image illustrant le projet"
        >
      </div>
      <div class="main_project-description_bloc-text-picture reverse-bloc">
        <p class="description_bloc-text-picture_text" />
        <img
          class="description_bloc-text-picture_picture"
          src="/assets/images/projects/liminal/Paul-Haddou_Project-liminal_Description-Picture_2.jpg"
          alt="Image illustrant le projet"
        >
      </div>
      <div class="main_project-description_bloc-text-picture">
        <p class="description_bloc-text-picture_text" />
        <img
          class="description_bloc-text-picture_picture"
          src="/assets/images/projects/liminal/Paul-Haddou_Project-liminal_Description-Picture_3.jpg"
          alt="Image illustrant le projet"
        >
      </div>
      <div class="main_project-description_bloc-text-picture reverse-bloc">
        <p class="description_bloc-text-picture_text" />
        <img
          class="description_bloc-text-picture_picture"
          src="/assets/images/projects/liminal/Paul-Haddou_Project-liminal_Description-Picture_4.jpg"
          alt="Image illustrant le projet"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '~/constants/home/'
export default {
  name: 'LiminalPage',
  components: {
    // Navbar
  },
  layout: 'DefaultLayout',
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
        height: fit-content;
        display: flex;
        justify-content: center;
        overflow-x: hidden;
        .main_project
        {
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 80px;
            .main_project-img
            {
                width: 100vw;
                height: 45vw;
                box-shadow: $shadow-picture-project;
            }
            .main_project-title
            {
              font-size: 50px;
                font-weight: bold;
                text-align: center;
                width: 100%;
                margin: 64px 0 0 0;
            }
            .main_project-infos
            {
              width: 100%;
              background-color: $color-p-white;
              box-shadow: $shadow-widget-project;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              margin-top: 64px;

                .infos_content
                {
                    width: 100%;
                    padding : 30px 117px 28px 117px;
                    display: flex;
                    justify-content: space-between;
                    .content_texts
                    {
                        width: 47%;
                        display: flex;
                        flex-wrap: wrap;
                        padding-right: 64px;
                        p{
                          margin: 0;
                        }
                        .texts_roles, .texts_tools
                        {
                            padding-right: 40px;
                            width: fit-content;
                        }
                        .texts_date
                        {
                            width: fit-content;
                        }
                        .texts_roles, .texts_tools, .texts_date
                        {
                            min-width: fit-content;
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 32px;
                            color: $color-p-blue;
                            p:nth-child(1)
                            {
                                font-size: 20px;
                                font-weight: bold;
                                width:100%;
                            }
                            p:nth-child(2)
                            {
                                font-size: 20px;
                                width:100%;
                                margin-top: 32px;
                            }
                            p:nth-child(3)
                            {
                                font-size: 20px;
                                width:100%;
                            }
                        }
                    }
                    .content_buttons
                    {
                        width: 440px;
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        >div
                        {
                            width: 200px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: $color-p-blue;
                            transition: all .5s ease;
                            a
                            {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 20px;
                                font-weight: bold;
                                color: $color-p-white;
                                text-decoration: none;
                            }
                        }
                        >div:hover
                        {
                            background-color: $color-p-white;
                            border: 2px solid $color-p-blue;
                            box-sizing: border-box;
                            transition: all .5s ease;
                            a
                            {
                                color: $color-p-blue;
                            }
                        }
                    }
                    .content_button
                    {
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        >div
                        {
                            width: 200px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: $color-p-blue;
                            transition: all .5s ease;
                            a
                            {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 20px;
                                font-weight: bold;
                                color: $color-p-white;
                                text-decoration: none;
                            }
                        }
                        >div:hover
                        {
                            background-color: $color-p-white;
                            border: 2px solid $color-p-blue;
                            box-sizing: border-box;
                            transition: all .5s ease;
                            a
                            {
                                color: $color-p-blue;
                            }
                        }
                    }

                }
            }
            .main_project-description_title
            {
                margin-top: 72px;
                width: 100%;
                display: flex;
                flex-direction: column;
                .main_project-description_title_step
                {
                    width: fit-content;
                    display: flex;
                    flex-direction: column;
                    .main_project-description_title_step_title
                    {
                        font-size: 50px;
                        font-weight: bold;
                        margin: 0;

                    }
                    .main_project-description_title_step_underline
                    {
                      width: 100%;
                      height: 10px;
                      background-color: $color-p-blue;
                    }
                }
            }
            .main_project-description_intro
            {
                width: 100%;
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                .description_intro-Paragraph
                {
                    font-size: 22.5px;
                    line-height: 33px;
                }
                p:not(:first-child)
                {
                    margin-top: 32px;
                }
            }
            .main_project-description_bloc-text-picture
            {
                width: 100%;
                height: fit-content;
                margin-top: 120px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .description_bloc-text-picture_text
                {
                    font-size: 22.5px;
                    line-height: 33px;
                    width: 20vw;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                }
                .description_bloc-text-picture_picture
                {
                    width: 744px;
                    height: 422px;
                    box-shadow: $shadow-picture-project;
                }
            }
            .project-picture-h1053
            {
                .description_bloc-text-picture_picture-h1053
                {
                    height: 1053px;
                }
            }
            .project-picture-h1236
            {
                justify-content: center;
                .description_bloc-text-picture_picture-h1236
                {
                    height: 1236px;
                }
            }
            .main_project-description_quote
            {
                width: 100vw;
                margin-top: 120px;
                background-color: #EE877A;
                p
                {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: $color-p-white;
                    font-size: 49px;
                    font-weight: 800;
                    line-height: 73.5px;
                    padding : 80px 144px;
                }
            }
            .main_project-description_picture_full_width
            {
                width: 100vw;
                margin-top: 120px;
                display: flex;
                justify-content: center;
                .description_picture_full_width
                {
                    width: 100vw;
                    height: auto;
                    box-shadow: $shadow-picture-project;
                }
            }
            .reverse-bloc
            {
                flex-direction: row-reverse;
            }
            .main_project-description_conclusion-text
            {
                width: 100%;
                margin-top: 120px;

                .description_conclusion-text
                {
                    font-size: 22.5px;
                    line-height: 33px;
                    width: 100%;
                }
            }
        }
  }
  @media screen and (max-width: 900px)
  {
        body
        {
            .main
            {
                .main_project
                {
                  margin-top: 15vh;
                    .main_project-img
                    {
                        width: 150vw;
                        height: inherit;
                    }
                    .main_project-img-mobile-w100
                    {
                        width: 100vw;
                    }
                    .main_project-title
                    {
                        font-size: 32px;
                        font-weight: bold;
                    }
                    .main_project-infos
                    {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        border: none;
                        box-shadow: 0px 0px 4px rgba(7,7,28,0.09);
                        .infos_content
                        {
                            width: 80%;
                            height: fit-content;
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            padding: 30px 0 60px 0;
                            .content_texts
                            {
                                width: 65%;
                                display: flex;
                                justify-content: space-between;
                                flex-wrap: wrap;
                                padding: 30px 0 30px 0;
                                div:nth-child(1)
                                {
                                    p:nth-child(1)
                                    {
                                        margin: 0;
                                    }
                                }
                            }
                            .content_buttons
                            {
                                width: 100%;
                                >div
                                {
                                    width: 100%;
                                    margin-top: 34px;
                                }
                            }
                            .content_button
                            {
                                width: 100%;
                                justify-content: center;
                            }

                        }
                    }
                    .main_project-description_bloc-text-picture
                    {
                        flex-direction: column-reverse;
                        align-items: center;
                        height: fit-content;
                        .description_bloc-text-picture_text
                        {
                            width: 100%;
                            margin-top: 32px;
                        }
                        .description_bloc-text-picture_picture
                        {
                            width: 100%;
                            height: auto;
                        }
                    }
                    .project-picture-h1053
                    {
                        .description_bloc-text-picture_picture-h1053
                        {
                            width: 100%;
                            height: auto;
                        }
                    }
                    .project-picture-h1236
                    {
                        .description_bloc-text-picture_picture-h1236
                        {
                            width: 100%;
                            height: auto;
                        }
                    }
                    .main_project-description_picture_full_width
                    {
                        width: 100vw;
                        .description_picture_full_width
                        {
                            height: intrinsic;
                        }
                    }
                }
            }
        }
  }
  @media screen and (max-width: 1200px) and (min-width: 900px)
  {
        body
        {
            .main
            {
                .main_project
                {
                    .main_project-description_bloc-text-picture
                    {

                        height: calc(422px*0.6);
                        .description_bloc-text-picture_picture
                        {
                            width: calc(744px*0.6);
                            height: calc(422px*0.6);
                        }
                    }
                }
            }
        }
  }

</style>
