import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import View from 'react-suite/build/components/ui/View';

interface Props extends ViewStyle {
  style?: ViewStyle;
}

interface State {}

export default class ComponentContainer extends React.Component<Props, State> {
  render() {
    let { style, ...props } = this.props;
    return <View style={[styles.container, style]} {...props} />;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowRadius: 7,
    marginTop: 10,
    //alignSelf: 'center',
    //maxWidth: 400,
    elevation: 2,
    zIndex: 2,
    shadowColor: '#9a9a9e',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    }
  } as ViewStyle
});
