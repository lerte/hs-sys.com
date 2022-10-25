<template>
  <section>
    <ul class="grid grid-cols-3 gap-4">
      <li
        class="bg-white rounded-md shadow-md"
        v-for="product in products"
        :key="product.id"
      >
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
    <p class="mt-6 text-right">
      <span>共有{{ list.length }}条记录</span>
      <span class="cursor-pointer" @click="page = 1"> 首页 </span>
      <span class="cursor-pointer" @click="prev"> 上一页 </span>
      <span class="cursor-pointer" @click="next"> 下一页 </span>
      <span class="cursor-pointer" @click="page = pageTotal"> 末页 </span>
      <span> 当前第{{ page }}页 共{{ pageTotal }}页 </span>
    </p>
  </section>
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
    list,
    page: 2,
    pageSize: 12
  }),
  computed: {
    products() {
      return this.list.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      )
    },
    pageTotal() {
      return Math.ceil(this.list.length / this.pageSize)
    }
  },
  methods: {
    prev() {
      if (this.page > 1) {
        this.page--
      }
    },
    next() {
      if (this.page < this.pageTotal) {
        this.page++
      }
    }
  }
}
</script>
