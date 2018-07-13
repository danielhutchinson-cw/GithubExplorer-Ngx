import { User } from '../types/user.type';

export class UserMapper {
    public static mapUser(user: any): User {
        return {
            username: user.login,
            name: user.name,
            avatarUrl: user.avatar_url,
            blogUrl: user.blog,
            location: user.location,
            company: user.company,
            followersCount: user.followers,
            publicRepositoriesCount: user.public_repos,
            biography: user.bio,
            createdAt: new Date(user.created_at),
            repositories: []
        };
    }
}
