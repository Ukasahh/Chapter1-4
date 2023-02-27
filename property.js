class Human {
    
    //static property
    static isLivingOnEarth = true;

    //static property
    static walk(){
        return 'sedang berjalan';
    }
    
    //instance property
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    //instance method
    introduce(){
        return 'Hello my name is' + this.name;
    }

    checkPassword(password){
        if(password == this.password){
            return 'password benar';
        } else{
        return 'password salah';
    }
  }
}

//add new static method
Human.lunch = () =>{
    return 'having some lunch'
};

//add new instance method
Human.prototype.greeting =() =>{
    return `Hi ${name}, my name is ${this.name}.`
};

//access static property and method
console.log(Human.lunch());
console.log(Human.isLivingOnEarth);
console.log(Human.walk());

