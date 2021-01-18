<template>
	<view>
		<view class="">
			<u-cell-group :border="false" :cellStyle="{ padding: '30rpx 0 50rpx 0' }">
				<u-cell-item title="个人头像" @click="headPortrait" :arrow="false">
					<image style="width: 74rpx;height: 74rpx;border-radius: 50%;" :src="user_pic" slot="right-icon" mode=""></image>
				</u-cell-item>
				<u-cell-item title="昵称修改" :arrow="false" @click="changeName">
					<text>{{ user_nickname }}</text>
				</u-cell-item>
			</u-cell-group>
			<u-popup v-model="show" mode="center">
				<view class="uPopups">
					<u-field v-model="userNickname" label="昵称" placeholder="请输入新昵称"></u-field>
					<button type="default" @click="callOff">取消</button>
					<button type="primary" @click="affirm">确认</button>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
const Service = require('../../Services/services');
import { _methods } from '../../utils/public.js';
export default {
	data() {
		return {
			show: false,
			user_pic: '',
			user_nickname: '',
			userNickname: '',
			content: '东临碣石，以观沧海',
			userInfoData: {}
		};
	},
	onShow() {
		this.$nextTick(function() {
			this.getStorages();
		});
	},
	methods: {
		..._methods,
		// 获取storage
		getStorages() {
			let that = this;
			uni.getStorage({
				key: 'userInfoData',
				success(res) {
					that.userInfoData = res.data;
					that.user_pic = res.data.user_pic;
					that.user_nickname = res.data.user_nickname;
				}
			});
		},
		// 上传个人头像
		headPortrait() {
			let that = this;
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				success: function(res) {
					uni.uploadFile({
						url: 'https://www.zjtaoke.cn/Trains2/uploadFile',
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {},
						success(res) {
							console.log(res,'上传头像')
							that.userInfoData.user_pic = res.data;
							that.reserveUserInfo(that.userInfoData);
						},
						fail(error) {}
					});
				}
			});
		},
		changeName() {
			this.show = true;
		},
		// 取消
		callOff() {
			this.show = false;
		},
		// 昵称确认更改
		affirm() {
			this.userInfoData.user_nickname = this.userNickname;
			this.user_nickname = this.userNickname;
			this.reserveUserInfo(this.userInfoData);
			this.show = false;
		},
		//存储微信用户信息
		reserveUserInfo(data) {
			let dataLists = {
				'info[user_id]': data.user_id,
				'info[user_nickname]': data.user_nickname,
				'info[user_pic]': data.user_pic,
				'info[user_gender]': data.user_gender,
				'info[city]': data.city,
				'info[province]': data.province,
				'info[country]': data.country,
				// #ifdef MP-WEIXIN
				'info[type]': 'weixin',
				// #endif
				// #ifdef MP-TOUTIAO
				'info[type]': 'zijie',
				// #endif
				// #ifdef APP-PLUS
				'info[type]': 'app',
				// #endif
				// #ifdef MP-TOUTIAO||MP-WEIXIN
				'info[client_id]': data.client_id,
				// #endif
			};
			let that = this;
			let jiamiData = dataLists;
			Service.xcx_userxx(dataLists, jiamiData).then(res => {
				console.log(res,'res获取值')
				if (res.event == 100) {
					that.user_pic = data.user_pic;
					that.user_nickname = res.data.userInfo.user_nickname;
					console.log(res.data.userInfo,'获取')
					uni.setStorageSync('userInfoData', res.data.userInfo);
				} else {
					this.show_toast('请重试！');
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.uPopups {
	padding: 10rpx;
	width: 500rpx;
	height: 200rpx;
}
button {
	width: 200rpx;
	height: 60rpx;
	line-height: 60rpx;
	font-size: 23rpx;
	float: left;
	margin-left: 33rpx;
	margin-top: 20rpx;
}
</style>
