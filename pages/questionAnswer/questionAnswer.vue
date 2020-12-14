<template>
	<view>
		<!--pages/questionAnswer/questionAnswer.wxml-->
		<view>
			<view class="topBackground"></view>
			<!--文本框-->
			<view>
				<u-cell-group>
					<!-- <van-field :value="message" type="textarea" placeholder="输入题目内容" :autosize="textAutosize" border="false" @change="onChange"></van-field> -->
					<!-- <u-input :custom-style="{padding: '30rpx 50rpx',}" v-model="message" type="textarea" placeholder="输入题目内容"
					 auto-height :border="false" /> -->
					<textarea class="uni-input" @blur="onKeyInput" placeholder="输入题目内容" type="textarea" auto-height/>
				</u-cell-group>
			</view>
			<!--上传图片-->
			<view class="uploadPictures">
				<!-- :custom-btn="true" :deletable="true" ref="uUpload" :show-progress="false" :file-list="fileList"
				 :show-upload-list="true" :action="action" max-count="1" auto-upload @on-uploaded="afterRead" -->
				<u-upload :auto-upload="true" ref="uUpload" :action="action" :file-list="fileList" max-count="9" deletable
				 :show-upload-list="true" @on-uploaded="afterRead" @on-remove="deleteImg"></u-upload>
			</view>

			<!--科目展示-->
			<view class="subjects-show" @click="switchCourse">
				<view class="subjects-left">
					<view>
						<image class="subjectsShow-img" src="/static/image/biaoqian.png"></image>
					</view>
					<view class="subjects-text">
						<text class="subjectsText-item">{{oneText+' '+twoText}}</text>
						<text class="subjectsText-explain">（选择您想要问的项目,科目）</text>
					</view>
				</view>
				<view>
					<u-icon name="arrow-right" color="#D8D8D8" size="12px"></u-icon>
				</view>
			</view>

			<!--发表按钮-->
			<view class="publish-button">
				<u-button class="u-button" type="primary" @click="publishBtn">发表</u-button>
			</view>
		</view>

		<u-popup v-model="switchShow" mode="top" height="60%" @close="onClose">
			<tree-select :items='items' @click-nav="onClickNav" :main-active-index="mainActiveIndex" :active-id="activeId"
			 @click-item="onClickItem"></tree-select>
		</u-popup>

		<u-popup v-model="fenShow" class="huoDong" @close="fenShowClose" close-on-click-overlay>
			<image @tap="fenShowClose" class="fenShowImg" src="https://vod.zhongjianedu.com/image/default/845F50CB895C42888C0A2A3F515628EE-6-2.gif"></image>
		</u-popup>
	</view>
</template>

