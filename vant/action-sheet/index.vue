<template>
<van-popup :show="show" position="bottom" :round="round" :z-index="zIndex" :overlay="overlay" custom-class="van-action-sheet" :safe-area-inset-bottom="safeAreaInsetBottom" :close-on-click-overlay="closeOnClickOverlay" @close="onClickOverlay">
  <view v-if="title" class="van-hairline--bottom van-action-sheet__header">
    {{ title }}
    <van-icon name="close" custom-class="van-action-sheet__close" @click="onClose"></van-icon>
  </view>
  <view v-if="description" class="van-action-sheet__description">
    {{ description }}
  </view>
  <view v-if="actions && actions.length">
    <!-- button外包一层view，防止actions动态变化，导致渲染时button被打散 -->
    <button v-for="(item, index) in actions" :key="index" :open-type="item.openType" :style="item.color ? 'color: ' + item.color : ''" :class="( utils.bem('action-sheet__item', { disabled: item.disabled || item.loading }) ) + ' van-hairline--top ' + item.className || ''" hover-class="van-action-sheet__item--hover" :data-index="index" @tap="onSelect" @getuserinfo="bindGetUserInfo" @contact="bindContact" @getphonenumber="bindGetPhoneNumber" @error="bindError" @launchapp="bindLaunchApp" @opensetting="bindOpenSetting" :lang="lang" :session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard" :app-parameter="appParameter">
      <block v-if="!item.loading">
        {{ item.name }}
        <text v-if="item.subname" class="van-action-sheet__subname">{{ item.subname }}</text>
      </block>
      <van-loading v-else custom-class="van-action-sheet__loading" size="20px"></van-loading>
    </button>
  </view>
  <slot></slot>
  <view v-if="cancelText" class="van-action-sheet__cancel" hover-class="van-action-sheet__cancel--hover" hover-stay-time="70" @tap="onCancel">
    {{ cancelText }}
  </view>
</van-popup>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import vanIcon from "../icon/index";
import vanPopup from "../popup/index";
import vanLoading from "../loading/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon,
    vanPopup,
    vanLoading
  },
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    description: String,
    round: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 100
    },
    actions: {
      type: Array,
      default: []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    closeOnClickAction: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  mixins: [button, openType],
  methods: {
    onSelect(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const item = this.actions[index];

      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item);

        if (this.closeOnClickAction) {
          this.onClose();
        }
      }
    },

    onCancel() {
      this.$emit('cancel');
    },

    onClose() {
      this.$emit('close');
    },

    onClickOverlay() {
      this.$emit('click-overlay');
      this.onClose();
    }

  }
};
</script>
<style>

</style>