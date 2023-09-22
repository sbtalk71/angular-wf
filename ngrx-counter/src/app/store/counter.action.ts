import { createAction } from "@ngrx/store";
import { ActionType } from "./counter-type";

export const increment = createAction(ActionType.Increment)

export const decrement = createAction(ActionType.Decrement);

export const reset = createAction(ActionType.Reset);