export class Tab {
	id: string;
	name: string;
	artist: string;
	url: string;
	ipfs_hash: string;
	page_views: number;
	rating: number;
}

export class Tabs {
	tabs: Tab[];
}