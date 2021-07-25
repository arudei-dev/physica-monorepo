import { render } from '@testing-library/react';

import Gadgets from './gadgets';

describe('Gadgets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gadgets />);
    expect(baseElement).toBeTruthy();
  });
});
