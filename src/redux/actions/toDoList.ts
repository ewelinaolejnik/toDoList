import { ToDoListAction } from './actionTypes';
import * as types from '../../types';

export const getToDoList = (): types.ActionType => ({
    type: ToDoListAction.GetToDoList
});

export const getToDoListSuccess = (toDoList: Array<types.ToDoState>): types.GetToDoListSuccessAction => ({
    type: ToDoListAction.GetToDoListSuccess,
    toDoList
});

export const toDoListFailure = (): types.ActionType => ({
    type: ToDoListAction.ToDoListFailure
});

export const updateToDo = (toDoToBeUpdate: types.ToDoState): types.UpdateToDoAction => ({
    type: ToDoListAction.UpdateToDo,
    toDoToBeUpdate
});

export const updateToDoSuccess = (updatedToDo: types.ToDoState): types.UpdateToDoSuccessAction => ({
    type: ToDoListAction.UpdateToDoSuccess,
    updatedToDo
});

export const deleteToDo = (id: number): types.DeleteToDoAction => ({
    type: ToDoListAction.DeleteToDo,
    id
});

export const deleteToDoSuccess = (id: number): types.DeleteToDoSuccessAction => ({
    type: ToDoListAction.DeleteToDoSuccess,
    id
});

export const addToDo = (toDoToAdd: types.ToDoState): types.AddToDoAction => ({
    type: ToDoListAction.AddToDo,
    toDoToAdd
});

export const addToDoSuccess = (newToDo: types.ToDoState): types.AddToDoSuccessAction => ({
    type: ToDoListAction.AddToDoSuccess,
    newToDo
});

export const updateNewToDo = (updatedNewToDo: types.ToDoState): types.UpdateNewToDoAction => ({
    type: ToDoListAction.UpdateNewToDo,
    updatedNewToDo
});

export const addToDoErrors = (addToDoErrors: types.AddToDoErrors): types.AddToDoErrorsAction => ({
    type: ToDoListAction.AddToDoErrors,
    addToDoErrors
});