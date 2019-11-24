import { combineReducers } from 'redux';
import toDoListProps from './toDoList';
import { AppState } from '../../types';

export default combineReducers<AppState>({
    toDoListProps: toDoListProps
});