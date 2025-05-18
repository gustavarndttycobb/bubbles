import { render } from '@testing-library/react-native';
import ExampleComponent from './ExampleComponent';

describe('<ExampleComponent />', () => {
  test('Text renders correctly on ExampleComponent', () => {
    const { getByText } = render(<ExampleComponent />);

    getByText('Welcome!');
  });
});
