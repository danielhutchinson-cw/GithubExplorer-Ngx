import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './services/github/github.api.service';
import { GithubService } from './services/github/github.service';
import { BrowserModule } from '@angular/platform-browser';

const declarations = [
    NavbarComponent,
    AppIconComponent
];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    exports: [
        BrowserModule,
        ...declarations
    ],
    providers: [
        GithubApiService,
        GithubService
    ],
})
export class SharedModule {
}
