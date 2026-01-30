import { PhotoRepository } from "@/src/domain/repositories/PhotoRepository";

export class GetPhotoById {
    constructor(private photoRepository: PhotoRepository){}

    async execute(id: string) {
        const photo = await this.photoRepository.findById(id);
        return photo;
    }
}