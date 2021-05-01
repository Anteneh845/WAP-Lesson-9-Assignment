class LinkedList {
    constructor(args) {
        if (args) {
            args.forEach(item => this.add(item))
        }
        this.head = null;
    }

    add(item) {
        if (this.head === null) {
            this.head = {
                value: item,
                next: null
            }
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = {
                value: item,
                next: null
            }
        }
    }

    remove(item) {
        let current = this;
        let prev = null;

        while (current) {
            if (current.value === item) {
                if (prev == null) {
                    this.value = current.next.value;
                    this.next = current.next.next;
                } else {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
    }

    print() {
        let current = this.head;
        let nodes = "LinkedList { ";
        while (current) {
            nodes += current.value + " "
            current = current.next;
        }
        nodes += "}";
        console.log(nodes);
    }
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print();
