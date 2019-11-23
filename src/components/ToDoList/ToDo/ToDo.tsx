import React, { FunctionComponent, FunctionComponentElement } from 'react';
import { IToDo } from '../../../types';

const ToDo: FunctionComponent<IToDo> = ({ id, title, completed }) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
}

export default ToDo;