import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	title = 'Kelele';

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		// TODO: get the tab by artist and tab name from url params
		// console.log(this.route.paramMap.source._value.artist);
		// console.log(this.route.paramMap.source._value.name);
	}
}
