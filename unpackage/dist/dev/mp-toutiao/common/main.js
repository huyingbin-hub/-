(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!****************************!*\
  !*** F:/zjxcx/zkb/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _uviewUi = _interopRequireDefault(__webpack_require__(/*! ./uview-ui */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
_vue.default.use(_uviewUi.default);

_vue.default.config.productionTip = false;


_vue.default.mixin({
  methods: {
    setData: function setData(obj, callback) {
      var that = this;
      var handleData = function handleData(tepData, tepKey, afterKey) {
        tepKey = tepKey.split('.');
        tepKey.forEach(function (item) {
          if (tepData[item] === null || tepData[item] === undefined) {
            var reg = /^[0-9]+$/;
            tepData[item] = reg.test(afterKey) ? [] : {};
            tepData = tepData[item];
          } else {
            tepData = tepData[item];
          }
        });
        return tepData;
      };
      var isFn = function isFn(value) {
        return typeof value == 'function' || false;
      };
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        key = key.replace(/\]/g, '').replace(/\[/g, '.');
        var front, after;
        var index_after = key.lastIndexOf('.');
        if (index_after != -1) {
          after = key.slice(index_after + 1);
          front = handleData(that, key.slice(0, index_after), after);
        } else {
          after = key;
          front = that;
        }
        if (front.$data && front.$data[after] === undefined) {
          Object.defineProperty(front, after, {
            get: function get() {
              return front.$data[after];
            },
            set: function set(newValue) {
              front.$data[after] = newValue;
              that.$forceUpdate();
            },
            enumerable: true,
            configurable: true });

          front[after] = val;
        } else {
          that.$set(front, after, val);
        }
      });
      // this.$forceUpdate();
      isFn(callback) && this.$nextTick(callback);
    } } });



_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!****************************!*\
  !*** F:/zjxcx/zkb/App.vue ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 12);
/* harmony import */ var _App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=1&lang=scss& */ 14);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);
var render, staticRenderFns, recyclableRender, components
var renderjs






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!*****************************************************!*\
  !*** F:/zjxcx/zkb/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/zkb/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
//app.js
var Service = __webpack_require__(/*! ./Services/services */ 8);var _default =

