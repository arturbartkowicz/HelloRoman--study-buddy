import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../atoms/LabelRom/LabelRom';
import { Input } from '../../atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label for={id}>{label}</Label>
      <Input name={name} id={id} type={type} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
