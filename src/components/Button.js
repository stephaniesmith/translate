import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

    return (
      <div className="ui button primary">{text}</div>
    );
  }
}

export default Button;
