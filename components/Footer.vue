<template>
  <footer class="p-4 bg-white md:p-5 dark:bg-gray-800">
    <section
      class="max-w-screen-xl mx-auto md:flex md:items-center md:justify-between"
    >
      <span
        class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        版權所有 &copy; 2013-{{ currentYear }} 皇室音響（廣州）有限公司
      </span>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >地址：廣州市花都區花東鎮先科一路8號微觀智庫產業園B棟6F
        总机：+86-20-8653 8057（6線） 传真：+86-20-3773 3760
      </span>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    currentYear: new Date().getFullYear()
  })
}
</script>
