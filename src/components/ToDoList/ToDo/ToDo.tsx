import React, { FunctionComponent, FunctionComponentElement } from 'react';
import { ToDoProps } from '../../../types';

const ToDo: FunctionComponent<ToDoProps> = ({ id, title, completed }) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
}

export default ToDo;