<script>
export default {
  data() {
    return {
      total_seconds: 1209600,
      time_left: {
        Days:    0,
        Hours:   0,
        Minutes: 0,
        Seconds: 0,
      },
      time_left_prev: {}
    }
  },

  mounted() {
    this.setTimeLeft()

    const counter_interval = setInterval(() => {
      if(this.total_seconds <= 0) {
        [...this.$refs.parent.children].forEach(child => child.classList.remove('active'))
        setTimeout(() => { this.time_left_prev = this.time_left }, 400)

        clearInterval(counter_interval)
        return
      }

      this.countTime()
    }, 1000)
  },

  methods: {
    countTime() {
      [...this.$refs.parent.children].forEach(child => child.classList.remove('active'))
      this.time_left_prev = { ...this.time_left }

      if(this.total_seconds > 0) {
        --this.time_left.Seconds
        this.$refs.parent.children[3].classList.add('active')

        if(this.time_left.Minutes >= 0 && this.time_left.Seconds < 0) {
          this.time_left.Seconds = 59
          --this.time_left.Minutes
          this.$refs.parent.children[2].classList.add('active')

          if(this.time_left.Hours >= 0 && this.time_left.Minutes < 0) {
            this.time_left.Minutes = 59
            --this.time_left.Hours
            this.$refs.parent.children[1].classList.add('active')


            if(this.time_left.Days >= 0 && this.time_left.Hours < 0) {
              this.time_left.Hours = 23
              --this.time_left.Days
              this.$refs.parent.children[0].classList.add('active')

            }
          }
        }
      }
      --this.total_seconds
    },

    setTimeLeft() {
      this.time_left.Days    = this.time_left_prev.Days    = Math.floor(this.total_seconds / (60 * 60 * 24))
      this.time_left.Hours   = this.time_left_prev.Hours   = Math.floor(this.total_seconds / (60 * 60) % 24)
      this.time_left.Minutes = this.time_left_prev.Minutes = Math.floor(this.total_seconds / (60) % 60)
      this.time_left.Seconds = this.time_left_prev.Seconds = Math.floor(this.total_seconds % (60))
    },
  }
}
</script>

<template>
  <div class='timer-comp' ref='parent'>
    <div v-for='(box, index) in Object.keys(time_left)' :key='index' :class='`timer__box ${ box }`'>
      <div class='digits'>
        <span class='d-bottom'>{{ time_left_prev[box]?.toString().length > 1 ? time_left_prev[box] : `0${ this.time_left_prev[box] }` }}</span>
        <span class='d-bottom-back'>
          <span>{{ time_left[box]?.toString().length > 1 ? time_left[box] : `0${ this.time_left[box] }` }}</span>
        </span>
        <span class='d-top'>{{ time_left_prev[box]?.toString().length > 1 ? time_left_prev[box] : `0${ this.time_left_prev[box] }` }}</span>
        <span class='d-top-back'>
          <span>{{ time_left[box]?.toString().length > 1 ? time_left[box] : `0${ this.time_left[box] }` }}</span>
        </span>
      </div>
      <h2>{{ box }}</h2>
    </div>
  </div>
</template>

<style lang="scss">
@use './timer.style'
</style>
