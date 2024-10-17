class person  {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    walk(){
        console.log('La persona camina');
    }
}


let personMiguel = new person('Miguel', 26);

console.log(personMiguel);
console.log(typeof personMiguel);
console.log('Name: ', personMiguel.name);
console.log('Name: ', personMiguel['name']);
personMiguel.walk(); 






class privatePerson {
    #bank

    constructor(name, age, bank){
        this.name = name;
        this.age = age;
        this.#bank = bank;
    }

    pay(){
        this.#bank;
    }
}

let person1 = new privatePerson('Joselito', 26, 'TIPA!@)@)@)');

console.log('Person 1 > ', person1);
console.log('Person 1 > ', person1.bank);


// Getters y Setters


class GetSetPerson {
    #name
    #age
    #alias

    constructor(name, age, alias){
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
    }


    //get 

    get name(){
        return this.#name;
    }


    set age(age){
        this.#age = age;
    }
}


person2 = new GetSetPerson('Miguel', 26, 'Dev');

console.log(person2);



// Herencia


class Animal {

    constructor(name){
        this.name = name;
    }

    sound(){
        console.log('The animal emits a generic sound!! ');  
    }
}


class Dog extends Animal{

    sound(){
        console.log('Guau!');
    }

    run(){
        console.log('The dog run!');
    }
}


class Fish extends Animal {

    constructor(age, size){
        super(name);
        this.size = size;
    }

    swim(){
        console.log('The fish swims across the ocean!');
        
    }
}

let dog = new Dog('Canela');

dog.run();
dog.sound();

