<script>
import timer from '@/components/timer/timer.component.vue'
import image_bg from '@/images/bg-stars.svg'
import image_hills from '@/images/pattern-hills.svg'

export default {
  components: {
    timer,
  },

  mounted() {
    this.$refs.home.style.backgroundImage = `url(${ image_bg })`
    this.$refs.footer.style.backgroundImage = `url(${ image_hills })`
  }
}
</script>


<template>
  <section class='home-view' ref='home'>
    <div class='home-container'>
      <h1>We're launching soon</h1>
      <timer />
    </div>
    <div class='home-footer' ref='footer'>
      <a href='#' class='icon-facebook'></a>
      <a href='#' class='icon-pinterest'></a>
      <a href='#' class='icon-instagram'></a>
    </div>
  </section>
</template>

<style lang='sass'>
@use './home.style'
</style>
