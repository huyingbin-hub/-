<template>
	<!--pages/answerRecord/answerRecord.wxml-->
	<view class="answer-record">
		<view class="answerRecord-module" v-if="allLists != ''">
			<view v-for="(item, index) in allLists" :key="index" class="answerModule-item" :data-item="item" @tap="goToMyQuestion">
				<view class="item-feedback">
					<!--0待回复.1待反馈.2已解决 -->
					<view v-if="item.state == 0" class="feedbackRight waitReplyColor">待回复</view>
					<view v-else-if="item.state == 1" class="feedbackRight fanKuiColor">待反馈</view>
					<view v-else-if="item.state == 2" class="feedbackRight jieJueColor">已解决</view>
				</view>
				<view class="item-title">{{ item.lb_id }}</view>
				<!--中间详细信息-->
				<view class="item-content">
					<view class="itemContent-head">
						<view class="contentHead-left">
							<view><image class="headLeft-img" :src="userInfoData.user_pic"></image></view>
							<view class="headLeft-user">
								<view>{{ userInfoData.user_nickname }}</view>
								<view>{{ item.create_time }}</view>
							</view>
						</view>
						<view class="contentHead-right">来源：{{ item.source }}</view>
					</view>
					<view class="itemContent-wordse" v-if="item.wordse != ''">{{ item.wordse }}</view>
					<view class="itemContent-wordse" v-else>暂无描述</view>
				</view>
				<!--反馈操作-->
				<view class="item-operation">
					<view class="operation-time">{{ item.up_sj }}</view>
					<view class="operation-right">
						<view class="operation-tu"><image class="operation-img" src="/static/image/paizhao.png"></image></view>
						<view v-if="item.state == 0" class="operation-btn">去回复</view>
						<view v-else-if="item.state == 1" class="operation-btn">去反馈</view>
						<view v-else-if="item.state == 2" class="operation-btn">已解决</view>
					</view>
				</view>
			</view>
		</view>

		<!--暂无数据-->
		<view class="zanWu" v-else>暂无问题</view>
	</view>
</template>

<script>
// pages/answerRecord/answerRecord.js
const Service = require('../../Services/services');

export default {
	data() {
		return {
			page: 1,
			size: 10,
			allLists: [],
			oldlists: [], //老数据
			total: '',
			userInfoData: '',
			state: 0
		};
	},

	components: {},
	props: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		if (options.state) {
			this.state = options.state;
		}
		uni.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		var that = this;
		uni.getStorage({
			key: 'userInfoData',
			success(res) {
				that.userInfoData = res.data;
				that.getAnswerRecordList(); //获得答疑历史记录
			}
		});
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {
		if (this.allLists.length < this.total) {
			var page = this.page;
			page++;
			this.oldlists = this.allLists;
			this.page = page;
			this.getAnswerRecordList();
		} else {
			uni.showToast({
				title: '到底了',
				icon: 'none',
				duration: 2000
			});
		}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {},
	methods: {
		//获得答疑历史记录
		getAnswerRecordList() {
			let dataLists = {
				wechat_id: this.userInfoData.user_id,
				page: this.page,
				size: this.size
			};
			let jiamiData = {
				wechat_id: this.userInfoData.user_id,
				page: this.page,
				size: this.size
			};
			uni.showLoading({
				title: '加载中...'
			});
			if (this.state == 0) {
				// 历史记录
				Service.circleHistory(dataLists, jiamiData).then(res => {
					if (res.event == 100) {
						//获取上次加载的数据
						var oldlists = this.oldlists;
						var newlists = oldlists.concat(res.list); //合并数据 res.data 你的数组数据
						this.allLists = newlists;
						this.total = res.num;
						uni.hideLoading();
					} else {
						uni.hideLoading();
					}
				});
			} else if (this.state == 1) {
				// 我的消息
				Service.circleFeedback(dataLists, jiamiData).then(res => {
					if (res.event == 100) {
						//获取上次加载的数据
						var oldlists = this.oldlists;
						var newlists = oldlists.concat(res.list); //合并数据 res.data 你的数组数据
						this.allLists = newlists;
						this.total = res.num;
						uni.hideLoading();
					} else {
						uni.hideLoading();
					}
				});
			}
		},

		//跳转我的问题页面 -- 详情页
		goToMyQuestion(e) {
			let id = e.currentTarget.dataset.item.id;
			uni.navigateTo({
				url: '/pages/myQuestions/myQuestions?id=' + id
			});
		}
	}
};
</script>
<style scoped>
/* pages/answerRecord/answerRecord.wxss */
.answer-record {
	padding: 50rpx 30rpx;
}

.answerModule-item {
	width: 690rpx;
	height: 422rpx;
	box-shadow: 0px 3rpx 22rpx 0px rgba(0, 0, 0, 0.05);
	border-radius: 20rpx;
	background-color: #fff;
	margin-bottom: 38rpx;
}

.item-feedback {
	width: 100%;
	height: 42rpx;
	display: flex;
	justify-content: flex-end;
}

.feedbackRight {
	width: 122rpx;
	height: 42rpx;
	border-top-right-radius: 20rpx;
	border-bottom-left-radius: 20rpx;
	font-size: 24rpx;
	color: #fff;
	text-align: center;
	line-height: 42rpx;
}

.waitReplyColor {
	background-color: #ec6941;
}

.fanKuiColor {
	background-color: #0998ff;
}

.jieJueColor {
	background-color: #e4e4e4;
	color: #999999;
}

.item-title {
	padding: 0 30rpx;
	margin-bottom: 26rpx;
	font-size: 30rpx;
	font-weight: bold;
	color: #333333;
}

.item-content {
	padding: 20rpx 0 0;
	margin: 0 auto;
	width: 630rpx;
	height: 250rpx;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid #f4f4f4;
	box-sizing: border-box;
}

.itemContent-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.contentHead-left {
	display: flex;
}

.headLeft-img {
	width: 58rpx;
	height: 58rpx;
	margin-right: 18rpx;
	border-radius: 50%;
}

.headLeft-user {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 24rpx;
	color: #333333;
}

.contentHead-right {
	font-size: 24rpx;
	font-weight: 500;
	color: #666666;
}

.itemContent-wordse {
	margin-top: 10rpx;
	font-size: 24rpx;
	font-weight: 500;
	color: #666666;
	line-height: 46rpx;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	align-content: center;
}

.item-operation {
	height: 60rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
}

.operation-time {
	font-size: 24rpx;
	font-weight: 500;
	color: #999999;
}

.operation-right {
	display: flex;
	align-items: center;
}

.operation-img {
	width: 26rpx;
	height: 26rpx;
	margin-right: 20rpx;
}

.operation-btn {
	font-size: 28rpx;
	font-weight: 500;
	color: #999999;
}

.zanWu {
	font-size: 30rpx;
	text-align: center;
}
</style>
