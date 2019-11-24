import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ToDoProps } from '../../../types';
import * as styles from '../../../shared/styles';

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



const ToDo: FunctionComponent<ToDoProps> = ({ id, title, completed }) => {
    return (
        <StyledToDo>
            <ToDoTitle>{title}</ToDoTitle>
        </StyledToDo>
    );
}

export default ToDo;