<template>
  <li>
    <button
      type="button"
      @click="show = !show"
      class="w-full text-black bg-grey-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between dark:text-white dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800"
    >
      {{ menus.title }}
      <svg
        fill="none"
        viewBox="0 0 24 24"
        class="ml-2 w-4 h-4"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div
      :class="show ? 'block' : 'hidden'"
      class="bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="menu in menus.children" :key="menu.title">
          <nuxt-link
            :to="menu.to"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >{{ menu.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Dropdowns',
  props: {
    menus: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    show: false
  })
}
</script>
