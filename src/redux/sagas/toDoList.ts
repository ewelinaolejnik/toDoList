import { put } from "redux-saga/effects";

import api from '../../api';
import { ToDoState, UpdateToDoAction, DeleteToDoAction } from '../../types';
import { getToDoListSuccess, getToDoListFailure, updateToDoSuccess, deleteToDoSuccess } from '../actions/toDoList';

const endpoint: string = "todos",
    userId: number = 10;

export function* getToDoListSaga() {
    const queryParams = `?userId=${userId}`;
    try {
        const response = yield api.get(endpoint + queryParams);
        let toDoListData: ToDoState[] = [];
        toDoListData = [...response.data];
        yield put(getToDoListSuccess(toDoListData));
    } catch (error) {
        yield put(getToDoListFailure());
    }
}

export function* updateToDoSaga(action: UpdateToDoAction) {
    try {
        const response = yield api.put(endpoint + `/${action.toDoToBeUpdate.id}`, action.toDoToBeUpdate);
        const updatedToDo: ToDoState = { ...response.data };
        yield put(updateToDoSuccess(updatedToDo));
    } catch (error) {
        yield put(getToDoListFailure());
    }
}

export function* deleteToDoSaga(action: DeleteToDoAction) {
    try {
        yield api.delete(endpoint + `/${action.id}`);
        yield put(deleteToDoSuccess(action.id));
    } catch (error) {
        yield put(getToDoListFailure());
    }
}