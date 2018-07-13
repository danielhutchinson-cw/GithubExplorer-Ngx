import { Repository } from './repository.type';

export class User {
    public username: string;
    public avatarUrl: string;
    public name: string;
    public company: string;
    public blogUrl: string;
    public location: string;
    public publicRepositoriesCount: number;
    public followersCount: number;
    public biography: string;
    public createdAt: Date;

    public repositories: Array<Repository>;
}