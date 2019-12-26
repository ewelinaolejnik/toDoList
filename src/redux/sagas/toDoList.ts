import { put } from "redux-saga/effects";

import api from '../../api';
import { ToDoState, UpdateToDoAction, DeleteToDoAction, AddToDoAction } from '../../types';
import * as toDoActions from '../actions/toDoList';

const endpoint: string = "todos",
    userId: number = 10;

export function* getToDoListSaga() {
    const queryParams = `?userId=${userId}`;
    try {
        const response = yield api.get(endpoint + queryParams);
        let toDoListData: ToDoState[] = [];
        toDoListData = [...response.data];
        yield put(toDoActions.getToDoListSuccess(toDoListData));
    } catch (error) {
        yield put(toDoActions.toDoListFailure());
    }
}

export function* updateToDoSaga(action: UpdateToDoAction) {
    try {
        const response = yield api.put(endpoint + `/${action.toDoToBeUpdate.id}`, action.toDoToBeUpdate);
        const updatedToDo: ToDoState = { ...response.data };
        yield put(toDoActions.updateToDoSuccess(updatedToDo));
    } catch (error) {
        yield put(toDoActions.toDoListFailure());
    }
}

export function* deleteToDoSaga(action: DeleteToDoAction) {
    try {
        yield api.delete(endpoint + `/${action.id}`);
        yield put(toDoActions.deleteToDoSuccess(action.id));
    } catch (error) {
        yield put(toDoActions.toDoListFailure());
    }
}

export function* addToDoSaga(action: AddToDoAction) {
    try {
        const response = yield api.post(endpoint, action.toDoToAdd);
        const newToDo: ToDoState = { ...response.data };
        yield put(toDoActions.addToDoSuccess(newToDo));
    } catch (error) {
        yield put(toDoActions.toDoListFailure());
    }
}