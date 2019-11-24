import { takeEvery } from 'redux-saga/effects';

import { getToDoListSaga } from '../sagas/toDoList';
import * as actionTypes from '../actions/actionTypes';

export function* watchToDoList() {
    yield takeEvery(actionTypes.ToDoListAction.GetToDoList, getToDoListSaga);
}