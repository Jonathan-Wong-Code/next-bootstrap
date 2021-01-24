import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Div = styled.div<{ backgroundColor: string; color: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  // This is how we should be using the theme as a prop in styled-components
  border: 1px ${({ theme }) => theme.colors.primaryColor} solid;
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
      <Div
        backgroundColor={backgroundColor}
        color={color}
        data-testid="component"
      >
        {name}
      </Div>
      <FormattedMessage id="hello" />
      <button onClick={onClick}>Click me</button>
    </>
  );
};
