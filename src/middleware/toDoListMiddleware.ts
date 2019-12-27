import { ToDoListAction } from '../redux/actions/actionTypes'
import * as validators from '../util/toDoListValidators';
import * as types from '../types';
import * as actions from '../redux/actions/toDoList';

export const addToDoValidationMiddleware = ({ dispatch, getState }: any) => (next: any) => (action: types.AddToDoAction) => {
    if (action.type !== ToDoListAction.AddToDo) {
        return next(action);
    }

    const state: types.ToDoListState = getState().toDoListProps;
    const addToDoErrors: types.AddToDoErrors = { maxToDosExceeded: false, newToDoTitleEmpty: false };

    if (validators.maxToDosExceeded(state.maxToDoListCount, state.toDoList)) {
        addToDoErrors.maxToDosExceeded = true;
        dispatch(actions.addToDoErrors(addToDoErrors));
    } else if (validators.newToDoTitleEmpty(state.newToDo)) {
        addToDoErrors.newToDoTitleEmpty = true;
        dispatch(actions.addToDoErrors(addToDoErrors));
    }
    else {
        next(action);
    }
};