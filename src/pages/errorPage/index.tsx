import React from 'react';

interface IErrorPage {
  error: {
    message: string;
  };
}

export const ErrorPage = ({ error }: IErrorPage): JSX.Element => {
  return (
    <>
      <div>Error this is a an Error page!</div>
      {process.env.NODE_ENV !== 'production' && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}
    </>
  );
};
