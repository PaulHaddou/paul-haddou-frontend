<template>
  <div class="main_about">
    <div class="main_infosBlocks">
      <div class="infosBlocks_skills">
        <div class="skills_infos">
          <p class="infos_title">
            {{ $t('about.skills.title') }}
          </p>
          <div class="infos_details">
            <div class="details_dev">
              <p class="dev_title">
                {{ $t('about.skills.development[0]') }}
              </p>
              <p class="dev_technos">
                {{ $t('about.skills.development[1]') }}
              </p>
              <p class="dev_softwares">
                {{ $t('about.skills.development[2]') }}
              </p>
            </div>
            <div class="details_design">
              <p class="design_title">
                Design
              </p>
              <p class="design_adobe">
                {{ $t('about.skills.design[0]') }}
              </p>
              <p class="design_softwareInterface">
                {{ $t('about.skills.design[1]') }}
              </p>
            </div>
            <div class="details_3D">
              <p class="3D_title">
                3D
              </p>
              <p class="3D_adobe">
                {{ $t('about.skills.3d[0]') }}
              </p>
            </div>
            <div class="details_projectManagement">
              <p class="projectManagement_title">
                {{ $t('about.skills.collaboration[0]') }}
              </p>
              <p class="projectManagement_softwares">
                {{ $t('about.skills.collaboration[1]') }}
              </p>
            </div>
            <div class="details_languages">
              <p class="languages_title">
                {{ $t('about.skills.languages[0]') }}
              </p>
              <p class="languages_french">
                {{ $t('about.skills.languages[1]') }}
              </p>
              <p class="languages_english">
                {{ $t('about.skills.languages[2]') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="infosBlocks_contact">
        <div class="contact_infos">
          <div class="infos_texts">
            <p class="texts_title">
              Contact
            </p>
            <p class="texts_mail">
              paul.haddou@gmail.com
            </p>
          </div>
          <div class="infos_mailButton">
            <a href="mailto:paul.haddou@gmail.com">
              {{ $t('about.contact.mail') }}
            </a>
          </div>
        </div>
      </div>
      <div class="infosBlocks_resume">
        <div class="resume_infos">
          <p class="infos_title">
            {{ $t('about.contact.resume.title') }}
          </p>
          <div class="infos_resumeButton">
            <a href="/assets/pdf/CV_Paul-Haddou.pdf" download>
              {{ $t('about.contact.resume.cta') }}

            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '~/constants/home/'
export default {
  name: 'AboutPage',
  title: 'À Propos',
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
p {
    margin: 0;
}
body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    .main_about {
        margin: 150px 10vw 0 10vw;
        height: fit-content;
        display: flex;
        justify-content: center;
        .main_infosBlocks {
            width: 100%;
            display: flex;
            flex-direction: column;
            .infosBlocks_skills {
                width: 100%;
                padding: 30px 0px 60px 0px;
                display: flex;
                justify-content: center;
                box-shadow: $shadow-widget-infos;
                box-sizing: border-box;
                .skills_infos {
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    .infos_title {
                        font-size: 32px;
                        font-weight: bold;
                        color: $color-p-blue;
                        @media screen and (max-width: 900px) {
                            text-align: center;
                        }
                    }
                    .infos_details {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0px 16px;
                        > div {
                            display: flex;
                            flex-direction: column;
                            p:nth-child(1) {
                                font-size: 20px;
                                font-weight: bold;
                                color: $color-p-blue;
                                margin-top: 40px;
                            }
                            p:nth-child(2) {
                               font-size: 20px;
                                color: $color-p-blue;
                                margin-top: 26px;
                                width: 206px;
                                line-height: 30px;
                            }
                            p:nth-child(3) {
                               font-size: 20px;
                                color: $color-p-blue;
                                margin-top: 24px;
                                width: 206px;
                                line-height: 30px;
                            }
                        }
                    }
                }
            }
            .infosBlocks_contact {
                width: 100%;
                display: flex;
                justify-content: center;
                box-shadow: $shadow-widget-infos;
                margin-top: 40px;
                .contact_infos {
                    width: 80%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    @media screen and (max-width: 900px) {
                        width: 70%;
                        padding: 30px 0px 60px 0px;
                        justify-content: center;
                    }
                    .infos_texts {
                        display: flex;
                        flex-direction: column;
                        padding: 30px 0px 60px 0px;
                        @media screen and (max-width: 900px) {
                            padding: 0;
                            align-items: center;
                        }
                        .texts_title {
                            width: fit-content;
                            font-size: 32px;
                            font-weight: bold;
                            color: $color-p-blue;
                        }
                        .texts_mail {
                           font-size: 20px;
                            color: $color-p-blue;
                            margin-top: 26px;
                        }
                    }
                    .infos_mailButton {
                        width: 277px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: $color-p-blue;
                        transition: $globalTransition;
                        @media screen and (max-width: 900px) {
                            margin-top: 30px;
                        }
                        a {
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
                    .infos_mailButton:hover {
                        background-color: $color-p-white;
                        border: 2px solid $color-p-blue;
                        transition: $globalTransition;
                        a {
                            color: $color-p-blue;
                        }
                    }
                }
            }
            .infosBlocks_resume {
                width: 100%;
                padding: 65px 0px;
                display: flex;
                justify-content: center;
                box-shadow: $shadow-widget-infos;
                margin-top: 40px;
                @media screen and (max-width: 900px) {
                    padding: 30px 0 60px;
                }
                .resume_infos {
                    width: 80%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    @media screen and (max-width: 900px) {
                        width: 70%;
                        justify-content: center;
                    }
                    .infos_title {
                        width: fit-content;
                        font-size: 32px;
                        font-weight: bold;
                        color: $color-p-blue;
                    }
                    .infos_resumeButton {
                        width: 254px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: $color-p-blue;
                        transition: $globalTransition;
                        @media screen and (max-width: 900px) {
                            margin-top: 30px;
                        }
                        a {
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
                    .infos_resumeButton:hover {
                        background-color: $color-p-white;
                        border: 2px solid $color-p-blue;
                        box-sizing: border-box;
                        transition: $globalTransition;
                        a {
                            color: $color-p-blue;
                        }
                    }
                }
            }
        }
    }
</style>
