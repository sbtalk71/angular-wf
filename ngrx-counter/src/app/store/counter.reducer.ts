import { createReducer } from "@ngrx/store";
import { increment, decrement,reset } from "./counter.action";
import { on } from "@ngrx/store";


const initialState:number=0;

export const counterReducer=createReducer( initialState,
    on(increment,(state)=>state+1),
    on(decrement,(state)=>state-1),
    on(reset,(state)=>0)
)