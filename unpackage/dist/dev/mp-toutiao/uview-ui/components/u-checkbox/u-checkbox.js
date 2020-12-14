(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-checkbox/u-checkbox"],{

/***/ 195:
/*!********************************************************************************!*\
  !*** F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& */ 196);
/* harmony import */ var _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=script&lang=js& */ 198);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& */ 200);
/* harmony import */ var _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ 196:
/*!***************************************************************************************************************************!*\
  !*** F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& */ 197);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_template_id_54acf820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 197:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=template&id=54acf820&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 156))
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

/***/ 198:
/*!*********************************************************************************************************!*\
  !*** F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=script&lang=js& */ 199);
/* harmony import */ var _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 200:
/*!******************************************************************************************************************************************!*\
  !*** F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& */ 201);
/* harmony import */ var _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_checkbox_vue_vue_type_style_index_0_id_54acf820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 201:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ZJ/中课答疑/classAnswer_uni/uview-ui/components/u-checkbox/u-checkbox.vue?vue&type=style&index=0&id=54acf820&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRjovWkov5Lit6K++562U55aRL2NsYXNzQW5zd2VyX3VuaS91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/OGI5OSIsIndlYnBhY2s6Ly8vRjovWkov5Lit6K++562U55aRL2NsYXNzQW5zd2VyX3VuaS91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/OTNiMSIsIndlYnBhY2s6Ly8vRjovWkov5Lit6K++562U55aRL2NsYXNzQW5zd2VyX3VuaS91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/YmExYyIsIndlYnBhY2s6Ly8vRjovWkov5Lit6K++562U55aRL2NsYXNzQW5zd2VyX3VuaS91dmlldy11aS9jb21wb25lbnRzL3UtY2hlY2tib3gvdS1jaGVja2JveC52dWU/NTFlYiIsInVuaS1hcHA6Ly8vdXZpZXctdWkvY29tcG9uZW50cy91LWNoZWNrYm94L3UtY2hlY2tib3gudnVlIiwid2VicGFjazovLy9GOi9aSi/kuK3or77nrZTnlpEvY2xhc3NBbnN3ZXJfdW5pL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT83MzA4Iiwid2VicGFjazovLy9GOi9aSi/kuK3or77nrZTnlpEvY2xhc3NBbnN3ZXJfdW5pL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZT9jMmRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsV0FBVyx1TUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUErdkIsQ0FBZ0Isb3hCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjbnhCOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFQQTs7QUFXQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQVpBOztBQWdCQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSxpQkFGQSxFQWpCQTs7QUFxQkE7QUFDQTtBQUNBLDZCQURBO0FBRUEsaUJBRkEsRUF0QkE7O0FBMEJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBM0JBOztBQStCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQWhDQTs7QUFvQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUFyQ0E7O0FBeUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBMUNBLEVBRkE7OztBQWlEQSxNQWpEQSxrQkFpREE7QUFDQTtBQUNBLDJCQURBO0FBRUEsbUJBRkE7O0FBSUEsR0F0REE7QUF1REEsU0F2REEscUJBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTVEQTtBQTZEQTtBQUNBO0FBQ0EsY0FGQSx3QkFFQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0EsbUJBTkEsNkJBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQTtBQUNBLGdCQVZBLDBCQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQSxvQkFkQSw4QkFjQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkE7QUFDQSxpQkFsQkEsMkJBa0JBO0FBQ0E7QUFDQSxLQXBCQTtBQXFCQTtBQUNBLFdBdEJBLHFCQXNCQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsYUF6QkEsdUJBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0E7QUFDQSxhQXJDQSx1QkFxQ0E7QUFDQTtBQUNBLEtBdkNBO0FBd0NBLGFBeENBLHVCQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoREE7QUFpREEsaUJBakRBLDJCQWlEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBLEtBdEVBLEVBN0RBOztBQXFJQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsYUFYQSx1QkFXQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx1QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxFQUZBO0FBR0EsS0FyQkE7QUFzQkE7QUFDQSxZQXZCQSxzQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdDQSxFQXJJQSxFOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBcTVDLENBQWdCLHMzQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXo2QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InV2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGFjZjgyMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0YWNmODIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjU0YWNmODIwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1jaGVja2JveC91LWNoZWNrYm94LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1jaGVja2JveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTRhY2Y4MjAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgdUljb246IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvblwiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb24udnVlXCJcbiAgICApXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgczAgPSBfdm0uX19nZXRfc3R5bGUoW192bS5jaGVja2JveFN0eWxlXSlcblxuICB2YXIgczEgPSBfdm0uX19nZXRfc3R5bGUoW192bS5pY29uU3R5bGVdKVxuXG4gIHZhciBnMCA9IF92bS4kdS5hZGRVbml0KF92bS5sYWJlbFNpemUpXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgczA6IHMwLFxuICAgICAgICBzMTogczEsXG4gICAgICAgIGcwOiBnMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1jaGVja2JveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1jaGVja2JveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1LWNoZWNrYm94XCIgOnN0eWxlPVwiW2NoZWNrYm94U3R5bGVdXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtY2hlY2tib3hfX2ljb24td3JhcFwiIEB0YXA9XCJ0b2dnbGVcIiA6Y2xhc3M9XCJbaWNvbkNsYXNzXVwiIDpzdHlsZT1cIltpY29uU3R5bGVdXCI+XHJcblx0XHRcdDx1LWljb24gY2xhc3M9XCJ1LWNoZWNrYm94X19pY29uLXdyYXBfX2ljb25cIiBuYW1lPVwiY2hlY2tib3gtbWFya1wiIDpzaXplPVwiY2hlY2tib3hJY29uU2l6ZVwiIDpjb2xvcj1cImljb25Db2xvclwiLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidS1jaGVja2JveF9fbGFiZWxcIiBAdGFwPVwib25DbGlja0xhYmVsXCIgOnN0eWxlPVwie1xyXG5cdFx0XHRmb250U2l6ZTogJHUuYWRkVW5pdChsYWJlbFNpemUpXHJcblx0XHR9XCI+XHJcblx0XHRcdDxzbG90IC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuXHQgKiBjaGVja2JveCDlpI3pgInmoYZcclxuXHQgKiBAZGVzY3JpcHRpb24g6K+l57uE5Lu26ZyA6KaB5pCt6YWNY2hlY2tib3hHcm91cOe7hOS7tuS9v+eUqO+8jOS7peS+v+eUqOaIt+i/m+ihjOaTjeS9nOaXtu+8jOiOt+W+l+W9k+WJjeWkjemAieahhue7hOeahOmAieS4reaDheWGteOAglxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL3d3dy51dmlld3VpLmNvbS9jb21wb25lbnRzL2NoZWNrYm94Lmh0bWxcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGljb24tc2l6ZSDlm77moIflpKflsI/vvIzljZXkvY1ycHjvvIjpu5jorqQyMO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIE51bWJlcn0gbGFiZWwtc2l6ZSBsYWJlbOWtl+S9k+Wkp+Wwj++8jOWNleS9jXJweO+8iOm7mOiupDI477yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBuYW1lIGNoZWNrYm9457uE5Lu255qE5qCH56S656ymXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHNoYXBlIOW9oueKtu+8jOingeWumOe9keivtOaYju+8iOm7mOiupGNpcmNsZe+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGlzYWJsZWQg5piv5ZCm56aB55SoXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBsYWJlbC1kaXNhYmxlZCDmmK/lkKbnpoHmraLngrnlh7vmlofmnKzmk43kvZxjaGVja2JveFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBhY3RpdmUtY29sb3Ig6YCJ5Lit5pe255qE6aKc6Imy77yM5aaC6K6+572uQ2hlY2tib3hHcm91cOeahGFjdGl2ZS1jb2xvcuWwhuWkseaViFxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDmn5DkuKpjaGVja2JveOeKtuaAgeWPkeeUn+WPmOWMluaXtuinpuWPke+8jOWbnuiwg+S4uuS4gOS4quWvueixoVxyXG5cdCAqIEBleGFtcGxlIDx1LWNoZWNrYm94IHYtbW9kZWw9XCJjaGVja2VkXCIgOmRpc2FibGVkPVwiZmFsc2VcIj7lpKnmtq88L3UtY2hlY2tib3g+XHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogXCJ1LWNoZWNrYm94XCIsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyBjaGVja2JveOeahOWQjeensFxyXG5cdFx0XHRuYW1lOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvaLnirbvvIxzcXVhcmXkuLrmlrnlvaLvvIxjaXJjbGXkuLrljp/lnotcclxuXHRcdFx0c2hhcGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5Li66YCJ5Lit54q25oCBXHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbnpoHnlKhcclxuXHRcdFx0ZGlzYWJsZWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbnpoHmraLngrnlh7vmj5DnpLror63pgInkuK3lpI3pgInmoYZcclxuXHRcdFx0bGFiZWxEaXNhYmxlZDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieS4reeKtuaAgeS4i+eahOminOiJsu+8jOWmguiuvue9ruatpOWAvO+8jOWwhuS8muimhueblmNoZWNrYm94R3JvdXDnmoRhY3RpdmVDb2xvcuWAvFxyXG5cdFx0XHRhY3RpdmVDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlm77moIfnmoTlpKflsI/vvIzljZXkvY1ycHhcclxuXHRcdFx0aWNvblNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGxhYmVs55qE5a2X5L2T5aSn5bCP77yMcnB45Y2V5L2NXHJcblx0XHRcdGxhYmVsU2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uE5Lu255qE5pW05L2T5aSn5bCPXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwYXJlbnREaXNhYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0bmV3UGFyYW1zOiB7fSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/kuI3mlK/mjIFwcm92aWRlL2luamVjdO+8jOaJgOS7peS9v+eUqOi/meS4quaWueazleiOt+WPluaVtOS4queItue7hOS7tu+8jOWcqGNyZWF0ZWTlrprkuYnvvIzpgb/lhY3lvqrnjq/lupTnlKhcclxuXHRcdFx0dGhpcy5wYXJlbnQgPSB0aGlzLiR1LiRwYXJlbnQuY2FsbCh0aGlzLCAndS1jaGVja2JveC1ncm91cCcpO1xyXG5cdFx0XHQvLyDlpoLmnpzlrZjlnKh1LWNoZWNrYm94LWdyb3Vw77yM5bCG5pys57uE5Lu255qEdGhpc+Whnui/m+eItue7hOS7tueahGNoaWxkcmVu5LitXHJcblx0XHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyk7XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Ly8g5piv5ZCm56aB55So77yM5aaC5p6c54i257uE5Lu2dS1jaGVja2JveC1ncm91cOemgeeUqOeahOivne+8jOWwhuS8muW/veeVpeWtkOe7hOS7tueahOmFjee9rlxyXG5cdFx0XHRpc0Rpc2FibGVkKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRpc2FibGVkICE9PSAnJyA/IHRoaXMuZGlzYWJsZWQgOiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmRpc2FibGVkIDogZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuemgeeUqGxhYmVs54K55Ye7XHJcblx0XHRcdGlzTGFiZWxEaXNhYmxlZCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sYWJlbERpc2FibGVkICE9PSAnJyA/IHRoaXMubGFiZWxEaXNhYmxlZCA6IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubGFiZWxEaXNhYmxlZCA6IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnu4Tku7blsLrlr7jvvIzlr7nlupRzaXpl55qE5YC877yM6buY6K6k5YC85Li6MzRycHhcclxuXHRcdFx0Y2hlY2tib3hTaXplKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNpemUgPyB0aGlzLnNpemUgOiAodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5zaXplIDogMzQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnu4Tku7bnmoTli77pgInlm77moIfnmoTlsLrlr7jvvIzpu5jorqQyMFxyXG5cdFx0XHRjaGVja2JveEljb25TaXplKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmljb25TaXplID8gdGhpcy5pY29uU2l6ZSA6ICh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lmljb25TaXplIDogMjApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnu4Tku7bpgInkuK3mv4DmtLvml7bnmoTpopzoibJcclxuXHRcdFx0ZWxBY3RpdmVDb2xvcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2xvciA/IHRoaXMuYWN0aXZlQ29sb3IgOiAodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5hY3RpdmVDb2xvciA6ICdwcmltYXJ5Jyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7hOS7tueahOW9oueKtlxyXG5cdFx0XHRlbFNoYXBlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNoYXBlID8gdGhpcy5zaGFwZSA6ICh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnNoYXBlIDogJ3NxdWFyZScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpY29uU3R5bGUoKSB7XHJcblx0XHRcdFx0bGV0IHN0eWxlID0ge307XHJcblx0XHRcdFx0Ly8g5pei6KaB5Yik5pat5piv5ZCm5omL5Yqo56aB55So77yM6L+Y6KaB5Yik5pat55So5oi3di1tb2RlbOe7keWumueahOWAvO+8jOWmguaenOe7keWumuS4umZhbHNl77yM6YKj5LmI5Lmf5peg5rOV6YCJ5LitXHJcblx0XHRcdFx0aWYgKHRoaXMuZWxBY3RpdmVDb2xvciAmJiB0aGlzLnZhbHVlICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdHN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5lbEFjdGl2ZUNvbG9yOyBcclxuXHRcdFx0XHRcdHN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuZWxBY3RpdmVDb2xvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3R5bGUud2lkdGggPSB0aGlzLiR1LmFkZFVuaXQodGhpcy5jaGVja2JveFNpemUpO1xyXG5cdFx0XHRcdHN0eWxlLmhlaWdodCA9IHRoaXMuJHUuYWRkVW5pdCh0aGlzLmNoZWNrYm94U2l6ZSk7XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBjaGVja2JveOWGhemDqOeahOWLvumAieWbvuagh++8jOWmguaenOmAieS4reeKtuaAge+8jOS4uueZveiJsu+8jOWQpuWImeS4uumAj+aYjuiJsuWNs+WPr1xyXG5cdFx0XHRpY29uQ29sb3IoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgPyAnI2ZmZmZmZicgOiAndHJhbnNwYXJlbnQnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpY29uQ2xhc3MoKSB7XHJcblx0XHRcdFx0bGV0IGNsYXNzZXMgPSBbXTtcclxuXHRcdFx0XHRjbGFzc2VzLnB1c2goJ3UtY2hlY2tib3hfX2ljb24td3JhcC0tJyArIHRoaXMuZWxTaGFwZSk7XHJcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUgPT0gdHJ1ZSkgY2xhc3Nlcy5wdXNoKCd1LWNoZWNrYm94X19pY29uLXdyYXAtLWNoZWNrZWQnKTtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKSBjbGFzc2VzLnB1c2goJ3UtY2hlY2tib3hfX2ljb24td3JhcC0tZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmlzRGlzYWJsZWQpIGNsYXNzZXMucHVzaCgndS1jaGVja2JveF9faWNvbi13cmFwLS1kaXNhYmxlZC0tY2hlY2tlZCcpO1xyXG5cdFx0XHRcdC8vIOaUr+S7mOWuneWwj+eoi+W6j+aXoOazleWKqOaAgee7keWumuS4gOS4quaVsOe7hOexu+WQje+8jOWQpuWImeino+aekOWHuuadpeeahOe7k+aenOS8muW4puaciVwiLFwi77yM6ICM5a+86Ie05aSx5pWIXHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja2JveFN0eWxlKCkge1xyXG5cdFx0XHRcdGxldCBzdHlsZSA9IHt9O1xyXG5cdFx0XHRcdGlmKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndpZHRoKSB7XHJcblx0XHRcdFx0XHRzdHlsZS53aWR0aCA9IHRoaXMucGFyZW50LndpZHRoO1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QXHJcblx0XHRcdFx0XHQvLyDlkITlrrblsI/nqIvluo/lm6DkuLrlroPku6znibnmrornmoTnvJbor5Hnu5PmnoTvvIzkvb/nlKhmbG9hdOW4g+WxgFxyXG5cdFx0XHRcdFx0c3R5bGUuZmxvYXQgPSAnbGVmdCc7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgTVBcclxuXHRcdFx0XHRcdC8vIEg15ZKMQVBQ5L2/55SoZmxleOW4g+WxgFxyXG5cdFx0XHRcdFx0c3R5bGUuZmxleCA9IGAwIDAgJHt0aGlzLnBhcmVudC53aWR0aH1gO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LndyYXApIHtcclxuXHRcdFx0XHRcdHN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBNUFxyXG5cdFx0XHRcdFx0Ly8gSDXlkoxBUFDkvb/nlKhmbGV45biD5bGA77yM5bCG5a695bqm6K6+572uMTAwJe+8jOWNs+WPr+iHquWKqOaNouihjFxyXG5cdFx0XHRcdFx0c3R5bGUuZmxleCA9ICcwIDAgMTAwJSc7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrTGFiZWwoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzTGFiZWxEaXNhYmxlZCAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2dnbGUoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVtaXRFdmVudCgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHR2YWx1ZTogIXRoaXMudmFsdWUsXHJcblx0XHRcdFx0XHRuYW1lOiB0aGlzLm5hbWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIOaJp+ihjOeItue7hOS7tnUtY2hlY2tib3gtZ3JvdXDnmoTkuovku7bmlrnms5VcclxuXHRcdFx0XHQvLyDnrYnlvoXkuIvkuIDkuKrlkajmnJ/lho3miafooYzvvIzlm6DkuLp0aGlzLiRlbWl0KCdpbnB1dCcp5L2c55So5LqO54i257uE5Lu277yM5YaN5Y+N6aaI5Yiw5a2Q57uE5Lu25YaF6YOo77yM6ZyA6KaB5pe26Ze0XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRpZih0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5lbWl0RXZlbnQpIHRoaXMucGFyZW50LmVtaXRFdmVudCgpO1xyXG5cdFx0XHRcdH0sIDgwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6+572uaW5wdXTnmoTlgLzvvIzov5nph4zpgJrov4dpbnB1dOS6i+S7tu+8jOiuvue9rumAmui/h3YtbW9kZWznu5HlrprnmoTnu4Tku7bnmoTlgLxcclxuXHRcdFx0c2V0VmFsdWUoKSB7XHJcblx0XHRcdFx0Ly8g5Yik5pat5piv5ZCm6LaF6L+H5LqG5Y+v6YCJ55qE5pyA5aSn5pWw6YePXHJcblx0XHRcdFx0bGV0IGNoZWNrZWROdW0gPSAwO1xyXG5cdFx0XHRcdGlmKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0XHQvLyDlj6ropoHniLbnu4Tku7bnmoTmn5DkuIDkuKrlrZDlhYPntKDnmoR2YWx1ZeS4unRydWXvvIzlsLHliqAxKOW3suacieeahOmAieS4reaVsOmHjylcclxuXHRcdFx0XHRcdHRoaXMucGFyZW50LmNoaWxkcmVuLm1hcCh2YWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodmFsLnZhbHVlKSBjaGVja2VkTnVtKys7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDlpoLmnpzljp/mnaXkuLrpgInkuK3nirbmgIHvvIzpgqPkuYjlj6/ku6Xlj5bmtohcclxuXHRcdFx0XHRpZiAodGhpcy52YWx1ZSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVtaXRFdmVudCgpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCAhdGhpcy52YWx1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIOWmguaenOi2heWHuuacgOWkmuWPr+mAiemhue+8jOaPkOekulxyXG5cdFx0XHRcdFx0aWYodGhpcy5wYXJlbnQgJiYgY2hlY2tlZE51bSA+PSB0aGlzLnBhcmVudC5tYXgpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuJHUudG9hc3QoYOacgOWkmuWPr+mAiSR7dGhpcy5wYXJlbnQubWF4femhuWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c5Y6f5p2l5Li65pyq6YCJ5Lit54q25oCB77yM6ZyA6KaB6YCJ5Lit55qE5pWw6YeP5bCR5LqO54i257uE5Lu25Lit6K6+572u55qEbWF45YC877yM5omN5Y+v5Lul6YCJ5LitXHJcblx0XHRcdFx0XHR0aGlzLmVtaXRFdmVudCgpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCAhdGhpcy52YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0QGltcG9ydCBcIi4uLy4uL2xpYnMvY3NzL3N0eWxlLmNvbXBvbmVudHMuc2Nzc1wiO1xyXG5cclxuXHQudS1jaGVja2JveCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjg7XHJcblx0XHRcclxuXHRcdCZfX2ljb24td3JhcCB7XHJcblx0XHRcdGNvbG9yOiAkdS1jb250ZW50LWNvbG9yO1xyXG5cdFx0XHRmbGV4OiBub25lO1xyXG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRcdEBpbmNsdWRlIHZ1ZS1mbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0d2lkdGg6IDQycnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDQycnB4O1xyXG5cdFx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJvcmRlci1jb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcclxuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjYzhjOWNjO1xyXG5cdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG5cdFx0XHRcclxuXHRcdFx0LyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRcdFx0Ly8g5aS05p2h5bCP56iL5bqP5YW85a655oCn6Zeu6aKY77yM6ZyA6KaB6K6+572u6KGM6auY5Li6MO+8jOWQpuWImeWbvuagh+WBj+S4i1xyXG5cdFx0XHQmX19pY29uIHtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0XHJcblx0XHRcdCYtLWNpcmNsZSB7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji0tc3F1YXJlIHtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLS1jaGVja2VkIHtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLXByaW1hcnk7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkdS10eXBlLXByaW1hcnk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYtLWRpc2FibGVkIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZGYwO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogI2M4YzljYztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji0tZGlzYWJsZWQtLWNoZWNrZWQge1xyXG5cdFx0XHRcdGNvbG9yOiAjYzhjOWNjICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdCZfX2xhYmVsIHtcclxuXHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMjRycHg7XHJcblx0XHRcdGNvbG9yOiAkdS1jb250ZW50LWNvbG9yO1xyXG5cdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcclxuXHRcdFx0Ji0tZGlzYWJsZWQge1xyXG5cdFx0XHRcdGNvbG9yOiAjYzhjOWNjO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91LWNoZWNrYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0YWNmODIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFIOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhSDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1jaGVja2JveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NGFjZjgyMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA3OTA3ODA2MTIyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkg6L0hCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-checkbox/u-checkbox-create-component',
    {
        'uview-ui/components/u-checkbox/u-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(195))
        })
    },
    [['uview-ui/components/u-checkbox/u-checkbox-create-component']]
]);
