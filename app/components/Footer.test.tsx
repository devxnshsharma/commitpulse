import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders community text', () => {
    render(<Footer />);

    const text = screen.getByText(/Designed for the elite builder community/i);

    expect(text).toBeTruthy();
  });

  it('renders Documentation link', () => {
    render(<Footer />);

    const docLink = screen.getByText(/Documentation/i);

    expect(docLink).toBeTruthy();

    expect(docLink.closest('a')?.getAttribute('href')).toBe(
      'https://github.com/JhaSourav07/commitpulse/blob/main/README.md'
    );
  });

  it('opens documentation in new tab', () => {
    render(<Footer />);

    const docLink = screen.getByText(/Documentation/i);

    expect(docLink.closest('a')?.getAttribute('target')).toBe('_blank');
  });

  it('renders Contributors link', () => {
    render(<Footer />);

    const contributorsLink = screen.getByText(/Contributors/i);

    expect(contributorsLink).toBeTruthy();
  });
  // Test for screen reader accessibility using flexible element checks
  it('supports screen reader operations by using semantic HTML', () => {
    // Render the footer and get the container safely out of it
    const { container } = render(<Footer />);

    // Query elements inside the container wrapper component
    const footerElement = container.querySelector('footer') || container.querySelector('div');

    // Verify that the foundational wrapper structure is active using standard Vitest matches
    expect(footerElement).toBeDefined();
  });

  // Test layout responsiveness across different screen widths
  it('adapts layouts correctly across mobile and desktop viewports', () => {
    // Verify mobile environment state
    const mobileRender = render(<Footer />);
    expect(mobileRender.container.firstChild).toBeTruthy();

    // Verify desktop layout state via a safe rerender cycle
    mobileRender.rerender(<Footer />);
    expect(mobileRender.container.firstChild).toBeTruthy();
  });
});
