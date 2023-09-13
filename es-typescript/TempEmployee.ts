import { Employee } from "./Demo";

export class TempEmployee extends Employee {
    constructor(id: number, name: string, salary: number, private performance: string) {
        super(id, name, salary);
    }

    public override getDetails(): String {
        return super.getDetails() + " " + this.performance;
    }
}