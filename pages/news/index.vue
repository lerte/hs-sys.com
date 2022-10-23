<template>
  <ul class="space-y-2 list-none list-inside text-gray-500 dark:text-gray-400">
    <li v-for="item in list" :key="item.title">
      <div class="flex items-center justify-between">
        <nuxt-link
          :to="item.link"
          class="flex items-center hover:text-orange-500"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            ></path>
          </svg>
          <span class="mx-3">
            {{ item.title }}
          </span>
        </nuxt-link>
        <span>[{{ item.date }}]</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  head() {
    return {
      title: 'HS資訊'
    }
  },
  data: () => ({
    list: [
      {
        title: '皇室音响与您相约2016广州展',
        link: '/news/133',
        date: '2015-11-26'
      },
      {
        title: '擦亮眼睛看功放',
        link: '/news/132',
        date: '2015-10-22'
      },
      {
        title: '怎样进行KTV形象策划',
        link: '/news/131',
        date: '2014-06-21'
      },
      {
        title: ' 廣州花都：中國音響之都初定升級路線圖',
        link: '/news/129',
        date: '2013-12-20'
      },
      {
        title: '上万家演出公司倒闭',
        link: '/news/128',
        date: '2013-10-29'
      },
      {
        title: '專業音響行業新曙光',
        link: '/news/127',
        date: '2013-10-23'
      },
      {
        title: '音響系統維護的六大要點',
        link: '/news/106',
        date: '2011-10-14'
      },
      {
        title: '熱烈祝賀皇室音響（廣州）有限公司網站正式上線',
        link: '/news/108',
        date: '2011-10-28'
      }
    ]
  })
}
</script>
