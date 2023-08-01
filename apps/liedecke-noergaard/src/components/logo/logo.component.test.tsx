import React from 'react'
import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'

import Logo from './logo.component'

test('Logo Component', () => {
    render(<Logo href="/test" />)

    const title = within(screen.getByText('Liedecke & Noergaard'))

    expect(title).toBeDefined()
})
