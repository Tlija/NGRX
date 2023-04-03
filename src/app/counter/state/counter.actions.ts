import { createAction ,props} from "@ngrx/store";


export const increment=createAction('increment');
export const decrement=createAction('decrement');
export const reset=createAction('reset');

export const customIncrement = createAction(
  '[Counter] Custom Increment',
  props<{ count: number }>()
);
