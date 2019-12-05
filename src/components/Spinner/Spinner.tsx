import React from 'react';

import spinner from '../../assets/spinner.gif';
import * as styles from '../../shared/styles';
import styled from 'styled-components';

const StyledSpinner = styled.img`
  ${styles.Center}
`

const Spinner: React.FunctionComponent = () => (
    <StyledSpinner src={spinner} alt="loading..." />
);

export default Spinner;