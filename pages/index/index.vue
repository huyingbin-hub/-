<template>
	<view>
		<!--index.wxml-->
		<view class="container-index">
			<!--头部和科目切换-->
			<view class="head-module">
				<view class="head-login">
					<!--未注册-->
					<view class="headLogin-item" v-if="isThreeType == 1">
						<view>
							<image class="headLogin-img" src="/static/image/morentouxing.png"></image>
						</view>
						<view class="noLogin">
							<button class="noLoginBtn" open-type="getPhoneNumber" @click="getPhoneNumber">点击注册</button>
						</view>
					</view>
					<!--未登录-->
					<view class="headLogin-item" v-else-if="isThreeType == 2">
						<view>
							<image class="headLogin-img" src="/static/image/morentouxing.png"></image>
						</view>
						<view class="noLogin">
							<view class="noLogin-text">亲，</view>
							<button class="noLoginBtn" open-type="getUserInfo" @click="judgeUserInfo">请登录</button>
						</view>
					</view>
					<!--已注册登录-->
					<view class="headLogin-item" v-else-if="isThreeType == 0">
						<view>
							<image class="headLogin-img" :src="userInfoData.avatarUrl"></image>
						</view>
						<view class="usernoLogin">
							<view>{{userInfoData.nickName.length>5?userInfoData.nickName.substr(0,6)+'...':userInfoData.nickName}}</view>
						</view>
					</view>
				</view>


				<view class="leftContainer">
					<!--历史记录-->
					<view class="leftContainer-history" @tap="goToHistory">
						<image class="historyImg" src="/static/image/lishi.png"></image>
						<text class="historyText">历史记录</text>
					</view>
					<view>
						<!--切换科目-->
						<view class="switch-subject" @tap="switchCourse">
							<view class="switchLeft">
								<view class="switchLeft-title" v-if="!isSelectSubject">
									<view>科目</view>
									<view>请选择项目</view>
								</view>
								<view class="switchLeft-content" v-else>
									<view class="five">{{newproject.fuData.children.text}}</view>
									<view class="five">{{newproject.fuData.text}}</view>
								</view>
							</view>
							<view>
								<image class="switchImg" src="/static/image/qiehuan.png"></image>
							</view>
						</view>
					</view>
				</view>

			</view>
			<!--中间内容--答疑解惑-->
			<view class="photograph">
				<image @tap="goToQuestion" class="photographImg" src="/static/image/paizhao.png"></image>
			</view>

			<!--双十一活动-- 以后走这里 -->
			<!-- <view class="shuangActivity" bindtap="goToHuodong">
    <image src="../../image/jiaonang.png"></image>
  </view> -->

			<!--历史记录-->
			<!-- <view class="historyFile">
    有新消息！快来查看历史记录
  </view> -->
		</view>

		<u-popup v-model="switchShow" mode="top" height="60%" @close="onClose">
			<!-- <van-tree-select :items="items" height="360" :main-active-index="mainActiveIndex" :active-id="activeId" @click-nav="onClickNav"
			 @click-item="onClickItem"></van-tree-select> -->
			<tree-select :items='items' @click-nav="onClickNav" :main-active-index="mainActiveIndex" :active-id="activeId"
			 @click-item="onClickItem"></tree-select>
		</u-popup>

		<!--手机号授权提示弹窗-->
		<view v-if="phoneModuleShow">
			<view class="phone-module"></view>
			<view class="module-write">
				<view class="moduleWrite-text">请授权手机号，了解更多内容</view>
				<view class="moduleWrite-button">
					<button class="moduleWrite-btn colorQu" @tap="phoneModuleOff">取消</button>
					<button class="moduleWrite-btn colorQue" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//index.js
	//获取应用实例
	const app = getApp();
	const Service = require("../../Services/services");

	export default {
		data() {
			return {
				offsetTop: 0,
				isType: true,
				isThreeType: 2,
				//1：代表用户进行手机号授权， 2：代表用户信息授权， 0：代表已登录
				isSelectSubject: false,
				//true代表未选择项目， false代表选择过项目
				switchShow: false,
				//控制科目弹出层
				userInfoData: '',
				//用户数据
				//科目选择属性
				mainActiveIndex: 0,
				activeId: null,
				items: [],
				fileList: [],
				phoneModuleShow: false,
				//控制提示手机号授权弹窗
				newproject: null,
				user_phone: "",
				wechat_id: ""
			};
		},

		components: {},
		props: {},
		onLoad: function() {
			// this.judgeUserInfo()
			// #ifdef MP-WEIXIN
			// 小程序的原生菜单中显示分享按钮
			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			});
			// #endif
		},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			this.getStorages()// 集中获取storage的属性值
			// uni.navigateTo({
			//     url: '../login/userLogin'
			// });
		},
		methods: {
			// 集中获取storage的属性值
			getStorages() {
				var that = this;
				uni.getStorage({
					key: 'userInfoData',
					success(res) {
						that.userInfoData = res.data
						that.isThreeType = 0
						that.wechat_id = res.data.id
						console.log(that.userInfoData);
						uni.getStorage({
							key: 'newproject',
							success(res) {
								console.log({
									res
								})
								that.newproject = res.data
								that.isSelectSubject = true
								that.activeId = Number(res.data.fuData.children.id)
								that.mainActiveIndex = res.data.fuData.index
							}
						});
					}

				});
			},
			
			//检查方法--当用户没有登录时，弹出提示
			examineLogin() {
				let userInfoData = this.userInfoData;
				console.log(userInfoData);
				console.log(userInfoData.nickName);
				if (userInfoData.nickName == '' || typeof userInfoData.nickName == 'undefined') {
					uni.showToast({
						title: "请进行登录",
						icon: 'none',
						duration: 1000
					});
					this.isType = false
				} else if (userInfoData.mobile == '' || typeof userInfoData.mobile == 'undefined') {
					this.isType = false
					this.phoneModuleShow = true
				} else {
					this.isType = true
				}
			},

			//点击选择科目--出来弹窗
			switchCourse() {
				this.$nextTick(function() {
					this.getStorages()
				})
				this.examineLogin(); //检查方法--当用户没有登录时，弹出提示
				let isType = this.isType;
				console.log(isType);

				if (isType) {
					this.getParentAjax(); //获取项目类别
					this.switchShow = true
				}
			},

			//关闭选择科目弹窗
			onClose() {
				this.switchShow = false
			},

			//科目弹窗--点击一级菜单
			onClickNav(e) {
				console.log("一级菜单", e.detail);
				this.mainActiveIndex = e.detail.index || 0
			},

			//科目弹窗--点击二级菜单
			onClickItem(e) {
				console.log("二级菜单", e.detail);
				const activeId = this.activeId === e.detail.id ? null : Number(e.detail.id);
				let allLists = this.items;
				let newproject = {};
				for (let index = 0; index < allLists.length; index++) {
					var item = allLists[index];
					if (e.detail.p_id == item.id) {
						console.log(item);
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
						console.log('变更stor')
					}
				}
			},

			//跳转答疑解惑页面
			goToQuestion() {
				console.log(this.newproject);
				this.examineLogin();
				let isType = this.isType;
				console.log(isType);
				if (isType) {
					if (this.newproject != null) {
						uni.navigateTo({
							url: "/pages/questionAnswer/questionAnswer"
						});
					} else {
						uni.showToast({
							title: "请选择项目",
							icon: 'none',
							duration: 1000
						});
					}
				}
			},

			//点击注册按钮--手机号授权弹窗
			getPhoneNumber(e) {
				let dataLists = {
					encryptedData: e.detail.encryptedData,
					iv: e.detail.iv,
					wechat_id: this.wechat_id
				};
				let jiamiData = {
					encryptedData: e.detail.encryptedData,
					iv: e.detail.iv,
					wechat_id: this.wechat_id
				};
				Service.number(dataLists, jiamiData).then(res => {
					if (res.event == 100) {
						this.user_phone = res.data
						this.phoneModuleShow = false
						this.judgeUserInfo();
					}
				});
			},

			//跳转双十一活动页面
			goToHuodong() {
				console.log(this.userInfoData.mobile);

				if (this.userInfoData.mobile != '') {
					uni.navigateTo({
						url: "/pages/huoDong/huoDong?phone=" + this.userInfoData.mobile
					});
				} else {
					uni.showToast({
						title: "请登录",
						icon: 'none',
						duration: 1000
					});
				}
			},

			//取消手机号提示弹窗
			phoneModuleOff() {
				this.phoneModuleShow = false
			},

			//判断用户信息是否获取
			judgeUserInfo() {
				uni.login({
					provider: 'weixin',
					success: res => {
						console.log(res, '登录');
						let code = res.code;
						uni.getUserInfo({
							provider: 'weixin',
							success: res => {
								console.log(res, '获取用户信息');
								let userInfo = res.userInfo;
								let dataLists = {
									code: code
								};
								let jiamiData = {
									code: code
								};
								// // 更改的
								this.reserveUserInfo('', userInfo);
								this.isThreeType = 0
								userInfo.mobile = '15136298700'
								uni.setStorage({
									key: "userInfoData",
									data: userInfo
								});
								发送code获取用户信息
								Service.userIf(dataLists, jiamiData).then(res => {
									console.log({res}, '用户信息')
									if (res.event == 100) {
										uni.showToast({
											title: "登录成功",
											icon: 'none',
											duration: 1000
										});
										this.userInfoData = res.data
										console.log(this.userInfoData, 'userInfoData')
										this.wechat_id = res.data.id
										this.isThreeType = 0
										uni.setStorage({
											key: "userInfoData",
											data: res.data
										});
										//存储微信用户信息
										this.reserveUserInfo(res.data, userInfo);
										if (res.data.mobile == '') {
											this.phoneModuleShow = true
										}
									}
								});

							}
						});
					}
				});

			},

			//存储微信用户信息
			reserveUserInfo(data, userInfo) {
				console.log(data, userInfo);
				let dataLists = {
					wechat_id: data.id,
					// wechat_id: 109,
					nickName: userInfo.nickName,
					avatarUrl: userInfo.avatarUrl,
					gender: userInfo.gender,
					city: userInfo.city,
					province: userInfo.province,
					country: userInfo.country
				};
				let jiamiData = {
					wechat_id: data.id,
					// wechat_id: 109,
					nickName: userInfo.nickName,
					avatarUrl: userInfo.avatarUrl,
					gender: userInfo.gender,
					city: userInfo.city,
					province: userInfo.province,
					country: userInfo.country
				};
				Service.userxx(dataLists, jiamiData).then(res => {
					console.log("userxx", res);
				});
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
				console.log({
					list
				});
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
			},

			//跳转历史记录页面
			goToHistory() {
				this.examineLogin();
				let isType = this.isType;
				console.log(isType);
				if (isType) {
					uni.navigateTo({
						url: "/pages/answerRecord/answerRecord"
					});
				}
			}

		}
	};
