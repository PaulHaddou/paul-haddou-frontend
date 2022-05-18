<template>
  <div>
    <div class="navbar">
      <div class="navbar_navbar">
        <div class="navbar-logo">
          <nuxt-link to="/">
            HP
          </nuxt-link>
        </div>
        <div class="navbar-sections">
          <div class="sections-links">
            <div
              v-for="(page, index) in pages"
              :key="index"
              class="links"
            >
              <nuxt-link :to="page.link">
                {{ $t(''+ page.name +'') }}
              </nuxt-link>
              <span :class="$nuxt.$route.fullPath == page.link ? 'spanActiv' : 'spanDisable' " />
            </div>
            <!-- <div class="sections-links_language">
              <div class="language-Not-Choosen">
                <a href="'.$switchLanguage.'">
                  Fr
                </a>
                <span class="language-Not-Choosen_Span" />
              </div>
              <p>/</p>
              <div class="language-Choosen">
                <a href="#">En</a>
                <span class="language-Choosen_Span" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="navbarMobile">
      <div class="navbarMobile_logo">
        <nuxt-link to="/">
          HP
        </nuxt-link>
        <div class="logo_burger" @click="onClick()">
          <div class="burger_spans">
            <span :class="isClicked ? 'default active' : 'default'" />
            <span :class="isClicked ? 'default active' : 'default'" />
            <span :class="isClicked ? 'default active' : 'default'" />
          </div>
        </div>
      </div>
      <div :class="isClicked ? 'navbarMobile_links-active' : 'navbarMobile_links'">
        <nuxt-link
          v-for="(page, index) in pages"
          :key="index"
          class="links"
          active-class="current-page"
          :to="page.link"
        >
          {{ $t(''+ page.name +'') }}
        </nuxt-link>
        <!-- <div class="navbarMobile_Language">
          <a href="#">En</a>
          <span class="language-Choosen_Span" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '~/constants/home/'
export default {
  name: 'ComponentNavbar',
  data () {
    return {
      projects: PROJECTS,
      isClicked: false,
      pages: [
        {
          name: 'navbar.all-projects',
          link: '/'
        },
        // {
        //   name: 'navbar.development'
        // },
        // {
        //   name: 'navbar.design'
        // },
        {
          name: 'navbar.about',
          link: '/about'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$nuxt.$route)
  },
  methods: {
    onClick () {
      this.isClicked = !this.isClicked
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
        @media (max-width: 967px)
        {
            display: none;
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
    .navbarMobile
    {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        position: fixed;
        z-index: 100;
        box-shadow: $shadow-navbar;
        background-color: $color-p-white;
        @media (min-width: 967px)
        {
            display: none;
        }
        .navbarMobile_logo
        {
            text-decoration: none;
            background: $color-p-white;
            width: 80%;
            height: 15vh;
            display: flex;
            justify-content: center;
            align-items: center;
            a
            {
                font-weight: bold;
                font-size: 32px;
                color: $color-p-blue;
                text-decoration: none;
                width: calc(80vw - 20px);
                display: flex;
                justify-content: center;
                text-align: center;
                letter-spacing: -0.36em;
            }
            /* .nuxt-link-exact-active{
                text-decoration: underline;
            } */
            .logo_burger
            {
                height: 100%;
                width: fit-content;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .burger_spans
                {
                    cursor: pointer;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .default
                    {
                        width: 20px;
                        height: 2px;
                        margin: 2px 0;
                        background: $color-p-blue;
                        border-radius: 10px;
                    }
                    .default:nth-child(1){
                        transform: rotate(0);
                        transition: transform 0.5s ease;
                    }
                    .default:nth-child(2){
                        opacity: 1;
                        transition: opacity 0.5s ease;;
                    }
                    .default:nth-child(3){
                        transform: rotate(0);
                        transition: transform 0.5s ease;
                    }
                    .active:nth-child(1){
                        transform: translateX(-5px) rotate(135deg) translateY(-8.5px);
                        transition: transform 0.5s ease;
                    }
                    .active:nth-child(2){
                        opacity: 0;
                        transition: opacity 0.5s ease;;
                    }
                    .active:nth-child(3){
                        transform: translateX(-5px) rotate(-135deg) translateY(8.5px);
                        transition: transform 0.5s ease;
                    }
                }
            }
        }
        .navbarMobile_links, .navbarMobile_links-active
        {
            height: 0vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: $color-p-white;
            overflow-y: hidden;
            transition: height 2s ease;

            a
            {
                font-weight: bold;
                font-size: 20px;
                color: $color-p-blue;
                margin: 30px 0;
                text-decoration: none;
                opacity: 0;
                transition: opacity 2s ease;
            }
            .navbarMobile_Language
            {
                display: flex;
                align-items: center;

                .language-Choosen
                {
                    width: 45px;
                    height: 45px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    a
                    {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;

                    }
                    .language-Choosen_Span
                    {
                        width: 42%;
                        height: 2px;
                        background-color: $color-p-blue;
                    }
                }
                p
                {
                    margin: 0;
                }
                .language-Not-Choosen
                {
                    width: 45px;
                    height: 45px;
                    display: flex;
                    justify-content: center;
                    opacity: 0.3;
                    a
                    {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;
                    }
                }
            }
        }
        .navbarMobile_links-active{
            height: 85vh;
            transition: height 2s ease;

            a{
                opacity: 1;
                transition: opacity 2s ease;
            }
        }
    }
</style>
