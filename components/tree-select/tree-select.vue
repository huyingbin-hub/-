<template>
	<view>
		<view class="nav">
			<!-- 左侧 -->
			<view class="nav-left">
				<scroll-view class="scrollView" scroll-y="true">
					<view class="nav-left-item" v-for="(item,index) in items" @click="handleClickCate(item,index)" :key="index">
						<view class="nav-left-items" style="background-color: #fff;font-weight:550;border-left:5rpx solid red;height: 80rpx;width: 100%;display: flex;align-items: center;justify-content: center;"
						 v-if="index===CateIndex">
							{{item.text}}
						</view>
						<view class="" v-else>
							{{item.text}}
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 右侧 -->
			<view class="nav-right">
				<scroll-view class="scrollView" scroll-y="true">
					<view class="nav-right-item" v-for="(subItem,subItemIndex) in items[CateIndex].children" :key="subItem.text"
					 @click.stop="handleClickSub(subItem,subItemIndex)">
						<view class="" style="color: #EE0A24;" v-if="subItem.id==activeId">
							<view class="nav-right-left">
								{{subItem.text}}
							</view>
							<u-icon class="nav-right-right" name="checkmark" color="#EE0A24" size="28"></u-icon>
						</view>
						<view class="" v-else>
							<view class="nav-right-left">
								{{subItem.text}}
							</view>
						</view>

					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<script>
	// 属性
	// @parms items 数组 格式
	// items = {
	// 	"id": item.id,
	// 	"text": item.lb,
	// 	"p_id": item.p_id,
	// 	"children": objChild {
	// 		"id": items.id,
	// 		"text": items.lb,
	// 		"p_id": items.p_id
	// 	}
	// }

	// @parms mainActiveIndex 左侧选择
	// @parms activeId 右侧选择

	// 事件
	// @parms @click - nav 左侧点击事件

	// @parms @click - item 右侧点击事件
	export default {
		data() {
			return {
				CateIndex: null, //父 index
				CatePid: null, //父 赋值传递来的父index
				SubIndex: null, //子 index
				subId: null, //子 id
				handleIndex: null,
				handleId: null,
				activeStyle: {
					backgroundColor: '#fff',
					fontWeight: 550,
					borderLeft: '5rpx solid red'
				},
				activeStyles: {
					color: 'red',
				},
			};
		},
		props: {
			// 数组
			items: {
				type: Array,
				default: []
			},
			mainActiveIndex: {
				type: Number,
				default: ''
			},
			activeId: {
				type: Number,
				default: ''
			}
		},
		onShow() {},
		mounted() {
			if (this.mainActiveIndex) {
				this.handleIndex = this.mainActiveIndex
				this.CateIndex = this.mainActiveIndex
				this.CatePid = this.mainActiveIndex
			} else {
				this.CateIndex = 0
			}
			if (this.activeId) {
				this.handleId = this.activeId
				this.subId = this.activeId
			}
		},
		methods: {

			// 左侧点击事件
			handleClickCate(item, index) {
				this.CateIndex = index
				let e = {
					detail: {}
				}
				e.detail = item
				this.$emit('click-nav', e)
			},

			// 右侧点击事件
			handleClickSub(subItem, subItemIndex) {
				this.SubIndex = subItemIndex
				let e = {
					detail: {}
				}
				e.detail = subItem
				this.$emit('click-item', e)
				if (this.CateIndex === this.CatePid) {
					this.CatePid = null
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		width: 100%;
		display: flex;

		.nav-left {
			width: 30%;

			// height: 400rpx;
			.scrollView {
				height: 720rpx;
			}

			.nav-left-item {
				height: 80rpx;
				background-color: #f7f8fa;
				font-size: 24rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.nav-right {
			width: 70%;

			// height: 400rpx;
			.scrollView {
				height: 720rpx;
			}

			.nav-right-item {
				height: 80rpx;
				// border-right: solid 1px #E0E0E0;
				// border-bottom: solid 1px #E0E0E0;
				background-color: #ffffff;
				font-size: 24rpx;

				.nav-right-left {
					float: left;
					margin-left: 10%;
					margin-top: 17rpx;
				}

				.nav-right-right {
					float: right;
					margin-right: 10%;
					margin-top: 17rpx;
				}
			}
		}
	}
</style>
