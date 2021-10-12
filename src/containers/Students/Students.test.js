import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Students from './Students';
import Search from './Search';

expect.extend(toHaveNoViolations);

// test('should', async () => {
//   const { container } = render(<Search searchQuery='shub' />);
//   const { container } = render(<Students />);

//   expect(results).
// });
