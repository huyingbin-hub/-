const Service = require('../Services/services');
let _methods = {
	//消息提示窗
	show_toast(datas) {
		uni.showToast({
			title: datas,
			icon: "none",
			duration: 2000
		});
	},

	//验证手机号
	checkPhone(phone) {
		if (!(/^1[3456789]\d{9}$/.test(phone))) {
			return false;
		} else {
			return true;
		}
	},
	checkPassword(password) {
		if (!(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/.test(password))) {
			return false;
		} else {
			return true
		}
	},
	loginOut(postObj,title) {
		Service.logOut(postObj, postObj).then(res => {
			if (res.event == 100) {
				uni.showToast({
					title: title,
					duration: 2000
				});
				try {
					uni.removeStorageSync('userInfoData');
					uni.removeStorageSync('userKey');
				} catch (e) {
					// error
				}
				uni.reLaunch({
					url: '../logins/logins'
				});
			}
		})
	}
}

export {
	_methods
}
