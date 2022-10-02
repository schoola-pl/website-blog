import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  background-color: $colors-accentGray;
  padding: 1.5rem;
  width: 100%;
  border-radius: 2rem;
  height: 5rem;
  outline: none;
  font-family: 'Poppins';

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
