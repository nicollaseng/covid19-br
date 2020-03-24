import React from 'react';

import BoundaryApi from './BoundaryApi';
import BoundaryEmail from './BoundaryEmail';

const ErrorBoundary = props => {
  const {type = 'default', error} = props;
  console.log(type, error);
  const __error__ = {
    email: () => <BoundaryEmail error={error.value} />,
    api: () => apiErrorHandler({status: error.status}),
    default: () => null,
  };

  const apiErrorHandler = ({status}) => {
    const __api__ = {
      401: 'Ops. Email already registered',
    };
    return <BoundaryApi error={__api__[status]} />;
  };

  return __error__[type]();
};

ErrorBoundary.defaultProps = {
  type: 'default',
  error: null,
};

export default ErrorBoundary;
