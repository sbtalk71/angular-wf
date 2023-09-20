import {of,filter,map} from 'rxjs';

const data$=of('hari','james','peter','shantanu','raghuveer','kiran kumar','pavan','sheetal');

data$.pipe(filter(x=>x.length>5),map(x=>x+" Welcome to RxJs")).subscribe((v)=>console.log(v));