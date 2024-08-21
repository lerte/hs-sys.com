<template>
  <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    <ul class="space-y-2">
      <template v-for="cate in categories">
        <Dropdowns :menus="cate" :key="cate.title" />
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    categories: [
      {
        title: '專業音箱',
        children: [
          {
            title: 'TCS系列',
            to: '/product/102'
          },
          {
            title: 'PK系列',
            to: '/product/84'
          },
          {
            title: 'KP系列',
            to: '/product/97'
          },
          {
            title: 'AX系列',
            to: '/product/96'
          },
          {
            title: 'CF系列',
            to: '/product/85'
          },
          {
            title: 'C系列',
            to: '/product/86'
          },
          {
            title: 'S系列',
            to: '/product/103'
          },
          {
            title: '中小型演出LA系列',
            to: '/product/81'
          }
        ]
      },
      {
        title: '智能影K音箱',
        children: [
          {
            title: '影K系列',
            to: '/product/94'
          },
          {
            title: '會議系列',
            to: '/product/95'
          }
        ]
      },
      {
        title: '專業功放',
        children: [
          {
            title: 'DK系列',
            to: '/product/104'
          },
          {
            title: 'GLC系列',
            to: '/product/98'
          },
          {
            title: 'GLA系列',
            to: '/product/91'
          },
          {
            title: 'K系列',
            to: '/product/99'
          },
          {
            title: 'FP系列',
            to: '/product/89'
          }
        ]
      },
      {
        title: '周邊系列',
        children: [
          {
            title: '音频处理器',
            to: '/product/93'
          },
          {
            title: '無線麥克風',
            to: '/product/92'
          },
          {
            title: '电源时序器',
            to: '/product/100'
          },
          {
            title: '调音台',
            to: '/product/101'
          }
        ]
      }
    ]
  })
}
</script>
