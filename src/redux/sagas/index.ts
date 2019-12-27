import { takeEvery } from 'redux-saga/effects';

import { getToDoListSaga, updateToDoSaga, deleteToDoSaga, addToDoSaga } from '../sagas/toDoList';
import * as actionTypes from '../actions/actionTypes';

export function* watchToDoList() {
    yield takeEvery(actionTypes.ToDoListAction.GetToDoList, getToDoListSaga);
    yield takeEvery(actionTypes.ToDoListAction.UpdateToDo, updateToDoSaga);
    yield takeEvery(actionTypes.ToDoListAction.DeleteToDo, deleteToDoSaga);
    yield takeEvery(actionTypes.ToDoListAction.AddToDo, addToDoSaga);
}