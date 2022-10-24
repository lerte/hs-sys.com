<template>
  <section>
    <img
      class="mx-auto"
      :src="productDetail.image"
      :alt="productDetail.title"
    />
    <p v-html="productDetail.content"></p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: '產品系列'
    }
  },
  async asyncData({ params, $http }) {
    const productDetail = await $http.$get(`/products/${params.id}.json`)
    return {
      productDetail
    }
  }
}
</script>
