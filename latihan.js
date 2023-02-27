class Car{
    
    //static property 1
    static price(){
        return 100000000;
    }

    //static property 2
    static speed(){
        return 'Kecepatan Maximum 300km/jam';
    }

    //instance property
    constructor(tipe, pintu){
        this.tipe = tipe;
        this.pintu = pintu;
    }

    //instance method
    introduce(){
        return 'This is' + this.tipe + ' Car';
    }

    cekMobil(pintu){
        if(pintu == this.pintu){
            return 'Pintu';
        } else{
        return 'Bukan Mobil Balap';
    }
  }
}

//access static property 1
console.log(Car.price());

//access static property 2
console.log(Car.speed());

//access instance property and method
var car = new Car('sedan',2);
console.log(car);