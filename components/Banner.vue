<template>
  <client-only>
    <div class="swiper bg-white dark:bg-gray-500" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/images/20131024183711.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/20131024183718.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/20131024183724.jpg" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </client-only>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export default {
  async mounted() {
    await this.$nextTick()
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 425px;
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
