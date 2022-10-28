<template>
  <List :list="list" v-if="list.length" />
  <section v-else>
    <img
      :alt="list.title"
      v-lazy="list.image"
      class="mx-auto rounded-md shadow-md"
    />
    <p v-html="list.content"></p>
  </section>
</template>

<script>
import products from '@/contents/products.json'
export default {
  head() {
    return {
      title: '產品系列'
    }
  },
  async asyncData({ params, $http }) {
    const found = products.find((product) => product.id == params.id)
    if (found) {
      const list = await $http.$get(`/products/${params.id}.json`)
      return {
        list
      }
    } else {
      const list = products.filter((product) => product.cat_id == params.id)
      return {
        list
      }
    }
  }
}
</script>
