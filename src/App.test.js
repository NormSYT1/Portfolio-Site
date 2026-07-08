import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Personal Portfolio/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsTitle = screen.getAllByText(/Projeler/i);
  expect(projectsTitle.length).toBeGreaterThan(0);
});