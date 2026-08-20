import type { PioConfig } from "../types/config";

// Pio 看板娘配置
// 模型来源：Live2D 官方示例模型（CubismWebSamples），免费可商用，需标注著作权
// 许可证：https://www.live2d.com/eula/live2d-sample-model-terms_cn.html
export const pioConfig: PioConfig = {
	enable: false, // 启用看板娘（当前关闭）
	models: [
		"/pio/models/NOIR/noir.model3.json",
	], // 默认模型（NOIR）
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	hideAboutMenu: false, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "欢迎来到 HydraKernel 的博客~", // 欢迎词
		touch: [
			"别摸我啦！",
			"哼，干嘛呢~",
			"再摸我要生气了！",
			"哇！吓我一跳",
		], // 触摸提示
		home: "点我回首页哦~", // 首页提示
		skin: ["想看看我的新形象吗？", "这个模型可爱吗~"], // 换装提示
		close: "拜拜，下次见~", // 关闭提示
		link: "https://hydrakernel.qzz.io", // 关于链接
	},
};
