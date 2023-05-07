import React from 'react';
import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';

import Page from './page';

test('Landing page', () => {
    render(<Page />);

    const main = within(screen.getByRole('main'));

    expect(main).toBeDefined();
});
