<template>
  <section>
    <h4 class="text-center">{{ newsDetail.title }}</h4>
    <hr />
    <p class="py-2 text-xs">发布于 {{ newsDetail.date }}</p>
    <p v-html="newsDetail.content"></p>
  </section>
</template>

<script>
import newsList from '@/contents/news.json'
export default {
  computed: {
    newsDetail() {
      const news = newsList.find((news) => news.id == this.$route.params.id)
      return (
        news || {
          content: '内容未找到'
        }
      )
    }
  }
}
</script>
