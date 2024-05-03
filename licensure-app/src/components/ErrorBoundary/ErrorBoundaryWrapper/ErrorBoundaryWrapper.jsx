import React from 'react';
import { ErrorBoundaryPage } from '../ErrorBoundaryPage/ErrorBoundaryPage';

export class ErrorBoundaryWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    const { componentStack: _componentStack } = info;
    console.error('ErrorBoundaryWrapper', error, { _componentStack });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorBoundaryPage />;
    }

    return children;
  }
}
