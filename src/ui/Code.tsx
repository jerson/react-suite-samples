import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco, tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import View from 'react-suite/build/components/ui/View';
import Theme from 'react-suite/build/modules/theme/Theme';

interface Props {
  language?: string;
}

interface State {}

export default class Code extends React.Component<Props, State> {
  render() {
    let { children, language, ...props } = this.props;

    return (
      <View
        style={[
          styles.container,
          Theme.vars.defaults.darkMode && { color: '#fff' }
        ]}
      >
        <SyntaxHighlighter
          language={'typescript'}
          style={Theme.vars.defaults.darkMode ? tomorrowNight : docco}
        >
          {children}
        </SyntaxHighlighter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 4
  } as ViewStyle
});
