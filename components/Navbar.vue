<template>
  <div>
    <div class="navbar">
      <div class="navbar_navbar">
        <div class="navbar-logo">
          <a href="<?= $hrefProjects ?>">HP</a>
        </div>
        <div class="navbar-sections">
          <div class="sections-links">
            <div
              v-for="(page, index) in pages"
              :key="index"
              class="links"
            >
              <nuxt-link to="#>">
                {{ $t(''+ page.name +'') }}
              </nuxt-link>
              <span class="spanActiv" />
            </div>
            <div class="sections-links_language">
              <div class="language-Not-Choosen">
                <a href="'.$switchLanguage.'">Fr</a>
                <span class="language-Not-Choosen_Span" />
              </div>
              <p>/</p>
              <div class="language-Choosen">
                <a href="#">En</a>
                <span class="language-Choosen_Span" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '~/constants/home/'
export default {
  name: 'ComponentNavbar',
  components: {
  },
  data () {
    return {
      projects: PROJECTS,
      pages: [
        {
          name: 'navbar.all-projects'
        },
        {
          name: 'navbar.development'
        },
        {
          name: 'navbar.design'
        },
        {
          name: 'navbar.about'
        }
      ]
    }
  }
}
</script>
<style
  lang="scss"
  scoped
>
    .navbar
    {
        width: 100%;
        height: 100px;
        background-color: $color-p-white;
        display: flex;
        justify-content: center;
        box-shadow: $shadow-navbar;
        position: fixed;
        z-index: 100;
        @media screen and (max-width: 1100px)
        {
            .navbar
            {
                display: none;
            }
        }
        .navbar_navbar
        {
            width: 80%;
            display: flex;
            justify-content: space-between;
            .navbar-logo
            {
                height: 100%;
                display: flex;
                align-items: center;
                a
                {
                    width: 3.4vw;
                    margin: 0;
                    font-family: $primary-font;
                    font-weight: bold;
                    font-size: 50px;
                    color: $color-p-blue;
                    text-decoration: none;
                    letter-spacing: -0.36em;
                }
            }
            .navbar-sections
            {
                height: 100%;
                display: flex;
                flex-direction: column;
                .sections-links
                {
                    height: 100%;
                    display: flex;
                    width: fit-content;
                    gap : 64px;
                    .links
                    {
                        display: flex;
                        flex-direction: column;
                        a
                        {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            font-weight: bold;
                            font-size: 14px;
                            color: $color-p-blue;
                            text-decoration: none;
                        }
                        span
                        {
                            height: 4px;
                            background-color: $color-p-blue;
                            transition: $globalTransition;
                        }
                        .spanActiv
                        {
                            width: 100%;
                            background-color: $color-p-blue;
                        }
                        .spanDisable
                        {
                            width: 0%;
                            transition: $globalTransition;
                        }
                    }
                    .sections-links_language
                    {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        width: 50px;
                        justify-content: space-between;

                        .language-Choosen
                        {
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            cursor: pointer;
                            a
                            {
                                height: fit-content;
                            }
                            .language-Choosen_Span
                            {
                                width: 100%;
                                height: 2px;
                                background-color: $color-p-blue;
                            }
                        }
                        .language-Not-Choosen
                        {
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            a
                            {
                                height: fit-content;
                                opacity: 0.3;
                                transition: $globalTransition;
                            }
                            .language-Not-Choosen_Span
                            {
                                width: 0%;
                                height: 2px;
                            }
                        }
                        .language-Not-Choosen:hover
                        {
                            cursor: pointer;
                            a
                            {
                                opacity: 1;
                                transition: $globalTransition;
                            }
                            .language-Not-Choosen_Span
                            {
                                width: 100%;
                            }
                        }
                    }
                    div:hover .spanDisable
                    {
                        width: 100%;
                        transition: $globalTransition;
                    }
                }
            }
        }
    }
</style>
