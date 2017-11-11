import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'tab/:artist/:name', component: MainComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(
		    appRoutes,
		    {
		    	enableTracing: false,
		    	preloadingStrategy: PreloadAllModules,
		    },
		),
	],
	exports: [
		RouterModule
	],
})
export class AppRoutingModule { }
