<template>
  <client-only>
    <div class="swiper bg-white dark:bg-gray-500" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide">
          <img :src="slide" />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'Swiper',
  props: ['slides', 'options'],
  async mounted() {
    await this.$nextTick()
    new Swiper(this.$refs.swiper, {
      ...this.options
    })
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next,
.swiper-button-prev {
  right: 10px;
  padding: 30px;
  color: #000 !important;
  fill: black !important;
  stroke: black !important;
}
</style>
