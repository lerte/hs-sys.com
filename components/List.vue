<template>
  <section>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <li
        :key="product.id"
        v-for="product in products"
        class="bg-white rounded-md shadow-md"
      >
        <nuxt-link :to="`/product/${product.id}`">
          <img
            :alt="product.title"
            v-lazy="product.image"
            class="h-52 w-full object-contain"
          />
          <p class="text-center">{{ product.title }}</p>
        </nuxt-link>
      </li>
    </ul>
    <p class="mt-4 text-right">
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
export default {
  props: ['list'],
  data: () => ({
    page: 1,
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
