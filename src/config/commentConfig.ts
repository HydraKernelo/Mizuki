import type { CommentConfig } from "../types/config";
import { SITE_LANG } from "./siteConfig";

// 评论系统配置
export const commentConfig: CommentConfig = {
	enable: true, // 启用评论功能（Twikoo 用户系统）
	system: "twikoo", // 评论系统选择: "twikoo" | "giscus"
	twikoo: {
		envId: "https://mizuki-twikoo.netlify.app/.netlify/functions/twikoo",
		lang: SITE_LANG,
	},
	giscus: {
		repo: "HydraKernelo/Mizuki",
		repoId: "R_kgDOT7PVEQ",
		category: "Announcement",
		categoryId: "DIC_kwDOT7PVEc4DDxiP",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: SITE_LANG,
		loading: "lazy",
	},
};
