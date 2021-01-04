<template>
	<view>
		<view class="counts">
			<view class="message-date">2020年10月15日</view>
			<view class="message-count">
				<view class="message-count-title">通知</view>
				<view class="message-count-details">你的提问得到了回复，快去看看吧！</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		
	}
};
</script>

<style lang="scss" scoped>
	.counts{
		width: 750rpx;
		height: 100vh;
	}
.message-date {
	width: 298rpx;
	height: 40rpx;
	background-color: #dddddd;
	border-radius: 8px;
	line-height: 40rpx;
	text-align: center;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 400;
	color: #ffffff;
	margin: 39rpx 225rpx 40rpx 226rpx;
}
.message-count {
	width: 690rpx;
	height: 175rpx;
	margin: 0 30rpx 0 30rpx;
	background: #ffffff;
	border-radius: 8px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	.message-count-title {
		padding: 40rpx 0 18rpx 41rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.message-count-details {
		padding-left: 41rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
	}
}
</style>
