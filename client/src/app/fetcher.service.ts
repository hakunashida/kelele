import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FetcherService {

	private apiRoot = 'http://localhost:8000';
	private data = {};
	// the line below this comment is causing the app not to compile
	// i recently declared this 'results' variable using the Tab model
	// instead of the Tabs model. i'm not sure what is broken.
	private results: Observable<Tab[]>;

	constructor(private http: HttpClient) { }

	getAllTabs() {
	  	this.http.get<Tab[]>(this.domain + '/tabs').subscribe(
	  		data => {
		  		this.data = data.tabs;
		  		console.log(this.data);
		  	},
		  	(err: HttpErrorResponse) => {
		  		this.handleError(err);
		  	}
	  	);
	}

	getSearchTabs(terms: string): Observable<Tabs> {
		// left off here -
		// google subscribing to observables (or something?)
		// maybe "subscribing to observables in services" ?
		// there was a good tutorial that contained a line like this:
		let apiURL = `${this.apiRoot}/tab/search/${terms}`;
		// this.domain + '/tabs/search/' + terms
		return this.http.get<Tab[]>(apiURL).subscribe(
			data => {
				this.data = data.tabs;
				console.log(this.data);
			},
			(err: HttpErrorResponse) => {
				this.handleError(err);
			}
		);
	}

	/*onGetSearchTabs() {
		return new Observable<Tabs>(observer => {
			observer.next(data);
		});
	}*/

	handleError(err: HttpErrorResponse) {
  		if (err.error instanceof Error) {
  			console.error('An error occurred:', err.error.message);
  		} else {
			console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
  		}
	}
}
