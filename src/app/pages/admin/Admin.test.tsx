import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import Admin from './Admin';
import { usePeopleStore } from '@/store/people-store';

describe('Admin', () => {
  beforeEach(() => {
    usePeopleStore.setState({ people: [] });
  });

  it('renders without crashing when staff data is present', () => {
    usePeopleStore.setState({
      people: [
        {
          id: 1,
          name: 'Alice',
          email: 'alice@example.com',
          role: 'waiter',
          isAbsent: false,
        },
        {
          id: 2,
          name: 'Bob',
          email: 'bob@example.com',
          role: 'customer',
          isAbsent: true,
        },
      ],
    });

    expect(() =>
      render(
        <MemoryRouter>
          <Admin />
        </MemoryRouter>,
      ),
    ).not.toThrow();

    expect(screen.getByText('Control Panels')).toBeInTheDocument();
    expect(screen.getByText('Total Staff')).toBeInTheDocument();
  });
});
