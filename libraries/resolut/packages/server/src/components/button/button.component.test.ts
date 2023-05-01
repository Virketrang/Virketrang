import { describe, expect, it } from 'vitest';

import Button from './button.component';

describe('button component test', () => {
    it('renders', () => {
        expect(Button.displayName).toBe('Button');
    });
});
