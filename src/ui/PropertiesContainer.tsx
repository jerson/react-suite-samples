import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import View from 'react-suite/build/components/ui/View';
import ComponentContainer from './ComponentContainer';

interface Props extends ViewStyle {
  style?: ViewStyle;
}

interface State {}

export default class PropertiesContainer extends React.Component<Props, State> {
  render() {
    let { ...props } = this.props;
    return <ComponentContainer {...props} />;
  }
}
