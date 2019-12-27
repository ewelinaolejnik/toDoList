import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ActionType, ToDoState, AddToDoProps } from '../../types';
import * as styles from '../../shared/styles';
import { addToDo, updateNewToDo } from '../../redux/actions/toDoList';


const StyledAddToDo = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: flex-start;
    align-content: space-between;
    padding: 50px 20px;
`;

const AddToDoInput = styled.input`
    padding:20px;
    background-color: white;
    border-radius: 10px;
    outline: none !important;
    border: 1px solid grey;
    border: 1px solid ${styles.FirstMainColor};
    flex: 10 0 0px;
    margin: 10px;
`;
const AddToDoButton = styled.button`
    padding:20px;
    background-color: ${styles.FirstMainColor};
    border-radius: 20px;
    outline: none !important;
    color: white;
    flex: 1 0 0px;
    margin: 10px;
`;

const AddToDo: FunctionComponent<AddToDoProps> = ({ newToDo, addToDoErrors, onAddToDo, onUpdateNewToDo }) => {
    const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
        const title: string = event.currentTarget.value;
        onUpdateNewToDo({ id: 0, completed: false, title });
    }

    return (
        <StyledAddToDo>
            <AddToDoInput value={newToDo.title} onChange={handleChangeTitle} placeholder="New To Do..." />
            <AddToDoButton onClick={() => onAddToDo(newToDo)}>Add To Do</AddToDoButton>
            {(addToDoErrors.maxToDosExceeded) && <p>Error!</p>}
        </StyledAddToDo>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onAddToDo: (toDoToBeAdd: ToDoState) => dispatch(addToDo(toDoToBeAdd)),
    onUpdateNewToDo: (newToDo: ToDoState) => dispatch(updateNewToDo(newToDo))
});

export default connect(null, mapDispatchToProps)(AddToDo);