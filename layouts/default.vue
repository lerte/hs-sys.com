<template>
  <div class="dark:bg-grey-900">
    <Header />
    <main
      class="min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)] flex flex-wrap md:flex-nowrap bg-white dark:bg-gray-500"
    >
      <aside
        class="w-full m-2 p-2 flex flex-col md:w-1/4 md:my-4 md:ml-4 md:mr-2 md:p-4 text-gray-500 dark:text-gray-400 bg-gray-50 rounded shadow-md dark:bg-gray-800"
      >
        <Sidebar />
      </aside>
      <article
        class="w-full m-2 p-2 flex flex-col md:w-3/4 md:my-4 md:ml-2 md:mr-4 md:p-4 text-gray-500 dark:text-gray-400 bg-gray-50 rounded shadow-md dark:bg-gray-800"
      >
        <Nuxt />
      </article>
    </main>
    <Footer />
  </div>
</template>
