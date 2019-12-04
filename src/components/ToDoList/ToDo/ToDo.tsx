import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ToDoProps, ActionType, ToDoState } from '../../../types';
import * as styles from '../../../shared/styles';
import { updateToDo, deleteToDo } from '../../../redux/actions/toDoList';
import checkmark from '../../../assets/checkmark.png';



const StyledToDo = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${styles.FirstMainColor};
    margin-top: 5px;
    padding:20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 1px 3px grey;
`

const ToDoTitle = styled.p`
    flex: 10 0 0px;
    text-align:left;
    padding: 0px 20px;
`;

const ToDoStatus = styled.div<{ completed: boolean, toDoId: number }>`
    position:relative;
    flex: 0.05 1 20px;
    width: 20px;
    height:20px;

#toDoStatusCheckbox${props => props.toDoId} {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
}

#toDoStatusLabel {
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
    background-color: #eee;
    width: 20px;
    height:20px;
    border-radius:5px;
}

#toDoStatusLabel:before {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height:20px;
    content:'';
    border-radius:5px;
  ${props => (props.completed ? `content:url(${checkmark}); background: ${styles.SecondMainColor};` : '')};
}
`
const RemoveButton = styled.button`
    flex: 0.05 1 20px;
    padding: 20px;
    background-color: ${styles.SecondMainColor};
    border-radius: 20px;
    outline: none !important;
    color: white;
    font-size: 1em;
`

const ToDo: FunctionComponent<ToDoProps> = ({ id, title, completed, onUpdateToDo, onRemoveToDo }) => {

    const handleStatusChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newStatus = event.currentTarget.checked;
        onUpdateToDo({ completed: newStatus, id, title });
    }

    return (
        <StyledToDo>
            <ToDoStatus toDoId={id} completed={completed}>
                <input id={'toDoStatusCheckbox' + id} type="checkbox"
                    checked={completed}
                    onChange={handleStatusChange} />
                <label htmlFor={'toDoStatusCheckbox' + id} id="toDoStatusLabel"></label>
            </ToDoStatus>
            <ToDoTitle>{title}</ToDoTitle>
            {completed && <RemoveButton onClick={() => onRemoveToDo(id)}>Remove</RemoveButton>}
        </StyledToDo>
    );
};

export const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onUpdateToDo: (toDoToBeUpdate: ToDoState) => dispatch(updateToDo(toDoToBeUpdate)),
    onRemoveToDo: (id: number) => dispatch(deleteToDo(id))
});

export default connect(null, mapDispatchToProps)(ToDo);