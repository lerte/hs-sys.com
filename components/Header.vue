<template>
  <header class="sticky top-0 z-10 shadow-md">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <nuxt-link to="/" class="flex items-center">
          <img
            alt="Logo"
            class="h-6 sm:h-9"
            v-lazy="require('@/assets/images/logo.jpg')"
          />
          <img
            alt="Logo Text"
            class="h-6 sm:h-9"
            v-lazy="require('@/assets/images/logo-text.jpg')"
          />
        </nuxt-link>
        <div class="flex items-center lg:order-2">
          <button
            type="button"
            @click="toggleMode"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              class="dark:hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
            <svg
              class="hidden dark:block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            @click="show = !show"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              :class="{ hidden: show }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="w-6 h-6"
              :class="{ hidden: !show }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          :class="{ hidden: !show }"
          class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li v-for="nav in navigations" :key="nav.to">
              <nuxt-link
                :to="nav.to"
                exact-active-class="block py-2 pr-4 pl-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {{ nav.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    show: false,
    navigations: [
      {
        title: '首頁',
        to: '/'
      },
      {
        title: '關於我們',
        to: '/about'
      },
      {
        title: '產品系列',
        to: '/product'
      },
      {
        title: '代理品牌',
        to: '/brand'
      },
      {
        title: '成功案例',
        to: '/case'
      },
      {
        title: 'HS資訊',
        to: '/news'
      },
      {
        title: '下載中心',
        to: '/download'
      },
      {
        title: '聯係我們',
        to: '/contact'
      }
    ]
  }),
  watch: {
    $route: {
      handler() {
        this.show = false
      }
    }
  },
  mounted() {
    this.initMode()
  },
  methods: {
    initMode() {
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      }
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.remove('dark')
      }
    },
    toggleMode() {
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        } else {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        }
      }
    }
  }
}
</script>
