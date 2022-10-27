<template>
  <ul class="space-y-2 list-none list-inside text-gray-500 dark:text-gray-400">
    <li v-for="item in list" :key="item.title">
      <div class="flex items-center justify-between">
        <nuxt-link
          :to="`/news/${item.id}`"
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
    list: require('@/contents/news.json')
  })
}
</script>
