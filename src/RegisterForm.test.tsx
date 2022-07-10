import React from 'react';
import { render } from '@testing-library/react';
import RegisterForm from './pages/RegisterForm';

test('Welcome Text', () => {
  render(<RegisterForm />);
  // const linkElement = screen.getByText(/Welcome/i);
  // expect(linkElement).toHaveTextContent();
});
