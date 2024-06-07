import { fireEvent, render, screen } from '@testing-library/react';
import Avaleht from '../pages/Avaleht';

test('renders "muuda kogust" text when nothing changed', () => {
  render(<Avaleht />);
  const linkElement = screen.getByText(/Muuda kogust/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Suurendasid kogust" text when "suurendatud" button is pressed', () => {
    render(<Avaleht />);
    const button = screen.getByText("+");
    fireEvent.click(button);
    
    const linkElement = screen.getByText(/suurendasid kogust/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders "Vähendasid kogust" text when "vähendatud" button is pressed', () => {
    render(<Avaleht />);
    const increaceButton = screen.getByText("+");
    fireEvent.click(increaceButton);
    const decreaceButton = screen.getByText("-");
    fireEvent.click(decreaceButton);
    const linkElement = screen.getByText(/vähendasid kogust/i);
    expect(linkElement).toBeInTheDocument();
  });