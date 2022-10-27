<template>
  <main
    class="min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)] flex justify-center bg-white dark:bg-gray-500"
  >
    <ul class="m-4 w-full max-w-6xl grid grid-cols-3 gap-4">
      <li>
        <p
          class="mb-4 rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>成功案例</span>
          <nuxt-link to="/case">>>更多</nuxt-link>
        </p>
      </li>
      <li>
        <p
          class="mb-4 rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>公司简介</span>
          <nuxt-link to="/about">>>更多</nuxt-link>
        </p>
        <p class="text-gray-500 dark:text-gray-300">
          HS--具有60多年悠久历史的英国查爾斯叁產公司（CHARUER）旗下重金打造的专属高端音响品牌。
          皇室音響坐落於中國音響之...
          <nuxt-link to="/about">>> 詳情點擊</nuxt-link>
        </p>
      </li>
      <li>
        <p
          class="mb-4 file:rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>HS资讯</span>
          <nuxt-link to="/news">>>更多</nuxt-link>
        </p>
        <ul class="text-gray-500 dark:text-gray-300">
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
export default {
  layout: 'home',
  data: () => ({
    news: require('@/contents/news.json')
  }),
  computed: {
    list() {
      return this.news.slice(0, 5)
    }
  }
}
</script>
