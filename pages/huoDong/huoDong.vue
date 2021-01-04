<template>
	<!--pages/huoDong/huoDong.wxml-->
	<web-view :src="url" @message="getMsgFromWeb" @load="onWebLoad" @error="onWebError"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: "https://www.zjtaoke.cn/eleven/"
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			var that = this;
			let phone = options.phone;
			that.url = 'https://www.zjtaoke.cn/eleven/?phone=' + phone + "&title=" + "3" // url: 'http://192.168.1.6:8080/?phone=' + phone + "&title=" + "3"
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			getMsgFromWeb(e) {
				let type = e.detail.data[0];
				this.jumpXCX(type);
			},

			onWebLoad(e) {
			},

			onWebError(e) {
			}

		}
	};
</script>
<style scoped>
	/* pages/huoDong/huoDong.wxss */
</style>
