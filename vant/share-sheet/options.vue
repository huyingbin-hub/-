<template>
<view :class="utils.bem('share-sheet__options', { border: showBorder })">
  <view v-for="(item, index) in options" :key="index" class="van-share-sheet__option" :data-index="index" @tap="onSelect">
    <image :src="computed.getIconURL(item.icon)" class="van-share-sheet__icon"></image>
    <view v-if="item.name" class="van-share-sheet__name">{{ item.name }}</view>
    <view v-if="item.description" class="van-share-sheet__option-description">
      {{ item.description }}
    </view>
  </view>
</view>
</template>

<script module="computed" lang="wxs" src="./options.wxs"></script>
<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    options: Array,
    showBorder: Boolean
  },
  methods: {
    onSelect(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const option = this.options[index];
      this.$emit('select', Object.assign(Object.assign({}, option), {
        index
      }));
    }

  }
};
</script>
<style>
@import "../common/index.css";.van-share-sheet__options{position:relative;display:-webkit-flex;display:flex;padding:16px 0 16px 8px;overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch}.van-share-sheet__options--border:before{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;top:0;right:0;left:16px;border-top:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-share-sheet__options::-webkit-scrollbar{height:0}.van-share-sheet__option{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-user-select:none;user-select:none}.van-share-sheet__option:active{opacity:.7}.van-share-sheet__icon{width:48px;height:48px;margin:0 16px}.van-share-sheet__name{margin-top:8px;padding:0 4px;color:#646566;font-size:12px}.van-share-sheet__option-description{padding:0 4px;color:#c8c9cc;font-size:12px}
</style>