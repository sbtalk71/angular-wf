const rxjs = require('rxjs')
const Observable = rxjs.Observable;

const data$ = new Observable((subscriber) => {
    try {
        subscriber.next(100);
        subscriber.next(200);
        subscriber.next(300);
        subscriber.next(400);
        throw new TypeError();
        subscriber.next(500);
        subscriber.next(600);
        subscriber.complete();
    } catch (err) {
        subscriber.error(err);
    }

});

console.log("after subscription");
let subscription = data$.subscribe({
    next:(v) => console.log(v),
    complete: ()=>console.log("complted processing"),
    error: (err)=>console.log("Error is ",err)
});

