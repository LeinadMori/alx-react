import React from 'react';
import { shallow } from 'enzyme'; // or from '@testing-library/react' if you're using react-testing-library
import Footer from './Footer';

describe('Footer component tests', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });
});

