import * as React from 'react';
import { TextStyle } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import { ThemeVars } from 'react-suite/build/modules/theme/ThemeBuilder';
import BaseComponent from 'react-suite/build/components/BaseComponent';

interface Props {}

interface State {}

export default class Value extends BaseComponent<Props, State> {
  render() {
    const { styles, theme } = this;

    return (
      <Text style={styles.container}>

        {this.props.children}

      </Text>
    );
  }

  loadStyles(theme: ThemeVars) {
    return {
      container: {
        fontSize: 14,
        fontWeight: '200',
        textAlign: 'center',
        margin: 10
      } as TextStyle
    };
  }
}
