import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
		    appRoutes,
		    {
		    	enableTracing: false
		    },
		),
	],
	exports: [
		RouterModule
	],
})
export class AppRoutingModule { }
