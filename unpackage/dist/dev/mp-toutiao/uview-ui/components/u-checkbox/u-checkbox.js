(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-checkbox/u-checkbox"],{

/***/ 255:
/*!******************************************************************!*\
  !*** F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& */ 256);
/* harmony import */ var _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=script&lang=js& */ 258);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& */ 260);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54acf820",
  null,
  false,
  _u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-checkbox/u-checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 256:
/*!*************************************************************************************************************!*\
  !*** F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& */ 257);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 257:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 209))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.checkboxStyle])

  var s1 = _vm.__get_style([_vm.iconStyle])

  var g0 = _vm.$u.addUnit(_vm.labelSize)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        s1: s1,
        g0: g0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 258:
/*!*******************************************************************************************!*\
  !*** F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=script&lang=js& */ 259);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 259:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * checkbox 复选框
 * @description 该组件需要搭配checkboxGroup组件使用，以便用户进行操作时，获得当前复选框组的选中情况。
 * @tutorial https://www.uviewui.com/components/checkbox.html
 * @property {String Number} icon-size 图标大小，单位rpx（默认20）
 * @property {String Number} label-size label字体大小，单位rpx（默认28）
 * @property {String Number} name checkbox组件的标示符
 * @property {String} shape 形状，见官网说明（默认circle）
 * @property {Boolean} disabled 是否禁用
 * @property {Boolean} label-disabled 是否禁止点击文本操作checkbox
 * @property {String} active-color 选中时的颜色，如设置CheckboxGroup的active-color将失效
 * @event {Function} change 某个checkbox状态发生变化时触发，回调为一个对象
 * @example <u-checkbox v-model="checked" :disabled="false">天涯</u-checkbox>
 */var _default =
{
  name: "u-checkbox",
  props: {
    // checkbox的名称
    name: {
      type: [String, Number],
      default: '' },

    // 形状，square为方形，circle为原型
    shape: {
      type: String,
      default: '' },

    // 是否为选中状态
    value: {
      type: Boolean,
      default: false },

    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: '' },

    // 是否禁止点击提示语选中复选框
    labelDisabled: {
      type: [String, Boolean],
      default: '' },

    // 选中状态下的颜色，如设置此值，将会覆盖checkboxGroup的activeColor值
    activeColor: {
      type: String,
      default: '' },

    // 图标的大小，单位rpx
    iconSize: {
      type: [String, Number],
      default: '' },

    // label的字体大小，rpx单位
    labelSize: {
      type: [String, Number],
      default: '' },

    // 组件的整体大小
    size: {
      type: [String, Number],
      default: '' } },


  data: function data() {
    return {
      parentDisabled: false,
      newParams: {} };

  },
  created: function created() {
    // 支付宝小程序不支持provide/inject，所以使用这个方法获取整个父组件，在created定义，避免循环应用
    this.parent = this.$u.$parent.call(this, 'u-checkbox-group');
    // 如果存在u-checkbox-group，将本组件的this塞进父组件的children中
    this.parent && this.parent.children.push(this);
  },
  computed: {
    // 是否禁用，如果父组件u-checkbox-group禁用的话，将会忽略子组件的配置
    isDisabled: function isDisabled() {
      return this.disabled !== '' ? this.disabled : this.parent ? this.parent.disabled : false;
    },
    // 是否禁用label点击
    isLabelDisabled: function isLabelDisabled() {
      return this.labelDisabled !== '' ? this.labelDisabled : this.parent ? this.parent.labelDisabled : false;
    },
    // 组件尺寸，对应size的值，默认值为34rpx
    checkboxSize: function checkboxSize() {
      return this.size ? this.size : this.parent ? this.parent.size : 34;
    },
    // 组件的勾选图标的尺寸，默认20
    checkboxIconSize: function checkboxIconSize() {
      return this.iconSize ? this.iconSize : this.parent ? this.parent.iconSize : 20;
    },
    // 组件选中激活时的颜色
    elActiveColor: function elActiveColor() {
      return this.activeColor ? this.activeColor : this.parent ? this.parent.activeColor : 'primary';
    },
    // 组件的形状
    elShape: function elShape() {
      return this.shape ? this.shape : this.parent ? this.parent.shape : 'square';
    },
    iconStyle: function iconStyle() {
      var style = {};
      // 既要判断是否手动禁用，还要判断用户v-model绑定的值，如果绑定为false，那么也无法选中
      if (this.elActiveColor && this.value && !this.isDisabled) {
        style.borderColor = this.elActiveColor;
        style.backgroundColor = this.elActiveColor;
      }
      style.width = this.$u.addUnit(this.checkboxSize);
      style.height = this.$u.addUnit(this.checkboxSize);
      return style;
    },
    // checkbox内部的勾选图标，如果选中状态，为白色，否则为透明色即可
    iconColor: function iconColor() {
      return this.value ? '#ffffff' : 'transparent';
    },
    iconClass: function iconClass() {
      var classes = [];
      classes.push('u-checkbox__icon-wrap--' + this.elShape);
      if (this.value == true) classes.push('u-checkbox__icon-wrap--checked');
      if (this.isDisabled) classes.push('u-checkbox__icon-wrap--disabled');
      if (this.value && this.isDisabled) classes.push('u-checkbox__icon-wrap--disabled--checked');
      // 支付宝小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效
      return classes.join(' ');
    },
    checkboxStyle: function checkboxStyle() {
      var style = {};
      if (this.parent && this.parent.width) {
        style.width = this.parent.width;

        // 各家小程序因为它们特殊的编译结构，使用float布局
        style.float = 'left';





      }
      if (this.parent && this.parent.wrap) {
        style.width = '100%';




      }
      return style;
    } },

  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isLabelDisabled && !this.isDisabled) {
        this.setValue();
      }
    },
    toggle: function toggle() {
      if (!this.isDisabled) {
        this.setValue();
      }
    },
    emitEvent: function emitEvent() {var _this = this;
      this.$emit('change', {
        value: !this.value,
        name: this.name });

      // 执行父组件u-checkbox-group的事件方法
      // 等待下一个周期再执行，因为this.$emit('input')作用于父组件，再反馈到子组件内部，需要时间
      setTimeout(function () {
        if (_this.parent && _this.parent.emitEvent) _this.parent.emitEvent();
      }, 80);
    },
    // 设置input的值，这里通过input事件，设置通过v-model绑定的组件的值
    setValue: function setValue() {
      // 判断是否超过了可选的最大数量
      var checkedNum = 0;
      if (this.parent && this.parent.children) {
        // 只要父组件的某一个子元素的value为true，就加1(已有的选中数量)
        this.parent.children.map(function (val) {
          if (val.value) checkedNum++;
        });
      }
      // 如果原来为选中状态，那么可以取消
      if (this.value == true) {
        this.emitEvent();
        this.$emit('input', !this.value);
      } else {
        // 如果超出最多可选项，提示
        if (this.parent && checkedNum >= this.parent.max) {
          return this.$u.toast("\u6700\u591A\u53EF\u9009".concat(this.parent.max, "\u9879"));
        }
        // 如果原来为未选中状态，需要选中的数量少于父组件中设置的max值，才可以选中
        this.emitEvent();
        this.$emit('input', !this.value);
      }
    } } };exports.default = _default;

