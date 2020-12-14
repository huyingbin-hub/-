const config = require("../config.js");

const request = require("../utils/request.js");

// // #ifndef MP-TOUTIAO
// const loginApi = 'http://test.zhongjianedu.com/login.php';
// // #endif
// #ifdef MP-TOUTIAO|MP-WEIXIN
const loginApi = 'https://www.zjtaoke.cn/login.php';
// #endif
const Services = {
	// 微信/头条小程序登录
	login(data, jiamiData) {
		return request._post(`${loginApi}/Login/login`, data, jiamiData, 2);
	},
	// xcx_userxx微信/头条小程序存储信息
	xcx_userxx(data, jiamiData) {
		return request._post(`${loginApi}/Login/xcx_userxx`, data, jiamiData, 2);
	},
	//判断用户信息是否获取
	userIf(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/userIf`, data, jiamiData, 2);
	},

	//存储微信用户信息
	userxx(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/userxx`, data, jiamiData, 2);
	},

	//获取手机号
	number(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/number`, data, jiamiData, 2);
	},

	//项目类别
	parentAjax(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/parentAjax`, data, jiamiData, 2);
	},

	//图片上传
	uploadFile(data, jiamiData) {
		return request._post(`${config.api}/Trains2/uploadFile`, data, jiamiData, 2);
	},

	//发布答疑
	circle(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/circle`, data, jiamiData, 2);
	},

	//答疑历史记录
	circleHistory(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/circleHistory`, data, jiamiData, 2);
	},

	//答疑详情
	circleDetails(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/circleDetails`, data, jiamiData, 2);
	},

	//解决问题
	solve(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/solve`, data, jiamiData, 2);
	},

	//回复老师评论
	reply(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/reply`, data, jiamiData, 2);
	},

	//投诉回复
	complain(data, jiamiData) {
		return request._post(`${config.api}/Zkbxcx/complain`, data, jiamiData, 2);
	},

	//中课帮）答疑获取积分
	answerIntegral(data, jiamiData) {
		return request._post(`${config.api}/Eleven/answerIntegral`, data, jiamiData, 2);
	}

};
module.exports = Services;
