<template>
<button :id="id" :data-detail="dataset" :class="'custom-class ' + utils.bem('button', [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }]) + ' ' + ( hairline ? 'van-hairline--surround' : '' )" hover-class="van-button--active hover-class" :lang="lang" :form-type="formType" :style="baseStyle + ' ' + customStyle" :open-type="disabled ? '' : openType" :business-id="businessId" :session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard" :app-parameter="appParameter" :aria-label="ariaLabel" @tap="!disabled ? 'onClick' : 'noop'" @getuserinfo="bindGetUserInfo" @contact="bindContact" @getphonenumber="bindGetPhoneNumber" @error="bindError" @launchapp="bindLaunchApp" @opensetting="bindOpenSetting">
  <block v-if="loading">
    <van-loading custom-class="loading-class" :size="loadingSize" :type="loadingType" :color="loadingColor(type,color,plain)"></van-loading>
    <view v-if="loadingText" class="van-button__loading-text">
      {{ loadingText }}
    </view>
  </block>
  <block v-else>
    <van-icon v-if="icon" size="1.2em" :name="icon" :class-prefix="classPrefix" class="van-button__icon" custom-style="line-height: inherit;"></van-icon>
    <view class="van-button__text">
      <slot></slot>
    </view>
  </block>
</button>
</template>

<script module="loadingColor" lang="wxs" src="./loadingColor.wxs"></script>
<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import { canIUseFormFieldButton } from '../common/version';
const mixins = [button, openType];
import vanIcon from "../icon/index";
import vanLoading from "../loading/index";

export default {
  data() {
    return {
      baseStyle: ''
    };
  },

  components: {
    vanIcon,
    vanLoading
  },
  props: {
    formType: String,
    icon: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    },
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      default: 'circular'
    },
    type: {
      type: String,
      default: 'default'
    },
    dataset: null,
    size: {
      type: String,
      default: 'normal'
    },
    loadingSize: {
      type: String,
      default: '20px'
    },
    color: {
      type: String
    }
  },
  watch: {
    color: {
      handler: function (color) {
        let style = '';

        if (color) {
          style += `color: ${this.plain ? color : 'white'};`;

          if (!this.plain) {
            // Use background instead of backgroundColor to make linear-gradient work
            style += `background: ${color};`;
          } // hide border when color is linear-gradient


          if (color.indexOf('gradient') !== -1) {
            style += 'border: 0;';
          } else {
            style += `border-color: ${color};`;
          }
        }

        if (style !== this.baseStyle) {
          this.setData({
            baseStyle: style
          });
        }
      },
      immediate: true
    }
  },
  mixins,
  classes: ['hover-class', 'loading-class'],
  methods: {
    onClick() {
      if (!this.loading) {
        this.$emit('click');
      }
    },

    noop() {}

  }
};
</script>
<style>

</style>