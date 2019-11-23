import React from 'react';
import Header from '../Header/Header';
import ChangeableToDoList from '../../containers/ChangeableToDoList/ChangeableToDoList';

const Layout: React.FunctionComponent = props => {
    return <div>
        <Header />
        <ChangeableToDoList />
    </div>
};

export default Layout;