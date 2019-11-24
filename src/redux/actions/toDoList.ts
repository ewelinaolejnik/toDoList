import { ToDoListAction } from './actionTypes';
import { ActionType, GetToDoListSuccessAction, ToDoProps } from '../../types';

export const getToDoList = (): ActionType => ({
    type: ToDoListAction.GetToDoList
});

export const getToDoListSuccess = (toDoList: Array<ToDoProps>): GetToDoListSuccessAction => ({
    type: ToDoListAction.GetToDoListSuccess,
    toDoList
});

export const getToDoListFailure = (): ActionType => ({
    type: ToDoListAction.GetToDoListFailure
});