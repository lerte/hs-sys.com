<template>
  <ul class="grid grid-cols-3 gap-4">
    <li v-for="(item, index) in list" :key="index">
      <img :src="item" alt="成功案例" />
    </li>
  </ul>
</template>

<script>
export default {
  head() {
    return {
      title: '產品系列'
    }
  },
  data: () => ({
    list: []
  })
}
</script>
