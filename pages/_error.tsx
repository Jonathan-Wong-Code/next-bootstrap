import React from 'react';

const ErrorPage = (): JSX.Element => {
  return <div>I AM THE ERROR PAGE</div>;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};

export default ErrorPage;
