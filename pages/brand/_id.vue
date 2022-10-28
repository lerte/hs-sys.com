<template>
  <List :list="list" v-if="list.length" />
  <section v-else>
    <img
      :alt="list.title"
      v-lazy="list.image"
      class="mx-auto rounded-md shadow-md"
    />
    <p>{{ list.title }}</p>
    <p v-html="list.content"></p>
  </section>
</template>

<script>
import brands from '@/contents/brands.json'
export default {
  head() {
    return {
      title: '代理品牌'
    }
  },
  async asyncData({ params, $http }) {
    const found = brands.find((brand) => brand.id == params.id)
    if (found) {
      const list = await $http.$get(`/brands/${params.id}.json`)
      return {
        list
      }
    } else {
      return {
        list: {
          content: '内容未找到'
        }
      }
    }
  }
}
</script>
