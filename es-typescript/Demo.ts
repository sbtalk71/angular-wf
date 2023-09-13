
export class Employee{

    constructor(private id:number,private name:string,private salary:number){

    }

    public getDetails(): String{
        return this.id+" "+this.name+" "+this.salary;
    }
}

