import { render, screen } from '@testing-library/react';
import TimeLine from './TimeLine';

test('renders learn react link', () => {
  render(<TimeLine />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
