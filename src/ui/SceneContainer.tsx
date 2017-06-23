import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import View from 'react-suite/build/components/ui/View';
import Theme from 'react-suite/build/modules/theme/Theme';

interface Props extends ViewStyle {
  style?: ViewStyle;
}

interface State {}

export default class SceneContainer extends React.Component<Props, State> {
  render() {
    let { style, ...props } = this.props;
    return <View style={[styles.container, style]} {...props} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.vars.defaults.backgroundSecondaryColor
  } as ViewStyle
});
