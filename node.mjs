export default class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }

    set value(newValue) { this._value = newValue; }
    set next(nextNode) { this._nextNode = nextNode; }
    get value() { return this._value; }
    get next() { return this._nextNode; }
}
