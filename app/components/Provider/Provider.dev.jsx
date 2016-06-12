import React from 'react';
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

React.Perf = require('react-addons-perf');

export default ({children}) => (
  <AltContainer flux={alt}>
    {children}
  </AltContainer>
);
