import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataPullClass from './components/DataPullClass';
import DisplayPlayers from './components/DisplayPlayers';
import Button from './components/Button'
import { render, getByText, fireEvent } from '@testing-library/react';

test('renders App without crashing', () => {
  render(<App />);
});

test('renders DataPullClass without crashing', () => {
  render(<DataPullClass />);
});

// test('check to see if background changed on button click', () => {
//   const {container} = render(<DataPullClass />);
//   //const button = getByText(container, 'Darken');
//   expect(container).toHaveStyle('background: black');
//   //fireEvent(button);
//   //expect(container).toHaveStyle('background: inherit')
// });

test('renders Button without crashing', () => {
  render(<Button />);
});