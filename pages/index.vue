<template>
  <main
    class="min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)] bg-white dark:bg-gray-500"
  >
    <Swiper
      :slides="banners"
      :options="{
        loop: true,
        autoplay: true,
        autoHeight: true
      }"
    />
    <ul class="w-full mx-auto max-w-7xl grid grid-cols-7 gap-4">
      <li class="col-span-2">
        <p
          class="rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>成功案例</span>
          <nuxt-link to="/case">>>更多</nuxt-link>
        </p>
        <p class="py-4 text-gray-500 dark:text-gray-300 flex justify-center">
          <Swiper
            :slides="slides"
            :options="{
              loop: true,
              autoplay: true,
              slidesPerView: 2
            }"
          />
        </p>
      </li>
      <li class="col-span-3">
        <p
          class="rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>公司簡介</span>
          <nuxt-link to="/about">>>更多</nuxt-link>
        </p>
        <p class="py-4 text-gray-500 dark:text-gray-300">
          HS--具有60多年悠久历史的英国查爾斯叁產公司（CHARUER）旗下重金打造的专属高端音响品牌。
          皇室音響坐落於中國音響之都--花都，毗鄰廣州新白雲國際機場和廣州高鐵北站！與英國特寶聲聯合投資建成，集科研、製造、加工為一體的高新技術企業。擁有雄厚的技術實力，其中有二十餘年研究工作經驗的材料學...
          <nuxt-link to="/about">>> 詳情點擊</nuxt-link>
        </p>
      </li>
      <li class="col-span-2">
        <p
          class="rounded shadow py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white text-center flex justify-around"
        >
          <span>HS資訊</span>
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
export default {
  layout: 'home',
  data: () => ({
    banners: [
      require('@/assets/images/20131024183711.jpg'),
      require('@/assets/images/20131024183718.jpg'),
      require('@/assets/images/20131024183724.jpg')
    ],
    news: require('@/contents/news.json'),
    slides: [
      require('@/assets/images/201634182219.jpg'),
      require('@/assets/images/201634182207.jpg'),
      require('@/assets/images/20131023184320.jpg'),
      require('@/assets/images/20131023184446.jpg'),
      require('@/assets/images/20131023184459.jpg')
    ]
  }),
  computed: {
    list() {
      return this.news.slice(0, 5)
    }
  }
}
</script>
