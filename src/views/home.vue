<template>
<main id="home" class="view" role="main">
	<ve-pie :extend="pie"></ve-pie>
	<div class="heading">
		<h1><span>Mand Mobile</span></h1>
		<p>一个基于Vue的移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。</p>
	</div>

	<md-button @click="handleClick">点我</md-button>
</main>
</template>

<script>
import {
	Button,
	Toast
} from 'mand-mobile'

export default {
	name: 'home-view',
	components: {
		[Button.name]: Button
	},
	data() {
		return {
			pie: {
				title: {
					show: true,
					text: '某站点用户访问来源',
					x: 'center'
				},
				grid: {
					top: 0,
					bottom: 20,
					left: 15,
					right: 15,
					containLabel: true
				},
				tooltip: {
					show: false,
				},
				series: {
					name: '访问来源',
					type: 'pie',
					radius: '55%',
					center: ['center', '60%'],
					label: {
						show: false,
					},
					labelLine: {
						show: false,
					},
					data: [{
							value: 335,
							name: '直接访问'
						},
						{
							value: 310,
							name: '邮件营销'
						},
						{
							value: 234,
							name: '联盟广告'
						},
						{
							value: 135,
							name: '视频广告'
						},
						{
							value: 1548,
							name: '搜索引擎'
						}
					]
				}
			}
		}
	},
	methods: {
		handleClick() {
			Toast.info('不错哟~')
		}
	}
}
</script>

<style>
.heading {
	text-align: center;
	margin-bottom: 48px;
}

.heading h1 {
	color: #333;
	line-height: 1.15;
	font-size: 64px;
	margin-bottom: 32px;
}

.heading h1 span {
	position: relative;
}

.heading h1 span::after {
	content: "";
	position: absolute;
	z-index: -1;
	left: 0;
	bottom: 8px;
	width: 100%;
	height: 20px;
	background: #ecf6ff;
}

.heading p {
	font-size: 32px;
	color: #666;
	line-height: 56px;
}
</style>
