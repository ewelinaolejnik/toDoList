import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
    grid-area: header;
    background-image: linear-gradient(#55B5CC, #52a5b7);
    height: 10vh;
    position: relative;
`;

export const ToDoListTitle = styled.p`
    color: white;
    float:left;
    padding-left:20px;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 3em;
    font-weight: bold;
`;

const Header: FunctionComponent<{}> = props => {
    return (<StyledHeader>
        <ToDoListTitle>To Do List</ToDoListTitle>
    </StyledHeader>);
}

export default Header;