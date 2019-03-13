import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {

  render() {

    return (
      <ColorContext.Consumer>
        {color => (
          <div className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => language === 'english' ? 'Submit' : 'Voorleggen'}
            </LanguageContext.Consumer>
          </div>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
