import { put } from "redux-saga/effects";

import api from '../../api';
import { ToDo } from '../../types';
import { getToDoListSuccess } from '../actions/toDoList';

const endpoint: string = "todos",
    userId: number = 10;

export function* getToDoListSaga() {
    const queryParams = `?userId=${userId}`;
    try {
        const response = yield api.get(endpoint + queryParams);
        let toDoListData: ToDo[] = [];
        toDoListData = [...response.data];
        yield put(getToDoListSuccess(toDoListData));
    } catch (error) {

    }
}