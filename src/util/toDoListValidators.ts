import * as types from '../types';

export const maxToDosExceeded = (maxToDoListCount: number, toDoList: types.ToDoState[]): boolean => {
    return toDoList.length >= maxToDoListCount;
}

export const newToDoTitleEmpty = (newToDo: types.ToDoState): boolean => {
    if (newToDo.title)
        return false;
    return true;
}