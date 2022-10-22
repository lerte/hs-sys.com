<template>
  <main
    class="mx-auto h-[calc(100vh-128px)] p-4 bg-white dark:bg-gray-500 md:flex md:items-center md:justify-around"
  >
    <Sidebar />
    <article
      class="w-1/2 text-gray-500 dark:text-gray-400 shadow-md p-10 bg-gray-50 rounded dark:bg-gray-800"
    >
      <p class="pb-4 text-xl font-bold text-gray-500 dark:text-gray-400">
        英國皇室音響
      </p>
      <ul class="text-gray-500 dark:text-gray-400">
        <li class="py-2">電 話：+86-20-8653 8057（6線）</li>
        <li class="py-2">傳 真：+86-20-3773 7860</li>
        <li class="py-2">市場監督：139 2500 0060</li>
        <li class="py-2">商務QQ：1660 340 670</li>
        <li class="py-2">
          郵 箱：
          <a href="mailto:hs_sys@163.com" class="hover:text-[#f26427]">
            hs_sys@163.com
          </a>
        </li>
        <li>地 址：廣州市花都區花東鎮先科一路8號微觀智庫產業園B棟6F</li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: '關於我們'
    }
  }
}
</script>
