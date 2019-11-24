import React, { Component } from 'react';
import styled from 'styled-components';

import * as styles from './shared/styles';

const ErrorMessage = styled.p`
    ${styles.Center}
    color: red;
    font-size: 1em;
     margin-left: auto;
  margin-right: auto;
  width:30%;
`;

class ErrorBoundary extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage>Sorry for the inconvenience. Please check your Internet connection and try again.</ErrorMessage>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
