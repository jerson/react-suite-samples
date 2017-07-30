import * as React from 'react';
import { ViewStyle } from 'react-native';
import View from 'react-suite/build/components/ui/View';
import BaseComponent from 'react-suite/build/components/BaseComponent';
import { ThemeVars } from 'react-suite/build/modules/theme/ThemeBuilder';

interface Props extends ViewStyle {
  style?: ViewStyle;
}

interface State {}

export default class ComponentContainer extends BaseComponent<Props, State> {
  render() {
    let { style, ...props } = this.props;
    const { styles, theme } = this;

    return <View style={[styles.container, style]} {...props} />;
  }

  loadStyles(theme: ThemeVars) {
    return {
      container: {
        padding: 10,
        paddingTop: 8,
        backgroundColor: theme.defaults.backgroundColor,
        borderRadius: 4,
        marginTop: 10,
        elevation: 2,
        zIndex: 2,
        shadowRadius: 7,
        shadowColor: theme.defaults.shadowColor,
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 0,
          height: 2
        }
      } as ViewStyle
    };
  }
}
