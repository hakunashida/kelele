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
	private tabContent = new Subject<Tab>();

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

	public getContent(tab: Tab): Observable<Tab> {
		let apiUrl = `${this.apiRoot}/tabs/${tab.id}/content`;
		return this.http.get(apiUrl)
			.map(res => {
				tab.content = res['message'];
				this.fetchContent(tab);
				return tab;
			})
			.share();
	}

	public fetchContent(tab: Tab) {
		this.tabContent.next(tab);
	}
}