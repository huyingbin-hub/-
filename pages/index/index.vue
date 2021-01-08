<template>
	<view>
		<!-- 2020/12/29 胡  字节测试使用 -->
		<!-- <button type="default" @click="clear">清理storage</button> -->
		<!--index.wxml-->
		<view class="container-index">
			<!--头部和科目切换-->
			<view class="head-module">
				<view class="head-login">
					<!--未注册-->
					<view class="headLogin-item" v-if="isThreeType == 1">
						<view><image class="headLogin-img" src="/static/image/morentouxing.png"></image></view>
						<view class="noLogin">
							<!-- #ifndef MP-TOUTIAO -->
							<view class="noLogin-text">亲，</view>
							<button class="noLoginBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">请注册</button>
							<!-- #endif -->
							<!-- #ifdef MP-TOUTIAO -->
							<button class="noLoginBtnTT" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">手机号一键登录</button>
							<!-- #endif -->
						</view>
					</view>
					<!--未登录-->
					<view class="headLogin-item" v-else-if="isThreeType == 2" @click="judgeUserInfo">
						<view><image class="headLogin-img" src="/static/image/morentouxing.png"></image></view>
						<view class="noLogin">
							<view class="noLogin-text">亲，</view>
							<button class="noLoginBtn" open-type="getUserInfo">请登录</button>
						</view>
					</view>
					<!--已注册登录-->
					<view class="headLogin-item" v-else-if="isThreeType == 0" @click="myPersonal">
						<view><image class="headLogin-img" :src="userInfoData.user_pic"></image></view>
						<view class="usernoLogin">
							<view>{{ userInfoData.user_nickname }}</view>
							<!-- <view>{{ userInfoData.user_nickname.length > 5 ? userInfoData.user_nickname.substr(0, 6) + '...' : userInfoData.user_nickname }}</view> -->
						</view>
					</view>
				</view>

				<view class="leftContainer">
					<!--历史记录-->
					<!-- <view class="leftContainer-history" @tap="goToHistory">
						<image class="historyImg" src="/static/image/lishi.png"></image>
						<text class="historyText">历史记录</text>
					</view> -->
					<view>
						<!--切换科目-->
						<view class="switch-subject" @tap="switchCourse">
							<view class="switchLeft">
								<view class="switchLeft-title" v-if="!isSelectSubject">
									<view>科目</view>
									<view>请选择项目</view>
								</view>
								<view class="switchLeft-content" v-else>
									<view class="five">{{ newproject.fuData.children.text }}</view>
									<view class="five">{{ newproject.fuData.text }}</view>
								</view>
							</view>
							<view><image class="switchImg" src="/static/image/qiehuan.png"></image></view>
						</view>
					</view>
				</view>
			</view>
			<!--中间内容--答疑解惑-->
			<view class="photograph"><image @tap="goToQuestion" class="photographImg" src="/static/image/paizhao.png"></image></view>
		</view>

		<u-popup v-model="switchShow" mode="top" height="60%" @close="onClose">
			<tree-select :items="items" @click-nav="onClickNav" :main-active-index="mainActiveIndex" :active-id="activeId" @click-item="onClickItem"></tree-select>
		</u-popup>
		<u-popup width="516" v-model="myPersonalPopup">
			<view class="my-count">
				<view class="my-Personal">
					<view class="my-headP"><image @click="lookUserPic(userInfoData.user_pic)" :src="userInfoData.user_pic" mode=""></image></view>
					<view class="my-name">{{ userInfoData.user_nickname }}</view>
					<view class="my-phone">{{ userInfoData.user_phone }}</view>
				</view>
				<view class="" style="height: 108rpx;width: 100%;"></view>
				<view class="uCellGroup">
					<u-cell-group :border="false" :cellStyle="{ padding: '30rpx 0 50rpx 0' }">
						<u-cell-item class="uCellItem" @click="myUser" title="个人信息" :arrow="false">
							<image src="../../static/my/icon_xinxi.png" slot="icon" mode=""></image>
						</u-cell-item>
						<u-cell-item class="uCellItem" @click="message" title="我的消息" :arrow="false">
							<image src="../../static/my/icon_xiaoxi.png" slot="icon" mode=""></image>
							<!-- <u-badge count="99" :absolute="false" slot="right-icon"></u-badge> -->
						</u-cell-item>
						<u-cell-item class="uCellItem" @tap="goToHistory" title="历史记录" :arrow="false">
							<image src="../../static/my/icon_jilu.png" slot="icon" mode=""></image>
						</u-cell-item>
						<!-- #ifdef APP-PLUS -->
						<u-cell-item class="uCellItem" @click="install" title="设置" :arrow="false">
							<image src="../../static/my/icon_shezhi.png" slot="icon" mode=""></image>
						</u-cell-item>
						<!-- #endif -->
					</u-cell-group>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
