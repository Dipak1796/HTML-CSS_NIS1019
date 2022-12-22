export class Rectangle {
    //constracture
    constructor(w, h) {
        this.width = 0;
        this.height = 0;
        this.width = w;
        this.height = h;
    }
    area() {
        return this.height * this.width;
    }
}
