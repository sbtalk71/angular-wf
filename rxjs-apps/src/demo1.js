const rxjs=require('rxjs')
const Observable=rxjs.Observable;

const data$=new Observable((subscriber)=>{
    subscriber.next(100);
    subscriber.next(200);
    subscriber.next(300);
    setTimeout(()=>subscriber.next(400),5000);
    subscriber.next(500);
    subscriber.next(600);
});

console.log("after subscription");
let subscription=data$.subscribe((v)=>console.log(v));

subscription.complete();