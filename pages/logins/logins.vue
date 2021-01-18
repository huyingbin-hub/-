<template>
	<view class="login-container">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<!-- 内容 -->
		<view class="login-subject ">
			<view class="icon_guanbi">
				<!-- <image src="../../static/login/icon_guanbi.png" mode=""></image> -->
				<image src="" mode=""></image>
			</view>
			<view class="icon_logo"><image src="../../static/login/logo.png" mode=""></image></view>
			<view class="login-input login-inputs"><u-input :clearable="false" type="number" v-model="form.phone" placeholder="手机号" /></view>
			<view class="login-inputs login-input-margin"><u-input :clearable="false" :password-icon="true" type="password" v-model="form.password" placeholder="密码" /></view>
			<view class="login-button"><button type="primary" @click="zkbLogin">登录</button></view>
			<view class="login-hint">
				<view class="" @click="forgetPassword">忘记密码?</view>
				<view class="login-register" @click="register">注册账号</view>
			</view>
			<!-- 底部 -->
			<!-- <view><u-divider color="#CCCCCC" half-width="75" fontSize="24" border-color="#CCCCCC">其他方式登录</u-divider></view>
			<view class="sanFang-icon"><image @click="wxLogin" src="../../static/images/login/wx.png" mode=""></image></view> -->
		</view>
		<!--协议同意弹窗-->
		<u-modal
			v-model="dealShow"
			:title-style="{ color: '#000' }"
			title="隐私协议政策提示"
			show-cancel-button
			confirm-text="同意"
			cancel-text="不同意"
			@confirm="consentClick"
			@cancel="noConsentClick"
		>
			<view class="slot-content">
				感谢您信任并使用中课帮。我们将依据《中课帮用户服务协议》及《中课帮用户隐私政策》来帮助您了解我们在收集、使用、存储和共享您个人信息的情况以及您享有的相关权利。在您使用中课帮资料共享服务时，我们将收集您的设备信息。在您使用中课帮扫码、拍搜等服务时，我们需要获取您设备上的相机权限信息。您可以在相关页面访问、修改、删除您的个人信息或管理您的授权。我们会采用行业内领先的安全技术来保护您的个人信息。您可以通过阅读完整的
				<text style="color: #2424F6;" @click="isProtocol(0)">《中课帮用户服务协议》</text>
				<text style="color: #2424F6;" @click="isProtocol(1)">《中课帮用户隐私政策》</text>
				来了解详细信息。
			</view>
		</u-modal>
	</view>
</template>