<script>
	// pages/questionAnswer/questionAnswer.js
	const Service = require("../../Services/services");
	const MD5 = require("../../utils/md5");

	export default {
		data() {
			return {
				message: "",
				fileList: [],
				//上传图片数组
				cacheKey: '',
				switchShow: false,
				//控制科目弹出层
				//科目选择属性
				mainActiveIndex: 0,
				activeId: null,
				items: [],
				//双十一活动，
				isHuodong: false,
				//控制是否进行获取得分，每日次数够了，不在进行
				fenShow: false, //控制得分弹窗
				newproject: {},
				oneText: '', //项目
				twoText: '', //科目
				isSelectSubject: false,
				userInfoData: "",
				action: "https://www.zjtaoke.cn/Trains2/uploadFile",
			};
		},

		components: {
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.getParentAjax(); //获取项目列表
		},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			this.getStorages()
		},

		methods: {
			// 实时获取input的值
			onKeyInput: function(event) {
				this.message = event.detail.value
			},
			// 获取getStorages
			getStorages() {
				var that = this;
				uni.getStorage({
					key: 'newproject',
					success(res) {
						that.newproject = res.data
						console.log(that.newproject, '获取值')
						that.isSelectSubject = true
						that.oneText = res.data.fuData.text
						that.twoText = res.data.fuData.children.text
						that.activeId = Number(res.data.fuData.children.id)
						that.mainActiveIndex = res.data.fuData.index
					}

				});
				uni.getStorage({
					key: 'userInfoData',
					success(res) {
						that.userInfoData = res.data
					}

				});
			},
			
			//上传图片
			afterRead(event, name) {
				console.log({
					event
				})
				let that = this;
				that.fileList = event
			},

			//删除图片
			deleteImg(event) {
				console.log(event);
				// let index = event.detail.index;
				let zongList = this.fileList;
				zongList.splice(event, 1);
				console.log(zongList);
				this.fileList = zongList
			},

			//发表按钮事件
			publishBtn() {
				console.log("用户数据", this.userInfoData);
				console.log("科目数据", this.newproject);
				console.log("内容", this.message);
				console.log("图片", this.fileList);
				let fileList = this.fileList;
				let imgLists = "";
				fileList.map(item => {
					console.log(item);
					imgLists += item.response + ",";
				});

				if (imgLists.length > 0) {
					imgLists = imgLists.substr(0, imgLists.length - 1);
				}

				console.log(imgLists);

				if (this.message == '' && this.fileList == '') {
					uni.showToast({
						title: "请输入答疑内容或者上传图片",
						icon: 'none',
						duration: 1000
					});
					return;
				}

				let dataLists = {
					wechat_id: this.userInfoData.user_id,
					lb_id: this.newproject.fuData.id,
					kmlb: this.newproject.fuData.children.id,
					wordse: this.message,
					img: imgLists
				};
				let jiamiData = {
					wechat_id: this.userInfoData.user_id,
					lb_id: this.newproject.fuData.id,
					kmlb: this.newproject.fuData.children.id,
					wordse: this.message,
					img: imgLists
				};
				Service.circle(dataLists, jiamiData).then(res => {
					console.log(res);
					if (res.event == 100) {
						uni.showToast({
							title: "发表成功",
							icon: 'none',
							duration: 1000,
							success: function() {
								setTimeout(function() {
									//要延时执行的代码
									uni.navigateBack({
										delta: 1
									});
								}, 1000); //延迟时间
							}
						}); 
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none',
							duration: 1000
						});
					}
				});
			},

			//关闭得分弹窗
			fenShowClose() {
				this.fenShow = false
				uni.navigateBack({
					delta: 1
				});
			},

			//科目弹窗--点击一级菜单
			onClickNav(e) {
				console.log("一级菜单", e.detail);
				this.mainActiveIndex = e.detail.index || 0
			},

			//科目弹窗--点击二级菜单
			onClickItem(e) {
				const activeId = this.activeId === e.detail.id ? null : Number(e.detail.id);
				let allLists = this.items;
				let newproject = {};
				for (let index = 0; index < allLists.length; index++) {
					var item = allLists[index];
					if (e.detail.p_id == item.id) {
						newproject["fuData"] = item;
						var fuData = newproject["fuData"];
						fuData["children"] = e.detail;
						fuData["index"] = index;
						this.newproject = newproject
						this.isSelectSubject = true
						this.switchShow = false
						uni.setStorage({
							key: "newproject",
							data: newproject
						});
						// 更新数据Storages
						this.getStorages()
						console.log('变更stor')
					}
				}
			},

			//点击选择科目--出来弹窗
			switchCourse() {
				console.log('触发')
				this.switchShow = true
				this.$nextTick(function() {
					this.getStorages()
					this.getParentAjax()
				})
			},

			//关闭选择科目弹窗
			onClose() {
				this.switchShow = false
			},

			//获取项目类别
			getParentAjax() {
				let dataLists = {};
				let jiamiData = {};
				Service.parentAjax(dataLists, jiamiData).then(res => {
					if (res.event == 100) {
						this.manageParent(res.data);
					}
				});
			},

			//对项目数据进行处理
			manageParent(list) {
				let obj = list.map(function(item) {
					let cities = item.cities;
					let objChild = cities.map(function(items) {
						return {
							"id": items.id,
							"text": items.lb,
							"p_id": items.p_id
						};
					});
					return {
						"id": item.id,
						"text": item.lb,
						"p_id": item.p_id,
						"children": objChild
					};
				});
				this.items = obj
			}

		}
	};
</script>
<style scoped lang="scss" scoped>
	/* pages/questionAnswer/questionAnswer.wxss */
	.topBackground {
		height: 16rpx;
		background-color: #F1F1F1;
	}
	.uni-input{
		padding: 30rpx 50rpx;
		min-height: 150rpx;
	}
	.uploadPictures {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx;
	}

	.van-uploader__wrapper {
		width: 690rpx !important;
	}

	.van-uploader__preview {
		margin: 0 16rpx 16rpx 0 !important;
	}

	.van-uploader__preview:nth-child(4n) {
		margin: 0 0 16rpx 0 !important;
	}

	.van-uploader__upload {
		margin: 0 0 16rpx 0 !important;
	}

	/*科目展示*/
	.subjects-show {
		width: 690rpx;
		margin: 50rpx auto 0;
		padding-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #F3F3F3;
	}

	.subjects-left {
		display: flex;
		align-items: center;
	}

	.subjectsShow-img {
		width: 22rpx;
		height: 22rpx;
		margin-right: 26rpx;
	}

	.subjectsText-item {
		font-size: 26rpx;
		color: #666666;
		font-weight: 500;
	}

	.subjectsText-explain {
		font-size: 24rpx;
		color: #FBAD35;
		font-weight: 500;
	}

	.publish-button {
		margin: 350rpx 0 236rpx 0;
		padding: 0 30rpx;
	}

	u-button {
		width: 690rpx;
		height: 100rpx;
		padding: 0;
		font-size: 36rpx;
		font-weight: bold;
		background-color: #0998FF !important;
		color: #fff;
	}

	/*双十一活动*/
	.fenShowImg {
		width: 640rpx;
		height: 600rpx;
		margin-left: 80rpx;
	}

	.huoDong .van-popup {
		background-color: transparent;
	}
</style>
