import { render, screen } from '@testing-library/react';
import Login from '~/components/login';

/**
 * Mock next/navigation
 */
const mockLoginNavigation = (path) => {
  jest.mock('next/navigation', () => ({
    usePathname() {
      return path;
    },
  }));
};

describe('Loading', () => {
  it('renders if not on /login page', () => {
    mockLoginNavigation('/');
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
