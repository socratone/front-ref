import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('기본 테스트', () => {
    render(<Home />);

    const textElement = screen.getByText('반갑습니다', { exact: false });
    expect(textElement).toBeInTheDocument();
  });
});
