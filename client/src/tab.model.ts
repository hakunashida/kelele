export class Tab {

	public content: string;

	constructor(public id: string,
				public name: string,
				public artist: string,
				public url: string,
				public ipfs_hash: string,
				public page_views: number,
				public rating: number) {
	}
}
