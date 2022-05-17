<template>
  <div class="footer">
    <div class="footer_footerContainer">
      <div class="footerContainer_social">
        <div>
          <a href="https://www.linkedin.com/in/paul-haddou/">Linkedin</a>
          <span />
        </div>
        <div>
          <a href="https://github.com/PaulHaddou">Github</a>
          <span />
        </div>
        <div>
          <a href="/assets/pdf/CV_Paul-Haddou.pdf" download>CV</a>
          <span />
        </div>
        <div>
          <a href="https://dribbble.com/Paul_Haddou">Dribbble</a>
          <span />
        </div>
      </div>
      <div class="footerContainer_made">
        <p>Made with ❤️ by me</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComponentFooter'
}
</script>
<style
  lang="scss"
  scoped
>
.footer
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 160px 0 50px 0;
    .footer_footerContainer
    {
        width: 40%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        @media screen and (max-width: 900px)
        {
          width: 75%;
        }
        .footerContainer_social
        {
            width: 100%;
            display: flex;
            justify-content: space-between;
            div
            {
                display: flex;
                flex-direction: column;
                a
                {
                    text-decoration: none;
                    color: $color-p-blue;
                    font-size: 14px;
                    font-weight: bold;
                }
                span
                {
                    width: 0%;
                    height: 2px;
                    background-color: $color-p-blue;
                    transition: all 1s ease;
                }
            }
            div:hover span
            {
                width: 100%;
                transition: all 1s ease;
            }
        }
        .footerContainer_made
        {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 20px 0 0 0;
            color: $color-n-chrome;
            font-size: 14px;
            font-weight: bold;
            p
            {
                margin: 0;
            }
        }
    }
}
</style>
