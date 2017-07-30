import * as React from 'react';
import { ViewStyle } from 'react-native';
import View from 'react-suite/build/components/ui/View';
import Theme from 'react-suite/build/modules/theme/Theme';
import { ThemeVars } from 'react-suite/build/modules/theme/ThemeBuilder';
import BaseComponent from 'react-suite/build/components/BaseComponent';

interface Props extends ViewStyle {
  style?: ViewStyle;
}

interface State {}

export default class SceneContainer extends BaseComponent<Props, State> {
  render() {
    let { style, ...props } = this.props;
    const { styles, theme } = this;

    return <View style={[styles.container, style]} {...props} />;
  }

  loadStyles(theme: ThemeVars) {
    return {
      container: {
        flex: 1,
        backgroundColor: theme.defaults.backgroundSecondaryColor
      } as ViewStyle
    };
  }
}
