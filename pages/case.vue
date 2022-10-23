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
      title: '成功案例'
    }
  },
  data: () => ({
    list: [
      require('@/assets/images/201634182219.jpg'),
      require('@/assets/images/201634182207.jpg'),
      require('@/assets/images/20131023184320.jpg'),
      require('@/assets/images/20131023184446.jpg'),
      require('@/assets/images/20131023184459.jpg')
    ]
  })
}
</script>
