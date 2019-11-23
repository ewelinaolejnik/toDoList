import React, { FunctionComponent } from 'react';
import ToDo from './ToDo/ToDo';
import { IToDoList } from '../../types';


const ToDoList: FunctionComponent<IToDoList> = ({ toDoList }) => {

    if (toDoList.length < 1) {
        return (<p>There's nothing to do :)</p>)
    }

    return (
        <div>
            {toDoList.map(toDo => <ToDo key={toDo.id}
                id={toDo.id}
                title={toDo.title}
                completed={toDo.completed} />)}
        </div>
    );
}

export default ToDoList;