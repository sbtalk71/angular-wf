import { Component } from "@angular/core";

@Component({
    selector:'greet-comp',
    template:`
    <h1>Welcome to Angular Class</h1>
    <p>This is fun</p>
    `,
    styles:[`
    h1 {
        color:green
    }
    p{
        color:red
    }
    `]
})
export class GreetComponent{
    constructor(){}
}