{
  onLaunch: function onLaunch(options) {



    var logs = uni.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    uni.setStorageSync('logs', logs); // 获取用户信息





























  },
  globalData: {
    userInfo: null },

  methods: {
    // 获取app设备信息
    getAppFacility: function getAppFacility() {
      try {
        uni.setStorageSync('appFacility', this.$u.sys()); //手机信息
        uni.setStorageSync('appVersion', plus.runtime.version.split('.').join('')); //app版本号
        plus.device.getInfo({
          success: function success(e) {
            console.log('getDeviceInfo success: ' + JSON.stringify(e));
            uni.setStorageSync('clientInfo', e); //设备信息
          },
          fail: function fail(e) {
            console.log('getDeviceInfo failed: ' + JSON.stringify(e));
          } });

      } catch (e) {
        // error
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!*************************************************************!*\
  !*** F:/zjxcx/zkb/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 13);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/zkb/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 14 */
/*!**************************************************************!*\
  !*** F:/zjxcx/zkb/App.vue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=1&lang=scss& */ 15);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/zjxcx/zkb/App.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9GOi96anhjeC96a2IvQXBwLnZ1ZT9iODFiIiwidW5pLWFwcDovLy9BcHAudnVlIiwid2VicGFjazovLy9GOi96anhjeC96a2IvQXBwLnZ1ZT83MzhkIiwid2VicGFjazovLy9GOi96anhjeC96a2IvQXBwLnZ1ZT81ZDg2Iiwid2VicGFjazovLy9GOi96anhjeC96a2IvQXBwLnZ1ZT8zYWVhIiwid2VicGFjazovLy9GOi96anhjeC96a2IvQXBwLnZ1ZT9lZGNkIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsInVWaWV3IiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsIm1peGluIiwibWV0aG9kcyIsInNldERhdGEiLCJvYmoiLCJjYWxsYmFjayIsInRoYXQiLCJoYW5kbGVEYXRhIiwidGVwRGF0YSIsInRlcEtleSIsImFmdGVyS2V5Iiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsInVuZGVmaW5lZCIsInJlZyIsInRlc3QiLCJpc0ZuIiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwidmFsIiwicmVwbGFjZSIsImZyb250IiwiYWZ0ZXIiLCJpbmRleF9hZnRlciIsImxhc3RJbmRleE9mIiwic2xpY2UiLCIkZGF0YSIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsdWUiLCIkZm9yY2VVcGRhdGUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiJHNldCIsIiRuZXh0VGljayIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2lEQUFBLHdDQUFtQjtBQUNuQjtBQUNBLGlGO0FBQ0FBLGFBQUlDLEdBQUosQ0FBUUMsZ0JBQVI7O0FBRUFGLGFBQUlHLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7O0FBR0FKLGFBQUlLLEtBQUosQ0FBVTtBQUNUQyxTQUFPLEVBQUU7QUFDUkMsV0FBTyxFQUFFLGlCQUFTQyxHQUFULEVB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YWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCB1VmlldyBmcm9tICcuL3V2aWV3LXVpJztcclxuVnVlLnVzZSh1Vmlldyk7XHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZTtcclxuXHJcblxyXG5WdWUubWl4aW4oe1xyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRjb25zdCBoYW5kbGVEYXRhID0gKHRlcERhdGEsIHRlcEtleSwgYWZ0ZXJLZXkpID0+IHtcclxuXHRcdFx0XHR0ZXBLZXkgPSB0ZXBLZXkuc3BsaXQoJy4nKTtcclxuXHRcdFx0XHR0ZXBLZXkuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdGlmICh0ZXBEYXRhW2l0ZW1dID09PSBudWxsIHx8IHRlcERhdGFbaXRlbV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgcmVnID0gL15bMC05XSskLztcclxuXHRcdFx0XHRcdFx0dGVwRGF0YVtpdGVtXSA9IHJlZy50ZXN0KGFmdGVyS2V5KSA/IFtdIDoge307XHJcblx0XHRcdFx0XHRcdHRlcERhdGEgPSB0ZXBEYXRhW2l0ZW1dO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGVwRGF0YSA9IHRlcERhdGFbaXRlbV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHRlcERhdGE7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IGlzRm4gPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHRcdFx0fTtcclxuXHRcdFx0T2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdGxldCB2YWwgPSBvYmpba2V5XTtcclxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxdL2csICcnKS5yZXBsYWNlKC9cXFsvZywgJy4nKTtcclxuXHRcdFx0XHRsZXQgZnJvbnQsIGFmdGVyO1xyXG5cdFx0XHRcdGxldCBpbmRleF9hZnRlciA9IGtleS5sYXN0SW5kZXhPZignLicpO1xyXG5cdFx0XHRcdGlmIChpbmRleF9hZnRlciAhPSAtMSkge1xyXG5cdFx0XHRcdFx0YWZ0ZXIgPSBrZXkuc2xpY2UoaW5kZXhfYWZ0ZXIgKyAxKTtcclxuXHRcdFx0XHRcdGZyb250ID0gaGFuZGxlRGF0YSh0aGF0LCBrZXkuc2xpY2UoMCwgaW5kZXhfYWZ0ZXIpLCBhZnRlcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFmdGVyID0ga2V5O1xyXG5cdFx0XHRcdFx0ZnJvbnQgPSB0aGF0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZnJvbnQuJGRhdGEgJiYgZnJvbnQuJGRhdGFbYWZ0ZXJdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmcm9udCwgYWZ0ZXIsIHtcclxuXHRcdFx0XHRcdFx0Z2V0KCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9udC4kZGF0YVthZnRlcl07XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHNldChuZXdWYWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdGZyb250LiRkYXRhW2FmdGVyXSA9IG5ld1ZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuJGZvcmNlVXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRmcm9udFthZnRlcl0gPSB2YWw7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuJHNldChmcm9udCwgYWZ0ZXIsIHZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gdGhpcy4kZm9yY2VVcGRhdGUoKTtcclxuXHRcdFx0aXNGbihjYWxsYmFjaykgJiYgdGhpcy4kbmV4dFRpY2soY2FsbGJhY2spO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KTtcclxuYXBwLiRtb3VudCgpOyIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8c2NyaXB0PlxuLy9hcHAuanNcbmNvbnN0IFNlcnZpY2UgPSByZXF1aXJlKCcuL1NlcnZpY2VzL3NlcnZpY2VzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcblx0XHR0aGlzLmdldEFwcEZhY2lsaXR5KCk7IC8v6I635Y+W5b2T5YmN5omL5py66K6+5aSH5L+h5oGvXG5cdFx0Ly8gI2VuZGlmXG5cdFx0dmFyIGxvZ3MgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXTtcblx0XHRsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSk7XG5cdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncyk7IC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuXG5cdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxuXHRcdHVuaS5nZXRTZXR0aW5nKHtcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcblx0XHRcdFx0XHQvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKgg55m75b2VXG5cdFx0XHRcdFx0dW5pLmxvZ2luKHtcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldCBjb2RlID0gcmVzLmNvZGU7IC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG5cblx0XHRcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLmNvZGUgPSByZXMuY29kZTtcblx0XHRcdFx0XHRcdFx0dW5pLmdldFVzZXJJbmZvKHtcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGRhdGFMaXN0cyA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29kZTogY29kZVxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBqaWFtaURhdGEgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvZGU6IGNvZGVcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHRTZXJ2aWNlLnVzZXJJZihkYXRhTGlzdHMsIGppYW1pRGF0YSkudGhlbihyZXMgPT4ge30pOyAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZhaWw6IGVycm9yID0+IHt9XG5cdFx0fSk7XG5cdFx0Ly8gI2VuZGlmXG5cdH0sXG5cdGdsb2JhbERhdGE6IHtcblx0XHR1c2VySW5mbzogbnVsbFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly8g6I635Y+WYXBw6K6+5aSH5L+h5oGvXG5cdFx0Z2V0QXBwRmFjaWxpdHkoKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2FwcEZhY2lsaXR5JywgdGhpcy4kdS5zeXMoKSk7IC8v5omL5py65L+h5oGvXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYXBwVmVyc2lvbicsIHBsdXMucnVudGltZS52ZXJzaW9uLnNwbGl0KCcuJykuam9pbignJykpOyAvL2FwcOeJiOacrOWPt1xuXHRcdFx0XHRwbHVzLmRldmljZS5nZXRJbmZvKHtcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0RGV2aWNlSW5mbyBzdWNjZXNzOiAnICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdjbGllbnRJbmZvJywgZSk7IC8v6K6+5aSH5L+h5oGvXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0RGV2aWNlSW5mbyBmYWlsZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gZXJyb3Jcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbi8qKmFwcC53eHNzKiovXG4uY29udGFpbmVyIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDIwMHJweCAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuPC9zdHlsZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi91dmlldy11aS9pbmRleC5zY3NzJztcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDk5ODEzNDc4ODlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRjov6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi/ova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uL+i9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDk5ODEzNTA5MTdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRjov6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==