import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import ToDo from './ToDo/ToDo';
import { ToDoListProps } from '../../types';

import spinner from '../../assets/spinner.gif';

export const Spinner = styled.img`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const ToDoList: FunctionComponent<ToDoListProps> = (props) => {

    if (props.loading) {
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