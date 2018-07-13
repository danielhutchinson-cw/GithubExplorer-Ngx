import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './services/github/github.api.service';
import { GithubService } from './services/github/github.service';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileResolver } from './resolvers/user-profile.resolver';
import { FormsModule } from '@angular/forms';

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
        FormsModule,
        BrowserModule
    ],
    exports: [
        BrowserModule,
        FormsModule,
        ...declarations
    ],
    providers: [
        GithubApiService,
        GithubService,

        UserProfileResolver
    ],
})
export class SharedModule {
}
