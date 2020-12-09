<script>
	//app.js
	const Service = require("./Services/services");

	export default {
		onLaunch: function(options) {
			console.log("options ", options); // let  zhongtiku = options.referrerInfo.extraData.zhongtiku 
			// wx.showToast({
			//   title: zhongtiku,
			//   icon: 'success',
			//   duration: 2000
			// })
			// 展示本地存储能力

			var logs = uni.getStorageSync('logs') || [];
			logs.unshift(Date.now());
			uni.setStorageSync('logs', logs); // 获取用户信息

			// #ifdef MP-WEIXIN
			uni.getSetting({
				success: res => {
					console.log(res);
					if (res.authSetting['scope.userInfo']) {
						// 已经授权，可以直接调用 登录
						uni.login({
							success: res => {
								console.log(res); // 发送 res.code 到后台换取 openId, sessionKey, unionId

								let code = res.code;
								this.globalData.code = res.code;
								uni.getUserInfo({
									success: res => {
										let dataLists = {
											code: code
										};
										let jiamiData = {
											code: code
										};
										Service.userIf(dataLists, jiamiData).then(res => {
											console.log("aaa", res);
											uni.setStorage({
												key: "userInfoData",
												data: res.data
											});
										}); // 可以将 res 发送给后台解码出 unionId

										this.globalData.userInfo = res.userInfo;
									}
								});
							}
						});
					}
				},
				fail: error => {
					console.log(error);
				}
			});
			// #endif
		},
		globalData: {
			userInfo: null
		},
		methods: {}
	};
</script>
<style>
	/**app.wxss**/
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 200rpx 0;
		box-sizing: border-box;
	}
</style>
<style lang="scss">
@import "./uview-ui/index.scss";
</style>
