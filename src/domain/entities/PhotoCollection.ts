import { Category } from "./Category";
import { Photo } from "./Photo";

export class PhotoCollection {
    private id: string;
    private photos: Photo[];
    private title: string;
    private categories: Category[];

    constructor(id: string, title: string, photos: Photo[], categories?: Category[]) {
        this.id = id;
        this.title = title.trim();
        this.photos = photos;
        this.categories = categories ?? [];
        this.validate();
    }

    validate() {
        
    }

}