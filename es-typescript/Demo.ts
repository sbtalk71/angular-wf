
export class Employee{

    constructor(private id:number,private name:string,private salary:number, private address:Address){

    }

    public getDetails(): String{
        return this.id+" "+this.name+" "+this.salary;
    }
}

export class Address{
    constructor(private doorNo:string,private zipcode:number){

    }

    getAddress():string{
        return this.doorNo+" "+this.zipcode;
    }
}

