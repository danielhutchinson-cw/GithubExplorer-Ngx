import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProfilePageComponent,
        RepositoriesListComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ProfilePageComponent,
        RepositoriesListComponent
    ],
    providers: [],
})
export class ProfileModule {
}
