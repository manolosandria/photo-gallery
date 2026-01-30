import { Photo } from "../domain/entities/Photo";
import { PhotoRepository } from "../domain/repositories/PhotoRepository";

export class CloudinaryPhotoRepository implements PhotoRepository {
    
    async findById(id: string): Promise<Photo | null> {
        return null;
    }

    async save(photo: Photo): Promise<void> {
        return Promise.reject();
    }

    async delete(id: string): Promise<void> {
        return Promise.reject();
    }

    async findAll(): Promise<Photo[]>{
        return [];
    }
}