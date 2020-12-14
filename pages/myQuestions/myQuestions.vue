<template>
	<!--pages/myQuestions/myQuestions.wxml-->
	<view class="myContainer">
		<view class="my-question">
			<!--问题数据展示-->
			<view class="question-container">

				<view class="container-head">
					<view>
						<image class="head-img" :src="userInfoData.user_pic"></image>
					</view>
					<view class="head-text">
						<view class="text-name">{{userInfoData.user_nickname}}</view>
						<view class="text-time">{{allLists.create_time}}</view>
					</view>
				</view>

				<view class="container-wordse">
					<view class="wordse-label">
						<image class="wordseLabel-img" src="/static/image/biaoqian.png"></image>
						<text class="wordseLabel-text">{{allLists.lb_id}} {{allLists.kmlb}}</text>
					</view>
					<text class="wordse-details">{{allLists.wordse}}</text>
				</view>

				<view class="container-imgs">
					<image v-for="(item, index) in allLists.img" :key="index" class="containerImg" :src="item" :data-list="allLists.img"
					 :data-src="item" @tap="imgYu"></image>
				</view>
			</view>

			<!--灰色分隔块-->
			<view class="huiModule"></view>

			<!--评论模块-->
			<view v-if="allLists.pl != ''" class="comment-module">
				<view class="commentTitle">评论 {{allLists.pl.length}}</view>

				<!--评论内容-->
				<view class="commentDetails">
					<view v-for="(item, index) in allLists.pl" :key="index" class="commentDetails-items">
						<!--评论人信息-->
						<view class="commentPerson">
							<view class="commentPerson-left">
								<view>
									<image class="personLeft-img" src="/static/image/morentouxing.png"></image>
								</view>
								<view class="personLeft-text">
									<view>{{item.ygName}}</view>
									<view>{{item.create_time}}</view>
								</view>
							</view>
							<view class="commentPerson-right" v-if="item.complain == 0" :data-item="item" @tap="complaintClick">
								<view>
									<image class="personRight-img" src="/static/image/tousu.png"></image>
								</view>
								<view class="personRight-text">投诉</view>
							</view>
							<view class="commentPerson-right" v-else-if="item.complain == 1">
								<view class="personRight-text">已投诉</view>
							</view>
						</view>

						<!--评论人内容信息-->
						<view class="commentMessage">
							<view class="commentMessage-wordse">{{item.wordse}}</view>
							<view class="container-imgs">
								<image v-for="(itemImg, index2) in item.img" :key="index2" class="containerImg" :src="itemImg" :data-list="item.img"
								 :data-src="itemImg" @tap="imgYu"></image>
							</view>
						</view>

						<!--回复功能模块-->
						<view class="replyModule">
							<view class="replyModule-right" :data-item="item" @tap="replyClick">
								<image class="personRight-img" src="/static/image/huifu.png"></image>
								<view class="replyModule-text">回复</view>
							</view>
						</view>

						<!--回复模块-->
						<view class="replyConent" v-if="item.erpl != '' && item.erpl != null">
							<!--倒三角-->
							<view class="daoThree"></view>
							<view v-for="(erplItem, index2) in item.erpl" :key="index2" class="replyConent-item">
								<!--评论人信息-->
								<view class="commentPerson">
									<view class="commentPerson-left">
										<view>
											<image class="personLeft-img" :src="userInfoData.user_pic"></image>
										</view>
										<view class="personLeft-text">
											<view>{{erplItem.wechatName}}</view>
											<view>{{erplItem.create_time}}</view>
										</view>
									</view>
								</view>

								<!--评论人内容信息-->
								<view class="commentMessage">
									<view class="commentMessage-wordse">{{erplItem.wordse}}</view>
									<view class="container-imgs">
										<image v-for="(erplItemImg, index) in erplItem.imgs" :key="index" class="replyConentImg" :src="erplItemImg"
										 :data-list="erplItem.imgs" :data-src="erplItemImg" @tap="imgYu"></image>
									</view>
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>

			<!--评论模块--暂无数据的-->
			<view v-else class="zanWu">
				暂无评论
			</view>
		</view>
		<!--固定在页脚-解决按钮-->
		<view class="fiex-footer">
			<view class="footer-item" data-type="1" @tap="solveQuestion">
				<image v-if="allLists.state != 2" class="footerItem-img" src="/static/image/on_jiejue.png"></image>
				<image v-else class="footerItem-img" src="/static/image/jiejue.png"></image>
				<text class="footerItem-text">问题解决了</text>
			</view>
			<view class="footer-item" data-type="2" @tap="solveQuestion">
				<image v-if="allLists.state == 2" class="footerItem-img" src="/static/image/no_jiejue.png"></image>
				<image v-else class="footerItem-img" src="/static/image/on_no_jiejue.png"></image>
				<text class="footerItem-text">问题没有解决</text>
			</view>
		</view>
	</view>
