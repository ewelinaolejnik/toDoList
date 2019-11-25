import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';

import { ToDoProps, ActionType, ToDoState } from '../../../types';
import * as styles from '../../../shared/styles';
import { updateToDo } from '../../../redux/actions/toDoList';
import { connect } from 'react-redux';


const StyledToDo = styled.div`
    border: 1px solid ${styles.FirstMainColor};
    margin-top: 5px;
    padding:20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 1px 3px grey;
`

const ToDoTitle = styled.p`
    text-align: left;
`;

const ToDoStatus = styled.input`
    float:left;
    border: 1px solid #6cc0e5;
`;

const ToDo: FunctionComponent<ToDoProps> = ({ id, title, completed, onUpdateToDo }) => {

    const handleStatusChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newStatus = event.currentTarget.checked;
        onUpdateToDo({ completed: newStatus, id, title });
    }

    return (
        <StyledToDo>
            <ToDoStatus type="checkbox"
                checked={completed}
                onChange={handleStatusChange} />
            <ToDoTitle>{title}</ToDoTitle>
        </StyledToDo>
    );
};

export const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onUpdateToDo: (toDoToBeUpdate: ToDoState) => dispatch(updateToDo(toDoToBeUpdate))
});

export default connect(null, mapDispatchToProps)(ToDo);