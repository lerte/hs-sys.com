<template>
  <section>
    <table
      class="w-full border border-[#474748] mb-2"
      v-for="brand in list"
      :key="brand.id"
    >
      <tbody>
        <tr>
          <td class="w-40 h-5 text-center border border-[#474748]">
            <nuxt-link :to="`/brand/${brand.id}`"
              ><b>{{ brand.title }}</b></nuxt-link
            >
          </td>
          <td rowspan="2" class="px-4 border border-[#474748]">
            {{ brand.excerpt }}
            <nuxt-link :to="`/brand/${brand.id}`">
              <font>&nbsp;&nbsp;&nbsp;&gt;&gt;了解更多</font>
            </nuxt-link>
          </td>
        </tr>
        <tr>
          <td class="px-4 border border-[#474748]">
            <div class="p-1">
              <nuxt-link :to="`/brand/${brand.id}`">
                <img class="rounded shadow" v-lazy="brand.image" />
              </nuxt-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: '代理品牌'
    }
  },
  data: () => ({
    list: require('@/contents/brands.json')
  })
}
</script>
