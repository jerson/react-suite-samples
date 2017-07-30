import * as React from 'react';
import { TextStyle } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import { ThemeVars } from 'react-suite/build/modules/theme/ThemeBuilder';
import BaseComponent from 'react-suite/build/components/BaseComponent';

interface Props {}

interface State {}

export default class Strong extends BaseComponent<Props, State> {
  render() {
    let { ...props } = this.props;
    const { styles, theme } = this;

    return <Text style={styles.container} {...props} />;
  }

  loadStyles(theme: ThemeVars) {
    return {
      container: {
        fontWeight: 'bold'
      } as TextStyle
    };
  }
}
