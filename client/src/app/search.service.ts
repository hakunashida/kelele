import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Tab } from '../tab.model';

@Injectable()
export class SearchService {

	private apiRoot = 'http://localhost:8000';
	private data = {};

	constructor(private http: HttpClient) { }

	searchTabs(terms: string): Observable<Tab[]> {
		let apiURL = `${this.apiRoot}/tabs/search/${terms}`;
		return this.http.get(apiURL)
			.map(res => {
				return res.tabs.map(item => {
					return new Tab(
						item.id,
						item.name,
						item.artist,
						item.url,
						item.ipfs_hash,
						item.page_views,
						item.rating,
					);
				});
			});
		);
	}
}
