import Node from './node.mjs'

export default class LinkedList {
    #head;
    constructor() {
        this.#head = null;
    }

    append(value) {
        const node = new Node(value);
        if (this.#head === null)
            this.#head = node;
        else {
            let tempNext = this.#head;
            while (tempNext.nextNode !== null) {
                tempNext = tempNext.nextNode;
            }
            tempNext.nextNode = node;
        }
    }

    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.#head;
        this.#head = node;
    }

    size() {
        let i = 0;
        let node = this.#head;
        while (node !== null) {
            node = node.nextNode;
            ++i;
        }
        return i;
    }

    head() { return this.#head; }

    tail() {
        let node = this.#head;
        if (node === null) return node;
        while (node.nextNode !== null)
            node = node.nextNode;
        return node;
    }

    at(index) {
        if (index >= this.size() || index < 0) {
            console.log(index)
            console.log(this.#head);
            console.log(this.size());
            throw new Error('index out of bounds of the linked list');
        }

        let node = this.#head;
        while (index > 0) {
            node = node.nextNode;
            --index;
        }
        return node;
    }

    pop() {
        if (this.size() === 1)
            this.#head = null;
        if (this.size() > 1) {
            let node = this.at(this.size() - 2);
            node.nextNode = null;
        }
    }

    contains(value) {
        let size = this.size();
        let node = this.#head;
        while (size > 0) {
            if (node.value === value)
                return true;
            node = node.nextNode;
            --size;
        }
        return false;
    }

    find(value) {
        let node = this.#head;
        let index = 0;
        while (node !== null) {
            if (node.value === value)
                return index;
            node = node.nextNode;
            ++index;
        }
        return null;
    }

    toString() {
        let size = this.size();
        if (size === 0)
            return 'THERE ARE NO NODES IN THE LINKED LIST!'
        let strToPrint = '';
        let node = this.#head;
        while (size > 0) {
            strToPrint += `( ${node.value} ) -> `;
            node = node.nextNode;
            --size;
        }
        strToPrint += 'null';
        return strToPrint;
    }

    insertAt(value, index) {
        // We can make use of the remove function
        // And then insert a new one
        // But, we would need to iterate again to find where we need to insert the new node

        if (index === 0) {
            this.prepend(value);
            return;
        }
        let size = this.size();
        if (index === size) {
            this.append(value);
            return;
        }
        if (index > this.size() || index < 0)
            throw new Error('The given index is not within the bounds of the linked list.');
        // We create the new Node 
        const newNode = new Node(value);
        if (index === 0)
            this.#head = this.#head.nextNode;
        if (index > 0) {
            let node = this.at(index - 1);
            let nextNode;
            if (size - 1 - index > 0) {
                nextNode = this.at(index + 1);
            }
            else
                nextNode = null;
            node.nextNode = newNode;
            newNode.nextNode = nextNode;
        }
    }

    remove(index) {
        let size = this.size();
        if (index > this.size() - 1 || index < 0)
            throw new Error('The given index is not within the bounds of the linked list.');
        if (index === 0)
            this.#head = this.#head.nextNode;
        if (index > 0) {
            let node = this.at(index - 1);
            let nextNode;
            if (size - 1 - index > 0)
                nextNode = this.at(index + 1);
            else
                nextNode = null;
            node.nextNode = nextNode;
        }

    }
}
