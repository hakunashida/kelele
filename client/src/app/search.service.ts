import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { Tab } from '../tab.model';

@Injectable()
export class SearchService {

	private apiRoot = 'http://localhost:8000';
	private tabContent = new Subject<string>();

	contentFetched$ = this.tabContent.asObservable();

	constructor(private http: HttpClient) { }

	public searchTabs(terms: string): Observable<Tab[]> {
		let apiUrl = `${this.apiRoot}/tabs/search/${terms}`;
		return this.http.get(apiUrl)
			.map(res => {
				return res['tabs'].map(item => {
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
	}

	public getContent(tabId: string): Observable<string> {
		let apiUrl = `${this.apiRoot}/tabs/${tabId}/content`;
		return this.http.get(apiUrl)
			.map(res => {
				let content = res['message'];
				this.fetchContent(content);
				return content;
			})
			.share();
	}

	public fetchContent(content: string) {
		// console.log(content);
		this.tabContent.next(content);
	}
}