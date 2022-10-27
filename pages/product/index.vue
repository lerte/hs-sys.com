<template>
  <List :list="list" />
</template>

<script>
export default {
  head() {
    return {
      title: '產品系列'
    }
  },
  data: () => ({
    list: require('@/contents/products.json')
  })
}
</script>
