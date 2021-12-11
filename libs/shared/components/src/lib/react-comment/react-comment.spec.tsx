import { render } from '@testing-library/react';

import ReactComment from './react-comment';

describe('ReactComment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComment />);
    expect(baseElement).toBeTruthy();
  });
});
