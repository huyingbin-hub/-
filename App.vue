<script>
//app.js
const Service = require('./Services/services');

export default {
	onLaunch: function(options) {
		// #ifdef APP-PLUS
		this.getAppFacility(); //获取当前手机设备信息
		// #endif
		var logs = uni.getStorageSync('logs') || [];
		logs.unshift(Date.now());
		uni.setStorageSync('logs', logs); // 获取用户信息

		// #ifdef MP-WEIXIN
		uni.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 登录
					uni.login({
						success: res => {
							let code = res.code; // 发送 res.code 到后台换取 openId, sessionKey, unionId

							this.globalData.code = res.code;
							uni.getUserInfo({
								success: res => {
									let dataLists = {
										code: code
									};
									let jiamiData = {
										code: code
									};
									Service.userIf(dataLists, jiamiData).then(res => {}); // 可以将 res 发送给后台解码出 unionId
								}
							});
						}
					});
				}
			},
			fail: error => {}
		});
		// #endif
	},
	globalData: {
		userInfo: null
	},
	methods: {
		// 获取app设备信息
		getAppFacility() {
			try {
				uni.setStorageSync('appFacility', this.$u.sys()); //手机信息
				uni.setStorageSync('appVersion', plus.runtime.version.split('.').join('')); //app版本号
				plus.device.getInfo({
					success: function(e) {
						console.log('getDeviceInfo success: ' + JSON.stringify(e));
						uni.setStorageSync('clientInfo', e); //设备信息
					},
					fail: function(e) {
						console.log('getDeviceInfo failed: ' + JSON.stringify(e));
					}
				});
			} catch (e) {
				// error
			}
		}
	}
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
@import './uview-ui/index.scss';
</style>
