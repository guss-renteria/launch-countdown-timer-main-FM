<script>
import timer from '@/components/timer/timer.component.vue'

export default {
  components: {
    timer,
  },
}
</script>


<template>
  <section class='home-view'>
    <h1>We're launching soon</h1>
    <timer />
  </section>
</template>

<style lang='sass'>
@use './home.style'
</style>
