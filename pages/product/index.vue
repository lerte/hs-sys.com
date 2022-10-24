<template>
  <ul class="grid grid-cols-3 gap-4">
    <li v-for="product in list" :key="product.id">
      <nuxt-link :to="`/product/${product.id}`">
        <img
          class="h-52 w-full object-contain"
          :src="product.image"
          :alt="product.title"
        />
        <p class="text-center">{{ product.title }}</p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import list from '@/contents/products.json'
export default {
  head() {
    return {
      title: '產品系列'
    }
  },
  data: () => ({
    list
  })
}
</script>