//index.js
//获取应用实例
const app = getApp();
const Service = require('../../Services/services');

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
			//控制提示手机号授权弹窗
			newproject: null,
			user_phone: '',
			wechat_id: '',
			userId: '',
			myPersonalPopup: false //个人信息
		};
	},

	components: {},
	props: {},
	onLoad: function() {
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
		this.getStorages(); // 集中获取storage的属性值
		// uni.navigateTo({
		//     url: '../login/userLogin'
		// });
	},
	methods: {
		// 测试清除缓存 2020/12/29 字节测试
		// clear(){
		// 	uni.clearStorage()
		// },
		// 查看头像大图
		lookUserPic(pic) {
			uni.previewImage({
				urls: [pic],
				longPressActions: {
					success: function(data) {
						console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					},
					fail: function(err) {
						console.log(err.errMsg);
					}
				}
			});
		},
		// 打开左侧个人信息弹窗
		myPersonal() {
			this.myPersonalPopup = true;
		},
		// 个人信息
		myUser() {
			uni.navigateTo({
				url: '../my/my'
			});
		},
		// 设置
		install() {
			uni.navigateTo({
				url: '../my/install'
			});
		},
		// 跳转到消息列表
		message() {
			uni.navigateTo({
				url: '../answerRecord/answerRecord?state=1'
			});
		},
		// 集中获取storage的属性值
		getStorages() {
			var that = this;
			uni.getStorage({
				key: 'userInfoData',
				success(res) {
					that.userInfoData = res.data;
					if (res.data.user_nickname !== '' && res.data.user_phone !== '') {
						that.isThreeType = 0;
					}
					that.wechat_id = res.data.id;
					uni.getStorage({
						key: 'newproject',
						success(res) {
							that.newproject = res.data;
							that.isSelectSubject = true;
							that.activeId = Number(res.data.fuData.children.id);
							that.mainActiveIndex = res.data.fuData.index;
						}
					});
				},
				fail(err) {
					// #ifdef APP-PLUS
					if (err.data == '' || err.data == null) {
						uni.reLaunch({
							url: '../logins/logins'
						});
					}
					// #endif
				}
			});
		},

		//检查方法--当用户没有登录时，弹出提示
		examineLogin() {
			let userInfoData = this.userInfoData;
			if (userInfoData.user_nickname == '' || typeof userInfoData.user_nickname == 'undefined') {
				uni.showToast({
					title: '请进行登录',
					icon: 'none',
					duration: 1000
				});
				this.isType = false;
			} else if (userInfoData.user_phone == '' || typeof userInfoData.user_phone == 'undefined') {
				this.isType = false;
			} else {
				this.isType = true;
			}
		},

		//点击选择科目--出来弹窗
		switchCourse() {
			this.$nextTick(function() {
				this.getStorages();
			});
			this.examineLogin(); //检查方法--当用户没有登录时，弹出提示
			let isType = this.isType;

			if (isType) {
				this.getParentAjax(); //获取项目类别
				this.switchShow = true;
			}
		},

		//关闭选择科目弹窗
		onClose() {
			this.switchShow = false;
		},

		//科目弹窗--点击一级菜单
		onClickNav(e) {
			this.mainActiveIndex = e.detail.index || 0;
		},

		//科目弹窗--点击二级菜单
		onClickItem(e) {
			const activeId = this.activeId === e.detail.id ? null : Number(e.detail.id);
			let allLists = this.items;
			let newproject = {};
			for (let index = 0; index < allLists.length; index++) {
				var item = allLists[index];
				if (e.detail.p_id == item.id) {
					newproject['fuData'] = item;
					var fuData = newproject['fuData'];
					fuData['children'] = e.detail;
					fuData['index'] = index;
					this.newproject = newproject;
					this.isSelectSubject = true;
					this.switchShow = false;
					uni.setStorage({
						key: 'newproject',
						data: newproject
					});
				}
			}
		},

		//跳转答疑解惑页面
		goToQuestion() {
			this.examineLogin();
			let isType = this.isType;
			if (isType) {
				if (this.newproject != null) {
					uni.navigateTo({
						url: '/pages/questionAnswer/questionAnswer'
					});
				} else {
					uni.showToast({
						title: '请选择项目',
						icon: 'none',
						duration: 1000
					});
				}
			}
		},

		//点击注册按钮--手机号授权弹窗
		getPhoneNumber(e) {
			console.log({ e }, 'e的值');
			if (e.detail.errMsg == 'getPhoneNumber:ok') {
				this.getPhone(e);
			} else {
				console.log('用户点击了拒绝');
			}
		},

		// 获取手机号并向后台发送参数
		getPhone(e) {
			console.log('调用了getPhone');
			let that = this;
			uni.login({
				success: function(res) {
					let datas = {
						code: res.code,
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv,
						'info[user_id]': that.userId,
						// #ifdef MP-WEIXIN
						'info[type]': 'weixin',
						// #endif
						// #ifdef MP-TOUTIAO
						'info[type]': 'zijie',
						// #endif
						'info[xcx]': 'zkb'
					};
					console.log({ datas }, 'getNumber传参');
					Service.number(datas, datas).then(res => {
						console.log({ res }, 'number');
						if (res.event == 100) {
							uni.setStorage({
								key: 'userInfoData',
								data: res.data.userInfo
							});
							that.isThreeType = 0;
							that.user_phone = res.data;
						}
					});
				}
			});
		},

		//跳转双十一活动页面
		goToHuodong() {
			if (this.userInfoData.mobile != '') {
				uni.navigateTo({
					url: '/pages/huoDong/huoDong?phone=' + this.userInfoData.mobile
				});
			} else {
				uni.showToast({
					title: '请登录',
					icon: 'none',
					duration: 1000
				});
			}
		},

		//判断用户信息是否获取
		judgeUserInfo() {
			uni.login({
				success: res => {
					let code = res.code;
					uni.getUserInfo({
						success: res => {
							let userInfo = res.userInfo;
							let datas = {
								// #ifdef MP-WEIXIN
								'info[type]': 'weixin',
								// #endif
								// #ifdef MP-TOUTIAO
								'info[type]': 'zijie',
								// #endif
								'info[xcx]': 'zkb',
								'info[code]': code
							};
							Service.login(datas, datas).then(res => {
								console.log('登录res', res);
								if (res.event == 100) {
									uni.showToast({
										title: '登录成功',
										icon: 'none',
										duration: 1000
									});
									let informationUser = res.data.userInfo;
									// informationUser['user_phone'] = '15136298700';
									if (informationUser.user_pic == '') {
										informationUser['user_pic'] = userInfo.avatarUrl; //头像
									}
									if (informationUser.user_nickname == '') {
										informationUser['user_nickname'] = userInfo.nickName; //名称
									}
									this.userId = informationUser.user_id;
									informationUser['user_gender'] = userInfo.gender;
									informationUser['country'] = userInfo.country;
									informationUser['city'] = userInfo.city;
									informationUser['province'] = userInfo.province;
									if (informationUser.user_phone == '' && informationUser.user_nickname == '') {
										this.isThreeType = 1;
										this.reserveUserInfo(informationUser); //存储用户信息
									} else {
										this.isThreeType = 0;
										uni.setStorage({
											key: 'userInfoData',
											data: informationUser
										});
									}
									if (informationUser.user_phone == '' && informationUser.user_nickname !== '') {
										this.isThreeType = 1;
										this.reserveUserInfo(informationUser); //存储用户信息
									}
									this.userInfoData = informationUser;
									this.wechat_id = informationUser.user_id;
								}
							});
						}
					});
				}
			});
		},

		// info[user_id]	是	string	用户id
		// info[user_nickname]	是	string	微信名
		// info[user_pic]	是	string	微信头像
		// info[user_gender]	是	string	性别
		// info[city]	是	string	城市
		// info[province]	是	string	省份
		// info[country]	是	string	国家

		//存储微信用户信息
		reserveUserInfo(data) {
			let dataLists = {
				// #ifdef MP-WEIXIN
				'info[type]': 'weixin',
				// #endif
				// #ifdef MP-TOUTIAO
				'info[type]': 'zijie',
				// #endif
				'info[user_id]': data.user_id,
				'info[user_nickname]': data.user_nickname,
				'info[user_pic]': data.user_pic,
				'info[user_gender]': data.user_gender,
				'info[city]': data.city,
				'info[province]': data.province,
				'info[country]': data.country
			};
			let jiamiData = dataLists;
			Service.xcx_userxx(dataLists, jiamiData).then(res => {});
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
						id: items.id,
						text: items.lb,
						p_id: items.p_id
					};
				});
				return {
					id: item.id,
					text: item.lb,
					p_id: item.p_id,
					children: objChild
				};
			});
			this.items = obj;
		},

		//跳转历史记录页面
		goToHistory() {
			this.examineLogin();
			let isType = this.isType;
			if (isType) {
				uni.navigateTo({
					url: '/pages/answerRecord/answerRecord?state=0'
				});
			}
		}
	}
};
</script>
<style scoped lang="scss">
.my-count {
	width: 100%;
	height: 100vh;
	background-image: url(../../static/my/bg.png);
	background-size: 100% 100%;
}
.my-Personal {
	margin: 0 0 0 61rpx;
	position: relative;
	.my-headP {
		position: absolute;
		width: 108rpx;
		height: 108rpx;
		image {
			width: 108rpx;
			height: 108rpx;
			border-radius: 50%;
		}
	}
	.my-name {
		position: absolute;
		left: 135rpx;
		top: 15rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.my-phone {
		position: absolute;
		left: 135rpx;
		top: 68rpx;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #999999;
	}
}
.uCellGroup {
	margin-top: 30rpx;
	.uCellItem {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		image {
			width: 48rpx;
			height: 48rpx;
			margin-right: 24rpx;
			margin-left: 27rpx;
		}
	}
}
.head-module {
	margin-top: 30rpx;
	padding: 0 30rpx;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.head-login {
}

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
.noLoginBtnTT {
	width: 200rpx !important;
	height: 60rpx;
	background: #ffffff;
	border-radius: 5rpx;
	padding: 0 !important;
	margin-top: 5rpx;
	color: #252525;
	// line-height: 60rpx;
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
	color: #0998ff;
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
	border-top: 1px solid #f5f6f8;
}

.moduleWrite-btn {
	background-color: #fff;
	border-radius: 25rpx;
}

.colorQu {
	color: #94918f;
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
