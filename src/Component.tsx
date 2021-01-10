import React from 'react';

interface IComponent {
  name: string;
}

export const Component = ({ name }: IComponent): JSX.Element => {
  React.useEffect(() => {
    console.log(name);
  }, [name]);

  return <div>{name}</div>;
};
