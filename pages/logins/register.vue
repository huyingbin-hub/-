<template>
	<view>
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="register">
			<view @click="goBack"><u-icon name="arrow-left" color="#616466" size="34"></u-icon></view>
			<view class="login-title">注册账号</view>
			<view class="register-form">
				<u-form class="uview_from" ref="uForm">
					<u-form-item :border-bottom="true" label-width="0">
						<view class="uview_fromInput">
							<image class="uview_fromInput_icom" src="../../static/images/login/haoma.png" mode=""></image>
							<u-input v-model="phone" :clearable="false" placeholder="请输入手机号" type="number" style="width: 100%;" />
						</view>
					</u-form-item>

					<u-form-item class="auth_code_style" :border-bottom="true" label-width="0">
						<view class="icon_code_input">
							<image class="uview_fromInput_icom" src="../../static/images/login/yanzhengma.png" mode=""></image>
							<u-input v-model="authCode" placeholder="请输入验证码" type="number" :clearable="false" />
						</view>
						<u-button hover-class="none" slot="right" :custom-style="codeBtnStyle" type="default" @click="sendCode" :disabled="smsFlag">{{ sendTime }}</u-button>
					</u-form-item>

					<u-form-item :border-bottom="true" label-width="0">
						<view class="uview_fromInput">
							<image class="uview_fromInput_icom" src="../../static/images/login/mima.png" mode=""></image>
							<u-input
								v-model="password"
								type="password"
								placeholder="请输入密码(6-20位数字字母组合）"
								:clearable="false"
								:password-icon="true"
								style="width: 100%;"
							/>
						</view>
					</u-form-item>
				</u-form>
			</view>
			<view class="login-botton"><button type="primary" @click="loginClick">注册</button></view>
		</view>
		<view class="register-explain">
			<view class="" style="width:24rpx;margin-right: 10rpx;">
				<u-checkbox active-color="#377DF6" @change="checkboxChange" shape="circle" size="24" label-size="24" v-model="checked"></u-checkbox>
			</view>
			<view>
				注册登录即视为同意
				<text class="textColorBlue" @click="isProtocol(0)">《用户服务协议》</text>
				<text class="textColorBlue" @click="isProtocol(1)">《用户隐私政策》</text>
			</view>
		</view>
	</view>
</template>

<script>
import { _methods } from '../../utils/public.js';
const Service = require('../../Services/services');
// register 注册
// sendsms	验证码
export default {
	data() {
		return {
			phone: '',
			authCode: '',
			password: '',
			checked: true,
			//获取验证码属性
			smsFlag: false,
			sendTime: '获取验证码',
			snsMsgWait: 60,

			//发送验证码按钮样式
			codeBtnStyle: {
				width: '143rpx',
				height: '42rpx',
				lineHeight: '42rpx',
				fontSize: '24rpx',
				color: '#FF6A03'
			}
		};
	},
	methods: {
		..._methods,
		// 协议
		isProtocol(type) {
			uni.navigateTo({
				url: '/pages/protocol/protocol?type=' + type
			});
		},
		//勾选协议事件
		checkboxChange(e) {
			this.checked = e.value;
		},

		//获取验证码
		sendCode() {
			if (!this.phone) {
				this.show_toast('手机号不能为空');
				return;
			}
			if (!this.checkPhone(this.phone)) {
				this.show_toast('手机号格式不正确');
				return;
			}
			this.smsFlag = true;

			let postObj = {
				user_phone: this.phone,
				user_id: ''
			};
			Service.sendsms(postObj, postObj).then(res => {
				if (res.event == 100) {
					this.show_toast('发送成功');
					console.log(res, '验证码测试');
				} else {
					this.show_toast(res.msg);
					return;
				}
			});
			var inter = setInterval(
				function() {
					this.sendTime = this.snsMsgWait + '秒后重发';
					this.snsMsgWait = this.snsMsgWait - 1;
					if (this.snsMsgWait < 0) {
						clearInterval(inter);
						this.sendTime = '获取验证码';
						this.snsMsgWait = 60;
						this.smsFlag = false;
					}
				}.bind(this),
				1000
			);
		},

		// 返回
		goBack() {
			uni.navigateBack({
				delta: 1
			});
		},

		//注册
		loginClick() {
			if (!this.phone) {
				this.show_toast('手机号不能为空');
				return;
			}
			if (!this.checkPhone(this.phone)) {
				this.show_toast('手机号格式不正确');
				return;
			}
			if (!this.authCode) {
				this.show_toast('验证码不能为空');
				return;
			}
			if (!this.password) {
				this.show_toast('密码不能为空');
				return;
			}
			if (!this.checkPassword(this.password)) {
				this.show_toast('请输入密码(6-20位数字字母组合');
				return;
			}

			let postObj = {
				user_phone: this.phone,
				user_password: this.password,
				smscode: this.authCode,
				user_nickname: '',
				drivice_id: '',
				ywls: '',
				zclx: 'app'
			};
			uni.showLoading({
				title: '注册中...',
				icon: 'none'
			});

			Service.register(postObj, postObj).then(res => {
				if (res.event == 100) {
					this.show_toast('注册成功');
					setTimeout(function() {
						uni.reLaunch({
							url: './logins'
						});
					}, 500);
				} else if(res.event == 104) {
					this.show_toast(res.msg);
					setTimeout(function(){
						uni.navigateTo({
							url:'/pages/logins/forgetPassword'
						})
					},1500)
				}else{
					this.show_toast(res.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
image {
	width: 100%;
	height: 100%;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.register {
	width: 100%;
	height: 100%;
	padding: 95rpx 60rpx 0 63rpx;

	.login-title {
		margin-top: 80rpx;
		padding-left: 22rpx;
		font-size: 34rpx;
		font-weight: 800;
		color: #000000;
	}

	.register-form {
		margin-top: 90rpx;
		padding-left: 7rpx;
	}

	.uview_from {
		/deep/ .u-border-bottom:after {
			border-bottom: 1px solid #f4f4f4;
		}

		.uview_from-item {
			margin-top: 60rpx;
			display: flex;
		}
	}

	.uview_fromInput {
		width: 600rpx;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;

		.uview_fromInput_icom {
			width: 46rpx;
			height: 46rpx;
			display: block;
			margin-right: 10rpx;
		}
	}

	.auth_code_style {
		display: flex;
		justify-content: space-between;

		.icon_code_input {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 30rpx;
		}

		.uview_fromInput_icom {
			width: 46rpx;
			height: 46rpx;
			display: flex;
			margin-right: 10rpx;
		}
	}

	.login-botton {
		margin-top: 50rpx;
	}

	.login-btn {
		width: 600rpx;
		height: 100rpx;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		.login-btnBg {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 2;
		}
	}

	.login-text {
		position: absolute;
		z-index: 3;
		font-size: 34rpx;
		font-weight: bold;
		color: #ffffff;
	}
}

.register-explain {
	margin: 50rpx 0 0 0;
	font-size: 24rpx;
	font-weight: 500;
	color: #9b9b9b;
	display: flex;
	justify-content: center;
	align-items: center;

	.textColorBlue {
		color: #377df6;
	}
}
</style>
