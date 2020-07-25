import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return <div className="not" data-testid="404-error">Página não encontrada</div>;
  }
}

export default NotFound;
