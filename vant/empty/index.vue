<template>
<view class="custom-class van-empty">
  <view class="van-empty__image">
    <slot name="image"></slot>
  </view>
  <view class="van-empty__image">
    <image v-if="imageUrl" class="van-empty__image__img" :src="imageUrl"></image>
  </view>

  <view class="van-empty__description">
    <slot name="description"></slot>
  </view>
  <view class="van-empty__description">
    {{ description }}
  </view>

  <view class="van-empty__bottom">
    <slot></slot>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
const PRESETS = ['error', 'search', 'default', 'network'];

export default {
  data() {
    return {
      imageUrl: ""
    };
  },

  components: {},
  props: {
    description: String,
    image: {
      type: String,
      default: 'default'
    }
  },

  created() {
    if (PRESETS.indexOf(this.image) !== -1) {
      this.setData({
        imageUrl: `https://img.yzcdn.cn/vant/empty-image-${this.image}.png`
      });
    } else {
      this.setData({
        imageUrl: this.image
      });
    }
  },

  methods: {}
};
</script>
<style>
@import "../common/index.css";.van-empty{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:32px 0}.van-empty__image{width:160px;height:160px}.van-empty__image:empty{display:none}.van-empty__image__img{width:100%;height:100%}.van-empty__image:not(:empty)+.van-empty__image{display:none}.van-empty__description{margin-top:16px;padding:0 60px;color:#969799;font-size:14px;line-height:20px}.van-empty__description:empty,.van-empty__description:not(:empty)+.van-empty__description{display:none}.van-empty__bottom{margin-top:24px}
</style>