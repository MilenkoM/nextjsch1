import React from 'react';
import Color from '../components/Color';
import Nav from '../components/Nav';

const Second = () => (
  <div>
    <Nav />
    <hr />
    Second page for our tutorial
    {' '}
    I will add more next week!
    <Color color="orange" />
  </div>
);

export default Second;
