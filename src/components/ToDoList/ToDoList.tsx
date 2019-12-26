import React, { FunctionComponent } from 'react';


import ToDo from './ToDo/ToDo';
import { ToDoListProps } from '../../types';
import Spinner from '../Spinner/Spinner';





const ToDoList: FunctionComponent<ToDoListProps> = (props) => {

    if (props.error) {
        throw new Error();
    }

    if (props.loading) {
        return <Spinner />
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