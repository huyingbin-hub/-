<template>
	<view class="tanSwitch">
		<!--文本框-->
		<view>
			<u-cell-group>
				<!-- <van-field :value="message" type="textarea" placeholder="输入题目内容" :autosize="textAutosize" border="false" @change="onChange"></van-field> -->
				<!-- <u-input :custom-style="{padding: '30rpx 50rpx',}" v-model="message" type="textarea" placeholder="输入题目内容" :auto-height="textAutosize"
				 :border="false" /> -->
				 <textarea class="uni-input" @blur="onKeyInput" placeholder="输入题目内容" type="textarea" auto-height/>
			</u-cell-group>
		</view>
		<!--上传图片-->
		<view class="uploadPictures">
			<!-- <van-uploader :file-list="fileList" max-count="9" deletable="true" show-upload="false" @after-read="afterRead"
			 @delete="deleteImg"></van-uploader> -->
			 <u-upload :auto-upload="true" ref="uUpload" :action="action" :file-list="fileList" max-count="9" deletable="true"
			  show-upload-list="false" @on-uploaded="afterRead" @on-remove="deleteImg"></u-upload>
		</view>

		<!--按钮-->
		<view class="popupBtn">
			<u-button class="u-button" type="primary" @click="publishBtn">回复</u-button>
		</view>
	</view>
</template>

<script>
	// pages/myQuestionsReply/myQuestionsReply.js
	const Service = require("../../Services/services");

	export default {
		data() {
			return {
				textAutosize: {
					minHeight: 90
				},
				message: "",
				fileList: [] //上传图片数组
					,
				item: "",
				userInfoData: "",
				allLists: "",
				action:"https://www.zjtaoke.cn/Trains2/uploadFile"
			};
		},

		components: {
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			var that = this;
			let item = JSON.parse(decodeURIComponent(options.item));
			let userInfoData = JSON.parse(decodeURIComponent(options.userInfoData));
			let allLists = JSON.parse(decodeURIComponent(options.allLists));
			that.item = item
			that.userInfoData = userInfoData
			that.allLists = allLists
		},

		methods: {
			//输入框内容 实时获取input的值
			onKeyInput: function(event) {
				this.message = event.detail.value
			},

			//上传图片
			afterRead(event) {
				let that = this;
				that.fileList = event
			},

			//删除图片
			deleteImg(event) {
				// let index = event.detail.index;
				let zongList = this.fileList;
				zongList.splice(event, 1);
				this.fileList = zongList
			},

			//发表按钮事件
			publishBtn() {
				let item = this.item;
				let fileList = this.fileList;
				let imgLists = "";
				fileList.map(item => {
					imgLists += item.response + ",";
				});

				if (imgLists.length > 0) {
					imgLists = imgLists.substr(0, imgLists.length - 1);
				}

				if (this.message == '' && this.fileList == '') {
					uni.showToast({
						title: "请输入回复内容或者图片",
						icon: 'none',
						duration: 1000
					});
					return;
				}

				let dataLists = {
					circle_id: this.allLists.id,
					p_id: item.id,
					wechat_id: this.userInfoData.id,
					yg_id: item.yg_id,
					wordse: this.message,
					img: imgLists
				};
				let jiamiData = {
					circle_id: this.allLists.id,
					p_id: item.id,
					wechat_id: this.userInfoData.id,
					yg_id: item.yg_id,
					wordse: this.message,
					img: imgLists
				};
				Service.reply(dataLists, jiamiData).then(res => {
					if (res.event == 100) {
						uni.navigateBack({
							delta: 1
						});
						uni.showToast({
							title: "回复成功",
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
	/* pages/myQuestionsReply/myQuestionsReply.wxss */
	.uploadPictures {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx;
	}

	.uni-input{
		padding: 30rpx 50rpx;
		min-height: 150rpx;
	}

	.popupBtn {
		margin: 50rpx auto;
		display: flex;
		justify-content: center;
	}

	.popupBtn .u-button {
		width: 600rpx;
		height: 100rpx;
		padding: 0;
		font-size: 36rpx;
		font-weight: bold;
	}
</style>