</script>
<style scoped>
	.head-module {
		margin-top: 30rpx;
		padding: 0 30rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.head-login {}

	.headLogin-item {
		display: flex;
	}

	.headLogin-img {
		width: 80rpx;
		height: 80rpx;
		margin-right: 16rpx;
		border-radius: 50%;
	}

	.noLogin button::after {
		border: none;
	}

	.noLogin {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 80rpx;
	}

	.noLogin-text {
		font-size: 28rpx;
	}

	.usernoLogin {
		width: 100rpx;
		display: flex;
		align-items: center;
		font-size: 24rpx;
	}

	.noLoginBtn {
		width: 150rpx !important;
		height: 60rpx;
		background: #ffffff;
		border-radius: 5rpx;
		padding: 0 !important;
		margin-top: -3rpx;
		color: #252525;
		line-height: 60rpx;
		font-size: 28rpx;
		font-weight: 400;
		text-align: left;
	}

	.leftContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.leftContainer-history {
		height: 70rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-right: 140rpx;
	}

	.historyText {
		font-size: 24rpx;
	}

	.historyImg {
		width: 38rpx;
		height: 38rpx;
	}


	/*切换科目*/
	.switchLeft {
		display: flex;
		align-items: center;
	}

	.switchLeft-title {
		font-size: 26rpx;
		color: #252525;
		text-align: right;
	}

	.switchLeft-content {
		height: 70rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: right;
		font-size: 24rpx;
	}

	.switch-subject {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.switchImg {
		width: 20rpx;
		height: 26rpx;
		margin-left: 20rpx;
	}

	.five {
		max-width: 120rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/*答疑解惑*/
	.photograph {
		margin-top: 180rpx;
		display: flex;
		justify-content: center;
	}

	.photographImg {
		width: 444rpx;
		height: 444rpx;
	}

	.historyFile {
		margin-top: 60rpx;
		display: flex;
		justify-content: center;
		font-size: 26rpx;
		color: #0998FF;
		font-weight: 400;
	}

	/*上传图片*/
	.uploadPictures {
		padding: 0 30rpx;
		margin-top: 20rpx;
	}

	/*手机号弹窗*/
	.phone-module {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		opacity: 0.5;
		overflow: hidden;
		z-index: 9000;
		color: #fff;
	}

	.module-write {
		width: 520rpx;
		height: 300rpx;
		position: fixed;
		z-index: 9500;
		left: 115rpx;
		top: 300rpx;
		background-color: #fff;
		border-radius: 25rpx;
	}

	.moduleWrite-text {
		font-size: 26rpx;
		color: #252525;
		text-align: center;
		margin-top: 80rpx;
	}

	.moduleWrite-button {
		display: flex;
		margin-top: 100rpx;
		border-top: 1px solid #F5F6F8;
	}

	.moduleWrite-btn {
		background-color: #fff;
		border-radius: 25rpx;
	}

	.colorQu {
		color: #94918F;
	}

	.colorQue {
		color: #ee0a24;
	}


	/*双十一活动*/
	.shuangActivity {
		margin-top: 150rpx;
		padding: 0 30rpx;
		height: 210rpx;
	}

	.shuangActivity image {
		width: 100%;
		height: 100%;
	}
</style>
