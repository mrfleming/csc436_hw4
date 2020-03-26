import { uuid } from '../uuid';

export class Todo {
    key: string;
    text: string;
    dueDate: string;

    constructor(t: string, dd: string) {
        // psuedo unique id, 1 in 10000000 chance of being the same if users enter at the same time
        this.key = uuid();
        this.text = t;
        this.dueDate = dd;

    }
}
