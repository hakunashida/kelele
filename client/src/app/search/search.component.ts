import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { SearchService } from '../search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	private loading: boolean = false;
	// searchValue = '';
	private results: Observable<Tab[]>;
	private searchField = FormControl;

	constructor(private search: SearchService) { }

	ngOnInit() {
		this.searchField = new FormControl();
		this.results = this.searchField.valueChanges
			.debounceTime(400)
			.distinctUntilChanged()
			.do(_ => this.loading = true)
			.switchMap(term => this.search.searchTabs(term))
			.do(_ => this.loading = false)
		/*this.searchControl.valueChanges
			.debounceTime(500)
			.distinctUntilChanged()
			.subscribe(newValue => {
				this.searchValue = newValue;
				this.search.getSearchTabs(this.searchValue);
			});*/
	}

	doSearch(term: string) {
		this.search.searchTabs(terms);
	}
}
