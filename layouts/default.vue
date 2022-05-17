<template>
  <div>
    <div class="layout">
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang='scss'>
html{
  scroll-behavior: smooth;
  overflow-x: hidden;
}
::selection {
  color: $color-p-white;
  background: $color-p-blue;
}
body
{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $primary-font;
    margin: 0;
    .layout{
      width: 100vw;
      display: flex;
      flex-direction: column;
    }
}
</style>
