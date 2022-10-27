<template>
  <main
    class="min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)] bg-white dark:bg-gray-500"
  >
    <Banner />
    <ul class="w-full mx-auto max-w-6xl grid grid-cols-7 gap-4">
      <li class="col-span-2">
        <p
          class="rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>成功案例</span>
          <nuxt-link to="/case">>>更多</nuxt-link>
        </p>
        <p class="py-4 text-gray-500 dark:text-gray-300 flex justify-center">
          <img
            class="w-1/2"
            v-for="slide in slides"
            :key="slide"
            :src="slide"
          />
        </p>
      </li>
      <li class="col-span-3">
        <p
          class="rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>公司简介</span>
          <nuxt-link to="/about">>>更多</nuxt-link>
        </p>
        <p class="py-4 text-gray-500 dark:text-gray-300">
          HS--具有60多年悠久历史的英国查爾斯叁產公司（CHARUER）旗下重金打造的专属高端音响品牌。
          皇室音響坐落於中國音響之...
          <nuxt-link to="/about">>> 詳情點擊</nuxt-link>
        </p>
      </li>
      <li class="col-span-2">
        <p
          class="rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>HS资讯</span>
          <nuxt-link to="/news">>>更多</nuxt-link>
        </p>
        <ul class="py-4 text-gray-500 dark:text-gray-300">
          <li v-for="news in list" :key="news.id">
            <nuxt-link :to="`/news/${news.id}`" class="hover:text-orange-500">
              <span class="mx-3">
                {{ news.title }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script>
import _sampleSize from 'lodash/sampleSize'
export default {
  layout: 'home',
  data: () => ({
    news: require('@/contents/news.json'),
    slides: []
  }),
  computed: {
    list() {
      return this.news.slice(0, 5)
    }
  },
  mounted() {
    const cases = [
      require('@/assets/images/201634182219.jpg'),
      require('@/assets/images/201634182207.jpg'),
      require('@/assets/images/20131023184320.jpg'),
      require('@/assets/images/20131023184446.jpg'),
      require('@/assets/images/20131023184459.jpg')
    ]
    setInterval(() => {
      this.slides = _sampleSize(cases, 2)
    }, 5000)
  }
}
</script>
