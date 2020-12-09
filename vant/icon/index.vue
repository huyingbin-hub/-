<template>
<view :class="'custom-class ' + classPrefix + ' ' + ( isImageName ? 'van-icon--image' : classPrefix + '-' + name )" :style="'color: ' + color + ';font-size: ' + utils.addUnit(size) + ';' + customStyle" @tap="onClick">
  <van-info v-if="info !== null || dot" :dot="dot" :info="info" custom-class="van-icon__info"></van-info>
  <image v-if="isImageName" :src="name" mode="aspectFit" class="van-icon__image"></image>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import vanInfo from "../info/index";

export default {
  data() {
    return {};
  },

  components: {
    vanInfo
  },
  props: {
    dot: Boolean,
    info: null,
    size: null,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    },
    name: {
      type: String
    }
  },
  watch: {
    name: {
      handler: function (val) {
        this.setData({
          isImageName: val.indexOf('/') !== -1
        });
      },
      immediate: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }

  }
};
</script>
<style>

</style>