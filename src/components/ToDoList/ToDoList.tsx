import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import ToDo from './ToDo/ToDo';
import { ToDoListProps } from '../../types';

import spinner from '../../assets/spinner.gif';
import * as styles from '../../shared/styles';

export const Spinner = styled.img`
  ${styles.Center}
`

const ToDoList: FunctionComponent<ToDoListProps> = (props) => {

    if (props.error) {
        throw new Error();
    }

    if (props.loading) {
        //TODO: move spinner to a separate component
        return <Spinner src={spinner} alt="loading..." />
    }

    if (props.toDoList.length < 1) {
        return (<p>There's nothing to do :)</p>)
    }

    return (
        <div>
            {props.toDoList.filter((toDo, index) => {
                return index < props.maxToDoListCount;
            }).map(toDo => <ToDo key={toDo.id}
                id={toDo.id}
                title={toDo.title}
                completed={toDo.completed} />)}
        </div>
    );
}

export default ToDoList;