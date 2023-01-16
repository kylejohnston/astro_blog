import type { MDXInstance, Page } from "astro";

type Theme = "light" | "dark";

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

// export interface Frontmatter {
// 	title: string;
// 	description?: string;
// 	ogImage?: string;
// };
// type Frontmatter = {
// 	title: string;
// 	description?: string;
// 	ogImage?: string;
// };

type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

interface Post {
	title: string;
	description: string;
	ogImage: string;
	pubDate?: Date;
	tags?: string[];
}

export type {
	MDXInstance,
	Page,
	Theme,
	IElement,
	// Frontmatter,
	PaginationLink,
	Post,
};
