import {interval,filter,map} from 'rxjs';


interval(500).pipe(filter(x=>x%5==0),map(x=>x+" is  multiple of 5")).subscribe(x=>console.log(x));

//ouput: x is multiple of 5
