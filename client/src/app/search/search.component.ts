import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';

import { FetcherService } from '../fetcher.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	searchValue = '';
	searchControl = new FormControl();

	constructor(private fetcher: FetcherService) { }

	ngOnInit() {
		this.searchControl.valueChanges
			.debounceTime(1000)
			.subscribe(newValue => {
				this.searchValue = newValue;
				this.fetcher.getSearchTabs(this.searchValue);
			});
	}

}
