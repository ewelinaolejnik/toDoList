import * as actionTypes from './actionTypes';
import { ActionType } from '../../types';

export const getToDoList = (): ActionType => ({
    type: actionTypes.GET_TO_DO_LIST
});