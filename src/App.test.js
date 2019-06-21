import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'


import App from './App';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  render(<App />)
})

xit('displays hello world', () => {
  //const { getByText } = render(<App />)
  const { queryByText } = render(<App />)
  const header = getByText(/'ello world/i)
  expect(header).toBeVisible()
})

it('displays greeting when button is clicked', () => {
  const { getByText } = render(<App />)
  const button = getByText(/greet/i)

  fireEvent.click(button)

  getByText(/hello FSWPT4/i)

})

