class Group {
  constructor() {
    this.items = [];
  }

  has(value) {
    return this.items.includes(value);
  }

  add(value) {
    if (!this.has(value)) {
      return this.items.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.items = this.items.filter((el) => el !== value);
    }
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group);
// -> Group { items: [ 10, 20 ] }
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
let group1 = Group.from("12345");
console.log(group1);
// -> Group { items: [ '1', '2', '3', '4', '5' ] }
