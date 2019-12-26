import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import * as styles from '../../shared/styles';

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

const AddToDo: FunctionComponent<{}> = props => {
    return (
        <StyledAddToDo>
            <AddToDoInput placeholder="New To Do..." />
            <AddToDoButton>Add To Do</AddToDoButton>
        </StyledAddToDo>
    );
};

export default AddToDo;