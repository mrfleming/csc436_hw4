export class Todo {
    key: number;
    text: string;
    dueDate: string;

    constructor(k: number, t: string, dd: string) {
        this.key = k;
        this.text = t;
        this.dueDate = dd;

    }
}
