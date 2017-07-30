import * as React from 'react';
import { ViewStyle } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco, tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import View from 'react-suite/build/components/ui/View';
import BaseComponent from 'react-suite/build/components/BaseComponent';
import { ThemeVars } from 'react-suite/build/modules/theme/ThemeBuilder';

interface Props {
  language?: string;
}

interface State {}

export default class Code extends BaseComponent<Props, State> {
  render() {
    let { children, language, ...props } = this.props;
    const { styles, theme } = this;

    return (
      <View style={[styles.container]}>
        <SyntaxHighlighter
          language={'typescript'}
          style={theme.defaults.darkMode ? tomorrowNight : docco}
        >
          {children}
        </SyntaxHighlighter>
      </View>
    );
  }

  loadStyles(theme: ThemeVars) {
    return {
      container: {
        marginTop: 10,
        borderRadius: 4
      } as ViewStyle
    };
  }
}
