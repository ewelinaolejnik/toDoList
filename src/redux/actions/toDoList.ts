import { ToDoListAction } from './actionTypes';
import { ActionType, GetToDoListSuccessAction, ToDoState, UpdateToDoSuccessAction, UpdateToDoAction, DeleteToDoAction } from '../../types';

export const getToDoList = (): ActionType => ({
    type: ToDoListAction.GetToDoList
});

export const getToDoListSuccess = (toDoList: Array<ToDoState>): GetToDoListSuccessAction => ({
    type: ToDoListAction.GetToDoListSuccess,
    toDoList
});

export const getToDoListFailure = (): ActionType => ({
    type: ToDoListAction.GetToDoListFailure
});

export const updateToDo = (toDoToBeUpdate: ToDoState): UpdateToDoAction => ({
    type: ToDoListAction.UpdateToDo,
    toDoToBeUpdate
});

export const updateToDoSuccess = (updatedToDo: ToDoState): UpdateToDoSuccessAction => ({
    type: ToDoListAction.UpdateToDoSuccess,
    updatedToDo
});

export const deleteToDo = (id: number): DeleteToDoAction => ({
    type: ToDoListAction.DeleteToDo,
    id
});

export const deleteToDoSuccess = (): ActionType => ({
    type: ToDoListAction.DeleteToDoSuccess
});