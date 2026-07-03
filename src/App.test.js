import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const titleElement = screen.getByText(/NORMSYT/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsTitle = screen.getByText(/Projeler/i);
  expect(projectsTitle).toBeInTheDocument();
});