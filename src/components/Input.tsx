import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';

const StyledInput = styled(TextInput)`
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Input = ({...props}) => (
  <StyledInput {...props} />
);

export default Input;
