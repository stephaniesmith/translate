import React, { Component } from 'react';

export class LanguageSelector extends Component {

  render() {
    const { onLanguageChange } = this.props;
    return (
      <div>
        Select a language: 
        <i className="flag us" onClick={() => onLanguageChange('english')}/>
        <i className="flag nl" onClick={() => onLanguageChange('dutch')}/>
      </div>
    );
  }
}

export default LanguageSelector;
