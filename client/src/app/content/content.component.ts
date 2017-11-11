import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { SearchService } from '../search.service';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {

	private tabContent = '';
	subscription: Subscription;

	constructor(private search: SearchService) {
		this.subscription = search.contentFetched$.subscribe(
			content => { this.tabContent = content }
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
