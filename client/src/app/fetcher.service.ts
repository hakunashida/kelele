import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface TabResponse {
	id: string;
	name: string;
	artist: string;
	url: string;
	ipfs_hash: string;
	page_views: number;
	rating: number;
}

interface TabsResponse {
	tabs: TabResponse[];
}

@Injectable()
export class FetcherService {

	domain = 'http://localhost:8000';
	data = {};

	constructor(private http: HttpClient) { }

	getAllTabs() {
	  	this.http.get<TabsResponse>(this.domain + '/tabs').subscribe(
	  		data => {
		  		this.data = data.tabs;
		  		console.log(this.data);
		  	},
		  	(err: HttpErrorResponse) => {
		  		this.handleError(err);
		  	}
	  	);
	}

	getSearchTabs(terms: string) {
		console.log(terms);
		this.http.get<TabsResponse>(this.domain + '/tabs/search/' + terms).subscribe(
			data => {
				this.data = data.tabs;
				console.log(this.data);
			},
			(err: HttpErrorResponse) => {
				this.handleError(err);
			}
		);
	}

	handleError(err: HttpErrorResponse) {
  		if (err.error instanceof Error) {
  			console.error('An error occurred:', err.error.message);
  		} else {
			console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
  		}
	}
}