<script>
import { _methods } from '../../utils/public.js';
const Service = require('../../Services/services');
export default {
	data() {
		return {
			dealShow: false,
			form: {
				phone: '',
				password: '',
				appFacility: '', //手机信息
				clientInfo: '', //设备信息
				appVersion: '' //app版本号
			},
			longitude: '', //经度
			latitude: '' //纬度
		};
	},
	onShow() {
		this.getAppFacility();
		// 判断隐私协议/用户协议用户是否确认
		let protocol = uni.getStorageSync('protocol');
		protocol ? (this.dealShow = false) : (this.dealShow = true);
	},
	methods: {
		..._methods,
		// 协议
		isProtocol(type) {
			uni.navigateTo({
				url: '/pages/protocol/protocol?type=' + type
			});
		},
		// 获取app设备信息
		getAppFacility() {
			try {
				this.form.appFacility = uni.getStorageSync('appFacility'); //手机信息
				this.form.clientInfo = uni.getStorageSync('clientInfo'); //设备信息
				this.form.appVersion = uni.getStorageSync('appVersion'); //app版本号
			} catch (e) {
				// error
			}
		},
		// 登录
		zkbLogin() {
			if (!this.form.phone) {
				this.show_toast('手机号不能为空');
				return;
			}
			if (!this.checkPhone(this.form.phone)) {
				this.show_toast('手机号格式不正确');
				return;
			}
			if (!this.form.password) {
				this.show_toast('密码不能为空');
				return;
			}
			// info[type]	是	string	类型【zijie,weixin,app,web】
			// info[user_phone]	是	int	手机号
			// info[user_password]	是	string	密码
			// info[drivice_id]	是	int	设别id
			// info[version]	是	string	app版本号
			// info[phone_lx]	是	string	手机类型
			// info[phone_version]	是	string	手机型号
			// info[lat]	是	string	纬度
			// info[lon]	是	string	经度
			let postObj = {
				'info[type]': 'app',
				'info[user_phone]': this.form.phone,
				'info[user_password]': this.form.password,
				'info[version]': this.form.appVersion,
				'info[drivice_id]': this.form.clientInfo.uuid,
				'info[phone_lx]': this.$u.os(),
				'info[phone_version]': this.form.appFacility.model,
				'info[lat]': '',
				'info[lon]': ''
			};
			console.log({ postObj }, '登录参数');
			Service.login(postObj, postObj).then(res => {
				console.log(res, 'res登录');
				if (res.event == 100) {
					console.log({ res }, '成功值');
					if (res.objList.user_nickname == '') {
						res.objList.user_nickname = res.objList.user_phone;
					}
					res.objList.user_phone = this.form.phone;
					this.$u.toast('登录成功');
					uni.setStorage({
						key: 'userInfoData',
						data: res.objList,
						success: function() {},
						fail: function() {}
					});
					uni.setStorage({
						key: 'userKey',
						data: res.date.cache_key,
						success: function() {},
						fail: function() {}
					});
					// this.reserveUserInfo(res.objList);
					setTimeout(function() {
						uni.reLaunch({
							url: '../index/index'
						});
					}, 500);
				}else{
					this.$u.toast(res.msg)
				}
			}).then(()=>{
				
			})
		},

		// 存储用户信息  目前不调用  胡  2020/12/26
		// reserveUserInfo(data) {
		// 	let dataLists = {
		// 		'info[user_id]': data.user_id,
		// 		'info[user_nickname]': data.user_nickname || '',
		// 		'info[user_pic]': data.user_pic,
		// 		'info[user_gender]': data.user_gender || '',
		// 		'info[city]': data.city || '',
		// 		'info[province]': data.province || '',
		// 		'info[country]': data.country || ''
		// 	};
		// 	let jiamiData = dataLists;
		// 	Service.xcx_userxx(dataLists, jiamiData).then(res => {
		// 		console.log({ res }, '存储用户信息');
		// 	});
		// },
		
		// 微信快捷登录
		wxLogin() {},

		// 忘记密码
		forgetPassword() {
			uni.navigateTo({
				url: './forgetPassword'
			});
		},

		// 注册账号
		register() {
			uni.navigateTo({
				url: './register'
			});
		},
		//协议弹窗同意事件
		consentClick() {
			uni.setStorageSync('protocol', true);
			this.dealShow = false;
		},

		//协议弹窗拒绝事件  退出程序
		noConsentClick() {
			if (uni.getSystemInfoSync().platform == 'ios') {
				plus.ios
					.import('UIApplication')
					.sharedApplication()
					.performSelector('exit');
			} else if (uni.getSystemInfoSync().platform == 'android') {
				plus.runtime.quit();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot-content {
	padding: 20rpx;
	width: 100%;
	box-sizing: border-box;
}
.login-container {
	width: 100%;
	// background-color: #007aff;
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.login-subject {
		width: 716rpx;
		// background-color: #07c160;
	}
	.icon_guanbi {
		margin: 91rpx 0 0 52rpx;
		image {
			width: 34rpx;
			height: 34rpx;
		}
	}
	.icon_logo {
		margin: 57rpx 0 0 317rpx;
		image {
			width: 114rpx;
			height: 114rpx;
		}
	}
	.login-input {
		margin: 79rpx 30rpx 0 38rpx;
	}
	.login-inputs {
		width: 682rpx;
		border-bottom: 1rpx solid #dddddd;
		padding: 17rpx 27rpx 15rpx 16rpx;
		u-input {
			width: 682rpx;
			height: 28rpx;
		}
	}
	.login-input-margin {
		margin: 0 30rpx 0 38rpx;
	}
	.login-button {
		width: 750rpx;
		button {
			width: 642rpx;
			height: 80rpx;
			margin: 54rpx 55rpx 0 53rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
		}
	}
	.login-hint {
		width: 642rpx;
		margin: 41rpx 55rpx 136rpx 53rpx;
		view {
			margin-left: 3rpx;
			float: left;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #999999;
		}
		.login-register {
			margin-left: 0rpx;
			margin-right: 3rpx;
			float: right;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #377df6;
		}
	}
	.sanFang-icon {
		width: 77rpx;
		height: 77rpx;
		margin: 43rpx 0 0 335rpx;
		image {
			width: 77rpx;
			height: 77rpx;
		}
	}
}
</style>