</template>

<script>
	// pages/myQuestions/myQuestions.js
	const Service = require("../../Services/services");
	export default {
		data() {
			return {
				answerId: '',
				//答疑id
				userInfoData: '',
				//用户数据
				allLists: [],
				switchShow: false,
				textAutosize: {
					minHeight: 90
				},
				message: "",
				fileList: [],
				//上传图片数组
				isModuleShow: false
			};
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			});
			console.log(options.id);
			var that = this;
			that.answerId = options.id
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
				success:function(res){
					that.userInfoData = res.data
					that.getDetailsList(); //获取详情页数据
				}
			});
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			//轮播图点击预览
			imgYu: function(event) {
				var that = this;
				var src = event.currentTarget.dataset.src; //获取data-src

				var imgList = event.currentTarget.dataset.list; //获取data-list

				console.log(src);
				console.log(imgList); //图片预览

				uni.previewImage({
					current: src,
					// 当前显示图片的http链接
					urls: imgList // 需要预览的图片http链接列表

				});
			},

			//获取详情页数据
			getDetailsList() {
				let dataLists = {
					wechat_id: this.userInfoData.user_id,
					id: this.answerId
				};
				let jiamiData = {
					wechat_id: this.userInfoData.user_id,
					id: this.answerId
				};
				Service.circleDetails(dataLists, jiamiData).then(res => {
					console.log(res);
					if (res.event == 100) {
						this.allLists = res.list
					}
				});
			},

			//去解决--页脚两个
			solveQuestion(e) {
				console.log(this.allLists);

				if (this.allLists.state == 2) {
					uni.showToast({
						title: "问题已解决",
						icon: 'none',
						duration: 1000
					});
					return;
				}

				let type = e.currentTarget.dataset.type;
				let dataLists = {
					circle_id: this.allLists.id,
					solve: type
				};
				let jiamiData = {
					circle_id: this.allLists.id,
					solve: type
				};
				Service.solve(dataLists, jiamiData).then(res => {
					console.log(res);

					if (res.event == 100) {
						this.getDetailsList();
						uni.showToast({
							title: "反馈成功",
							icon: 'none',
							duration: 1000
						});
					}
				});
			},

			//点击回复事件
			replyClick(e) {
				if (this.allLists.state == 2) {
					uni.showToast({
						title: "问题已解决",
						icon: 'none',
						duration: 1000
					});
					return;
				}

				console.log(e.currentTarget.dataset.item);
				let item = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.item));
				let userInfoData = encodeURIComponent(JSON.stringify(this.userInfoData));
				let allLists = encodeURIComponent(JSON.stringify(this.allLists));
				uni.navigateTo({
					url: '/pages/myQuestionsReply/myQuestionsReply?item=' + item + '&userInfoData=' + userInfoData + '&allLists=' +
						allLists
				});
			},

			//关闭选择科目弹窗
			onClose() {
				this.switchShow = false
			},

			//输入框内容
			onChange(event) {
				this.message = event.detail
			},

			//上传图片
			afterRead(event) {
				let that = this;
				const file = event.detail.file;
				console.log(file);
				uni.uploadFile({
					url: 'https://www.zjtaoke.cn/Trains2/uploadFile',
					filePath: file.path,
					name: 'file',
					formData: {},

					success(res) {
						console.log(res); // 上传完成需要更新 fileList

						let data = res.data;
						console.log(data);
						const {
							fileList = []
						} = that;
						fileList.push({
							url: data
						});
						console.log(that.fileList);
					},

					fail(error) {}

				});
			},

			//删除图片
			deleteImg(event) {
				console.log(event.detail.index);
				let index = event.detail.index;
				let zongList = this.fileList;
				zongList.splice(index, 1);
				console.log(zongList);
				this.fileList = zongList
			},

			//投诉事件
			complaintClick(e) {
				if (this.allLists.state == 2) {
					uni.showToast({
						title: "问题已解决",
						icon: 'none',
						duration: 1000
					});
					return;
				}

				let item = e.currentTarget.dataset.item;
				console.log(item);
				let dataLists = {
					p_id: item.id,
					complain: 1
				};
				let jiamiData = {
					p_id: item.id,
					complain: 1
				};
				Service.complain(dataLists, jiamiData).then(res => {
					console.log(res);

					if (res.event == 100) {
						this.getDetailsList(); //获取详情页数据
						uni.showToast({
							title: "投诉成功",
							icon: 'none',
							duration: 1000
						});
					}
				});
			}

		}
	};
