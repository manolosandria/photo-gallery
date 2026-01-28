export class Category {
    private name: string;

    constructor(name: string) {
        this.name = name.trim();
        this.validate();
    }

    validate() {
        if (!this.name) throw new Error("Category name is required.");
    }
}