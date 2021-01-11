import React from 'react';
import styled from 'styled-components';

const Div = styled.div<{ backgroundColor: string; color: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

export interface IComponent {
  name?: string;
  backgroundColor?: string;
  color?: string;
  onClick: () => void;
}

export const Component = ({
  name = 'Jim',
  backgroundColor = 'blue',
  color = 'white',
  onClick,
}: IComponent): JSX.Element => {
  return (
    <>
      <Div backgroundColor={backgroundColor} color={color}>
        {name}
      </Div>
      <button onClick={onClick}>Click me</button>
    </>
  );
};
