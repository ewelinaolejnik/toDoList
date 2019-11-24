import { ToDoListAction } from './actionTypes';
import { ActionType, GetToDoListSuccessAction, ToDoProps, GetToDoListFailureAction } from '../../types';

export const getToDoList = (): ActionType => ({
    type: ToDoListAction.GetToDoList
});

export const getToDoListSuccess = (toDoList: Array<ToDoProps>, loading: boolean): GetToDoListSuccessAction => ({
    type: ToDoListAction.GetToDoListSuccess,
    toDoList,
    loading
});

export const getToDoListFailure = (loading: boolean): GetToDoListFailureAction => ({
    type: ToDoListAction.GetToDoListFailure,
    loading
});