/***/ }),

/***/ 260:
/*!****************************************************************************************************************************!*\
  !*** F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& */ 261);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 261:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/zkb/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRjovemp4Y3gvemtiL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT85Y2YzIiwid2VicGFjazovLy9GOi96anhjeC96a2IvdXZpZXctdWkvY29tcG9uZW50cy91LWNoZWNrYm94L3UtY2hlY2tib3gudnVlPzU3OTEiLCJ3ZWJwYWNrOi8vL0Y6L3pqeGN4L3prYi91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/YmM4MyIsIndlYnBhY2s6Ly8vRjovemp4Y3gvemtiL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT9mMWIwIiwidW5pLWFwcDovLy91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWUiLCJ3ZWJwYWNrOi8vL0Y6L3pqeGN4L3prYi91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/Y2M3NCIsIndlYnBhY2s6Ly8vRjovemp4Y3gvemtiL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT9mMmUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ3lLO0FBQ3pLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdU1BRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUFxb0IsQ0FBZ0Isb25CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjenBCOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFQQTs7QUFXQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQVpBOztBQWdCQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSxpQkFGQSxFQWpCQTs7QUFxQkE7QUFDQTtBQUNBLDZCQURBO0FBRUEsaUJBRkEsRUF0QkE7O0FBMEJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBM0JBOztBQStCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQWhDQTs7QUFvQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUFyQ0E7O0FBeUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBMUNBLEVBRkE7OztBQWlEQSxNQWpEQSxrQkFpREE7QUFDQTtBQUNBLDJCQURBO0FBRUEsbUJBRkE7O0FBSUEsR0F0REE7QUF1REEsU0F2REEscUJBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTVEQTtBQTZEQTtBQUNBO0FBQ0EsY0FGQSx3QkFFQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0EsbUJBTkEsNkJBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQTtBQUNBLGdCQVZBLDBCQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQSxvQkFkQSw4QkFjQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkE7QUFDQSxpQkFsQkEsMkJBa0JBO0FBQ0E7QUFDQSxLQXBCQTtBQXFCQTtBQUNBLFdBdEJBLHFCQXNCQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsYUF6QkEsdUJBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0E7QUFDQSxhQXJDQSx1QkFxQ0E7QUFDQTtBQUNBLEtBdkNBO0FBd0NBLGFBeENBLHVCQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoREE7QUFpREEsaUJBakRBLDJCQWlEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBLEtBdEVBLEVBN0RBOztBQXFJQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsYUFYQSx1QkFXQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx1QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxFQUZBO0FBR0EsS0FyQkE7QUFzQkE7QUFDQSxZQXZCQSxzQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdDQSxFQXJJQSxFOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBMHJDLENBQWdCLHNsQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTlzQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InV2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGFjZjgyMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0YWNmODIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NGFjZjgyMFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0YWNmODIwJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdUljb246IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgczAgPSBfdm0uX19nZXRfc3R5bGUoW192bS5jaGVja2JveFN0eWxlXSlcblxuICB2YXIgczEgPSBfdm0uX19nZXRfc3R5bGUoW192bS5pY29uU3R5bGVdKVxuXG4gIHZhciBnMCA9IF92bS4kdS5hZGRVbml0KF92bS5sYWJlbFNpemUpXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgczA6IHMwLFxuICAgICAgICBzMTogczEsXG4gICAgICAgIGcwOiBnMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidS1jaGVja2JveFwiIDpzdHlsZT1cIltjaGVja2JveFN0eWxlXVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWNoZWNrYm94X19pY29uLXdyYXBcIiBAdGFwPVwidG9nZ2xlXCIgOmNsYXNzPVwiW2ljb25DbGFzc11cIiA6c3R5bGU9XCJbaWNvblN0eWxlXVwiPlxyXG5cdFx0XHQ8dS1pY29uIGNsYXNzPVwidS1jaGVja2JveF9faWNvbi13cmFwX19pY29uXCIgbmFtZT1cImNoZWNrYm94LW1hcmtcIiA6c2l6ZT1cImNoZWNrYm94SWNvblNpemVcIiA6Y29sb3I9XCJpY29uQ29sb3JcIi8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtY2hlY2tib3hfX2xhYmVsXCIgQHRhcD1cIm9uQ2xpY2tMYWJlbFwiIDpzdHlsZT1cIntcclxuXHRcdFx0Zm9udFNpemU6ICR1LmFkZFVuaXQobGFiZWxTaXplKVxyXG5cdFx0fVwiPlxyXG5cdFx0XHQ8c2xvdCAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogY2hlY2tib3gg5aSN6YCJ5qGGXHJcblx0ICogQGRlc2NyaXB0aW9uIOivpee7hOS7tumcgOimgeaQremFjWNoZWNrYm94R3JvdXDnu4Tku7bkvb/nlKjvvIzku6Xkvr/nlKjmiLfov5vooYzmk43kvZzml7bvvIzojrflvpflvZPliY3lpI3pgInmoYbnu4TnmoTpgInkuK3mg4XlhrXjgIJcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly93d3cudXZpZXd1aS5jb20vY29tcG9uZW50cy9jaGVja2JveC5odG1sXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBpY29uLXNpemUg5Zu+5qCH5aSn5bCP77yM5Y2V5L2NcnB477yI6buY6K6kMjDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGxhYmVsLXNpemUgbGFiZWzlrZfkvZPlpKflsI/vvIzljZXkvY1ycHjvvIjpu5jorqQyOO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIE51bWJlcn0gbmFtZSBjaGVja2JveOe7hOS7tueahOagh+ekuuesplxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzaGFwZSDlvaLnirbvvIzop4HlrpjnvZHor7TmmI7vvIjpu5jorqRjaXJjbGXvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGRpc2FibGVkIOaYr+WQpuemgeeUqFxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbGFiZWwtZGlzYWJsZWQg5piv5ZCm56aB5q2i54K55Ye75paH5pys5pON5L2cY2hlY2tib3hcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gYWN0aXZlLWNvbG9yIOmAieS4reaXtueahOminOiJsu+8jOWmguiuvue9rkNoZWNrYm94R3JvdXDnmoRhY3RpdmUtY29sb3LlsIblpLHmlYhcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjaGFuZ2Ug5p+Q5LiqY2hlY2tib3jnirbmgIHlj5HnlJ/lj5jljJbml7bop6blj5HvvIzlm57osIPkuLrkuIDkuKrlr7nosaFcclxuXHQgKiBAZXhhbXBsZSA8dS1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2tlZFwiIDpkaXNhYmxlZD1cImZhbHNlXCI+5aSp5ravPC91LWNoZWNrYm94PlxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6IFwidS1jaGVja2JveFwiLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8gY2hlY2tib3jnmoTlkI3np7BcclxuXHRcdFx0bmFtZToge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5b2i54q277yMc3F1YXJl5Li65pa55b2i77yMY2lyY2xl5Li65Y6f5Z6LXHJcblx0XHRcdHNoYXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuS4uumAieS4reeKtuaAgVxyXG5cdFx0XHR2YWx1ZToge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm56aB55SoXHJcblx0XHRcdGRpc2FibGVkOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgQm9vbGVhbl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm56aB5q2i54K55Ye75o+Q56S66K+t6YCJ5Lit5aSN6YCJ5qGGXHJcblx0XHRcdGxhYmVsRGlzYWJsZWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInkuK3nirbmgIHkuIvnmoTpopzoibLvvIzlpoLorr7nva7mraTlgLzvvIzlsIbkvJropobnm5ZjaGVja2JveEdyb3Vw55qEYWN0aXZlQ29sb3LlgLxcclxuXHRcdFx0YWN0aXZlQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Zu+5qCH55qE5aSn5bCP77yM5Y2V5L2NcnB4XHJcblx0XHRcdGljb25TaXplOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBsYWJlbOeahOWtl+S9k+Wkp+Wwj++8jHJweOWNleS9jVxyXG5cdFx0XHRsYWJlbFNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7hOS7tueahOaVtOS9k+Wkp+Wwj1xyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyZW50RGlzYWJsZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdG5ld1BhcmFtczoge30sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8g5pSv5LuY5a6d5bCP56iL5bqP5LiN5pSv5oyBcHJvdmlkZS9pbmplY3TvvIzmiYDku6Xkvb/nlKjov5nkuKrmlrnms5Xojrflj5bmlbTkuKrniLbnu4Tku7bvvIzlnKhjcmVhdGVk5a6a5LmJ77yM6YG/5YWN5b6q546v5bqU55SoXHJcblx0XHRcdHRoaXMucGFyZW50ID0gdGhpcy4kdS4kcGFyZW50LmNhbGwodGhpcywgJ3UtY2hlY2tib3gtZ3JvdXAnKTtcclxuXHRcdFx0Ly8g5aaC5p6c5a2Y5ZyodS1jaGVja2JveC1ncm91cO+8jOWwhuacrOe7hOS7tueahHRoaXPloZ7ov5vniLbnu4Tku7bnmoRjaGlsZHJlbuS4rVxyXG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpO1xyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8vIOaYr+WQpuemgeeUqO+8jOWmguaenOeItue7hOS7tnUtY2hlY2tib3gtZ3JvdXDnpoHnlKjnmoTor53vvIzlsIbkvJrlv73nlaXlrZDnu4Tku7bnmoTphY3nva5cclxuXHRcdFx0aXNEaXNhYmxlZCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kaXNhYmxlZCAhPT0gJycgPyB0aGlzLmRpc2FibGVkIDogdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5kaXNhYmxlZCA6IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbnpoHnlKhsYWJlbOeCueWHu1xyXG5cdFx0XHRpc0xhYmVsRGlzYWJsZWQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGFiZWxEaXNhYmxlZCAhPT0gJycgPyB0aGlzLmxhYmVsRGlzYWJsZWQgOiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmxhYmVsRGlzYWJsZWQgOiBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uE5Lu25bC65a+477yM5a+55bqUc2l6ZeeahOWAvO+8jOm7mOiupOWAvOS4ujM0cnB4XHJcblx0XHRcdGNoZWNrYm94U2l6ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaXplID8gdGhpcy5zaXplIDogKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuc2l6ZSA6IDM0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uE5Lu255qE5Yu+6YCJ5Zu+5qCH55qE5bC65a+477yM6buY6K6kMjBcclxuXHRcdFx0Y2hlY2tib3hJY29uU2l6ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pY29uU2l6ZSA/IHRoaXMuaWNvblNpemUgOiAodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pY29uU2l6ZSA6IDIwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uE5Lu26YCJ5Lit5r+A5rS75pe255qE6aKc6ImyXHJcblx0XHRcdGVsQWN0aXZlQ29sb3IoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sb3IgPyB0aGlzLmFjdGl2ZUNvbG9yIDogKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuYWN0aXZlQ29sb3IgOiAncHJpbWFyeScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnu4Tku7bnmoTlvaLnirZcclxuXHRcdFx0ZWxTaGFwZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaGFwZSA/IHRoaXMuc2hhcGUgOiAodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5zaGFwZSA6ICdzcXVhcmUnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aWNvblN0eWxlKCkge1xyXG5cdFx0XHRcdGxldCBzdHlsZSA9IHt9O1xyXG5cdFx0XHRcdC8vIOaXouimgeWIpOaWreaYr+WQpuaJi+WKqOemgeeUqO+8jOi/mOimgeWIpOaWreeUqOaIt3YtbW9kZWznu5HlrprnmoTlgLzvvIzlpoLmnpznu5HlrprkuLpmYWxzZe+8jOmCo+S5iOS5n+aXoOazlemAieS4rVxyXG5cdFx0XHRcdGlmICh0aGlzLmVsQWN0aXZlQ29sb3IgJiYgdGhpcy52YWx1ZSAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5ib3JkZXJDb2xvciA9IHRoaXMuZWxBY3RpdmVDb2xvcjsgXHJcblx0XHRcdFx0XHRzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmVsQWN0aXZlQ29sb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN0eWxlLndpZHRoID0gdGhpcy4kdS5hZGRVbml0KHRoaXMuY2hlY2tib3hTaXplKTtcclxuXHRcdFx0XHRzdHlsZS5oZWlnaHQgPSB0aGlzLiR1LmFkZFVuaXQodGhpcy5jaGVja2JveFNpemUpO1xyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gY2hlY2tib3jlhoXpg6jnmoTli77pgInlm77moIfvvIzlpoLmnpzpgInkuK3nirbmgIHvvIzkuLrnmb3oibLvvIzlkKbliJnkuLrpgI/mmI7oibLljbPlj69cclxuXHRcdFx0aWNvbkNvbG9yKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlID8gJyNmZmZmZmYnIDogJ3RyYW5zcGFyZW50JztcclxuXHRcdFx0fSxcclxuXHRcdFx0aWNvbkNsYXNzKCkge1xyXG5cdFx0XHRcdGxldCBjbGFzc2VzID0gW107XHJcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCd1LWNoZWNrYm94X19pY29uLXdyYXAtLScgKyB0aGlzLmVsU2hhcGUpO1xyXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlID09IHRydWUpIGNsYXNzZXMucHVzaCgndS1jaGVja2JveF9faWNvbi13cmFwLS1jaGVja2VkJyk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCkgY2xhc3Nlcy5wdXNoKCd1LWNoZWNrYm94X19pY29uLXdyYXAtLWRpc2FibGVkJyk7XHJcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUgJiYgdGhpcy5pc0Rpc2FibGVkKSBjbGFzc2VzLnB1c2goJ3UtY2hlY2tib3hfX2ljb24td3JhcC0tZGlzYWJsZWQtLWNoZWNrZWQnKTtcclxuXHRcdFx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/ml6Dms5XliqjmgIHnu5HlrprkuIDkuKrmlbDnu4TnsbvlkI3vvIzlkKbliJnop6PmnpDlh7rmnaXnmoTnu5PmnpzkvJrluKbmnIlcIixcIu+8jOiAjOWvvOiHtOWkseaViFxyXG5cdFx0XHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tib3hTdHlsZSgpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB7fTtcclxuXHRcdFx0XHRpZih0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53aWR0aCkge1xyXG5cdFx0XHRcdFx0c3R5bGUud2lkdGggPSB0aGlzLnBhcmVudC53aWR0aDtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUFxyXG5cdFx0XHRcdFx0Ly8g5ZCE5a625bCP56iL5bqP5Zug5Li65a6D5Lus54m55q6K55qE57yW6K+R57uT5p6E77yM5L2/55SoZmxvYXTluIPlsYBcclxuXHRcdFx0XHRcdHN0eWxlLmZsb2F0ID0gJ2xlZnQnO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QXHJcblx0XHRcdFx0XHQvLyBINeWSjEFQUOS9v+eUqGZsZXjluIPlsYBcclxuXHRcdFx0XHRcdHN0eWxlLmZsZXggPSBgMCAwICR7dGhpcy5wYXJlbnQud2lkdGh9YDtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC53cmFwKSB7XHJcblx0XHRcdFx0XHRzdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgTVBcclxuXHRcdFx0XHRcdC8vIEg15ZKMQVBQ5L2/55SoZmxleOW4g+WxgO+8jOWwhuWuveW6puiuvue9rjEwMCXvvIzljbPlj6/oh6rliqjmjaLooYxcclxuXHRcdFx0XHRcdHN0eWxlLmZsZXggPSAnMCAwIDEwMCUnO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25DbGlja0xhYmVsKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5pc0xhYmVsRGlzYWJsZWQgJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9nZ2xlKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbWl0RXZlbnQoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0dmFsdWU6ICF0aGlzLnZhbHVlLFxyXG5cdFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyDmiafooYzniLbnu4Tku7Z1LWNoZWNrYm94LWdyb3Vw55qE5LqL5Lu25pa55rOVXHJcblx0XHRcdFx0Ly8g562J5b6F5LiL5LiA5Liq5ZGo5pyf5YaN5omn6KGM77yM5Zug5Li6dGhpcy4kZW1pdCgnaW5wdXQnKeS9nOeUqOS6jueItue7hOS7tu+8jOWGjeWPjemmiOWIsOWtkOe7hOS7tuWGhemDqO+8jOmcgOimgeaXtumXtFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZW1pdEV2ZW50KSB0aGlzLnBhcmVudC5lbWl0RXZlbnQoKTtcclxuXHRcdFx0XHR9LCA4MCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiuvue9rmlucHV055qE5YC877yM6L+Z6YeM6YCa6L+HaW5wdXTkuovku7bvvIzorr7nva7pgJrov4d2LW1vZGVs57uR5a6a55qE57uE5Lu255qE5YC8XHJcblx0XHRcdHNldFZhbHVlKCkge1xyXG5cdFx0XHRcdC8vIOWIpOaWreaYr+WQpui2hei/h+S6huWPr+mAieeahOacgOWkp+aVsOmHj1xyXG5cdFx0XHRcdGxldCBjaGVja2VkTnVtID0gMDtcclxuXHRcdFx0XHRpZih0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0Ly8g5Y+q6KaB54i257uE5Lu255qE5p+Q5LiA5Liq5a2Q5YWD57Sg55qEdmFsdWXkuLp0cnVl77yM5bCx5YqgMSjlt7LmnInnmoTpgInkuK3mlbDph48pXHJcblx0XHRcdFx0XHR0aGlzLnBhcmVudC5jaGlsZHJlbi5tYXAodmFsID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbC52YWx1ZSkgY2hlY2tlZE51bSsrO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5aaC5p6c5Y6f5p2l5Li66YCJ5Lit54q25oCB77yM6YKj5LmI5Y+v5Lul5Y+W5raIXHJcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQoKTtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgIXRoaXMudmFsdWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDlpoLmnpzotoXlh7rmnIDlpJrlj6/pgInpobnvvIzmj5DnpLpcclxuXHRcdFx0XHRcdGlmKHRoaXMucGFyZW50ICYmIGNoZWNrZWROdW0gPj0gdGhpcy5wYXJlbnQubWF4KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLiR1LnRvYXN0KGDmnIDlpJrlj6/pgIkke3RoaXMucGFyZW50Lm1heH3poblgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIOWmguaenOWOn+adpeS4uuacqumAieS4reeKtuaAge+8jOmcgOimgemAieS4reeahOaVsOmHj+WwkeS6jueItue7hOS7tuS4reiuvue9rueahG1heOWAvO+8jOaJjeWPr+S7pemAieS4rVxyXG5cdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQoKTtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgIXRoaXMudmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdEBpbXBvcnQgXCIuLi8uLi9saWJzL2Nzcy9zdHlsZS5jb21wb25lbnRzLnNjc3NcIjtcclxuXHJcblx0LnUtY2hlY2tib3gge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRsaW5lLWhlaWdodDogMS44O1xyXG5cdFx0XHJcblx0XHQmX19pY29uLXdyYXAge1xyXG5cdFx0XHRjb2xvcjogJHUtY29udGVudC1jb2xvcjtcclxuXHRcdFx0ZmxleDogbm9uZTtcclxuXHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0XHRAaW5jbHVkZSB2dWUtZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdHdpZHRoOiA0MnJweDtcclxuXHRcdFx0aGVpZ2h0OiA0MnJweDtcclxuXHRcdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBib3JkZXItY29sb3IsIGJhY2tncm91bmQtY29sb3I7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2M4YzljYztcclxuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuXHRcdFx0XHJcblx0XHRcdC8qICNpZmRlZiBNUC1UT1VUSUFPICovXHJcblx0XHRcdC8vIOWktOadoeWwj+eoi+W6j+WFvOWuueaAp+mXrumimO+8jOmcgOimgeiuvue9ruihjOmrmOS4ujDvvIzlkKbliJnlm77moIflgY/kuItcclxuXHRcdFx0Jl9faWNvbiB7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFxyXG5cdFx0XHQmLS1jaXJjbGUge1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYtLXNxdWFyZSB7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji0tY2hlY2tlZCB7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHUtdHlwZS1wcmltYXJ5O1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJHUtdHlwZS1wcmltYXJ5O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLS1kaXNhYmxlZCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWRmMDtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICNjOGM5Y2M7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYtLWRpc2FibGVkLS1jaGVja2VkIHtcclxuXHRcdFx0XHRjb2xvcjogI2M4YzljYyAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHQmX19sYWJlbCB7XHJcblx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDI0cnB4O1xyXG5cdFx0XHRjb2xvcjogJHUtY29udGVudC1jb2xvcjtcclxuXHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHJcblx0XHRcdCYtLWRpc2FibGVkIHtcclxuXHRcdFx0XHRjb2xvcjogI2M4YzljYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS1jaGVja2JveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NGFjZjgyMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTRhY2Y4MjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMDk1MzU0NTM1NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJGOi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-checkbox/u-checkbox-create-component',
    {
        'uview-ui/components/u-checkbox/u-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(255))
        })
    },
    [['uview-ui/components/u-checkbox/u-checkbox-create-component']]
]);
