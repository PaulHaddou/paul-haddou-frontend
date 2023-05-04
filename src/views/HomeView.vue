<script lang="ts" setup>
// Modules

// Components

// Constants
</script>

<template>
  <div class="homePage">
    <div class="content">
      <span class="border border--top" />
      <span class="border border--left" />
      <span class="border border--right" />
      <span class="border border--bottom" />
      <div class="title">
        <span class="text">Paul</span>
        <span class="text text--bold">Haddou</span>
      </div>
      <div class="subtitle">Bientôt</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homePage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $color-p-400;
  padding: 150px;
  box-sizing: border-box;
  //Mobile
  @media (max-width: $bp-mobile) {
    padding: 40px;
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border-left: 1px solid linear-gradient(270deg, rgba(7, 7, 28, 0) 1.56%, rgba(7, 7, 28, 0.1) 49.48%, rgba(7, 7, 28, 0) 100%);
    .title {
      display: flex;
      margin-bottom: 16px;
      //Mobile
      @media (max-width: $bp-mobile) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .text {
        font-family: $primary-font-family;
        font-size: 58px;
        font-weight: 400;
        color: $color-p-black;
        width: fit-content;
        //Mobile
        @media (max-width: $bp-mobile) {
          font-size: 48px;
        }
        &--bold {
          font-weight: 700;
          margin-left: 8px;
          //Mobile
          @media (max-width: $bp-mobile) {
            margin: 0;
          }
        }
      }
    }
    .subtitle {
      font-family: $primary-font-family;
      font-size: 28px;
      font-weight: 400;
      color: $color-p-black;
    }
    .border {
      position: absolute;
      &--top {
        top: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          270deg,
          rgba(7, 7, 28, 0) 1.56%,
          rgba(7, 7, 28, 0.1) 49.48%,
          rgba(7, 7, 28, 0) 100%
        );
      }
      &--left {
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(7, 7, 28, 0) 1.56%,
          rgba(7, 7, 28, 0.1) 49.48%,
          rgba(7, 7, 28, 0) 100%
        );
      }
      &--right {
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(7, 7, 28, 0) 1.56%,
          rgba(7, 7, 28, 0.1) 49.48%,
          rgba(7, 7, 28, 0) 100%
        );
      }
      &--bottom {
        bottom: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          270deg,
          rgba(7, 7, 28, 0) 1.56%,
          rgba(7, 7, 28, 0.1) 49.48%,
          rgba(7, 7, 28, 0) 100%
        );
      }
    }
  }
}
</style>
