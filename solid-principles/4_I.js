// Interface segregation principle

/*
// long way with extra code

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} can walk`);
    }

    swim() {
        console.log(`${this.name} can swim`);
    }

    fly() {
        console.log(`${this.name} can fly`);
    }
}

class Dog extends Animal {
    fly() {
        return null;
    }
}

class Eagle extends Animal {
    swim() {
        return null;
    }
}

class Whale extends Animal {
    fly() {
        return null;
    }

    walk() {
        return null;
    }
}

const dog = new Dog('Rex');
dog.walk();
dog.swim();
dog.fly();   // it is impossible

const eagle = new Eagle('Eagle');
eagle.fly();
eagle.walk();
eagle.swim();    // it is impossible

const whale = new Whale('Big blue friend');
whale.swim();
whale.fly();    // it is impossible
whale.walk();   // it is impossible
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`);
    }
};

const flier = {
    fly() {
        console.log(`${this.name} can fly`);
    }
};

const walker = {
    walk() {
        console.log(`${this.name} can wakl`);
    }
};

class Dog extends Animal {}

class Eagle extends Animal {}

class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');
dog.walk();
dog.swim();
// dog.fly();   // it is impossible and does not contain this method

const eagle = new Eagle('Eagle');
eagle.fly();
eagle.walk();
// eagle.swim();    // it is impossible and does not contain this method

const whale = new Whale('Big blue friend');
whale.swim();
// whale.fly();    // it is impossible and does not contain this method
// whale.walk();   // it is impossible and does not contain this method
