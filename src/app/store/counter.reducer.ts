import { createReducer,on } from "@ngrx/store";
import { decrement, increment } from "./counter.actio";

export const initialstate=1;
export const countReducer=createReducer(
    initialstate,
    on(increment,(state)=>(state+1)),
    on(decrement,(state)=>(state-1)),

)