<template>
  <article
    class="w-1/2 text-gray-500 dark:text-gray-400 shadow-md p-10 bg-gray-50 rounded dark:bg-gray-800"
  >
    <ul
      class="space-y-2 list-none list-inside text-gray-500 dark:text-gray-400"
    >
      <li v-for="item in list" :key="item.title">
        <div class="flex items-center justify-between">
          <a :href="item.link" class="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              class="w-6 h-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            <span class="mx-3">
              {{ item.title }}
            </span>
            <span class="text-red-600">(点击下载)</span>
          </a>
          <span>[{{ item.date }}]</span>
        </div>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: '下載中心'
    }
  },
  data: () => ({
    list: [
      {
        title: 'K-3',
        link: '/uploads/201739172834.rar',
        date: '2017-03-09'
      },
      {
        title: 'X-6前级效果器软件 ',
        link: '/uploads/201634182830.rar',
        date: '2015-11-26'
      },
      {
        title: 'K-5前级效果器软件',
        link: '/uploads/201634182857.rar',
        date: '2013-09-25'
      }
    ]
  })
}
</script>
