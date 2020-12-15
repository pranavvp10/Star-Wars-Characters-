import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders footer', () => {
  render(<App />);
  const footer = screen.getByText(/CREATED BY/);
  expect(footer).toBeInTheDocument();
});

test('render loader' ,()=>{
  render(<App/>);
  const loader =screen.getByAltText('swload');
  expect(loader).toBeInTheDocument();
});

test('render header' ,()=>{
  render(<App/>);
  const header =screen.getByAltText('./img/star-wars-logo.png');
  expect(header).toBeInTheDocument();
});


