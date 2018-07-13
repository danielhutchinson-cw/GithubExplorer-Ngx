import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { UserProfileResolver } from './shared/resolvers/user-profile.resolver';

export const appRoutes: Routes = [
    {
        path: ':username',
        component: ProfilePageComponent,
        runGuardsAndResolvers: 'paramsChange',
        resolve: {
            user: UserProfileResolver
        }
    },
    {
        path: '**',
        redirectTo: '/thelastborker'
    }
];
