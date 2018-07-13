import { Repository } from '../types/repository.type';

export class RepositoryMapper {
    public static mapRepository(repository: any): Repository {
        return {
            name: repository.name,
            description: repository.description,
            createdAt: repository.created_at,
            updatedAt: repository.updated_at
        };
    }
}
