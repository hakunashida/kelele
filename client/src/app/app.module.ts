import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ContentComponent,
        PageNotFoundComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule.forRoot(),
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
