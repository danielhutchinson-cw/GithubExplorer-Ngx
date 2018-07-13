import { Component, Input } from '@angular/core';
import { Repository } from '../../shared/types/repository.type';

@Component({
    selector: 'repositories-list',
    templateUrl: 'repositories-list.component.html',
    styleUrls: ['repositories-list.component.scss'],
})
export class RepositoriesListComponent {
    @Input()
    public repositories: Array<Repository>;
}