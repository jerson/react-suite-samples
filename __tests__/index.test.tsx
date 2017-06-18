import 'react-native';
import * as  React from 'react';
import * as renderer from 'react-test-renderer';

import App from '../src';

it('renders correctly', () => {
    const tree = renderer.create(
        <App />
    );
    expect(tree).toBeDefined();
});
