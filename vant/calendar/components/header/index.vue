<template>
<view class="van-calendar__header">
  <block v-if="showTitle">
    <view class="van-calendar__header-title"><slot name="title"></slot></view>
    <view class="van-calendar__header-title">{{ title }}</view>
  </block>

  <view v-if="showSubtitle" class="van-calendar__header-subtitle">
    {{ subtitle }}
  </view>

  <view class="van-calendar__weekdays">
    <view v-for="(item, index) in weekdays" :key="index" class="van-calendar__weekday">
      {{ item }}
    </view>
  </view>
</view>
</template>

<script>
import { VantComponent } from '../../../common/component';

export default {
  data() {
    return {
      weekdays: ['日', '一', '二', '三', '四', '五', '六']
    };
  },

  components: {},
  props: {
    title: {
      type: String,
      default: '日期选择'
    },
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean
  },
  methods: {}
};
</script>
<style>

</style>