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
import productList from '@/contents/products.json'
export default {
  computed: {
    productDetail() {
      const product = productList.find(
        (product) => product.id == this.$route.params.id
      )
      return (
        product || {
          content: '内容未找到'
        }
      )
    }
  }
}
</script>