</script>
<style scoped>
	/* pages/myQuestions/myQuestions.wxss */
	.myContainer {
		position: relative;
	}

	.my-question {
		margin: 50rpx 0 120rpx 0;
	}

	/*问题数据展示*/
	.question-container {
		padding: 0 30rpx;
		margin-bottom: 50rpx;
	}

	.container-head {
		display: flex;
		align-items: center;
	}

	.head-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 26rpx
	}

	.head-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	.text-name {
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
	}

	.text-time {
		font-size: 24rpx;
		font-weight: 500;
		color: #333333;
	}

	.container-wordse {
		width: 100%;
		margin-top: 20rpx;
	}

	.wordse-label {
		display: inline-block;
		align-items: center;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 18rpx;
		margin-right: 16rpx;
		background-color: #F0F0F0;
		border-radius: 25rpx;
		box-sizing: border-box;
	}

	.wordseLabel-img {
		width: 22rpx;
		height: 22rpx;
		margin-right: 10rpx;
	}

	.wordseLabel-text {
		font-size: 24rpx;
		font-weight: 500;
		color: #666666;
	}

	.wordse-details {
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		color: #666666;
	}

	.container-imgs {
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.containerImg {
		width: 200rpx;
		height: 200rpx;
		margin: 0 40rpx 20rpx 0;
		border-radius: 4rpx;
	}

	.containerImg:nth-child(3n) {
		margin: 0 0 20rpx 0;
	}

	.huiModule {
		background-color: #F0F4F6;
		height: 16rpx;
		width: 100%;
	}

	/*评论模块*/
	.comment-module {
		padding: 40rpx 30rpx;
	}

	.commentDetails-items {
		margin-bottom: 50rpx;
		padding-bottom: 40rpx;
		border-bottom: 1px solid #DCDDDD;
	}

	.commentDetails-items:last-child {
		border-bottom: none;
	}

	.comment-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
	}

	.commentDetails {
		margin-top: 50rpx;
	}

	.commentPerson {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.commentPerson-left {
		display: flex;
	}

	.personLeft-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 25rpx;
	}

	.personLeft-text {
		font-size: 28rpx;
		font-weight: 500;
		color: #333333;
	}

	.commentPerson-right {
		font-size: 26rpx;
		font-weight: 400;
		color: #999999;
		display: flex;
	}

	.personRight-img {
		width: 32rpx;
		height: 32rpx;
		margin-right: 18rpx;
	}

	.personRight-text {
		font-size: 26rpx;
		font-weight: 400;
		color: #999999;
	}

	.commentMessage {
		margin: 30rpx 0;
	}

	.commentMessage-wordse {
		font-size: 30rpx;
		font-weight: 500;
		color: #666666;
		margin-bottom: 30rpx;
		word-break: break-all
	}

	.replyModule {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.replyModule-right {
		display: flex;
	}

	.replyModule-text {
		font-size: 28rpx;
		font-weight: 500;
		color: #999999;
	}

	.daoThree {
		position: absolute;
		right: 60rpx;
		top: -20rpx;
		width: 0;
		height: 0;
		border-right: 30rpx solid transparent;
		border-left: 30rpx solid transparent;
		border-bottom: 20rpx solid #F5F5F5;
	}

	.replyConent {
		margin-top: 20rpx;
		padding: 40rpx 30rpx 40rpx 50rpx;
		background-color: #F5F5F5;
		border-radius: 12rpx;
		position: relative;
	}

	.replyConentImg {
		width: 180rpx;
		height: 180rpx;
		margin: 0 20rpx 20rpx 0;
		border-radius: 4rpx;
	}

	.zanWu {
		padding: 150rpx 0;
		text-align: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #999999;
	}





	/*页脚*/
	.fiex-footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #DCDDDD;
		background-color: #fff;
	}

	.footer-item {
		display: flex;
		align-items: center;
	}

	.footerItem-img {
		width: 40rpx;
		height: 40rpx;
		margin-right: 24rpx;
	}

	.footerItem-text {
		font-size: 22rpx;
		font-weight: 500;
		color: #666666;
	}
</style>
