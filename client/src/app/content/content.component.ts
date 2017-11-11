import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { SearchService } from '../search.service';
import { Tab } from '../../tab.model';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {

	private tab: Tab;
	subscription: Subscription;

	constructor(private search: SearchService) {
		this.subscription = search.contentFetched$.subscribe(
			content => { this.tab = content }
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
