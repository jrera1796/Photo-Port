import React from 'react';
import { render,screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup)

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav/>);
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav/>);
    expect(asFragment()).toMatchSnapshot();
  })
});



describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    
  render(<Nav />);
  const emoji = screen.getByLabelText('camera')
  
  expect(emoji).toHaveTextContent('📸');
  });
}) 

describe('links are visible', () => {
  it('inserts text into the links', () => {
const { getByTestId } = render(<Nav/>);

expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
expect(getByTestId('about')).toHaveTextContent('About Me');
  })
})