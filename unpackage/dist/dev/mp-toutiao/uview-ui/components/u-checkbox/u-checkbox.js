(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-checkbox/u-checkbox"],{

/***/ 262:
/*!******************************************************************************!*\
  !*** F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& */ 263);
/* harmony import */ var _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=script&lang=js& */ 265);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& */ 267);
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

/***/ 263:
/*!*************************************************************************************************************************!*\
  !*** F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& */ 264);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 264:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uIcon: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 209))
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

/***/ 265:
/*!*******************************************************************************************************!*\
  !*** F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=script&lang=js& */ 266);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 266:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 267:
/*!****************************************************************************************************************************************!*\
  !*** F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& */ 268);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRjovemp4Y3gvY2xhc3NBbnN3ZXJfdW5pL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT9hMGQ2Iiwid2VicGFjazovLy9GOi96anhjeC9jbGFzc0Fuc3dlcl91bmkvdXZpZXctdWkvY29tcG9uZW50cy91LWNoZWNrYm94L3UtY2hlY2tib3gudnVlP2U5OGUiLCJ3ZWJwYWNrOi8vL0Y6L3pqeGN4L2NsYXNzQW5zd2VyX3VuaS91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/YmY2MCIsIndlYnBhY2s6Ly8vRjovemp4Y3gvY2xhc3NBbnN3ZXJfdW5pL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT8zNjU1IiwidW5pLWFwcDovLy91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWUiLCJ3ZWJwYWNrOi8vL0Y6L3pqeGN4L2NsYXNzQW5zd2VyX3VuaS91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/NzVhMCIsIndlYnBhY2s6Ly8vRjovemp4Y3gvY2xhc3NBbnN3ZXJfdW5pL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT84NzY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ3lLO0FBQ3pLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsV0FBVyx1TUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFxb0IsQ0FBZ0Isb25CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjenBCOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFQQTs7QUFXQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQVpBOztBQWdCQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSxpQkFGQSxFQWpCQTs7QUFxQkE7QUFDQTtBQUNBLDZCQURBO0FBRUEsaUJBRkEsRUF0QkE7O0FBMEJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBM0JBOztBQStCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQWhDQTs7QUFvQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUFyQ0E7O0FBeUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBMUNBLEVBRkE7OztBQWlEQSxNQWpEQSxrQkFpREE7QUFDQTtBQUNBLDJCQURBO0FBRUEsbUJBRkE7O0FBSUEsR0F0REE7QUF1REEsU0F2REEscUJBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTVEQTtBQTZEQTtBQUNBO0FBQ0EsY0FGQSx3QkFFQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0EsbUJBTkEsNkJBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQTtBQUNBLGdCQVZBLDBCQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQSxvQkFkQSw4QkFjQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkE7QUFDQSxpQkFsQkEsMkJBa0JBO0FBQ0E7QUFDQSxLQXBCQTtBQXFCQTtBQUNBLFdBdEJBLHFCQXNCQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsYUF6QkEsdUJBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0E7QUFDQSxhQXJDQSx1QkFxQ0E7QUFDQTtBQUNBLEtBdkNBO0FBd0NBLGFBeENBLHVCQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoREE7QUFpREEsaUJBakRBLDJCQWlEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBLEtBdEVBLEVBN0RBOztBQXFJQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsYUFYQSx1QkFXQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx1QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxFQUZBO0FBR0EsS0FyQkE7QUFzQkE7QUFDQSxZQXZCQSxzQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdDQSxFQXJJQSxFOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBMHJDLENBQWdCLHNsQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTlzQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InV2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGFjZjgyMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0YWNmODIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NGFjZjgyMFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0YWNmODIwJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIHVJY29uOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgKVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIHMwID0gX3ZtLl9fZ2V0X3N0eWxlKFtfdm0uY2hlY2tib3hTdHlsZV0pXG5cbiAgdmFyIHMxID0gX3ZtLl9fZ2V0X3N0eWxlKFtfdm0uaWNvblN0eWxlXSlcblxuICB2YXIgZzAgPSBfdm0uJHUuYWRkVW5pdChfdm0ubGFiZWxTaXplKVxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIHMwOiBzMCxcbiAgICAgICAgczE6IHMxLFxuICAgICAgICBnMDogZzBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS1jaGVja2JveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInUtY2hlY2tib3hcIiA6c3R5bGU9XCJbY2hlY2tib3hTdHlsZV1cIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidS1jaGVja2JveF9faWNvbi13cmFwXCIgQHRhcD1cInRvZ2dsZVwiIDpjbGFzcz1cIltpY29uQ2xhc3NdXCIgOnN0eWxlPVwiW2ljb25TdHlsZV1cIj5cclxuXHRcdFx0PHUtaWNvbiBjbGFzcz1cInUtY2hlY2tib3hfX2ljb24td3JhcF9faWNvblwiIG5hbWU9XCJjaGVja2JveC1tYXJrXCIgOnNpemU9XCJjaGVja2JveEljb25TaXplXCIgOmNvbG9yPVwiaWNvbkNvbG9yXCIvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWNoZWNrYm94X19sYWJlbFwiIEB0YXA9XCJvbkNsaWNrTGFiZWxcIiA6c3R5bGU9XCJ7XHJcblx0XHRcdGZvbnRTaXplOiAkdS5hZGRVbml0KGxhYmVsU2l6ZSlcclxuXHRcdH1cIj5cclxuXHRcdFx0PHNsb3QgLz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIGNoZWNrYm94IOWkjemAieahhlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDor6Xnu4Tku7bpnIDopoHmkK3phY1jaGVja2JveEdyb3Vw57uE5Lu25L2/55So77yM5Lul5L6/55So5oi36L+b6KGM5pON5L2c5pe277yM6I635b6X5b2T5YmN5aSN6YCJ5qGG57uE55qE6YCJ5Lit5oOF5Ya144CCXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvY2hlY2tib3guaHRtbFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIE51bWJlcn0gaWNvbi1zaXplIOWbvuagh+Wkp+Wwj++8jOWNleS9jXJweO+8iOm7mOiupDIw77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBsYWJlbC1zaXplIGxhYmVs5a2X5L2T5aSn5bCP77yM5Y2V5L2NcnB477yI6buY6K6kMjjvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IG5hbWUgY2hlY2tib3jnu4Tku7bnmoTmoIfnpLrnrKZcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc2hhcGUg5b2i54q277yM6KeB5a6Y572R6K+05piO77yI6buY6K6kY2lyY2xl77yJXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBkaXNhYmxlZCDmmK/lkKbnpoHnlKhcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGxhYmVsLWRpc2FibGVkIOaYr+WQpuemgeatoueCueWHu+aWh+acrOaTjeS9nGNoZWNrYm94XHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGFjdGl2ZS1jb2xvciDpgInkuK3ml7bnmoTpopzoibLvvIzlpoLorr7nva5DaGVja2JveEdyb3Vw55qEYWN0aXZlLWNvbG9y5bCG5aSx5pWIXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlIOafkOS4qmNoZWNrYm9454q25oCB5Y+R55Sf5Y+Y5YyW5pe26Kem5Y+R77yM5Zue6LCD5Li65LiA5Liq5a+56LGhXHJcblx0ICogQGV4YW1wbGUgPHUtY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrZWRcIiA6ZGlzYWJsZWQ9XCJmYWxzZVwiPuWkqea2rzwvdS1jaGVja2JveD5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcInUtY2hlY2tib3hcIixcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdC8vIGNoZWNrYm9455qE5ZCN56ewXHJcblx0XHRcdG5hbWU6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW9oueKtu+8jHNxdWFyZeS4uuaWueW9ou+8jGNpcmNsZeS4uuWOn+Wei1xyXG5cdFx0XHRzaGFwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbkuLrpgInkuK3nirbmgIFcclxuXHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuemgeeUqFxyXG5cdFx0XHRkaXNhYmxlZDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuemgeatoueCueWHu+aPkOekuuivremAieS4reWkjemAieahhlxyXG5cdFx0XHRsYWJlbERpc2FibGVkOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgQm9vbGVhbl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5Lit54q25oCB5LiL55qE6aKc6Imy77yM5aaC6K6+572u5q2k5YC877yM5bCG5Lya6KaG55uWY2hlY2tib3hHcm91cOeahGFjdGl2ZUNvbG9y5YC8XHJcblx0XHRcdGFjdGl2ZUNvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWbvuagh+eahOWkp+Wwj++8jOWNleS9jXJweFxyXG5cdFx0XHRpY29uU2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gbGFiZWznmoTlrZfkvZPlpKflsI/vvIxycHjljZXkvY1cclxuXHRcdFx0bGFiZWxTaXplOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnu4Tku7bnmoTmlbTkvZPlpKflsI9cclxuXHRcdFx0c2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmVudERpc2FibGVkOiBmYWxzZSxcclxuXHRcdFx0XHRuZXdQYXJhbXM6IHt9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOaUr+S7mOWuneWwj+eoi+W6j+S4jeaUr+aMgXByb3ZpZGUvaW5qZWN077yM5omA5Lul5L2/55So6L+Z5Liq5pa55rOV6I635Y+W5pW05Liq54i257uE5Lu277yM5ZyoY3JlYXRlZOWumuS5ie+8jOmBv+WFjeW+queOr+W6lOeUqFxyXG5cdFx0XHR0aGlzLnBhcmVudCA9IHRoaXMuJHUuJHBhcmVudC5jYWxsKHRoaXMsICd1LWNoZWNrYm94LWdyb3VwJyk7XHJcblx0XHRcdC8vIOWmguaenOWtmOWcqHUtY2hlY2tib3gtZ3JvdXDvvIzlsIbmnKznu4Tku7bnmoR0aGlz5aGe6L+b54i257uE5Lu255qEY2hpbGRyZW7kuK1cclxuXHRcdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQvLyDmmK/lkKbnpoHnlKjvvIzlpoLmnpzniLbnu4Tku7Z1LWNoZWNrYm94LWdyb3Vw56aB55So55qE6K+d77yM5bCG5Lya5b+955Wl5a2Q57uE5Lu255qE6YWN572uXHJcblx0XHRcdGlzRGlzYWJsZWQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGlzYWJsZWQgIT09ICcnID8gdGhpcy5kaXNhYmxlZCA6IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGlzYWJsZWQgOiBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm56aB55SobGFiZWzngrnlh7tcclxuXHRcdFx0aXNMYWJlbERpc2FibGVkKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxhYmVsRGlzYWJsZWQgIT09ICcnID8gdGhpcy5sYWJlbERpc2FibGVkIDogdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5sYWJlbERpc2FibGVkIDogZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7hOS7tuWwuuWvuO+8jOWvueW6lHNpemXnmoTlgLzvvIzpu5jorqTlgLzkuLozNHJweFxyXG5cdFx0XHRjaGVja2JveFNpemUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2l6ZSA/IHRoaXMuc2l6ZSA6ICh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnNpemUgOiAzNCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7hOS7tueahOWLvumAieWbvuagh+eahOWwuuWvuO+8jOm7mOiupDIwXHJcblx0XHRcdGNoZWNrYm94SWNvblNpemUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaWNvblNpemUgPyB0aGlzLmljb25TaXplIDogKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaWNvblNpemUgOiAyMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7hOS7tumAieS4rea/gOa0u+aXtueahOminOiJslxyXG5cdFx0XHRlbEFjdGl2ZUNvbG9yKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbG9yID8gdGhpcy5hY3RpdmVDb2xvciA6ICh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmFjdGl2ZUNvbG9yIDogJ3ByaW1hcnknKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uE5Lu255qE5b2i54q2XHJcblx0XHRcdGVsU2hhcGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2hhcGUgPyB0aGlzLnNoYXBlIDogKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuc2hhcGUgOiAnc3F1YXJlJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGljb25TdHlsZSgpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB7fTtcclxuXHRcdFx0XHQvLyDml6LopoHliKTmlq3mmK/lkKbmiYvliqjnpoHnlKjvvIzov5jopoHliKTmlq3nlKjmiLd2LW1vZGVs57uR5a6a55qE5YC877yM5aaC5p6c57uR5a6a5Li6ZmFsc2XvvIzpgqPkuYjkuZ/ml6Dms5XpgInkuK1cclxuXHRcdFx0XHRpZiAodGhpcy5lbEFjdGl2ZUNvbG9yICYmIHRoaXMudmFsdWUgJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0c3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLmVsQWN0aXZlQ29sb3I7IFxyXG5cdFx0XHRcdFx0c3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5lbEFjdGl2ZUNvbG9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdHlsZS53aWR0aCA9IHRoaXMuJHUuYWRkVW5pdCh0aGlzLmNoZWNrYm94U2l6ZSk7XHJcblx0XHRcdFx0c3R5bGUuaGVpZ2h0ID0gdGhpcy4kdS5hZGRVbml0KHRoaXMuY2hlY2tib3hTaXplKTtcclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGNoZWNrYm945YaF6YOo55qE5Yu+6YCJ5Zu+5qCH77yM5aaC5p6c6YCJ5Lit54q25oCB77yM5Li655m96Imy77yM5ZCm5YiZ5Li66YCP5piO6Imy5Y2z5Y+vXHJcblx0XHRcdGljb25Db2xvcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSA/ICcjZmZmZmZmJyA6ICd0cmFuc3BhcmVudCc7XHJcblx0XHRcdH0sXHJcblx0XHRcdGljb25DbGFzcygpIHtcclxuXHRcdFx0XHRsZXQgY2xhc3NlcyA9IFtdO1xyXG5cdFx0XHRcdGNsYXNzZXMucHVzaCgndS1jaGVja2JveF9faWNvbi13cmFwLS0nICsgdGhpcy5lbFNoYXBlKTtcclxuXHRcdFx0XHRpZiAodGhpcy52YWx1ZSA9PSB0cnVlKSBjbGFzc2VzLnB1c2goJ3UtY2hlY2tib3hfX2ljb24td3JhcC0tY2hlY2tlZCcpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzRGlzYWJsZWQpIGNsYXNzZXMucHVzaCgndS1jaGVja2JveF9faWNvbi13cmFwLS1kaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlICYmIHRoaXMuaXNEaXNhYmxlZCkgY2xhc3Nlcy5wdXNoKCd1LWNoZWNrYm94X19pY29uLXdyYXAtLWRpc2FibGVkLS1jaGVja2VkJyk7XHJcblx0XHRcdFx0Ly8g5pSv5LuY5a6d5bCP56iL5bqP5peg5rOV5Yqo5oCB57uR5a6a5LiA5Liq5pWw57uE57G75ZCN77yM5ZCm5YiZ6Kej5p6Q5Ye65p2l55qE57uT5p6c5Lya5bim5pyJXCIsXCLvvIzogIzlr7zoh7TlpLHmlYhcclxuXHRcdFx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoZWNrYm94U3R5bGUoKSB7XHJcblx0XHRcdFx0bGV0IHN0eWxlID0ge307XHJcblx0XHRcdFx0aWYodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud2lkdGgpIHtcclxuXHRcdFx0XHRcdHN0eWxlLndpZHRoID0gdGhpcy5wYXJlbnQud2lkdGg7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVBcclxuXHRcdFx0XHRcdC8vIOWQhOWutuWwj+eoi+W6j+WboOS4uuWug+S7rOeJueauiueahOe8luivkee7k+aehO+8jOS9v+eUqGZsb2F05biD5bGAXHJcblx0XHRcdFx0XHRzdHlsZS5mbG9hdCA9ICdsZWZ0JztcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBNUFxyXG5cdFx0XHRcdFx0Ly8gSDXlkoxBUFDkvb/nlKhmbGV45biD5bGAXHJcblx0XHRcdFx0XHRzdHlsZS5mbGV4ID0gYDAgMCAke3RoaXMucGFyZW50LndpZHRofWA7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQud3JhcCkge1xyXG5cdFx0XHRcdFx0c3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QXHJcblx0XHRcdFx0XHQvLyBINeWSjEFQUOS9v+eUqGZsZXjluIPlsYDvvIzlsIblrr3luqborr7nva4xMDAl77yM5Y2z5Y+v6Ieq5Yqo5o2i6KGMXHJcblx0XHRcdFx0XHRzdHlsZS5mbGV4ID0gJzAgMCAxMDAlJztcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uQ2xpY2tMYWJlbCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNMYWJlbERpc2FibGVkICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvZ2dsZSgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZW1pdEV2ZW50KCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdHZhbHVlOiAhdGhpcy52YWx1ZSxcclxuXHRcdFx0XHRcdG5hbWU6IHRoaXMubmFtZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5omn6KGM54i257uE5Lu2dS1jaGVja2JveC1ncm91cOeahOS6i+S7tuaWueazlVxyXG5cdFx0XHRcdC8vIOetieW+heS4i+S4gOS4quWRqOacn+WGjeaJp+ihjO+8jOWboOS4unRoaXMuJGVtaXQoJ2lucHV0JynkvZznlKjkuo7niLbnu4Tku7bvvIzlho3lj43ppojliLDlrZDnu4Tku7blhoXpg6jvvIzpnIDopoHml7bpl7RcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGlmKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmVtaXRFdmVudCkgdGhpcy5wYXJlbnQuZW1pdEV2ZW50KCk7XHJcblx0XHRcdFx0fSwgODApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorr7nva5pbnB1dOeahOWAvO+8jOi/memHjOmAmui/h2lucHV05LqL5Lu277yM6K6+572u6YCa6L+Hdi1tb2RlbOe7keWumueahOe7hOS7tueahOWAvFxyXG5cdFx0XHRzZXRWYWx1ZSgpIHtcclxuXHRcdFx0XHQvLyDliKTmlq3mmK/lkKbotoXov4fkuoblj6/pgInnmoTmnIDlpKfmlbDph49cclxuXHRcdFx0XHRsZXQgY2hlY2tlZE51bSA9IDA7XHJcblx0XHRcdFx0aWYodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRcdC8vIOWPquimgeeItue7hOS7tueahOafkOS4gOS4quWtkOWFg+e0oOeahHZhbHVl5Li6dHJ1Ze+8jOWwseWKoDEo5bey5pyJ55qE6YCJ5Lit5pWw6YePKVxyXG5cdFx0XHRcdFx0dGhpcy5wYXJlbnQuY2hpbGRyZW4ubWFwKHZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh2YWwudmFsdWUpIGNoZWNrZWROdW0rKztcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOWmguaenOWOn+adpeS4uumAieS4reeKtuaAge+8jOmCo+S5iOWPr+S7peWPlua2iFxyXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlID09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRoaXMuZW1pdEV2ZW50KCk7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsICF0aGlzLnZhbHVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c6LaF5Ye65pyA5aSa5Y+v6YCJ6aG577yM5o+Q56S6XHJcblx0XHRcdFx0XHRpZih0aGlzLnBhcmVudCAmJiBjaGVja2VkTnVtID49IHRoaXMucGFyZW50Lm1heCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy4kdS50b2FzdChg5pyA5aSa5Y+v6YCJJHt0aGlzLnBhcmVudC5tYXh96aG5YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyDlpoLmnpzljp/mnaXkuLrmnKrpgInkuK3nirbmgIHvvIzpnIDopoHpgInkuK3nmoTmlbDph4/lsJHkuo7niLbnu4Tku7bkuK3orr7nva7nmoRtYXjlgLzvvIzmiY3lj6/ku6XpgInkuK1cclxuXHRcdFx0XHRcdHRoaXMuZW1pdEV2ZW50KCk7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsICF0aGlzLnZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHRAaW1wb3J0IFwiLi4vLi4vbGlicy9jc3Mvc3R5bGUuY29tcG9uZW50cy5zY3NzXCI7XHJcblxyXG5cdC51LWNoZWNrYm94IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuODtcclxuXHRcdFxyXG5cdFx0Jl9faWNvbi13cmFwIHtcclxuXHRcdFx0Y29sb3I6ICR1LWNvbnRlbnQtY29sb3I7XHJcblx0XHRcdGZsZXg6IG5vbmU7XHJcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdFx0QGluY2x1ZGUgdnVlLWZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHR3aWR0aDogNDJycHg7XHJcblx0XHRcdGhlaWdodDogNDJycHg7XHJcblx0XHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYm9yZGVyLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNjOGM5Y2M7XHJcblx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcblx0XHRcdFxyXG5cdFx0XHQvKiAjaWZkZWYgTVAtVE9VVElBTyAqL1xyXG5cdFx0XHQvLyDlpLTmnaHlsI/nqIvluo/lhbzlrrnmgKfpl67popjvvIzpnIDopoHorr7nva7ooYzpq5jkuLow77yM5ZCm5YiZ5Zu+5qCH5YGP5LiLXHJcblx0XHRcdCZfX2ljb24ge1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcclxuXHRcdFx0Ji0tY2lyY2xlIHtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLS1zcXVhcmUge1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZycHg7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYtLWNoZWNrZWQge1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR1LXR5cGUtcHJpbWFyeTtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtcHJpbWFyeTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji0tZGlzYWJsZWQge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlYmVkZjA7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjYzhjOWNjO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLS1kaXNhYmxlZC0tY2hlY2tlZCB7XHJcblx0XHRcdFx0Y29sb3I6ICNjOGM5Y2MgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0Jl9fbGFiZWwge1xyXG5cdFx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAyNHJweDtcclxuXHRcdFx0Y29sb3I6ICR1LWNvbnRlbnQtY29sb3I7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFxyXG5cdFx0XHQmLS1kaXNhYmxlZCB7XHJcblx0XHRcdFx0Y29sb3I6ICNjOGM5Y2M7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTRhY2Y4MjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0YWNmODIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDk3MjI1NjE0MTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRjov6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-checkbox/u-checkbox-create-component',
    {
        'uview-ui/components/u-checkbox/u-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(262))
        })
    },
    [['uview-ui/components/u-checkbox/u-checkbox-create-component']]
]);
