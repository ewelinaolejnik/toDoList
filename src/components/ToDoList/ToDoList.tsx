import React, { FunctionComponent } from 'react';
import ToDo from './ToDo/ToDo';
import { ToDoListProps } from '../../types';


const ToDoList: FunctionComponent<ToDoListProps> = (props) => {

    if (props.toDoList.length < 1) {
        return (<p>There's nothing to do :)</p>)
    }

    return (
        <div>
            {props.toDoList.map(toDo => <ToDo key={toDo.id}
                id={toDo.id}
                title={toDo.title}
                completed={toDo.completed} />)}
        </div>
    );
}

export default ToDoList;