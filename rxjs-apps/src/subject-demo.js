import {Subject,of} from 'rxjs';

const subject=new Subject();

subject.subscribe(v=>console.log("Subscriver A : ",v));

subject.subscribe(v=>console.log("Subscriver B : ",v));

/*
subject.next(20);
subject.next(30);
subject.next(40);
subject.next(50);
*/

const data$=of(1,2,3,4,5,6);

data$.subscribe(subject);


